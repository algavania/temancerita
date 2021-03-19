<template>
  <v-container>
    <p class="titleSection text-center">Paket Mentoring</p>
    <v-row>
      <v-col cols="12" md="4" offset-md="2">
        <v-card>
          <v-container>
            <div class="d-flex Paket">
              <p>Paket <span class="blue--text">Kerja</span></p>
            </div>
            <p class="hargaPaketBlue">Rp 150.000</p>
            <hr class="my-5" />
            <ul class="paketSpec">
              <li>
                <p>Mendapatkan akses bertanya dengan mentor maksimal 3 sesi</p>
              </li>
              <li>
                <p>Dapat bertanya dan memberi solusi bersama melalui forum</p>
              </li>
              <li>
                <p>Dapat di akses selama 1 bulan</p>
              </li>
            </ul>
          </v-container>
          <v-card-text>
            <center><v-btn dark color="blue" to="payment">Langganan</v-btn></center>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card>
          <v-container>
            <div class="d-flex Paket">
              <p>Paket <span class="pink--text">Sukses</span></p>
            </div>
            <p class="hargaPaketPink">Rp 250.000</p>
            <hr class="my-5" />
            <ul class="paketSpec">
              <li>
                <p>Mendapatkan akses bertanya dengan mentor maksimal 5 sesi</p>
              </li>
              <li>
                <p>Dapat bertanya dan memberi solusi bersama melalui forum</p>
              </li>
              <li>
                <p>Dapat di akses selama 6 bulan</p>
              </li>
            </ul>
          </v-container>
          <v-card-text>
            <center><v-btn dark color="pink" to="payment">Langganan</v-btn></center>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <hr />
  </v-container>
</template>

<script>
export default {
  name: "DaftarPaket",
};
</script>

<style scoped>
.titleSection {
  font-size: 28px;
  font-weight: bold;
}

.Paket {
  font-size: 28px;
}
/* Blue */
.namaPaketBlue {
  color: #4198cd;
}
.hargaPaketBlue {
  font-size: 28px;
  font-weight: bold;
  color: #4198cd;
}

/* Pink */
.namaPaketPink {
  color: #ff50a3;
}
.hargaPaketPink {
  font-size: 28px;
  font-weight: bold;
  color: #ff50a3;
}

@media only screen and (max-width: 1080px) {
  .titleSection {
    font-size: 18px;
  }
  .Paket {
    font-size: 18px;
  }
  .hargaPaketBlue {
    font-size: 18px;
  }
  .hargaPaketPink {
    font-size: 18px;
  }
  .paketSpec {
    font-size: 14px;
  }
}
</style>