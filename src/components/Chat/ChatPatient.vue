<template>
  <div>
    <v-row>
      <v-col cols="12" md="8">
        <div>
          <v-container class="header d-flex justify-space-between align-center">
            <div class="d-flex">
              <img
                src="../../assets/images/profile.png"
                width="50px"
                height="50px"
                alt=""
              />
              <div class="d-flex flex-column ml-2 grey--text text--lighten-3">
                <h4>Mentor</h4>
                <p>Online</p>
              </div>
            </div>
            <h4 class="grey--text text--lighten-3">AKHIRI</h4>
          </v-container>
          <v-card
            class="chatSection"
            :height="`${$vuetify.breakpoint.mdAndUp ? 300 : 200} `"
          >
            <v-container class="d-flex justify-center">
              <v-card :width="`${$vuetify.breakpoint.mdAndUp ? 50 : 100} %`">
                <div class="d-flex align-center">
                  <img src="../../assets/logo.png" width="50px" alt="" />
                  <h5 class="greeting">Selamat Datang di Teman Cerita!</h5>
                </div>
                <hr />
                <p class="greeting">
                  Sekarang kamu dapat menceritakan masalah mu disini
                </p>
              </v-card>
            </v-container>
          </v-card>
          <div class="header">
            <v-container class="d-flex justify-center">
              <v-card
                class="rounded-pill sendMessage d-flex justify-space-between"
                width="50%"
              >
                <v-card-text> Kirim Pesan </v-card-text>
                <v-icon>mdi-send</v-icon>
              </v-card>
            </v-container>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="4">
        <v-card
          :height="`${$vuetify.breakpoint.mdAndUp ? 460 : 100} `"
          class="d-flex flex-column align-center justify-center infoMentor"
        >
          <h2 class="text-center">Informasi</h2>
          <img
            class="ma-5"
            width="100px"
            src="../../assets/images/profile.png"
            alt=""
          />
          <h2 class="text-center">Nama Mentor</h2>
          <p class="text-center">Psikolog</p>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "ChatPatient",
};
</script>

<style scoped>
.header {
  background-color: #ff50a3;
}
.greeting {
  font-size: 18px;
  line-height: 22.68px;
  font-weight: 400;
  color: #616161;
}
.sendMessage {
  background-color: grey;
}
@media only screen and (max-width: 700px) {
  .infoMentor {
    display: none !important;
  }
}
</style>