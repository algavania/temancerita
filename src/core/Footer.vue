<template>
  <v-footer
    :height="$vuetify.breakpoint.mdAndUp ? 170 : 100"
    color="blue lighten-2"
    padless
  >
    <v-layout
      column
      class="text-center white--text"
      :style="`font-size: ${$vuetify.breakpoint.mdAndUp ? 18 : 10} px`"
    >
      <span>Copyright &copy; 2020, Universe.</span>
      <span>Kudus, Jawa Tengah,</span>
      <span>Indonesia.</span>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
</style>
