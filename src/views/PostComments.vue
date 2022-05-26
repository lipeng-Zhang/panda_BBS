<template>
  <div class="whole" :style="bgStyle">
    <div class="post-comments">
      <div class="header-content">
        <div class="header">
          <h2 class="title">{{ title }}</h2>
          <div class="message">
            posted by
            <img :src="avator" alt="" srcset="" />
            <small>{{ name }}</small
            >· in
            <span class="time">{{ time }}</span>
          </div>
        </div>
        <div class="post-content">
          <div v-for="(line, index) of contentLines" :key="index">
            <p>{{ line }}</p>
          </div>
        </div>
      </div>
      <div class="comments">
        <div class="top">
          <span>{{ count }} comments · </span>
          <span>{{ nowTime }}</span>
        </div>
        <div
          class="comment"
          v-for="(item, index) of comments"
          :key="item.commentId"
        >
          <comments-item :comment="item"></comments-item>
        </div>
      </div>
      <div class="add-comments">
        <add-comments
          :postId="postId"
          @addCommentData="pushCommentData"
        ></add-comments>
      </div>
    </div>
  </div>
</template>

<script>
import { getComments, getProfile, postDetail } from "api/index";
import parseTime from "utils/parseTime";
import CommentsItem from "components/CommentsItem";
import AddComments from "components/AddComments";
export default {
  name: "PostComments",
  components: {
    CommentsItem,
    AddComments,
  },
  data() {
    return {
      title: "",
      name: "",
      userId: 0,
      content: "",
      avator: "",
      comments: [],
      time: "",
      nowTime: new Date(),
      count: 0,
    };
  },
  computed: {
    postId() {
      return this.$route.params.id;
    },
    contentLines() {
      return this.content.split("\n");
    },
    bgStyle() {
      return {
        backgroundImage: `url(${this.bg})`,
      };
    },
  },
  props: {
    bg: {
      type: String,
      default: require("@/assets/img/bg3.jpg"),
    },
  },
  methods: {
    pushCommentData(comment) {
      let data = {
        commentId: this.comments.length + 1,
        content: comment.comment,
        postId: this.postId,
        time: new Date().toString(),
        userId: this.$store.state.loginedUser.userId,
      };
      this.comments.unshift(data);
    },
    init() {
      getComments(this.postId).then((res) => {
        let data = res.data;
        this.count = data.length;
        this.comments = data;
      });
      postDetail(this.postId).then((res) => {
        let data = res.data;
        this.userId = data.userId;
        this.title = data.title;
        this.content = data.content;
        this.time = parseTime(data.time);
        this.nowTime = parseTime(this.nowTime);
      });
    },
  },
  mounted() {
    this.init();
  },
  activated() {
    this.init();
  },
  watch: {
    userId(newV) {
      getProfile(newV).then((res) => {
        let data = res.data;
        this.name = data.name;
        // console.log(process.env)
        this.avator = "http://localhost:3001/uploads/" + data.avator;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  position: absolte;
  top: 0px;
  margin-left: 25px;
  margin-top: 15px;
  height: 30px;
  width: 30px;
  transform: translate(-10px, -10px);
  object-fit: fill;
  border-radius: 50%;
}
.post-comments {
  min-width: 490px;
  max-width: 1154px;
  position: relative;
  left: 0;
  right: 0;
  margin-top: 15px;
  margin: auto;
  padding-top: 15px;
  padding-right: 354px;
  xoverflow: hidden;
  .header {
    xheight: 100px;
    padding: 20px 10px 20px 10px;
    position: relative;
    box-sizing: border-box;
    background-color: rgba(#f7f7f7, 0.9);
    border-bottom: 1px solid rgb(188, 188, 188);
    .title {
      height: 36px;
      xdisplay: inline-block;
      line-height: 26px;
      font-size: 24px;
      padding: 0 0 10px 0;
      box-sizing: border-box;
      color: black;
    }
    .message {
      display: inline-block;
      height: 25px;
      line-height: 25px;
      font-size: 12.5px;
      color: #999;
      .name {
        color: black;
      }
    }
  }
  .post-content {
    padding: 20px 10px 20px 10px;
    box-sizing: border-box;
    background-color: rgba(#f7f7f7, 0.9);
    width: 800px;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 15px;
    white-space: pre-wrap;

    // p {
    //   text-indent: 2em;
    //   padding: 5px 0;
    //   margin: 0;
    // }
  }

  .comments {
    font-size: 14px;
    color: #999999;
    box-sizing: border-box;
    background-color: rgba(#f7f7f7, 0.9);
    overflow: hidden;
    .top {
      height: 42px;
      padding: 10px;
      box-sizing: border-box;
      line-height: 22px;
      box-shadow: 0 1px 1px gray;
    }
  }
}
.whole {
  width: 100%; //大小设置为100%
  height: 100%; //大小设置为100%
  position: fixed;
  background-size: 100% 100%;
}
</style>
