<template>
  <div>
    <div v-show="!isAdmin">
      <h1 class="title">You don't have permission to access</h1>
    </div>
    <div class="section" v-show="isAdmin">
      <div class="container">
        <h1 class="title">Admin</h1>
      </div>
      <div class="container">
        <md-table
          v-model="candidatePosts"
          md-sort-order="asc"
          md-card
          md-fixed-header
        >
          <md-table-toolbar>
            <div class="md-toolbar-section-start">
              <h3 class="title">Candidate Posts</h3>
            </div>

            <md-field md-clearable class="md-toolbar-section-end">
              <md-input
                placeholder="Search by title..."
                v-model="search"
                @input="searchOnTable"
              />
            </md-field>
          </md-table-toolbar>

          <md-table-row slot="md-table-row" slot-scope="{ item }">
            <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{
              ("000" + item.postId).substr(-4)
            }}</md-table-cell>
            <md-table-cell md-label="Time" md-sort-by="Time">{{
              item.time
            }}</md-table-cell>
            <md-table-cell md-label="Title" md-sort-by="Title">{{
              item.title
            }}</md-table-cell>
            <md-table-cell md-label="Manage" md-sort-by="Manage">
              <md-button class="md-primary" @click="view(item)">
                View</md-button
              >
              <modal v-if="classicModal" @close="classicModalHide">
                <template slot="header">
                  <h4 class="title">{{ curModal.title }}</h4>
                  <md-button
                    class="md-simple md-just-icon md-round modal-default-button"
                    @click="classicModalHide"
                  >
                    <md-icon>clear</md-icon>
                  </md-button>
                </template>

                <template slot="body">
                  <div style="text-align: left">
                    <div v-for="(line, index) of contentLines" :key="index">
                      <p>{{ line }}</p>
                    </div>
                  </div>
                  <!-- <p style="text-align: left">
                  {{ curModal.content }}
                </p> -->
                </template>

                <template slot="footer">
                  <md-button
                    class="md-danger md-simple"
                    @click="classicModalHide"
                    >Close</md-button
                  >
                </template>
              </modal>
              <md-button class="md-success" @click="acceptCandidatePost(item)"
                >Accept</md-button
              >
              <md-button
                class="md-rose"
                @click="deleteCandidatePost(item.postId)"
                >Delete</md-button
              >
            </md-table-cell>
          </md-table-row>
        </md-table>
      </div>
      <div class="container" style="z-index: 0">
        <md-table v-model="posts" md-sort-order="asc" md-card md-fixed-header>
          <md-table-toolbar>
            <div class="md-toolbar-section-start">
              <h3 class="title">Posts</h3>
            </div>

            <md-field md-clearable class="md-toolbar-section-end">
              <md-input
                placeholder="Search by title..."
                v-model="search"
                @input="searchOnTable"
              />
            </md-field>
          </md-table-toolbar>

          <md-table-row slot="md-table-row" slot-scope="{ item }">
            <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{
              ("000" + item.postId).substr(-4)
            }}</md-table-cell>
            <md-table-cell md-label="Time" md-sort-by="Time">{{
              item.time
            }}</md-table-cell>
            <md-table-cell md-label="Title" md-sort-by="Title">{{
              item.title
            }}</md-table-cell>
            <md-table-cell md-label="Manage" md-sort-by="Manage">
              <md-button class="md-rose" @click="deletePost(item.postId)"
                >Delete</md-button
              >
            </md-table-cell>
          </md-table-row>
        </md-table>
      </div>
    </div>
  </div>
</template>

<script>
const toLower = (text) => {
  return text.toString().toLowerCase();
};

const searchByName = (items, term) => {
  if (term) {
    return items.filter((item) => toLower(item.name).includes(toLower(term)));
  }

  return items;
};
import { userIsLogined } from "api/index";
import { addPosts } from "api/index";
import { PostDelete } from "api/index";
import { candidatePostDelete } from "api/index";
import { getPosts } from "api/index";
import { getCandidatePosts } from "api/index";
import { Modal } from "@/components";
export default {
  name: "Admin",
  components: {
    Modal,
  },
  data() {
    return {
      classicModal: false,
      candidatePosts: [],
      posts: [],
      search: null,
      searchedNotCd: [],
      searchedCd: [],
      curModal: null,
      isAdmin: false,
    };
  },
  computed: {
    contentLines() {
      return this.curModal.content.split("\n");
    },
  },
  methods: {
    getData() {
      getPosts(0).then((res) => {
        let data = res.data;
        this.posts.splice(0);
        for (let i = 0; i < data.length; i++) {
          this.posts.push(data[i]);
        }
      });
      getCandidatePosts(0).then((res) => {
        let data = res.data;
        this.candidatePosts.splice(0);
        for (let i = 0; i < data.length; i++) {
          this.candidatePosts.push(data[i]);
        }
      });
    },
    searchOnTable() {
      this.searchedNotCd = searchByName(this.posts, this.search);
    },
    deletePost(id) {
      PostDelete(id).then((res) => {});
      this.getData();
    },
    deleteCandidatePost(id) {
      candidatePostDelete(id).then((res) => {});
      this.getData();
    },
    acceptCandidatePost(item) {
      addPosts(item.userId, item.title, item.content, item.value).then(
        (res) => {
          if (res.data.code == 0) {
          } else {
            this.$notify.error({
              title: "发帖失败！",
              message: "发生了未知错误，非常抱歉！",
              offset: 100,
            });
          }
        }
      );
      this.deleteCandidatePost(item.postId);
    },
    classicModalHide() {
      this.classicModal = false;
    },
    view(item) {
      this.curModal = item;
      this.classicModal = true;
    },
  },
  created() {
    this.getData();
    this.searchedNotCd = this.posts;
    this.searchedCd = this.candidatePosts;
  },

  watch: {
    $route: "getData",
  },
  mounted() {
    userIsLogined().then((res) => {
      this.isAdmin = res.data.user.name === "Admin";
    });
  },
};
</script>

<style lang="scss" scoped>
.posts {
  margin: 15px 0px;
}
.md-field {
  max-width: 300px;
}
</style>
