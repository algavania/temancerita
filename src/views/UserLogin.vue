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
          <h1 class="display-2 blue--text text--darken-2 font-weight-bold welcome-text">Welcome</h1>
          <v-form>
            <v-row>
              <v-col cols="12">
                <div v-for="form in forms" :key="form.model">
                  <v-text-field
                    v-model="fields[form.model]"
                    :rules="validateRules(form)"
                    :label="form.label"
                    :prepend-icon="form.icon"
                    :type="form.type"
                  ></v-text-field>
                </div>
              </v-col>
            </v-row>
          </v-form>
          <v-btn
            width="100%"
            class="pa-5 blue darken-2 text--white btn-text mb-5"
            dark
            >Login</v-btn>
          <span class="body-1">
            Belum punya akun?
          </span>
          <router-link class="body-1" to="/daftar" style="text-decoration: none;"> Registrasi</router-link>
        </v-card-text>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "UserLogin",
  data: () => ({
    forms: [
      {
        label: "Username",
        model: "u_username",
        required: true,
        type: "text",
        icon: "mdi-account-circle",
      },
      {
        label: "Password",
        model: "u_password",
        required: true,
        type: "password",
        icon: "mdi-lock",
      },
    ],
    fields: {
      u_username: "",
      u_password: "",
    },
  }),
  methods: {
    validateRules(field) {
      if (field.required) {
        return [(v) => !!v || `${field.label} harus diisi`];
      }
    },
  },
};
</script>

<style scoped>
.btn-text:hover {
  color: white !important;
}
.login {
  height: 92vh;
}

.login-container {
  width: 50% !important;
  align-self: center;
}

@media only screen and (max-width: 962px) {
  .card-login {
    width: 700px!important;
  }
}

@media only screen and (max-width: 745px) {
  .image-login {
    display: none;
  }

  .card-login {
    flex-direction: column!important;
    margin: 2rem;
  }

  .login-container {
    width: 100%!important;
  }
  
  .welcome-text {
    text-align: center;
  }
}
</style>