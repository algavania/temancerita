<template>
  <nav>
    <v-toolbar flat>
      <v-toolbar-title
        class="ml-0 ml-sm-0 ml-lg-16 ml-xl-16 d-flex justify-center align-center"
      >
        <v-img src="@/assets/logo.png" class="img-logo"></v-img>
        <div class="text-h6 mx-4">Teman Cerita</div>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items v-if="!hasLogin" class="toolbar-item">
        <v-btn
          v-for="link in links.beforeLogin"
          :key="link.text"
          small
          text
          :to="link.to"
          >{{ link.text }}</v-btn
        >
      </v-toolbar-items>

      <v-toolbar-items v-if="hasLogin" class="toolbar-item">
        <v-btn
          v-for="link in links.afterLogin"
          :key="link.text"
          small
          text
          :to="link.to"
          >{{ link.text }}</v-btn
        >
      </v-toolbar-items>
      <v-app-bar-nav-icon
        class="appbar-icon"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-toolbar>

    <v-navigation-drawer
      style="z-index: 101;"
      app
      v-model="drawer"
      temporary
      right
      disable-resize-watcher
    >
      <v-list dense v-if="!hasLogin">
        <v-list-item link v-for="link in links.beforeLogin" :key="link.text">
          <v-list-item-content>
            <v-btn small text :to="link.to">{{ link.text }}</v-btn>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-list dense v-if="hasLogin">
        <v-list-item link v-for="link in links.afterLogin" :key="link.text">
          <v-list-item-content>
            <v-btn small text :to="link.to"> {{ link.text }}</v-btn>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data: () => ({
    links: {
      beforeLogin: [
        { to: "/", text: "Beranda" },
        { to: "/artikel", text: "Artikel" },
        { to: "/informasi", text: "Forum" },
        { to: "/masuk", text: "Tanya Mentor" },
        { to: "/daftar", text: "Masuk" },
      ],
      afterLogin: [
        { to: "/", text: "Beranda" },
        { to: "/artikel", text: "Artikel" },
        { to: "/informasi", text: "Forum" },
        { to: "/masuk", text: "Tanya Mentor" },
        { to: "/daftar", text: "Profil" },
      ],
    },
    drawer: false,
    hasLogin: "",
  }),
};
</script>

<style>
.img-logo {
  height: 42px;
  width: 42px;
}

.appbar-icon {
  display: none !important;
}

.v-btn--active,
.v-btn:hover {
  color: #2196f3 !important;
}

.v-toolbar__items {
  height: 80% !important;
}

.v-btn::before {
  opacity: 0 !important;
}

.v-list-item--link:before {
  background-color: transparent !important;
}

.v-list-item--active {
  color: #2196f3 !important;
}

.v-btn {
  text-transform: none !important;
  font-size: 16px !important;
}

@media only screen and (max-width: 900px) {
  .toolbar-item {
    display: none !important;
  }

  .appbar-icon {
    display: block !important;
  }
}
</style>