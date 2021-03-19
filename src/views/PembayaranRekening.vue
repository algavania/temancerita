<template>
  <v-container class="my-16 py-16">
    <v-card class="my-16">
      <img class="ma-5" src="../assets/images/Pemabayaran/Bank_Mandiri.png" alt="" />\
      <hr />
      <v-container>
        <h2>Silakan Transfer Pembayaran ke Rekening:</h2>
        <h1 class="text-center noRek ma-10">000917198012134</h1>
        <div class="d-flex justify-space-between">
          <p>Total</p>
          <p class="noRek">Rp150.000</p>
        </div>
        <v-btn color="primary" width="100%">Konfirmasi Pembayaran</v-btn>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "PembayaranRekening",
};
</script>

<style scoped>
.noRek {
  color: #4198cd;
}
</style>