<template>
    <v-text-field outlined
                  :name="property.name"
                  :value="property.value"
                  hide-details
                  @blur="property.value = event.target.value" />
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
    export default class StringInput extends Vue {
        @Prop({ required: true })
        readonly property!: TuningProperty;
    }
</script>
