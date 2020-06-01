import Vue from 'vue';
import VueClipboard from 'vue-clipboard2';
import App from './App.vue';
import './registerServiceWorker';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

Vue.use(VueClipboard);

new Vue({
    render: (h) => h(App),
    vuetify,
}).$mount('#app');
