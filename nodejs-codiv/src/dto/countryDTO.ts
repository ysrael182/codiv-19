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
    setName(name: string): ICountryCodivDTOBuilder {
        this.name = name;
        return this;
    }
    setConfirmed(confirmed: number): ICountryCodivDTOBuilder {
        this.confirmed =  confirmed;
        return this;
    }
    setDeaths(deaths: number ): ICountryCodivDTOBuilder {
        this.deaths = deaths;
        return this;
    }
    setRecovered(recovered: number): ICountryCodivDTOBuilder{
        this.recovered = recovered;
        return this;
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