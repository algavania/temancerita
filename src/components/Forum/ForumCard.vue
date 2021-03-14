<template>
  <div>
    <v-container class="d-flex flex-row" v-if="$vuetify.breakpoint.mdAndUp">
      <v-row>
        <v-col v-for="forum in dataForum" :key="forum.id" cols="12" md="11">
          <v-card class="pa-2">
            <v-col class="d-flex flex-row" cols="12" md="11">
              <div>
                <v-img
                  class="image mt-5 mx-5"
                  src="../../assets/images/profile.png"
                >
                </v-img>
              </div>

              <div class="d-flex flex-column mx-5">
                <span class="title mt-5">Hai Perkenalkan Dirimu</span>
                <span class="tag my-2">Panduan Karir</span>
                <span class="overview"
                  >Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nostrum laudantium quod unde numquam eligendi suscipit
                  doloribus, illum odio velit qui! Optio nesciunt facere,</span
                >
              </div>
            </v-col>
            <v-row no-gutters>
              <v-col class="d-flex justify-end">
                <v-icon>mdi-share-outline</v-icon>
                <v-icon class="mx-2">mdi-bookmark-multiple-outline</v-icon>
                <v-icon class="mr-2">mdi-comment-multiple-outline</v-icon>
                <span>10 Comment...</span>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-col class="d-flex flex-column" cols="12" md="3">
        <v-btn color="primary" class="py-5 px-10">Buat Pertanyaan</v-btn>
        <div class="d-flex flex-row align-start my-5">
          <v-icon>mdi-comment-text-multiple-outline</v-icon>
          <span class="mx-5">Semua Pertanyaan</span>
        </div>
        <div class="d-flex flex-row">
          <v-icon>mdi-bookmark-multiple-outline</v-icon>
          <span class="mx-5">Tersimpan</span>
        </div>
      </v-col>
    </v-container>

    <v-container v-else>
      <v-container>
        <v-row class="d-flex flex-row justify-center">
          <v-row>
            <v-col v-for="forum in dataForum" :key="forum.id" cols="12" md="11">
              <v-card class="pa-2">
                <v-col class="d-flex flex-row" cols="12" md="11">
                  <div>
                    <v-img
                      class="image mt-5 mx-5"
                      src="../../assets/images/profile.png"
                    >
                    </v-img>
                  </div>

                  <div class="d-flex flex-column mx-5">
                    <span class="title mt-5">Hai Perkenalkan Dirimu</span>
                    <span class="tag my-2">Panduan Karir</span>
                    <span class="overview"
                      >Lorem ipsum, dolor sit amet consectetur,</span
                    >
                  </div>
                </v-col>
                <v-row no-gutters>
                  <v-col class="d-flex justify-end">
                    <v-icon>mdi-share-outline</v-icon>
                    <v-icon class="mx-2">mdi-bookmark-multiple-outline</v-icon>
                    <v-icon class="mr-2">mdi-comment-multiple-outline</v-icon>
                    <span>10 Comment...</span>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
          <v-col class="d-flex flex-column" cols="12" md="3">
            <v-btn color="primary" class="py-5 px-10">Buat Pertanyaan</v-btn>
            <div class="d-flex flex-row align-start my-5">
              <v-icon>mdi-comment-text-multiple-outline</v-icon>
              <span class="mx-5">Semua Pertanyaan</span>
            </div>
            <div class="d-flex flex-row">
              <v-icon>mdi-bookmark-multiple-outline</v-icon>
              <span class="mx-5">Tersimpan</span>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "ForumCard",
  data() {
    return {
      dataForum: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
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
.title {
  font-weight: bold;
  font-size: 14px;
  line-height: 17.64px;
}
.tag {
  font-size: 13px;
  color: #ff50a3;
}
.overview {
  font-size: 14px;
  line-height: 16.41px;
}
</style>