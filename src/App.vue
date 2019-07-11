<template>
    <v-app>
        <v-content>
            <Octocat />
            <Generator />
        </v-content>
        <Footer />
    </v-app>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { VApp, VContent } from 'vuetify/lib';

    import Footer from './components/Footer.vue';
    import Generator from './components/Generator.vue';
    import Octocat from './components/Octocat.vue';

    @Component({
        components: {
            VApp,
            VContent,
            Footer,
            Generator,
            Octocat,
        },
    })
    export default class App extends Vue {}
</script>
