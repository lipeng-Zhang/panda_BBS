<template>
  <div
    class="main main-raised bac"
    style="top: 50px; z-index: 0"
    :style="bgStyle"
  >
    <div class="section">
      <div class="container">
        <div class="md-layout">
          <div class="home-content">
            <home-post />
            <div class="header">
              <classify-bar />
            </div>

            <contentContainer />
            <div class="tst"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentContainer from "components/ContentContainer";
import HomePost from "components/HomePost";
import ClassifyBar from "components/ClassifyBar";
export default {
  name: "HomeContent",
  components: {
    ContentContainer,
    HomePost,
    ClassifyBar,
  },
  props: {
    bg: {
      type: String,
      default: require("@/assets/img/pandapaint.png"),
    },
  },
  computed: {
    bgStyle() {
      return {
        background: `url(${this.bg}) no-repeat`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 44px;
  box-sizing: border-box;
  padding-left: 10px;
  font-size: 14px;
  background-color: white;
  color: white;
  width: 800px;
  margin-top: 50px;
}
.home-content {
  padding-top: 30px;
  min-width: 490px;
  max-width: 800px;
  position: relative;
  left: 0;
  right: 0;
  //margin: auto;
}
.img {
  height: 784px;
  width: 354px;
  position: fixed;
  top: 120px;
  right: 350px;
  z-index: -1;
  img {
    height: 784px;
    width: 354px;
  }
}
</style>
