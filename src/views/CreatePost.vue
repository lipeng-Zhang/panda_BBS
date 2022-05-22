<template>
  <div class="whole" :style="bgStyle">
    <vue-particles color="#dedede"> </vue-particles>
    <div class="create-post">
      <div class="post-container">
        <h3 class="title">New Post</h3>
        <div class="input-container">
          <md-field>
            <md-input v-model="form.title" placeholder="Title"></md-input>
          </md-field>
          <md-field>
            <label for="movie">category</label>
            <md-select v-model="form.value">
              <md-option value="1">{{ options[0].label }}</md-option>
              <md-option value="2">{{ options[1].label }}</md-option>
              <md-option value="3">{{ options[2].label }}</md-option>
              <md-option value="4">{{ options[3].label }}</md-option>
            </md-select>
          </md-field>
          <md-field>
            <label>Post</label>
            <md-textarea v-model="form.content"></md-textarea>
          </md-field>
          <div style="margin: 25px 0">
            <span style="margin: 0px 125px">
              <md-button
                class="md-success"
                @click="onSubmit(form.title, form.value, form.content)"
                >Public</md-button
              >
            </span>
            <md-button class="md-danger" @click="cancelPost">cancle</md-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { addCandidatePosts } from "api/index";
import { addPosts } from "api/index";
export default {
  name: "CreatePost",
  data() {
    return {
      form: {
        title: "",
        content: "",
        value: "",
      },
      options: [
        {
          value: "1",
          label: "Original",
        },
        {
          value: "2",
          label: "Reprint",
        },
        {
          value: "3",
          label: "Question",
        },
        {
          value: "4",
          label: "Funding",
        },
      ],
    };
  },
  props: {
    bg: {
      type: String,
      default: require("@/assets/img/bg3.jpg"),
    },
  },
  computed: {
    userId() {
      return this.$store.state.loginedUser.userId;
    },
    bgStyle() {
      return {
        backgroundImage: `url(${this.bg})`,
      };
    },
  },
  methods: {
    cancelPost() {
      this.$router.go(-1);
    },
    onSubmit(title, value, content) {
      addCandidatePosts(this.userId, title, content, value).then((res) => {
        if (res.data.code == 0) {
          this.$notify({
            title: "Successfully！",
            message: "Successfully post, have a good day:)",
            type: "success",
            offset: 100,
            duration: 2500,
          });
          this.$router.go(-1);
          this.form = {};
        } else {
          this.$notify.error({
            title: "发帖失败！",
            message: "发生了未知错误，非常抱歉！",
            offset: 100,
          });
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.whole {
  width: 100%; //大小设置为100%
  height: 100%; //大小设置为100%
  position: fixed;
  background-size: 100% 100%;
}
.create-post {
  position: absolute;
  top: 50px;
  left: 600px;
  .post-container {
    width: 750px;
    box-sizing: border-box;
    margin-right: 160px;
    background-color: rgba(#f7f7f7, 0.9);
    border: 1px solid gray;
    .title {
      text-align: center;
    }
  }
}
.input-container {
  width: 600px;
  margin-left: 50px;
}
.md-field.md-has-textarea:not(.md-autogrow) .md-textarea {
  min-height: 450px;
}
</style>
