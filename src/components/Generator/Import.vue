<template>
    <v-dialog v-model="importDialog.show"
              content-class="flex xs12 sm8 md4">
        <template v-slot:activator="{ on }">
            <v-btn color="primary"
                   class="ma-2"
                   v-on="on">
                <v-icon class="pr-1">
                    {{ iconMdiImport }}
                </v-icon>
                Import
            </v-btn>
        </template>
        <v-card>
            <v-card-title>
                <span class="headline">Import Tuning</span>
            </v-card-title>
            <v-divider />
            <v-card-text>
                <form ref="importForm">
                    <v-file-input outlined
                                  label="tuning.json"
                                  accept=".json"
                                  chips
                                  :value="importDialog.file"
                                  hide-details
                                  @change="upload" />
                    <h3 class="hr-sect">
                        OR
                    </h3>
                    <v-textarea v-model="importDialog.raw"
                                outlined
                                name="raw"
                                label="Raw JSON"
                                placeholder="{ setting: value, ... }"
                                hide-details />
                </form>
            </v-card-text>
            <v-divider />
            <v-card-actions>
                <v-spacer />
                <v-btn text
                       @click="resetImport()">
                    Close
                </v-btn>
                <v-btn text
                       :disabled="!importDialog.raw"
                       @click="processImport(importDialog.raw)">
                    Import
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script lang="ts">
    import { mdiImport } from '@mdi/js';
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
        // @ts-ignore
        VFileInput,
        VIcon,
        VSpacer,
        VTextarea,
    } from 'vuetify/lib';
    import Converter from '@/tunings/converter';
    import { TuningSchema } from '@/tunings/types';

    @Component({
        components: {
            VBtn,
            VDialog,
            VDivider,
            VCard,
            VCardActions,
            VCardText,
            VCardTitle,
            VFileInput,
            VIcon,
            VSpacer,
            VTextarea,
        },
    })
    export default class Import extends Vue {
        @Prop({ required: true })
        schema!: TuningSchema;

        @Ref()
        readonly importForm!: HTMLFormElement;

        iconMdiImport = mdiImport;

        importDialog = {
            show: false,
            file: [],
            raw: '',
        };

        processImport(tuning: string) {
            let parsedTuning: object;

            try {
                parsedTuning = JSON.parse(tuning);
            } catch (e) {
                this.snack('error', 'Invalid tuning');
                return;
            }

            Converter.set(this.schema, parsedTuning);

            this.snack('success', 'Tuning imported');
            this.resetImport();
        }

        resetImport() {
            this.importDialog = {
                file: [],
                raw: '',
                show: false,
            };
            this.importForm.reset();
        }

        snack(colour: string, message: string) {
            this.$emit('snack', colour, message);
        }

        upload(file: File | File[]) {
            if (!file || file instanceof Array) {
                return;
            }

            const fileReader = new FileReader();
            fileReader.onload = () => {
                if (!fileReader.result || typeof (fileReader.result) !== 'string') {
                    this.snack('error', 'Invalid tuning');
                    return;
                }

                this.processImport(fileReader.result);
            };
            fileReader.readAsText(file);
        }
    }
</script>
<style scoped lang="scss">

    .hr-sect {
        display: flex;
        flex-basis: 100%;
        align-items: center;
        margin: 20px -10px;

        &:before,
        &:after {
            content: "";
            flex-grow: 1;
            background: rgba(255, 255, 255, 0.35);
            height: 1px;
            font-size: 0px;
            line-height: 0px;
            margin: 0px 10px;
        }
    }
</style>
