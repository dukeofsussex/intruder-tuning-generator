// @ts-ignore Not our code
import { deepEqual } from 'vuetify/lib/util/helpers';
import { TuningProperty, TuningRaw } from './types';

interface ConverterSettings {
    defaultsOnly?: boolean;
    stripDefaults?: boolean;
}

const Converter = {
    get(schema: object, { defaultsOnly = false, stripDefaults = false }: ConverterSettings = {}): TuningRaw {
        const generatedTuning: any = {};

        Object.entries(schema).forEach(([key, value]) => {
            if (Object.prototype.hasOwnProperty.call(value, 'properties')) {
                const props = value.properties;
                const group: any = {};

                for (let i = 0; i < props.length; i += 1) {
                    if (defaultsOnly) {
                        group[props[i].id] = props[i].default;
                    } else if (!stripDefaults
                        || (Object.prototype.hasOwnProperty.call(props[i], 'value') && !deepEqual(props[i].value, props[i].default))) {
                        group[props[i].id] = Object.prototype.hasOwnProperty.call(props[i], 'value') ? props[i].value : props[i].default;
                    }
                }

                if (Object.keys(group).length !== 0) {
                    generatedTuning[key] = group;
                }
            } else if (typeof value === 'object') {
                const group = this.get(value, { defaultsOnly, stripDefaults });
                if (Object.keys(group).length !== 0) {
                    generatedTuning[key] = group;
                }
            }
        });

        if (Object.prototype.hasOwnProperty.call(generatedTuning, 'Global') && Object.keys(generatedTuning.Global).length !== 0) {
            Object.assign(generatedTuning, generatedTuning.Global);
            delete generatedTuning.Global;
        }

        return generatedTuning;
    },

    set(schema: any, tuning: object) {
        Object.entries(tuning).forEach(([key, value]) => {
            if (Object.prototype.hasOwnProperty.call(schema, key)
                && typeof schema[key] === 'object'
                && typeof value === 'object'
                && !(value instanceof Array)) {
                this.set(schema[key], value);
            } else if (Object.prototype.hasOwnProperty.call(schema, 'properties') && (typeof value !== 'object' || value instanceof Array)) {
                const prop = schema.properties.find((x: TuningProperty) => x.id === key);

                if (!prop) {
                    console.error(key);
                } else if (typeof prop.default === typeof value) {
                    prop.value = (prop.default instanceof Array) ? [...value] : value;
                }
            } else if (Object.prototype.hasOwnProperty.call(schema, 'Global')) {
                this.set(schema.Global, tuning);
            }
        });
    },
};

export default Converter;
