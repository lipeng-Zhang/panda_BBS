<template>
  <div class="content-container">
    <div
      class="posts"
      v-for="item of postsByPage[cur_page - 1]"
      :key="item.postId"
    >
      <content-item :post="item"></content-item>
    </div>
    <div>
      <div class="pagination-container">
        <pagination
          with-text
          v-model="cur_page"
          :page-count="postsByPage.length"
        >
        </pagination>
      </div>
    </div>
  </div>
</template>

<script>
import ContentItem from "components/ContentItem";
import { getPosts } from "api/index";
import { Pagination } from "@/components";
export default {
  name: "ContentContainer",
  components: {
    ContentItem,
    Pagination,
  },
  data() {
    return {
      postsByPage: [],
      cur_page: 1,
    };
  },
  computed: {
    categoryId() {
      let map = { total: 0, share: 1, discuss: 2, complain: 3, complement: 4 };
      return map[this.$route.params.path];
    },
  },
  methods: {
    getData() {
      this.cur_page = 1;
      this.postsByPage = [];
      getPosts(this.categoryId).then((res) => {
        let data = res.data;
        let pageNum = data.length / 7;
        for (let i = 0; i < pageNum; i++) {
          let arr = data.slice(i * 7, i * 7 + 7);
          this.postsByPage.push(arr);
        }
      });
    },
  },
  created() {
    //console.log(this.$route);
    this.getData();
  },
  // activated() {
  //   this.getData()
  // },
  watch: {
    $route: "getData",
  },
};
</script>

<style lang="scss" scoped>
.posts {
  margin: 15px 0px;
}
.pagination-container {
  padding-left: 10px;
  margin: 0px auto;
  height: 30px;
  width: 270px;
  background-color: rgba(#f7f7f7, 0.6);
  text-align: center;
  border-radius: 15px;
}
</style>
