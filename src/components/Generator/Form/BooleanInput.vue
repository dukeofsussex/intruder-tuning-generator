<template>
    <v-switch v-model.lazy="property.value"
              :label="property.value.toString()"
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
    }
</script>
