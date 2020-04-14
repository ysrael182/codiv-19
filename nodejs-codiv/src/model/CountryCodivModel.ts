/**
 * @author Israel Yasis
 */
import { Schema, model, Document, Model } from 'mongoose';
export declare interface ICountryCodiv extends Document {
    name: string;
    lastUpdate: number;
    confirmed: number;
    deaths: number;
    recovered: number;
}
export interface CountryCodivModel extends Model<ICountryCodiv> {};
const CountryCodivSchema = new Schema({
    name: { type: String, required: true},
    lastUpdate: {
        type: Date,
        default: Date.now,
        required: false
    },
    confirmed: {type: Number, required: false},
    deaths:  {type: Number, required: false},
    recovered:  {type: Number, required: false}  
});


const collectionName = "countryCodiv";

export const CountryCodivModel = model<ICountryCodiv>(collectionName, CountryCodivSchema);