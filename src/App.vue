<template>
  <v-app class="myFont">
    <v-main>
      <NavBar />
      <LandingPage />
      <LayananSection />
    </v-main>
  </v-app>
</template>

<script>
import LandingPage from "./components/Home/LandingPage";
import LayananSection from "./components/Home/LayananSection";
import NavBar from "./core/NavBar";

export default {
  name: "App",

  components: {
    NavBar,
    LandingPage,
    LayananSection,
  },

  data: () => ({
    //
  }),
};
</script>
