<template>
    <v-form lazy-validation
            class="pa-3">
        <v-layout justify-space-between>
            <v-flex>
                <h1 class="display-1">
                    {{ groups[0].name }}
                </h1>
                <h5 class="subtitle ml-1">
                    {{ groups[0].description }}
                </h5>
            </v-flex>
            <v-flex class="text-right">
                <v-menu bottom
                        offset-y>
                    <template v-slot:activator="{ on }">
                        <v-btn color="orange"
                               v-on="on">
                            <v-icon class="pr-1">
                                {{ iconMdiRestart }}
                            </v-icon>
                            Reset
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item @click="reset(false)">
                            '{{ groups[0].name }}' only
                        </v-list-item>
                        <v-list-item @click="reset(true)">
                            All
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-flex>
        </v-layout>
        <v-layout justify-space-between
                  wrap
                  class="mt-3">
            <template v-for="(prop, index) in groups[0].properties">
                <v-flex :key="index"
                        xs4>
                    {{ prop.name }}
                    <div class="subtitle-2">
                        {{ prop.description }}
                    </div>
                </v-flex>
                <v-flex :key="prop.id + 0"
                        xs4>
                    <component :is="getType(0, index)"
                               :property="prop" />
                </v-flex>
                <v-flex v-if="isFactionMultiForm"
                        :key="prop.id + 1"
                        xs4>
                    <component :is="getType(1, index)"
                               :property="groups[1].properties[index]" />
                </v-flex>
                <v-flex v-else
                        :key="prop.id + 1"
                        xs4 />
            </template>
        </v-layout>
    </v-form>
</template>

<script lang="ts">
    import { mdiRestart } from '@mdi/js';
    import { VueConstructor } from 'vue';
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import {
        VBtn,
        VFlex,
        VForm,
        VIcon,
        VLayout,
        VList,
        VListItem,
        VMenu,
    } from 'vuetify/lib';
    import { TuningGroup } from '@/tunings/types';

    import BooleanInput from './Form/BooleanInput.vue';
    import MultiInput from './Form/MultiInput.vue';
    import NumericInput from './Form/NumericInput.vue';
    import StringInput from './Form/StringInput.vue';

    @Component({
        components: {
            VBtn,
            VFlex,
            VForm,
            VIcon,
            VLayout,
            VList,
            VListItem,
            VMenu,
            BooleanInput,
            MultiInput,
            NumericInput,
            StringInput,
        },
    })
    export default class Menu extends Vue {
        @Prop({ required: true })
        readonly groups!: TuningGroup[];

        iconMdiRestart = mdiRestart;

        getType(groupIndex: number, propIndex: number): VueConstructor<Vue> {
            switch (typeof this.groups[groupIndex].properties[propIndex].default) {
                case 'boolean':
                    return BooleanInput;
                case 'number':
                    return NumericInput;
                case 'object':
                    return MultiInput;
                default:
                    return StringInput;
            }
        }

        get isFactionMultiForm(): boolean {
            return this.groups.length === 2;
        }

        reset(all: boolean) {
            this.$emit('reset', all);
        }
    }
</script>
