<template>
  <div class="wrapper" style="margin-top: 200px">
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-50 mx-auto">
              <div class="profile">
                <div class="avatar">
                  <img
                    :src="img"
                    alt="Circle Image"
                    class="img-raised rounded-circle img-fluid"
                  />
                </div>
                <div class="name">
                  <h3 class="title">{{ loginedUser.name }}</h3>
                  <md-button
                    href="javascript:void(0)"
                    class="md-just-icon md-simple md-dribbble"
                    ><i class="fab fa-dribbble"></i
                  ></md-button>
                  <md-button
                    href="javascript:void(0)"
                    class="md-just-icon md-simple md-twitter"
                    ><i class="fab fa-twitter"></i
                  ></md-button>
                  <md-button
                    href="javascript:void(0)"
                    class="md-just-icon md-simple md-pinterest"
                    ><i class="fab fa-pinterest"></i
                  ></md-button>
                </div>
              </div>
            </div>
          </div>
          <div class="form">
            <div class="self">
              <md-field>
                <label>Self Itroduction</label>
                <md-textarea v-model="form.selfIntro"></md-textarea>
              </md-field>
            </div>
            <div class="self">
              <md-field>
                <label>FirstName</label>
                <md-input v-model="form.firstname"></md-input>
              </md-field>

              <md-field>
                <label>SecondName</label>
                <md-input v-model="form.secondname"></md-input>
              </md-field>
              <md-field>
                <label for="gender">Gender</label>
                <md-select name="gender" id="gender" v-model="form.gender">
                  <md-option></md-option>
                  <md-option value="M">M</md-option>
                  <md-option value="F">F</md-option>
                </md-select>
              </md-field>
              <md-field>
                <label for="age">Age</label>
                <md-input
                  type="number"
                  id="age"
                  name="age"
                  autocomplete="age"
                  v-model="form.age"
                />
              </md-field>
              <md-field>
                <label>Email</label>
                <md-input
                  type="email"
                  name="email"
                  id="email"
                  autocomplete="email"
                  v-model="loginedUser.email"
                />
              </md-field>
              <md-field>
                <label>Location</label>
                <md-input v-model="form.location" />
              </md-field>
              <md-field>
                <label>Upload portrait</label>
                <md-file v-model="form.potrait"></md-file>
              </md-field>
              <div style="margin: 20px 244px">
                <md-button class="md-success" @click="save">SAVE</md-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { Tabs } from "@/components";

export default {
  components: {
    Tabs,
  },
  bodyClass: "profile-page",
  data() {
    return {
      img: "",
      form: {
        selfIntro: " ",
        firstname: "",
        secondname: "",
        gender: "",
        age: "",
        location: "",
        potrait: "",
      },
    };
  },
  methods: {
    save() {
      let storeForm = JSON.stringify(this.form);
      sessionStorage.setItem("profile", storeForm);
    },
  },
  computed: {
    ...mapState(["logined", "loginedUser"]),
  },
  mounted() {
    let form = sessionStorage.getItem("profile");
    if (form !== null) {
      this.form = JSON.parse(form);
    }
    this.img = "http://localhost:3001/uploads/" + this.loginedUser.avator;
  },
};
</script>

<style lang="scss" scoped>
.form {
  margin: 0px auto;
  width: 800px;
  height: 666px;
  margin-bottom: 50px;

  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.4), -1px -1px 0px 1px white,
    -1px -1px 0px 1px white;
}
.self {
  width: 600px;
  margin-left: 100px;
  margin-top: 20px;
}
.section {
  padding: 0;
}

.profile-tabs::v-deep {
  .md-card-tabs .md-list {
    justify-content: center;
  }

  [class*="tab-pane-"] {
    margin-top: 3.213rem;
    padding-bottom: 50px;

    img {
      margin-bottom: 2.142rem;
    }
  }
}
</style>