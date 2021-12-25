<template>
  <div class="home">
    <div v-if="serverSideMsg">
      {{ serverSideMsg }}
      <button @click="verifyMail">Resend</button>
    </div>
    <div v-if="error">
      {{ error }}
    </div>
    <div v-for="blog in blogs" :key="blog.id">
      <div class="blog">
        <h3>{{ blog.title }}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          aspernatur consectetur doloremque sunt ducimus enim iure animi fugit
          nulla et! Perferendis autem deleniti quo eum corrupti reiciendis
          voluptatem ab ducimus?
        </p>
        <div class="icons">
          <span>upvote or downvote this article: </span>
          <span class="material-icons">thumb_up</span>
          <span class="material-icons">thumb_down</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const blogs = ref([
      { title: "Why Coffee is Better than Tea", id: 1 },
      { title: "...Then I Took an Arrow in the Knee", id: 2 },
      { title: "Mario vs Luigi, Ultimate Showdown", id: 3 },
    ]);
    const serverSideMsg = ref(null);
    const error = ref(null);

    const store = useStore();
    if (store.state.user) {
      if (!store.state.user.emailVerified) {
        serverSideMsg.value = "Please verify your email.";
      }
    }

    const verifyMail = async () => {
      try {
        await store.dispatch("verifyMail");
      } catch (err) {
        error.value = err;
      }
    };

    return {
      error,
      blogs,
      serverSideMsg,
      verifyMail,
    };
  },
};
</script>
