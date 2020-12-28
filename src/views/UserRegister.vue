<template>
  <div class="register d-flex justify-center align-center">
    <v-card class="d-flex pa-10 card-register" width="900">
      <div class="register-container">
        <v-img
          src="../assets/images/login/image_register.svg"
          class="image-register"
        ></v-img>
      </div>
      <div class="register-container">
        <v-card-text>
          <h1
            class="display-2 blue--text text--darken-2 font-weight-bold welcome-text"
          >
            Welcome
          </h1>
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
                    v-if="
                      form.label != 'Tanggal Lahir' &&
                      form.label != 'Jenis Kelamin'
                    "
                  ></v-text-field>

                  <v-menu
                    v-if="form.label == 'Tanggal Lahir'"
                    v-model="menu"
                    :close-on-content-click="false"
                    transition="scale-transition"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        autocomplete="off"
                        v-bind="attrs"
                        v-on="on"
                        :label="form.label"
                        readonly
                        :prepend-icon="form.icon"
                        :value="formattedDate"
                        :rules="validateRules(form)"
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
                    v-if="form.label == 'Jenis Kelamin'"
                    :items="genders"
                    :prepend-icon="form.icon"
                    v-model="fields[form.model]"
                    :label="form.label"
                    :rules="validateRules(form)"
                  ></v-select>
                </div>
              </v-col>
            </v-row>
          </v-form>
          <v-btn
            width="100%"
            class="pa-5 blue darken-2 text--white btn-text mb-5"
            dark
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
moment.locale("id-ID");

export default {
  name: "UserRegister",
  data: () => ({
    menu: false,
    genders: [
      { value: "L", text: "Laki-laki" },
      { value: "P", text: "Perempuan" },
    ],
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
      {
        label: "Nama Lengkap",
        model: "u_nama_lengkap",
        required: true,
        type: "text",
        icon: "mdi-account",
      },
      {
        label: "Tanggal Lahir",
        model: "u_tanggal_lahir",
        required: true,
        type: "text",
        icon: "mdi-calendar-text",
      },
      {
        label: "Jenis Kelamin",
        model: "u_jenis_kelamin",
        required: true,
        type: "text",
        icon: "mdi-account-box-outline",
      },
      {
        label: "Email",
        model: "u_email",
        required: true,
        type: "email",
        icon: "mdi-email",
      },
    ],
    fields: {
      u_username: "",
      u_password: "",
      u_email: "",
      u_tanggal_lahir: "",
      u_nama_lengkap: "",
      u_jenis_kelamin: "",
    },
  }),
  computed: {
    formattedDate() {
      return this.fields.u_tanggal_lahir
        ? moment(this.fields.u_tanggal_lahir).format("Do MMMM YYYY")
        : "";
    },
  },
  methods: {
    validateRules(field) {
      if (field.required) {
        return [(v) => !!v || `${field.label} harus diisi`];
      }
    },
  },
};
</script>

<style>
.v-menu__content {
  box-shadow: none !important;
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

.register {
  height: 92vh;
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
</style>