<template>
  <div class="add-comments">
    <div class="header">
      <div class="left">Add comments</div>
    </div>
    <div class="text">
      <md-field>
        <label>Comment</label>
        <md-textarea v-model="comment"></md-textarea>
      </md-field>
      <md-button class="md-success" @click="onSubmit(postId, comment)"
        >Reply</md-button
      >
    </div>
  </div>
</template>

<script>
import { addComment } from "api/index";
export default {
  name: "AddComments",
  data() {
    return {
      comment: "",
    };
  },
  props: ["postId"],
  methods: {
    onSubmit(postId, comment) {
      addComment(postId, comment).then((res) => {
        if (res.data.code == 0) {
          this.$notify({
            title: "回复成功！",
            message: "您成功添加一条回复:)",
            type: "success",
            offset: 100,
            duration: 2000,
          });
          //在前端那做一次数据的更改，这样页面不用刷新，增加用户的体验，
          //需要子传父，将数据传到父组件上，然后，父组件数据改变之后，页面修改
          //把评论的数据传到父组件去
          this.$emit("addCommentData", {
            comment,
          });
          this.comment = "";
        } else {
          this.$notify.error({
            title: "回复失败！",
            message: "很抱歉，发生未知错误，bug机器人正在赶来修复的路上~",
            offset: 100,
            duration: 2000,
          });
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.add-comments {
  margin-top: 10px;
  overflow: hidden;
  background-color: rgba(#f7f7f7, 0.9);
  .header {
    height: 42px;
    box-sizing: border-box;
    padding: 10px;
    border-bottom: 1px solid gray;
    .left {
      line-height: 22px;
      font-size: 14px;
      color: black;
    }
  }
  form {
    padding: 15px 15px 0 15px;
    box-sizing: border-box;
  }
  .reply {
    margin-bottom: 15px;
    margin-left: 15px;
  }
}
.md-field.md-has-textarea:not(.md-autogrow) .md-textarea {
  min-height: px;
}
.text {
  width: 750px;
  margin-left: 25px;
  margin-bottom: 10px;
}
</style>
