<template>
  <div class="login d-flex justify-center align-center">
    <v-card class="d-flex pa-10 card-login" width="900">
      <div class="login-container">
        <v-img
          src="../assets/images/login/image_login.png"
          class="image-login"
        ></v-img>
      </div>
      <div class="login-container">
        <v-card-text>
          <h1
            class="display-2 blue--text text--darken-2 font-weight-bold welcome-text"
          >
            Welcome
          </h1>
          <v-form ref="form">
            <v-text-field
              label="Username"
              v-model="fields.u_username"
              type="text"
              prepend-icon="mdi-account-circle"
              :rules="validateRules('Username')"
            ></v-text-field>

            <v-text-field
              label="Password"
              v-model="fields.u_password"
              prepend-icon="mdi-lock"
              :rules="validateRules('Password')"
              :append-icon="show_password ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="show_password = !show_password"
              :type="show_password ? 'text' : 'password'"
            ></v-text-field>
          </v-form>
          <p class="red--text">{{form_error}}</p>
          <v-btn
            width="100%"
            class="pa-5 blue darken-2 text--white btn-text mb-5"
            dark
            @click="validateLogin"
            >Login</v-btn
          >
          <span class="body-1"> Belum punya akun? </span>
          <router-link
            class="body-1"
            to="/daftar"
            style="text-decoration: none"
          >
            Registrasi</router-link
          >
        </v-card-text>
      </div>
    </v-card>
  </div>
</template>

<script>
import db from "../firebase";
import { mapActions } from "vuex";

export default {
  name: "UserLogin",
  data: () => ({
    form_error: "",
    show_password: false,
    fields: {
      u_username: "",
      u_password: "",
    },
  }),
  methods: {
    ...mapActions(['setUser']),
    validateRules(field) {
      return [(v) => !!v || `${field} harus diisi`];
    },
    async validateLogin() {
      this.$refs.form.validate();
      if (this.$refs.form.validate()) {
        this.form_error = "";
        let loader = this.$loading.show({});
        await db
          .collection("users")
          .get()
          .then((querySnapshot) => {
            let canLogin = false;
            querySnapshot.forEach((doc) => {
              if (doc.data()["u_username"] == this.fields.u_username) {
                if (doc.data()["u_password"] == this.fields.u_password) {
                  this.form_error = "";
                  canLogin = true;
                  this.setUser(this.fields.u_username);
                }
              }
              loader.hide();
            });
            if (!canLogin) this.form_error = "*Akun tidak valid!";
          });
      }
    },
  },
};
</script>

<style scoped>
.btn-text:hover {
  color: white !important;
}

.welcome-text {
  margin-bottom: 2rem;
}

.login {
  height: 100vh;
}

.login-container {
  width: 50% !important;
  align-self: center;
}

@media only screen and (max-width: 962px) {
  .card-login {
    width: 700px !important;
  }
}

@media only screen and (max-width: 745px) {
  .image-login {
    display: none;
  }

  .card-login {
    flex-direction: column !important;
    margin: 2rem;
  }

  .login-container {
    width: 100% !important;
  }

  .welcome-text {
    text-align: center;
  }
}

@media only screen and (max-width: 350px) {
  .card-login {
    width: 280px !important;
  }

  .welcome-text {
    font-size: 2rem !important;
  }
}
</style>