/**
 * @author Israel Yasis
 */
export interface Country {
    name: string;
}

export interface ResponseCountry {
    status: Number;
    data: Country;
}
export interface ResponseListCountry {
    status: Number,
    data: String[]
}