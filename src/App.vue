<template>
  <v-app class="myFont">
    <v-main>
      <NavBar />
      <router-view />
      <ChatPatient />
      <HeaderPaket />
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./core/NavBar";
import ChatPatient from "./components/Chat/ChatPatient";
import HeaderPaket from "./components/PaketMentoring/HeaderPaket";
import Footer from "./core/Footer";

export default {
  name: "App",

  components: {
    NavBar,
    Footer,
    ChatPatient,
    HeaderPaket,
  },

  data: () => ({
    //
  }),
};
</script>