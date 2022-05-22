<template>
  <div>
    <md-tabs class="md-accent">
      <md-tab md-label="All" @click="itemClick(0, '/total')"></md-tab>
      <md-tab md-label="Original" @click="itemClick(1, '/share')"></md-tab>
      <md-tab md-label="reprint" @click="itemClick(2, '/discuss')"></md-tab>
      <md-tab md-label="Question" @click="itemClick(3, '/complain')"></md-tab>
      <md-tab md-label="funding" @click="itemClick(4, '/complement')"></md-tab>
    </md-tabs>
  </div>
</template>

<script>
export default {
  name: "ClassifyBar",
  data() {},
  methods: {
    itemClick(index, path) {
      this.currentIndex = index;
      this.$router.push(`/home${path}`);
    },
  },
  mounted() {
    let map = { total: 0, share: 1, discuss: 2, complain: 3, complement: 4 };
    let path = this.$route.params.path;
    this.currentIndex = map[path];
  },
};
</script>

<style lang="scss" scoped>
.classify-bar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  width: 300px;
  height: 44px;
  .item {
    height: 24px;
    width: 36px;
    line-height: 24px;
    text-align: center;
    font-size: 14px;
    color: black;
    cursor: pointer;
    &:hover {
      background-color: rgb(245, 245, 245);
    }
  }
  .active {
    background-color: #333344;
    color: white;
    &:hover {
      background-color: #393949;
      color: white;
    }
  }
}
</style>
