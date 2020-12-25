<template>
  <div>
    <div class="div-container">
      <div class="cover-text">
        <h1>Bersama Membangun Masa Depan</h1>
        <p>
          Teman Cerita percaya bahwa setiap orang berhak memiliki pikiran yang
          sehat dan bahagia. Melalui situs ini, kami berupaya membantu orang
          yang membutuhkan dampingan perencanaan secara psikologis dan juga
          dampingan perencanaan karir oleh mentor. Semua ini dilakukan untuk
          mewujudkan generasi dengan masa depan yang lebih indah.
        </p>
      </div>
    </div>
    <div class="bottom-bg">
      <div class="btn-landing">
        <v-btn rounded class="py-5">
          <span class="text-button">Yuk Lihat Selengkapnya</span>
          <v-icon right> mdi-arrow-right </v-icon>
        </v-btn>
      </div>
      <v-img
        class="image-bg"
        max-width="800"
        src="../../assets/images/image_cover.png"
      ></v-img>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
};
</script>

<style>
.cover-text {
  width: 40%;
}

.cover-text p {
  margin-top: 1rem;
  color: #616161;
  font-size: 25px;
}

.div-container {
  width: 90%;
  margin: 5rem auto 0 auto;
}

.bottom-bg {
  position: relative;
  background-image: url("../../assets/images/bg_cover.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 25rem;
}

.image-bg {
  position: absolute;
  left: 50rem;
  bottom: 20rem;
}

.btn-landing {
  position: absolute;
  left: 5rem;
  bottom: 5rem;
  z-index: 100;
}

.text-button {
  padding: 2.5rem;
}

.theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
  background-color: white;
}

@media only screen and (max-width: 1617px) {
  .image-bg {
    left: 40rem;
  }
}

@media only screen and (max-width: 1461px) {
  .image-bg {
    left: 35rem;
  }
}

@media only screen and (max-width: 1382px) {
  .image-bg {
    width: 650px !important;
    bottom: 15rem;
  }
}

@media only screen and (max-width: 1237px) {
  .image-bg {
    width: 550px !important;
    left: 32rem;
  }
}

@media only screen and (max-width: 1087px) {
  .image-bg {
    display: none !important;
  }

  .cover-text {
    width: 80%;
    margin: auto;
    text-align: center;
  }

  .btn-landing {
    position: absolute;
    bottom: 2.5rem;
    left: 0;
    right: 0;
    text-align: center;
    line-height: 50px;
  }

  .bottom-bg {
    height: 15rem;
  }
}

@media only screen and (max-width: 700px) {
  .cover-text p {
  font-size: 20px;
}
}
</style>