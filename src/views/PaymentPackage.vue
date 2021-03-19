<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <v-card>
          <v-row>
            <v-col cols="6" md="1" offset-md="1">
              <v-icon>mdi-alarm-panel</v-icon>
            </v-col>
            <v-col cols="6" md="4">
              <p class="title">Detail Pembayaran</p>
            </v-col>
          </v-row>
          <hr />
          <v-container>
            <p class="subTitle">Nama pengguna</p>
            <p>{{ name }}</p>
            <p class="subTitle">Nama Produk</p>
            <div class="d-flex Paket">
              <p>Paket Kerja</p>
            </div>
            <p class="subTitle">Durasi Paket</p>
            <p>20 Maret - 20 Juni 2021</p>
          </v-container>
        </v-card>
        <v-card>
          <v-row>
            <v-col cols="6" md="1" offset-md="1">
              <v-icon>mdi-wallet</v-icon>
            </v-col>
            <v-col cols="6" md="5">
              <p class="title">Metode Pembayaran</p>
            </v-col>
          </v-row>
          <hr />
          <v-container>
            <p class="subTitle">Tranfer Lewat Bank</p>
          </v-container>
          <v-container class="d-flex justify-space-around">
            <div class="d-flex align-center">
              <v-checkbox v-model="value" value="value"> </v-checkbox>
              <img
                src="../assets/images/Pemabayaran/Bank_Mandiri.png"
                alt=""
                width="100px"
              />
            </div>
            <div class="d-flex align-center">
              <v-checkbox v-model="value" value="value"> </v-checkbox>
              <img
                src="../assets/images/Pemabayaran/Bank_BNI.png"
                alt=""
                width="100px"
              />
            </div>
            <div class="d-flex align-center">
              <v-checkbox v-model="value" value="value"> </v-checkbox>
              <img
                src="../assets/images/Pemabayaran/Logo_BRI.png"
                alt=""
                width="100px"
              />
            </div>
          </v-container>
          <v-container>
            <p class="subTitle">E-WALLET</p>
          </v-container>
          <v-container class="d-flex justify-space-around">
            <div class="d-flex align-center">
              <v-checkbox v-model="value" value="value"> </v-checkbox>
              <img
                src="../assets/images/Pemabayaran/ovo.png"
                alt=""
                width="100px"
              />
            </div>
            <div class="d-flex align-center">
              <v-checkbox v-model="value" value="value"> </v-checkbox>
              <img
                src="../assets/images/Pemabayaran/gopay.png"
                alt=""
                width="100px"
              />
            </div>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card>
          <v-row>
            <v-col cols="6" md="1" offset-md="1">
              <v-icon>mdi-card-text</v-icon>
            </v-col>
            <v-col cols="6" md="4">
              <p class="title">Total Pembayaran</p>
            </v-col>
          </v-row>
          <hr />
          <v-container>
            <p class="subTitle">Bundle</p>
            <div class="d-flex justify-space-between">
              <p>Total</p>
              <p>Rp 150.000</p>
            </div>
            <v-btn width="100%" color="primary" to="subscribe">Pesan Sekarang</v-btn>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "PaymentPackage",
  data: () => ({
    name: ""
  }),
  mounted() {
    this.name = localStorage.getItem('name');
  }
};
</script>

<style scoped>
.namaPaket {
  color: #4198cd;
}
.title {
  font-size: 22px;
  font-weight: bold;
}
.subTitle {
  font-size: 18px;
  font-weight: 500;
}
</style>