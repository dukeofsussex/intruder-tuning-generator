<template>
    <v-footer>
        <v-layout justify-center
                  align-center
                  column>
            <v-flex py-3
                    text-center
                    class="subheading">
                Created with
                <v-icon color="red">
                    {{ iconMdiHeart }}
                </v-icon>
                and
                <v-icon color="green">
                    {{ iconMdiVuejs }}
                </v-icon>
                by amazing
                <a href="https://github.com/dukeofsussex/intruder-tuning-generator/graphs/contributors"
                   target="_blank"
                   class="amber--text">
                    contributors
                </a>
            </v-flex>
            <v-flex pb-1>
                <v-btn href="https://github.com/dukeofsussex/intruder-tuning-generator"
                       target="_blank"
                       text>
                    <v-icon class="pr-1">
                        {{ iconMdiGithub }}
                    </v-icon>
                    View Source
                </v-btn>
            </v-flex>
        </v-layout>
    </v-footer>
</template>
<script lang="ts">
    import { mdiGithub, mdiHeart, mdiVuejs } from '@mdi/js';
    import { Component, Vue } from 'vue-property-decorator';
    import {
        VBtn,
        VFlex,
        VFooter,
        VIcon,
        VLayout,
    } from 'vuetify/lib';

    @Component({
        components: {
            VBtn,
            VFlex,
            VFooter,
            VIcon,
            VLayout,
        },
    })

    export default class Footer extends Vue {
        iconMdiGithub = mdiGithub;

        iconMdiHeart = mdiHeart;

        iconMdiVuejs = mdiVuejs;
    }
</script>
