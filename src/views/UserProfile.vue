<template>
  <div class="home">
    <home-header />
    <profile-content></profile-content>
  </div>
</template>

<script>
// @ is an alias to /src
import ProfileContent from "../components/ProfileContent.vue";
import HomeHeader from "../components/HomeHeader.vue";
export default {
  name: "Home",
  data() {
    return {
      img: "",
    };
  },
  components: {
    ProfileContent,
    HomeHeader,
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: calc(100vw - 17px);
  background-color: rgb(223, 223, 223);
}
</style>
