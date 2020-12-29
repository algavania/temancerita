<template>
  <v-container>
    <center>
      <v-text-field
        prepend-inner-icon="mdi-magnify"
        class="d-flex text-center searchbar mt-5"
        placeholder="Cari Mentor..."
        outlined
      ></v-text-field>
    </center>
  </v-container>
</template>

<script>
export default {
  name: "SearchMentor",
};
</script>

<style scoped>
.searchbar {
  width: 50% !important;
}
@media only screen and (max-width: 700px) {
  .searchbar {
    width: 90% !important;
  }
}
</style>