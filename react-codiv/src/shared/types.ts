/**
 * @author Israel Yasis
 */
export interface Country {
    name: string;
    confirmed: number;
    deaths: number;
    recovered: number;
    lastUpdate: Date
}
export interface ResponseCountry {
    status: Number;
    data: Country;
}
export interface ResponseListCountry {
    status: Number,
    data: Country[]
}