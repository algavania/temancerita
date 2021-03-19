<template>
  <v-container class="mt-5">
    <v-card elevation="2">
      <v-row>
        <v-col cols="12" md="9">
          <v-img
            :width="`${$vuetify.breakpoint.mdAndUp ? 150 : 80}`"
            :height="`${$vuetify.breakpoint.mdAndUp ? 150 : 80}`"
            class="rounded-circle"
            style="margin-top: -53px; margin-left: 26px"
            src="../../assets/images/home/erich.jpg"
          ></v-img>
          <v-card-title>{{name}} </v-card-title>
          <v-card-text class="mt-n5">{{email}} </v-card-text>
          <v-card-text class="mt-n3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit,
            laudantium.
          </v-card-text>
        </v-col>
        <v-col>
          <v-btn outlined color="red" class="mt-4 mx-3" style="float: right;">Logout</v-btn>
          <v-btn outlined color="primary" class="mt-4 mx-3" style="float: right;">Edit Profile</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="d-flex justify-space-around">
          <h4 class="text-consult">Jadwal Konsultasi</h4>
          <h4 class="text-consult">Riwayat Konsultasi</h4>
        </v-col>
      </v-row>
    </v-card>
    <TimeStamp />
  </v-container>
</template>

<script>
import TimeStamp from "./TimeStamp";
export default {
  name: "ProfileCard",
  data: () => ({
    name: "",
    email: ""
  }),
  components: {
    TimeStamp,
  },
  mounted() {
    this.name = localStorage.getItem('name');
    this.email = localStorage.getItem('email');
  }
};
</script>

<style scoped>
.text-consult {
  font-size: 20px;
  color: #1976d2;
}
</style>