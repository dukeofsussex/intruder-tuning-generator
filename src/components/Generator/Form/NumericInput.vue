<template>
    <v-text-field v-model="property.value"
                  hide-details
                  outlined
                  type="number"
                  :step="property.step"
                  @blur="onBlur($event.target.value)" />
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { VTextField } from 'vuetify/lib';
    import { TuningProperty } from '@/tunings/types';

    @Component({
        components: {
            VTextField,
        },
    })
    export default class NumericInput extends Vue {
        @Prop({ required: true })
        readonly property!: TuningProperty;

        onBlur(value: string) {
            if (value === '') {
                this.property.value = this.property.default;
                return;
            }

            this.property.value = parseFloat(value);
        }
    }
</script>
