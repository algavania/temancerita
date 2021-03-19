<template>
  <v-container>
    <v-card>
      <img src="../assets/images/Pemabayaran/Bank_Mandiri.png" alt="" />\
      <hr />
      <v-container>
        <h2>Silakan Transfer Pembayaran ke Rekening:</h2>
        <h1 class="text-center noRek ma-10">00091719801XXXX</h1>
        <div class="d-flex justify-space-between">
          <p>Total</p>
          <p class="noRek">Rp 150.000</p>
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