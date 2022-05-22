<template>
  <div>
    <md-toolbar class="md-dark">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <h3 class="md-title">Zoo_Y Posts</h3>
        </div>
        <div class="md-toolbar-section-end">
          <div class="md-collapse">
            <md-list>
              <md-list-item href="javascript:void(0)" @click="goToHome">
                <md-icon>explore</md-icon>
                <p>Discover</p>
              </md-list-item>
              <md-list-item href="javascript:void(0)">
                <md-icon>list</md-icon>
                <p>FriendLinks</p>
              </md-list-item>
              <li class="md-list-item" v-show="logined">
                <a
                  href="javascript:void(0)"
                  class="
                    md-list-item-router md-list-item-container md-button-clean
                    dropdown
                  "
                >
                  <div class="md-list-item-content">
                    <drop-down direction="down" class="profile-photo">
                      <div
                        class="profile-photo-small"
                        slot="title"
                        data-toggle="dropdown"
                      >
                        <img :src="avator" alt="Circle Image" />
                      </div>
                      <ul class="dropdown-menu dropdown-menu-right">
                        <li class="dropdown-header">Mune</li>
                        <li @click="goToProfile">
                          <a href="javascript:void(0)" class="dropdown-item"
                            >Me</a
                          >
                        </li>
                        <li v-show="isAdmin" @click="toAdmin">
                          <a href="javascript:void(0)" class="dropdown-item"
                            >Moderator</a
                          >
                        </li>
                        <li @click="signOut">
                          <a href="javascript:void(0)" class="dropdown-item"
                            >Sign Out</a
                          >
                        </li>
                      </ul>
                    </drop-down>
                  </div>
                </a>
              </li>
              <li class="md-list-item" v-show="!logined">
                <a
                  href="javascript:void(0)"
                  class="
                    md-list-item-router md-list-item-container md-button-clean
                  "
                >
                  <div class="md-list-item-content" @click="login">
                    <md-button class="md-rose md-round">Sign in</md-button>
                  </div>
                </a>
              </li>
              <md-list-item
                href="javascript:void(0)"
                @click="register"
                v-show="!logined"
              >
                <p style="text-decoration: underline">Register</p>
              </md-list-item>
            </md-list>
          </div>
        </div>
      </div>
    </md-toolbar>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { userIsLogined, signOut } from "api/index";
export default {
  name: "HomeHeader",
  data() {
    return {
      avator: "",
      isAdmin: false,
    };
  },
  computed: {
    ...mapState(["logined", "loginedUser"]),
  },
  methods: {
    register() {
      this.$router.push({
        path: "/register",
      });
    },
    login() {
      this.$router.push({
        path: "/login",
      });
    },
    goToHome() {
      this.$router.push({
        path: "/",
      });
    },
    goToProfile() {
      this.$router.push({
        path: "/userprofile",
      });
    },
    signOut() {
      signOut().then((res) => {
        if (res.data.code === 0) {
          this.$notify({
            title: "Successfully sign out！",
            message: "Welcome to visit us again",
            type: "success",
            offset: 100,
          });
          this.$store.commit("toggleLoginStatus", false);
          this.$store.commit("setLoginedUser", undefined);
        } else {
          this.$notify.error({
            title: "fail to sign out！",
            message: "Sorry to the unknown wrong！",
            offset: 100,
          });
        }
      });
    },
    toAdmin() {
      this.$router.push({
        path: "/admin",
      });
    },
  },
  mounted() {
    userIsLogined().then((res) => {
      this.avator = "http://localhost:3001/uploads/" + res.data.user.avator;
      this.isAdmin = res.data.user.name === "Admin";
      if (res.data.code == 0) {
        this.$store.commit("toggleLoginStatus", true);
        this.$store.commit("setLoginedUser", res.data.user);
      }
    });
  },
};
</script>

<style lang="scss" scoped>
</style>
