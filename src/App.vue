<template>
  <v-app class="myFont">
    <v-main>
      <NavBar />
      <LandingPage />
      <LayananSection />
      <Kutipan />
      <Artikel />
      <Footer/>
    </v-main>
  </v-app>
</template>

<script>
import LandingPage from "./components/Home/LandingPage";
import LayananSection from "./components/Home/LayananSection";
import Kutipan from "./components/Home/Kutipan";
import Artikel from "./components/Home/Artikel";
import NavBar from "./core/NavBar";
import Footer from "./core/Footer";

export default {
  name: "App",

  components: {
    NavBar,
    LandingPage,
    LayananSection,
    Kutipan,
    Artikel,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>
