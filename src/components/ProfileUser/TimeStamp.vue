<template>
  <div>
    <v-container>
      <h3>Monday,12 Desember 2077</h3>
      <v-card
        v-for="konsul in datakonsultasi"
        :key="konsul.id"
        style="margin-bottom: 20px"
      >
        <v-row>
          <div class="before-time"></div>
          <v-col cols="3" md="1">
            <h4 class="time">24.01 AM</h4>
          </v-col>
          <v-timeline>
            <v-icon class="mt-8" color="success">mdi-check-circle</v-icon>
          </v-timeline>
          <v-col cols="5" md="5">
            <h3>Dr.Soegi</h3>
            <p>Psikolog</p>
            <p>Kesehatan Mental</p>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "TimeStamp",
  data() {
    return {
      datakonsultasi: [
        {
          id: 1,
        },
        {
          id: 2,
        },
      ],
    };
  },
};
</script>

<style scoped>
.before-time {
  width: 5px;
  margin-top: 15px;
  margin-left: 20px;
  height: 100px;
  background-color: blue;
}
</style>