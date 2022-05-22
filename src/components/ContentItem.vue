<template>
  <div @click="clickItem(postId, userId)">
    <section class="component@profile-card" id="component@profile-card-1">
      <article class="component@profile-card__body">
        <h3 class="title">{{ post.title }}</h3>

        <div class="object@media-object">
          <div class="object@media-object__body">
            <p>
              {{ postContent }}
            </p>
          </div>
        </div>
        <div class="info">
          <small>{{ time }} by {{ name }}</small>
          <img :src="avator" alt="Circle Image" />
        </div>
      </article>
    </section>
  </div>
</template>

<script>
import { getComments, getProfile } from "api/index";
import parseTime from "utils/parseTime.js";
export default {
  name: "ContentItem",
  data() {
    return {
      counts: 0,
      avator: "",
      name: "",
      postContent: "",
    };
  },

  props: {
    post: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    userId() {
      return this.post.userId;
    },
    postId() {
      return this.post.postId;
    },
    time() {
      return parseTime(this.post.time);
    },
  },
  methods: {
    clickItem(postId, userId) {
      this.$router.push({
        name: "comments",
        params: { id: postId, userId: userId },
      });
    },
    init() {
      getComments(this.postId).then((res) => {
        let data = res.data;
        this.counts = data.length;
      });
      getProfile(this.userId).then((res) => {
        let data = res.data;
        this.name = data.name;
        this.avator = "http://localhost:3001/uploads/" + data.avator;
      });
      this.postContent = this.post.content;
    },
  },
  mounted() {
    this.init();
    //console.log(this.post.time);
  },
  // activated() {
  //   this.init()
  // },
  // watch: {
  //   // 如果路由有变化，会再次执行该方法
  //   $route: 'init'
  // }
};
</script>

<style lang="scss" scoped>
p {
  height: 75px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.info {
  position: absolute;
  right: 10px;
  bottom: -15px;
}
img {
  position: absolte;
  top: 35px;
  margin-left: 25px;
  height: 30px;
  width: 30px;
  transform: translate(-10px, -10px);
  object-fit: fill;
  border-radius: 50%;
}
@function map-fetch($map, $keys...) {
  @each $key in $keys {
    $map: map-get($map, $key);
  }
  @return $map;
}

$shadow-spread: 66;

$config: (
  z-index: (
    blur: 0,
    body: 1,
    header: 2,
    arrow: 2,
  ),
  colors: (
    hero-bg: rgba(white, 0.7),
    body-bg: rgba(#f7f7f7, 0.6),
    arrow-bg: darken(white, 15%),
    text: #303030,
  ),
  shadows: (
    card: 8px 10px #{$shadow-spread}px 1px rgba(0, 0, 0, 0.4),
  ),
  small-card: (
    left-distance: 50,
    min-scale: 1,
    min-opacity: 0.6,
    shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.4),
  ),
);

.component\@profile-card {
  display: flex;
  align-items: stretch;
  flex-direction: column;
  justify-content: space-between;

  box-shadow: map-fetch($config, shadows, card), -1px -1px 0px 1px white,
    -1px -1px 0px 1px white;

  position: relative;

  height: 300px;
  width: 100%;

  will-change: transform, top, left, opacity, position, box-shadow;
  z-index: 1;

  @media (min-width: 480px) {
    width: 800px;
  }

  &__header {
    background: map-fetch($config, colors, hero-bg);

    width: 90px;

    position: absolute;

    left: 0;
    top: 0;
    bottom: 0;

    z-index: map-fetch($config, z-index, header);
  }

  &__body {
    background: map-fetch($config, colors, body-bg);

    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    flex-direction: column;

    padding: 0 24px 24px 24px;

    z-index: map-fetch($config, z-index, body);
  }
}
</style>
