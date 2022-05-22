<template>
  <div class="wrapper">
    <div
      class="section page-header header-filter"
      style="height: 969px"
      :style="headerStyle"
    >
      <div class="container">
        <div class="md-layout">
          <div
            class="
              md-layout-item
              md-size-33
              md-small-size-66
              md-xsmall-size-100
              md-medium-size-40
              mx-auto
            "
          >
            <login-card header-color="green">
              <h4 slot="title" class="card-title">Login</h4>
              <md-button
                slot="buttons"
                href="javascript:void(0)"
                class="md-just-icon md-simple md-white"
              >
                <i class="fab fa-facebook-square"></i>
              </md-button>
              <md-button
                slot="buttons"
                href="javascript:void(0)"
                class="md-just-icon md-simple md-white"
              >
                <i class="fab fa-twitter"></i>
              </md-button>
              <md-button
                slot="buttons"
                href="javascript:void(0)"
                class="md-just-icon md-simple md-white"
              >
                <i class="fab fa-google-plus-g"></i>
              </md-button>
              <p slot="description" class="description">Or Be Classical</p>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>face</md-icon>
                <label>UserName...</label>
                <md-input v-model="UserName"></md-input>
              </md-field>
              <!-- <md-field class="md-form-group" slot="inputs">
                <md-icon>email</md-icon>
                <label>Email...</label>
                <md-input v-model="email" type="email"></md-input>
              </md-field> -->
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Password...</label>
                <md-input v-model="password"></md-input>
              </md-field>
              <md-button
                slot="footer"
                class="md-simple md-success md-lg"
                @click="onSubmit"
              >
                Get Started
              </md-button>
            </login-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from "api/index";
import { LoginCard } from "@/components";

export default {
  components: {
    LoginCard,
  },
  bodyClass: "login-page",
  data() {
    return {
      UserName: null,
      email: null,
      password: null,
    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/giant-panda.jpg"),
    },
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`,
      };
    },
  },
  methods: {
    onSubmit() {
      login(this.UserName, this.password).then((res) => {
        console.log(res.data);
        if (res.data.code === -2) {
          this.$notify.error({
            title: "This user haven't registered！",
            message: "Wrong Username，Maybe you haven't registered",
            offset: 100,
          });
        } else if (res.data.code === -1) {
          this.$notify.error({
            title: "Wrong Password！",
            message: "Wrong Password，Please input again~",
            offset: 100,
          });
        } else {
          this.$notify({
            title: "Successful！",
            message:
              "You have logged in successfully, now you can post new posts, or reply to others' posts, wish you have good experience)",
            type: "success",
            offset: 100,
          });
          this.$store.commit("toggleLoginStatus", true);
          this.$store.commit("setLoginedUser", res.data.user);
          this.name = "";
          this.password = "";
          this.$router.push({
            path: "/home/total",
          });
        }
      });
    },
  },
};
</script>

<style lang="css"></style>
