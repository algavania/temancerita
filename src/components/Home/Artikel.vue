<template>
  <v-container>
    <span style="font-size: 35px; line-height: 56.7px" class="font-weight-black"
      >Artikel</span
    >
    <v-layout
      row
      wrap
      v-for="article in articleData"
      :key="article.id"
      class="my-6"
    >
      <v-flex md3 xs3>
        <v-img
          class="rounded-lg"
          src="../../assets/images/home/sheldon.jpg"
          :style="`margin-left:${($vuetify.breakpoint.xsonly = 20)}px;`"
          :height="`${$vuetify.breakpoint.mdAndUp ? 178 : 80}`"
        ></v-img>
      </v-flex>
      <v-flex md4 xs6>
        <v-layout column wrap class="mx-5">
          <span
            class="font-weight-black"
            :style="`font-size:${$vuetify.breakpoint.mdAndUp ? 36 : 20}px;`"
            >Contoh Artikel</span
          >
          <span>Lorem ipsum dolor sit amet </span>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Article",
  data() {
    return {
      articleData: [
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
</style>
