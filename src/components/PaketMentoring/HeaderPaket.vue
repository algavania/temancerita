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
            width="400"
            src="../../assets/images/home/image_cover.png"
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
</style>