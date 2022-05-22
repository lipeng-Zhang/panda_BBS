<template>
  <!-- Video组件 -->
  <div id="common-video" class="h-100">
    <div :class="{ isShow: control }" class="h-100">
      <video
        ref="myVideo"
        :poster="poster"
        src="../../assets/video/panda.mp4"
        :controls="controls"
        oncontextmenu="return false"
        @timeupdate="timeupdate"
        controlslist="nodownload"
        class="video-box"
      ></video>
      <!-- <img
        src="../../assets/img/logo.png"
        alt=""
        @click="operateVideo"
        class="pointer operate-btn"
        :class="{ 'fade-out': videoState }"
      /> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "CommonVideo",
  data() {
    return {
      videoState: false, // 视频播放状态
      // 学时
      studyTime: {
        currentTime: 0, // 当前已学时长
        duration: 0 // 总时长
      },
      timer: {}, // 定时器
      pauseTimer: {} // 暂停定时器
    };
  },
  /**
   * @param poster 展示图
   * @param src 视频资源
   * @param controls 是否显示控件
   * @param control 控件控制
   */
  props: {
    poster: {
      type: String,
      required: false,
      default: ""
    },
    controls: {
      type: Boolean,
      required: false,
      default: true
    },
    control: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  mounted() {
    // 监听视频播放
    this.$refs.myVideo.addEventListener("play", () => {
      console.log("video is playing");
      this.openTimer();
    });
    // 监听视频暂停
    this.$refs.myVideo.addEventListener("pause", () => {
      console.log("video is stop");
      this.closeTimer();
    });
  },
  methods: {
    // 开启定时器
    openTimer() {
      this.timer = setInterval(() => {
        this.$emit("videoStudyTime", this.studyTime);
      }, 5000);
    },
    // 关闭定时器
    closeTimer() {
      clearInterval(this.timer);
      this.$emit("videoStudyTime", this.studyTime);
    },
    // 开启暂停定时器
    openPauseTimer() {
      this.pauseTimer = setInterval(() => {
        this.hintOperate();
      }, 600000);
    },
    // 关闭暂停定时器
    closePauseTimer() {
      clearInterval(this.pauseTimer);
    },
    // 获取当前播放位置
    timeupdate(e) {
      this.studyTime.currentTime = e.target.currentTime;
      this.studyTime.duration = e.target.duration ? e.target.duration : 0;
    },
    // 操作视频播放、暂停
    operateVideo() {
      if (this.$refs.myVideo.paused) {
        this.$refs.myVideo.play();
        this.videoState = true;
      } else {
        this.$refs.myVideo.pause();
        this.videoState = false;
      }
    }
  },
  
};
</script>

<style lang="css">
#common-video {
  position: relative;
}
#common-video .video-box {
  box-sizing: border-box;
  border: 0;
  display: block;
  width: 100%;
  height: 100%;
  outline: none !important;
}
#common-video .isShow video::-webkit-media-controls-timeline {
  display: none;
}
#common-video video::-webkit-media-controls-play-button {
  visibility: hidden;
}
#common-video .operate-btn {
  display: block;
  width: 60px;
  height: 60px;
  position: absolute;
  top: calc(20%);
  left: calc(20%);
}
#common-video .operate-btn:hover {
  opacity: 0.8;
}
#common-video .fade-out {
  opacity: 0;
}

</style>
