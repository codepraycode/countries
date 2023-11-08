type Currency = {
    symbol: string,
    name: string,
    label: string
}

export interface Country {
    name: string,
    population: number,
    capital: string,
    currency: Currency,
    region: string,
    subregion: string,
    borders: string[]
}