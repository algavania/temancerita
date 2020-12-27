<template>
  <v-container>
    <span
      style="font-size: 35px; line-height: 56.7px; text-decoration: underline"
      class="font-weight-black"
      >Kutipan</span
    >
    <v-layout row wrap>
      <v-card
        :height="`${$vuetify.breakpoint.mdAndUp ? 421 : 300}`"
        width="350"
        class="mx-5 my-15"
        v-for="kutipan in KutipanData"
        :key="kutipan.id"
      >
        <v-img
          :width="`${$vuetify.breakpoint.mdAndUp ? 150 : 80}`"
          :height="`${$vuetify.breakpoint.mdAndUp ? 150 : 80}`"
          class="rounded-circle"
          style="margin-top: -53px; margin-left: 26px"
          :src="require(`@/assets/images/${kutipan.image}`)"
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
          name: "Abraham H Maslow",
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
