<template>
    <v-switch v-model.lazy="property.value"
              :label="capitalizedValue"
              ripple />
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { VSwitch } from 'vuetify/lib';
    import { TuningProperty } from '@/tunings/types';

    @Component({
        components: {
            VSwitch,
        },
    })
    export default class BooleanInput extends Vue {
        @Prop({ required: true })
        readonly property!: TuningProperty;

        get capitalizedValue() {
            const value = this.property.value!.toString();
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
    }
</script>
