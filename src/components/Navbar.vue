<template>
  <nav>
    <h1>Vuex Auth</h1>
    <!-- for all users -->
    <template v-if="authIsReady">
      <div v-if="user">
        <router-link to="/">Home</router-link>
      </div>
      <!-- for logged in users -->
      <div v-if="user">
        <span>Logged in as...{{ user.email }}</span>
        <button @click="handleSubmit">Logout</button>
      </div>
      <!-- for logged out users -->
      <div v-if="!user">
        <router-link to="/login">Login</router-link>
        <router-link to="/signup">Signup</router-link>
      </div>
    </template>
  </nav>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const store = useStore();
    const user = computed(() => store.state.user);
    const authIsReady = computed(() => store.state.authIsReady);

    const handleSubmit = async () => {
      await store.dispatch("signout");
      router.go();
    };

    return { user, handleSubmit, authIsReady };
  },
};
</script>