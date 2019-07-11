<template>
    <v-dialog v-model="exportDialog"
              scrollable
              content-class="flex xs12 sm8 md4">
        <template v-slot:activator="{ on }">
            <v-btn color="primary"
                   class="ma-2"
                   v-on="on"
                   @click="generateTuning()">
                <v-icon class="pr-1">
                    {{ iconMdiExport }}
                </v-icon>
                Export
            </v-btn>
        </template>
        <v-card ref="copyContainer">
            <v-card-title>
                <span class="headline">Export Tuning</span>
            </v-card-title>
            <v-divider />
            <v-card-text class="grey darken-4">
                <pre>
{{ generatedTuning | pretty }}
                </pre>
            </v-card-text>
            <v-divider />
            <v-card-actions>
                <v-spacer />
                <v-btn text
                       @click="exportDialog = false">
                    Close
                </v-btn>
                <v-btn text
                       :disabled="!canExport"
                       @click="copy">
                    Copy
                </v-btn>
                <v-btn text
                       :disabled="!canExport"
                       @click="saveAs()">
                    Save
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script lang="ts">
    import { mdiExport } from '@mdi/js';
    import { saveAs } from 'file-saver';
    import {
        Component, Prop, Ref, Vue,
    } from 'vue-property-decorator';
    import {
        VBtn,
        VDialog,
        VDivider,
        VCard,
        VCardActions,
        VCardText,
        VCardTitle,
        VIcon,
        VSpacer,
    } from 'vuetify/lib';
    import Converter from '@/tunings/converter';
    import { TuningRaw, TuningSchema } from '@/tunings/types';

    @Component({
        components: {
            VBtn,
            VDialog,
            VDivider,
            VCard,
            VCardActions,
            VCardText,
            VCardTitle,
            VIcon,
            VSpacer,
        },
        filters: {
            pretty(value: string) {
                return JSON.stringify(value, null, 2);
            },
        },
    })
    export default class Export extends Vue {
        @Prop({ required: true })
        schema!: TuningSchema;

        @Ref()
        readonly copyContainer!: any;

        exportDialog = false;

        iconMdiExport = mdiExport;

        generatedTuning: TuningRaw = {};

        get canExport(): boolean {
            return Object.keys(this.generatedTuning).length > 0;
        }

        copy() {
            // @ts-ignore
            this.$copyText(JSON.stringify(this.generatedTuning), this.copyContainer.$el)
                .then(() => {
                    this.snack('success', 'Copied to clipboard');
                }, () => {
                    this.snack('error', 'Unable to copy to clipboard');
                });
        }

        generateTuning() {
            this.generatedTuning = Converter.get(this.schema, { stripDefaults: true });

            if (Object.keys(this.generatedTuning).length > 0) {
                this.generatedTuning.tuningMessage = `Tuning generated at ${window.location}`;
            }
        }

        saveAs() {
            saveAs(new Blob([JSON.stringify(this.generatedTuning)]), 'tuning.json', { type: 'application/json;charset=utf-8' });
        }

        snack(colour: string, message: string) {
            this.$emit('snack', colour, message);
        }
    }
</script>
