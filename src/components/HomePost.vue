<template>
  <div class="home-post">
    <div v-if="logined" class="logined">
      <h1 class="title">Hi, {{ loginedUser.name }}</h1>
      <div>
        <h4 class="title" style="display: inline-block; margin-rignt: 50px">
          You have logged in
        </h4>
        &nbsp;
        <md-button
          class="md-success"
          style="margin-top: 25px; left: 480px"
          @click="goPost"
          >Upload Post</md-button
        >
      </div>
    </div>
    <div v-else class="unlogined">
      <h1 class="title">Welcome to Zoo_Y posts!</h1>
      <div>
        <h4 class="title" style="display: inline-block; margin-rignt: 50px">
          You're not logged in yet, so you can't post or comment
        </h4>
        &nbsp;
        <md-button style="margin-top: 25px; left: 195px">Upload Post</md-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "HomePost",

  computed: {
    ...mapState(["logined", "loginedUser"]),
  },
  methods: {
    goPost() {
      this.$router.push({
        path: "/post",
      });
    },
  },
  mounted() {
    //console.log(this.loginedUser);
  },
};
</script>

<style lang="scss" scoped>
</style>
