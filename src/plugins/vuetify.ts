import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import { Ripple } from 'vuetify/lib/directives';

Vue.use(Vuetify);

export default new Vuetify({
    directives: {
        Ripple,
    },
    icons: {
        iconfont: 'mdiSvg',
    },
    theme: {
        dark: true,
    },
});
