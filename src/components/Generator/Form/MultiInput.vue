<template>
    <v-layout wrap>
        <v-flex v-for="(v, i) in property.value"
                :key="i"
                xs12
                sm6
                md3>
            <v-text-field v-model="property.value[i]"
                          hide-details
                          outlined
                          type="number"
                          :step="property.step"
                          @blur="onBlur(i, $event.target.value)" />
        </v-flex>
    </v-layout>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { VFlex, VLayout, VTextField } from 'vuetify/lib';
    import { TuningProperty } from '@/tunings/types';

    @Component({
        components: {
            VFlex,
            VLayout,
            VTextField,
        },
    })
    export default class MultiInput extends Vue {
        @Prop({ required: true })
        readonly property!: TuningProperty;

        onBlur(index: number, value: string) {
            if (!this.property.value
                || typeof this.property.value !== 'object'
                || typeof this.property.default !== 'object') {
                return;
            }

            if (value === '') {
                this.property.value[index] = this.property.default[index];
            } else {
                this.property.value[index] = parseFloat(value);
            }

            // Ensure Vue catches the change
            this.property.value = [...this.property.value];
        }
    }
</script>
