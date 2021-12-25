import { createStore } from 'vuex';

import auth from '../firebase/config';
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

const store = createStore({
    state: {
        user: null,
        authIsReady: false
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload;
        },
        setAuthIsReady(state, payload) {
            state.authIsReady = payload;
        }
    },
    actions: {
        async signup(context, { email, password }) {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            if (res) {
                context.commit('setUser', res);
            } else {
                throw new Error('Could not complete signup, retry.')
            }
        },
        async login(context, { email, password }) {
            const res = await signInWithEmailAndPassword(auth, email, password);
            if (res) {
                context.commit('setUser', res.user);
            } else {
                throw new Error('Could not login.')
            }
        },
        async signout(context) {
            await signOut(context.rootState.user.auth);
            context.commit('setUser', null);
        },
        async verifyMail(context) {
            await sendEmailVerification(context.rootState.user.auth.currentUser);
        }
    }
});

const unsub = onAuthStateChanged(auth, (user) => {
    store.commit('setAuthIsReady', true);
    store.commit('setUser', user);
    unsub();
})

export default store;