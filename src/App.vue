<template>
  <v-app class="myFont">
    <v-main>
      <NavBar />
      <router-view/>
      <Footer/>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./core/NavBar";
import Footer from "./core/Footer";

export default {
  name: "App",

  components: {
    NavBar,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>