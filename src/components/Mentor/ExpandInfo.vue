<template>
  <v-row justify="center" no-gutters>
    <v-expansion-panels accordion>
      <v-expansion-panel class="grey lighten-4">
        <v-expansion-panel-header>
          <div>
            <v-row class="d-flex flex-row">
              <v-col cols="12" md="3">
                <v-img class="image" src="../../assets/images/expandfoto.svg">
                </v-img>
              </v-col>
              <v-col class="d-flex flex-column mx-5" cols="12" md="6">
                <span class="title"
                  >Konsultasikan Dengan Mentor Terpercaya</span
                >
                <span class="step"
                  >1. Pilih mentor yang ingin kamu ajak bercerita</span
                >
                <span class="step"
                  >2. Mentor akan segera menerima permintaan konsultasimu</span
                >
                <span class="step"
                  >3. Silakan bercerita dan temukan solusi atas masalahmu</span
                >
              </v-col>
            </v-row>
          </div>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div class="expand">
            <v-row class="d-flex justify-center" no-gutters>
              <v-col cols="12" md="10">
                <span class="fitur">Kami Dapat Memastikan : </span>
              </v-col>
            </v-row>

            <v-row class="d-flex justify-center flex-row" no-gutters>
              <v-col cols="12" md="8">
                <span class="fitur"
                  >1. Mendapatkan penjelasan yang penjelasan yang logis dan
                  akurat</span
                >
              </v-col>
            </v-row>
            <v-row class="d-flex justify-center flex-row" no-gutters>
              <v-col cols="12" md="8">
                <span class="fitur">2. Privasi kamu terjaga</span>
              </v-col>
            </v-row>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</template>

<script>
export default {
  name: "ExpandInfo",
};
</script>

<style scoped>
.image {
  width: 50%;
  margin-left: 150px;
}
.title {
  font-weight: bolder;
  font-size: 24px;
  line-height: 30.24px;
}
.step {
  font-size: 18px;
  line-height: 22.68px;
}
.fitur {
  font-size: 14px;
}
@media only screen and (max-width: 700px) {
  .image {
    display: none !important;
  }
}
.title {
  font-weight: bolder;
  font-size: 18px;
}
.step {
  font-size: 14px;
  line-height: 22.68px;
}
.expand {
  margin-left: 20px;
}
</style>