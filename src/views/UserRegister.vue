<template>
  <div class="my-16 py-16 d-flex justify-center align-center">
    <v-card class="d-flex pa-10 card-register" width="900">
      <div class="register-container">
        <v-img
          src="../assets/images/login/image_register.svg"
          class="image-register"
        ></v-img>
      </div>
      <div class="register-container">
        <v-card-text>
          <h1 class="blue--text text--darken-2 font-weight-bold welcome-text">
            Welcome
          </h1>
          <v-form ref="form" v-on:submit.prevent>
            <v-row>
              <v-col cols="12">
                <div>
                  <v-text-field
                    label="Nama Lengkap"
                    v-model="fields.u_nama_lengkap"
                    type="text"
                    prepend-icon="mdi-account"
                    :rules="nameRules"
                    @keyup.enter.native="registerUser"
                  ></v-text-field>

                  <v-text-field
                    label="Email"
                    v-model="fields.u_email"
                    type="email"
                    prepend-icon="mdi-email"
                    :rules="emailRules"
                    @keyup.enter.native="registerUser"
                  ></v-text-field>

                  <v-text-field
                    label="Password"
                    v-model="fields.u_password"
                    prepend-icon="mdi-lock"
                    :rules="passwordRules"
                    :append-icon="show_password ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="show_password = !show_password"
                    :type="show_password ? 'text' : 'password'"
                    @keyup.enter.native="registerUser"
                  ></v-text-field>
                  <!-- 
                  <v-menu
                    v-model="menu"
                    :close-on-content-click="false"
                    transition="scale-transition"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        autocomplete="off"
                        v-bind="attrs"
                        v-on="on"
                        label="Tanggal Lahir"
                        readonly
                        prepend-icon="mdi-calendar-text"
                        :value="formattedDate"
                        :rules="validateRules('Tanggal Lahir')"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      flat
                      v-model="fields.u_tanggal_lahir"
                      locale="id-ID"
                      @input="menu = false"
                    >
                    </v-date-picker>
                  </v-menu>

                  <v-select
                    label="Jenis Kelamin"
                    :items="genders"
                    prepend-icon="mdi-account-box-outline"
                    v-model="fields.u_jenis_kelamin"
                    :rules="validateRules('Jenis Kelamin')"
                  ></v-select> -->
                </div>
              </v-col>
            </v-row>
          </v-form>
          <p class="red--text">{{ error }}</p>
          <v-btn
            width="100%"
            class="pa-5 blue darken-2 text--white btn-text mb-5"
            dark
            @click="registerUser"
            >Register</v-btn
          >
          <span class="body-1"> Sudah punya akun? </span>
          <router-link class="body-1" to="/masuk" style="text-decoration: none">
            Login
          </router-link>
        </v-card-text>
      </div>
    </v-card>
  </div>
</template>

<script>
import moment from "moment";
import axios from "axios";
import { EventBus } from "../event-bus";
moment.locale("id-ID");

export default {
  name: "UserRegister",
  data: () => ({
    show_password: false,
    menu: false,
    error: "",
    genders: [
      { value: "L", text: "Laki-laki" },
      { value: "P", text: "Perempuan" },
    ],
    fields: {
      u_username: "",
      u_password: "",
      u_email: "",
      u_tanggal_lahir: "",
      u_nama_lengkap: "",
      u_jenis_kelamin: "",
      u_foto: "",
      u_deskripsi: "",
      u_role: "1",
    },
    emailRules: [
      (v) => !!v || "Email harus diisi",
      (v) => /.+@.+/.test(v) || "Email tidak valid",
    ],
    nameRules: [
      (v) => !!v || "Nama harus diisi",
      (v) => v.length >= 6 || "Nama setidaknya harus ada 6 karakter",
    ],
    passwordRules: [
      (v) => !!v || "Password harus diisi",
      (v) => v.length >= 6 || "Password setidaknya harus ada 6 karakter",
    ],
  }),
  computed: {
    formattedDate() {
      return this.fields.u_tanggal_lahir
        ? moment(this.fields.u_tanggal_lahir).format("Do MMMM YYYY")
        : "";
    },
  },
  methods: {
    validateRules(label) {
      return [(v) => !!v || `${label} harus diisi`];
    },
    checkRules() {
      return [this.passwordRules];
    },
    async registerUser() {
      if (this.$refs.form.validate()) {
        EventBus.$emit("startLoading");
        await axios
          .post(`${this.$api}/customers`, {
            name: this.fields.u_nama_lengkap,
            email: this.fields.u_email,
            password: this.fields.u_password,
          })
          .then(() => {
            this.error = "";
            this.$refs.form.reset();
          })
          .catch((err) => {
            this.error = err.response.data.message.email[0];
          });
        EventBus.$emit("stopLoading");
      }
    },
  },
};
</script>

<style>
.v-menu__content {
  box-shadow: none !important;
}

.welcome-text {
  font-size: 3rem !important;
  margin-bottom: 2rem;
}

.v-menu--inline {
  display: none;
}

.btn-text:hover {
  color: white !important;
}

.v-date-picker-table .v-btn.v-btn--active {
  color: white !important;
}

.register-container {
  width: 50% !important;
  align-self: center;
}

@media only screen and (max-width: 962px) {
  .card-register {
    width: 700px !important;
  }
}

@media only screen and (max-width: 745px) {
  .image-register {
    display: none;
  }

  .card-register {
    flex-direction: column !important;
    margin: 2rem;
  }

  .register-container {
    width: 100% !important;
  }

  .welcome-text {
    text-align: center;
  }
}

@media only screen and (max-width: 350px) {
  .card-register {
    width: 280px !important;
  }

  .welcome-text {
    font-size: 2rem !important;
  }
}
</style>