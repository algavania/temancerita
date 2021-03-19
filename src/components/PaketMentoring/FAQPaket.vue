<template>
  <v-container>
    <hr />
    <v-card>
      <p class="question text-center">Bagaimana Sih Alur Mentoringnya?</p>
      <v-row>
        <v-col
          class="d-flex flex-column step justify-center"
          cols="12"
          md="7"
          offset-md="2"
        >
          <p>1. Buat akun dulu dong</p>
          <p>2. Pilih paket</p>
          <p>3. Selesaikan pembayaran</p>
          <p>4. Pilih Mentor dan atur jadwal</p>
          <p>5. Ceritakan masalahmu</p>
          <p>6. Jika perlu, kamu bisa berdiskusi di Forum</p>
        </v-col>
        <v-col cols="12" md="1">
          <img src="../../assets/images/Paket/imgFAQ.svg" alt="" />
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "FAQPaket",
};
</script>

<style scoped>
.question {
  font-size: 28px;
  font-weight: bold;
}
.step {
  font-size: 18px;
  font-weight: bold;
}

@media only screen and (max-width: 1080px) {
  img {
    display: none;
  }
  .question {
    font-size: 18px;
  }
  .step {
    font-size: 14px;
  }
}
</style>