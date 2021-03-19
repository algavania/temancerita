<template>
  <v-app class="myFont">
    <v-main>
      <NavBar />
      <router-view />
      <ChatPatient />
      <PacketPage />
      <PaymentPackage />
      <PembayaranRekening />
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./core/NavBar";
import ChatPatient from "./components/Chat/ChatPatient";
import PacketPage from "./views/PacketPage";
import PaymentPackage from "./views/PaymentPackage";
import PembayaranRekening from "./views/PembayaranRekening";
import Footer from "./core/Footer";

export default {
  name: "App",

  components: {
    NavBar,
    Footer,
    ChatPatient,
    PacketPage,
    PaymentPackage,
    PembayaranRekening,
  },

  data: () => ({
    //
  }),
};
</script>