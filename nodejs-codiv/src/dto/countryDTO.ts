import { DTOBuilder } from "./types";
/**
 * @author Israel Yasis
 */
export declare interface ICountryCodivDTO {
    name: string;
    confirmed: number;
    deaths: number;
    recovered: number;
}
export class ICountryCodivDTOBuilder implements DTOBuilder<ICountryCodivDTO> {
    private name: string;
    private confirmed: number;
    private deaths: number;
    private recovered: number;
    constructor() {
        this.setName = this.setName.bind(this);
    }
    setName(name: string) {
        this.name = name;
    }
    setConfirmed(confirmed: number) {
        this.confirmed =  confirmed;
    }
    setDeaths(deaths: number ) {
        this.deaths = deaths;
    }
    build(): ICountryCodivDTO {
        return {
            name: this.name,
            confirmed: this.confirmed,
            deaths: this.deaths,
            recovered: this.recovered
        };
    };
}