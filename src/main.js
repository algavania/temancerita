import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import store from './store'
import 'vue-loading-overlay/dist/vue-loading.css';
import VueGlobalVar from 'vue-global-var';

Vue.config.productionTip = false


Vue.use(VueGlobalVar, {
    globals: {
        $api: 'https://api-teman-cerita.onrender.com/api',
    }
});

Vue.mixin({
    methods: {
        convertToRupiah(angka) {
            var prefix = "Rp.";
            angka = angka.toString();
            var number_string = angka.replace(/[^,\d]/g, "").toString(),
                split = number_string.split(","),
                sisa = split[0].length % 3,
                rupiah = split[0].substr(0, sisa),
                ribuan = split[0].substr(sisa).match(/\d{3}/gi);

            if (ribuan) {
                var separator = sisa ? "." : "";
                rupiah += separator + ribuan.join(".");
            }

            rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
            return prefix == undefined ? rupiah : rupiah ? "Rp" + rupiah : "";
        },
    },
});

new Vue({
    router,
    vuetify,
    store,
    render: h => h(App)
}).$mount('#app')