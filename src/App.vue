<template>
  <v-app class="myFont">
    <loading
      :active.sync="loading"
      :can-cancel="false"
      :is-full-page="fullPage"
      :color="`#2196F3`"
      :loader="`dots`"
      :lock-scroll="true"
    ></loading>
    <v-main>
      <NavBar :hasLogin="hasLogin" />
      <router-view />
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./core/NavBar";
import Footer from "./core/Footer";
import { EventBus } from "./event-bus";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
    Loading
  },
  data: () => ({
    hasLogin: false,
    loading: false,
  }),
  created() {
    if (localStorage.getItem('token') != null) this.hasLogin = true;
    EventBus.$on("startLoading", () => {
      this.loading = true;
    });
    EventBus.$on("stopLoading", () => {
      this.loading = false;
    });
    EventBus.$on("setLogin", (login) => {
      this.hasLogin = login;
    });
  },
};
</script>