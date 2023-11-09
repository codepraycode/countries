export type CountryCurrency = {
    symbol: string,
    name: string,
    code: string
}

export type CountryName = {
    common: string,
    official: string,
    native: string
}

export type CountryLanguage = {
    short: string,
    long: string
}
export type CountryFlag = {
    png: string,
    svg: string,
    alt: string
}

export interface Country {
    flags: CountryFlag,
    name: CountryName,
    population: number,
    tld: string[],
    currencies: CountryCurrency[],

    languages: CountryLanguage[],
    region: string,
    subregion: string,
    capital: string[],
    borders: string[],


    cioc: string,
    cca3: string
}
