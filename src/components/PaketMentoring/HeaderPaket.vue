<template>
  <div class="header">
    <v-container>
      <v-row>
        <v-col cols="12" md="9">
          <p class="prologue">Ngapain Aja Sih Mentoring Itu?</p>
          <ul>
            <li>
              <p class="benefitText">
                Kamu dapat menceritakan masalah tentang karirmu bareng mentor
                professional
              </p>
            </li>
            <li>
              <p class="benefitText">
                kamu bakal dapetin saran dari mentor dan selesain masalah bereng
              </p>
            </li>
          </ul>
        </v-col>
        <v-col cols="12" md="3">
          <img
            class="imgDecor"
            width="400"
            src="../../assets/images/Paket/headerpaketimgpink.svg"
            alt=""
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "HeaderPaket",
};
</script>

<style scoped>
.prologue {
  display: inline-block;
  width: 400px;
  font-size: 48px;
}
.benefitText {
  font-size: 24px;
}
.header {
  background-color: #ff7bb9;
  color: whitesmoke;
}

@media only screen and (max-width: 1080px) {
  .prologue {
    display: inline-block;
    width: 600px;
    font-size: 20px;
  }
  .benefitText {
    font-size: 16px;
  }
  .imgDecor {
    display: none;
  }
}
</style>