<template>
  <div>
    <div
      class="d-flex justify-center ma-5 ma-md-16 ma-xl-16 ma-lg-16"
      v-for="item in items"
      :key="item.title"
      :class="item.title == 'Konseling' ? 'flex-row-reverse' : ''"
    >
      <div>
        <v-img
          :src="require(`../../assets/images/home/${item.image}`)"
          class="items image"
        ></v-img>
      </div>
      <v-card class="items mx-0 mx-sm-0 mx-md-16 mx-lg-16 mx-xl-16 pb-10">
        <v-card-text>
          <p class="display-1 text--primary text-center mt-5">
            {{ item.title }}
          </p>
          <p class="text-center text-h6">
            {{ item.caption }}
          </p>
        </v-card-text>
        <v-card-actions class="d-flex justify-center">
          <v-btn color="blue darken-2" dark class="pa-5">
            <span class="btn-text">Cari Tahu Lebih Lanjut</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "LayananSection",
  data: () => ({
    items: [
      {
        title: "Mentoring",
        image: "mentoring.png",
        caption:
          "Terjebak dengan kubangan kecemasan akan karirmu? Rencanakan bareng aja dengan mentor di Teman Cerita!",
      },
      {
        title: "Konseling",
        image: "konseling.png",
        caption:
          "Tertekan karena banyak tugas? Bingung dengan masalah personal? Keluh kesahkan semuanya di sini!",
      },
    ],
  }),
};
</script>
<style scoped>
.items {
  width: 500px !important;
}

.btn-text {
  color: white !important;
}

@media only screen and (max-width: 1160px) {
  .image {
    display: none!important;
  }
}

@media only screen and (max-width: 750px) {
  .items {
    width: 100%!important;
  }
}
</style>