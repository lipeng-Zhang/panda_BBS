<template>
  <div class="home">
    <home-header />
    <home-content></home-content>
  </div>
  
</template>

<script>
// @ is an alias to /src
import HomeContent from '../components/HomeContent.vue'
import HomeHeader from '../components/HomeHeader.vue'
export default {
  name: 'Home',
  components: {
    HomeContent,
    HomeHeader
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: calc(100vw - 17px);
  background-color: rgb(223, 223, 223);
}
</style>
