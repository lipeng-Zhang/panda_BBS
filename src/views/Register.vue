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
            <login-card header-color="rose">
              <h4 slot="title" class="card-title">Register</h4>
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
                <md-input v-model="form.name"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>email</md-icon>
                <label>Email...</label>
                <md-input v-model="form.email" type="email"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Password...</label>
                <md-input v-model="form.password"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <label>Upload portrait</label>
                <md-file
                  v-model="sth"
                  @md-change="onFileUpload($event)"
                ></md-file>
              </md-field>
              <md-button
                slot="footer"
                class="md-simple md-success md-lg"
                @click="onSubmit"
              >
                Register
              </md-button>
            </login-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { register } from "api/index";
import { LoginCard } from "@/components";

export default {
  name: "Register",
  components: {
    LoginCard,
  },
  bodyClass: "login-page",
  data() {
    return {
      FILE: null,
      form: {
        name: "",
        password: "",
        email: "",
      },
      sth: null,
      notificationData: "",
      registerSuccess: false,
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
    cancelRegister() {
      this.$router.push({
        name: "home",
      });
    },
    cancelDefault() {},
    onFileUpload(event) {
      this.FILE = event[0];
    },
    onSubmit() {
      const formData = new FormData();
      formData.append("name", this.form.name);
      formData.append("password", this.form.password);
      formData.append("email", this.form.email);
      formData.append("avator", this.FILE, this.FILE.name);
      console.log(formData);
      register(formData).then((res) => {
        console.log(res);
        this.notificationData = res.data.msg;
        if (res.data.code == 0) {
          this.$notify({
            title: "Successfully！",
            message: "You have registered,please login！",
            type: "success",
            offset: 100,
          });
          this.form = {};
        } else {
          this.$notify.error({
            title: "Fail to register！",
            message: "Username has been used, please use others",
            offset: 100,
          });
        }
        this.form = {};

        this.$router.push({
          path: "/login",
        });
      });
    },
  },
};
</script>

<style lang="css"></style>
