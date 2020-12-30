<template>
  <v-container
    :style="`margin-left:${$vuetify.breakpoint.mdAndUp ? 130 : 0}px`"
  >
    <v-row>
      <v-col cols="12" md="4" class="d-flex title justify-space-between">
        <span>Beranda</span>
        <span>Kesehatan Mental</span>
        <span>Karir</span>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="9">
        <v-row>
          <v-col cols="12" md="9">
            <span class="sub-title">YANG BISA KAMU BACA</span>
          </v-col>
        </v-row>
        <div v-for="artikel in articledata" :key="artikel.id">
          <v-row>
            <v-col cols="4" md="4">
              <v-img class="image" src="../assets/images/erich.jpg"></v-img>
            </v-col>
            <v-col class="d-flex flex-column" cols="8" md="5">
              <span class="pink--text text-accent-1">KESEHATAN MENTAL</span>
              <span class="titlearticle"
                >Mengenal Gangguan Psikologis Pada Erich</span
              >
              <span
                :style="`font-size: ${
                  $vuetify.breakpoint.smAndDown ? 14 : 16
                }px;`"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas incidunt, tempora delectus iste nemo distinctio.</span
              >
            </v-col>
          </v-row>
        </div>
      </v-col>
      <v-col cols="12" md="3">
        <span class="sub-title">ARTIKEL TERBARU </span>
        <hr />
        <v-col class="d-flex flex-column">
          <span class="pink--text text-accent-1">KESEHATAN MENTAL</span>
          <span class="my-3"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            veniam!</span
          >
          <span class="author">Diposting oleh st1wiw 20/12/2020</span>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ArticlePage",
  data() {
    return {
      articledata: [
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
.title {
  font-size: 24px;
  font-weight: bold;
  line-height: 30.24px;
}
.sub-title {
  font-size: 24px;
}
.titlearticle {
  font-weight: bolder;
}
.author {
  font-size: 14px;
  font-weight: 400;
  color: #757575;
}
@media only screen and (max-width: 700px) {
  .titlearticle {
    font-weight: bolder;
    font-size: 14px;
  }
}
</style>