<template>
  <div>
    <v-container v-if="$vuetify.breakpoint.mdAndUp">
      <span
        style="font-size: 35px; line-height: 56.7px; text-decoration: underline"
        class="font-weight-black"
        >Kutipan</span
      >
      <v-layout row wrap justify-center>
        <v-card
          :height="`${$vuetify.breakpoint.mdAndUp ? 421 : 300}`"
          width="350"
          :class="`mx-5 my-${$vuetify.breakpoint.mdAndUp ? 15 : 12}`"
          v-for="kutipan in KutipanData"
          :key="kutipan.id"
        >
          <v-img
            :width="`${$vuetify.breakpoint.mdAndUp ? 150 : 80}`"
            :height="`${$vuetify.breakpoint.mdAndUp ? 150 : 80}`"
            class="rounded-circle"
            style="margin-top: -53px; margin-left: 26px"
            :src="require(`@/assets/images/home/${kutipan.image}`)"
          ></v-img>
          <v-card-text
            class="text-center"
            style="font-size: 24px; line-height: 30.24px"
          >
            {{ kutipan.quote }}
          </v-card-text>
          <v-card-text
            class="d-flex justify-center font-weight-black text-center"
            style="color: black; font-size: 30px; line-height: 37.8px"
          >
            <p>{{ kutipan.name }}</p>
          </v-card-text>
        </v-card>
      </v-layout>
    </v-container>
    <div v-else>
      <v-container>
        <span
          style="
            font-size: 35px;
            line-height: 56.7px;
            text-decoration: underline;
          "
          class="font-weight-black"
          >Kutipan</span
        >
      </v-container>

      <v-carousel>
        <v-carousel-item v-for="kutipan in KutipanData" :key="kutipan.id">
          <v-sheet height="100%" color="white">
            <v-row class="fill-height" align="center" justify="center">
              <v-card
                :height="`${$vuetify.breakpoint.mdAndUp ? 421 : 300}`"
                width="350"
                color="white"
                :class="`mx-5 my-${$vuetify.breakpoint.mdAndUp ? 15 : 12}`"
              >
                <v-img
                  :width="`${$vuetify.breakpoint.mdAndUp ? 150 : 80}`"
                  :height="`${$vuetify.breakpoint.mdAndUp ? 150 : 80}`"
                  class="rounded-circle"
                  style="margin-top: -53px; margin-left: 26px"
                  :src="require(`@/assets/images/home/${kutipan.image}`)"
                ></v-img>
                <v-card-text
                  class="text-center black--text"
                  :style="`font-size: ${
                    $vuetify.breakpoint.mdAndUp ? 24 : 18
                  }px; line-height: 30.24px`"
                >
                  {{ kutipan.quote }}
                </v-card-text>
                <v-card-text
                  class="d-flex justify-center font-weight-black text-center"
                  :style="`color: black; font-size: ${
                    $vuetify.breakpoint.mdAndUp ? 30 : 25
                  }px; line-height: 37.8px`"
                >
                  <p>{{ kutipan.name }}</p>
                </v-card-text>
              </v-card>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "Kutipan",
  data() {
    return {
      KutipanData: [
        {
          id: 1,
          quote:
            "“Jika Anda tidak pernah mengeluarkan potensi Anda sesungguhnya, Anda akan tidak bahagia seumur hidup Anda.”",
          name: "Abraham Maslow",
          image: "mashlow.jpg",
        },
        {
          id: 2,
          quote:
            "“Bersatu dengan orang lain adalah kebutuhan terdalam dari setiap manusia.”",
          name: "Erich Fromm",
          image: "erich.jpg",
        },
        {
          id: 3,
          quote:
            "“Anda perlu mendengarkan tubuh Anda karena tubuh Anda mendengarkan Anda”",
          name: "Phil McGraw",
          image: "phil 1.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>
