<template>
  <v-container>
    <v-row>
      <v-col
        class="d-flex flex-column align-center justify-center"
        cols="12"
        sm="4"
      >
        <img
          class="imgbenefit d-flex align-center justify-center"
          width="330px"
          src="../../assets/images/Paket/benefitimg1.svg"
          alt=""
        />
        <p class="benefitTitle text-center my-3">Privasi</p>
        <p class="benefitDesc text-center">
          Mencari bantuan profesional untuk pendampingan perencanaan karir dapat
          menjadi tantangan. Di Teman Cerita kami menjaga privasi, informasi &
          pertukaran Anda. Kami tidak membagikan atau menjual data pengguna kami
          dengan pihak ketiga.
        </p>
      </v-col>
      <v-col
        class="d-flex flex-column align-center justify-center"
        cols="12"
        sm="4"
      >
        <img
          class="imgbenefit"
          width="280px"
          src="../../assets/images/Paket/benefitimg2.svg"
          alt=""
        />
        <p class="benefitTitle text-center my-3">Kualitas</p>
        <p class="benefitDesc text-center">
          Tim kami terdiri dari para ahli terkenal di bidangnya yang
          mengkhususkan mengatasi masalah perkembangan karirmu.
        </p>
      </v-col>
      <v-col
        class="d-flex flex-column align-center justify-center"
        cols="12"
        sm="4"
      >
        <img
          width="360px"
          class="imgbenefit"
          src="../../assets/images/Paket/benefitimg3.svg"
          alt=""
        />
        <p class="benefitTitle text-center my-3">Kenyamanan</p>
        <p class="benefitDesc text-center">
          Teman Cerita kami rancang dengan mengingat setiap individu. Jadwal
          fleksibel kami membantu Anda terhubung dengan Pakar Perancangan bisnis
          kami sesuai dengan kenyamanan Anda. Tim konselor terkemuka kami yang
          berdedikasi tersedia 24 * 7 untuk Anda.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "BenefitPaket",
};
</script>

<style scoped>
.benefitTitle {
  font-size: 28px;
  font-weight: bold;
}
@media only screen and (max-width: 1080px) {
  .imgbenefit {
    width: 100px;
  }
  .benefitTitle {
    font-size: 18px;
  }
  .benefitDesc {
    font-size: 12px;
  }
}
</style>