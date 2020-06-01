<template>
    <v-container fluid
                 grid-list-md>
        <v-layout class="mb-4"
                  align-center>
            <v-btn v-if="$vuetify.breakpoint.smAndDown"
                   text
                   icon
                   color="amber"
                   absolute
                   left
                   large
                   @click="openNav = true">
                <v-icon>{{ iconMdiMenu }}</v-icon>
            </v-btn>
            <v-flex class="text-center">
                <import :schema="schema"
                        @snack="snack" />
                <export :schema="schema"
                        @snack="snack" />
            </v-flex>
        </v-layout>
        <v-sheet elevation="3">
            <v-layout>
                <v-flex class="pa-0">
                    <Navbar :items="navItems"
                            :active-nav.sync="activeNav"
                            :open-nav.sync="openNav" />
                </v-flex>
                <v-flex class="pa-0">
                    <Form :groups="selectedGroups"
                          @reset="reset" />
                </v-flex>
            </v-layout>
        </v-sheet>
        <v-snackbar v-model="snackbar.show"
                    :color="snackbar.color"
                    :timeout="5000"
                    top
                    left>
            {{ snackbar.message }}
            <v-btn text
                   @click="snackbar.show = false">
                Close
            </v-btn>
        </v-snackbar>
    </v-container>
</template>
<script lang="ts">
    import { mdiMenu } from '@mdi/js';
    import { Component, Vue } from 'vue-property-decorator';
    import {
        VBtn,
        VContainer,
        VFlex,
        VIcon,
        VLayout,
        VSheet,
        VSnackbar,
    } from 'vuetify/lib';

    import { TuningGroup } from '@/tunings/types';
    import Export from './Generator/Export.vue';
    import Form from './Generator/Form.vue';
    import Import from './Generator/Import.vue';
    import Navbar from './Generator/Navbar.vue';
    import Converter from '../tunings/converter';
    import Nav from '../tunings/nav';
    import Schema from '../tunings/schema';

    @Component({
        components: {
            VBtn,
            VContainer,
            VFlex,
            VIcon,
            VLayout,
            VSheet,
            VSnackbar,
            Export,
            Form,
            Import,
            Navbar,
        },
    })
    export default class Generator extends Vue {
        activeNav = 'Global';

        iconMdiMenu = mdiMenu;

        navItems = Nav;

        openNav = false;

        schema: any = Schema;

        snackbar = {
            show: false,
            color: 'success',
            message: '',
        };

        get selectedGroups(): TuningGroup[] {
            if (this.activeNav.indexOf('.') !== -1) {
                const nestedCategory = this.activeNav.split('.');

                if (nestedCategory[0] === '') {
                    return [
                        this.schema.GuardTuning[nestedCategory[1]],
                        this.schema.IntruderTuning[nestedCategory[1]],
                    ];
                }

                return [
                    this.schema.GuardTuning[nestedCategory[0]][nestedCategory[1]],
                    this.schema.IntruderTuning[nestedCategory[0]][nestedCategory[1]],
                ];
            }

            return [this.schema[this.activeNav]];
        }

        // eslint-disable-next-line class-methods-use-this
        beforeCreate() {
            const defaults = Converter.get(Schema);
            Converter.set(Schema, defaults);
        }

        reset(all: boolean) {
            if (all) {
                Converter.set(this.schema, Converter.get(Schema, { defaultsOnly: true }));
                this.snack('success', 'All settings reset');
                return;
            }

            for (let i = 0; i < this.selectedGroups.length; i += 1) {
                Converter.set({ Wrapper: this.selectedGroups[i] }, Converter.get({ Wrapper: this.selectedGroups[i] }, { defaultsOnly: true }));
            }

            this.snack('success', 'Tuning group reset');
        }

        snack(color: string, message: string) {
            this.snackbar = {
                color,
                message,
                show: true,
            };
        }
    }
</script>
