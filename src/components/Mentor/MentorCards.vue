<template>
  <v-container>
    <v-row>
      <v-col v-for="mentor in dataMentor" :key="mentor.id" cols="12" md="6">
        <v-card class="pa-2">
          <v-col class="d-flex flex-row" cols="12" md="3">
            <div>
              <v-badge
                bordered
                bottom
                :color="
                  mentor.isOnline == true ? 'green accent-3' : 'red accent-4'
                "
                dot
                offset-x="15"
                offset-y="18"
              >
                <v-img class="image" src="../../assets/images/profile.png">
                </v-img>
              </v-badge>
            </div>

            <div class="d-flex flex-column mx-5">
              <span class="mentor">Mentor</span>
              <span class="role">Konselor</span>
              <span class="role grey--text text--lighten-1">{{
                mentor.keterangan
              }}</span>
            </div>
          </v-col>
          <v-row no-gutters>
            <v-col class="d-flex justify-end">
              <v-btn
                depressed
                class="font-weight-regular"
                :disabled="mentor.isOnline == true ? null : ''"
                :class="{ 'is-online': mentor.isOnline == true }"
                to="chat"
                >CHAT</v-btn
              >
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "MovieCards",
  data() {
    return {
      dataMentor: [
        {
          id: 1,
          keterangan: "Online",
          isOnline: true,
        },
        {
          id: 2,
          keterangan: "Offline",
          isOnline: false,
        },
        {
          id: 3,
          keterangan: "Online",
          isOnline: true,
        },
        {
          id: 4,
          keterangan: "Online",
          isOnline: true,
        },
        {
          id: 5,
          keterangan: "Offline",
          isOnline: false,
        },
        {
          id: 6,
          keterangan: "Online",
          isOnline: true,
        },
      ],
    };
  },
};
</script>

<style scoped>
.image {
  width: 97px;
  height: 97px;
}
.mentor {
  font-weight: bold;
  font-size: 28px;
}
.is-online {
  background-color: #64B5F6 !important;
  color: white !important;
}
.role {
  font-size: 14px;
  line-height: 17.64px;
  font-weight: 400;
}
@media only screen and (max-width: 700px) {
  .image {
    height: 100% !important;
  }
}
</style>