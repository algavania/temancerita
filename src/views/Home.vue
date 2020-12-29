<template>
  <div class="home">
    <LandingPage />
    <LayananSection />
    <Kutipan />
    <Artikel />
  </div>
</template>

<script>
// @ is an alias to /src
import LandingPage from "../components/Home/LandingPage";
import LayananSection from "../components/Home/LayananSection";
import Kutipan from "../components/Home/Kutipan";
import Artikel from "../components/Home/Artikel";

export default {
  name: "Home",
  components: {
    LandingPage,
    LayananSection,
    Kutipan,
    Artikel,
  },
};
</script>