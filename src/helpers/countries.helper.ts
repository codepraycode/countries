// 

import { REST_COUNTRIES_ALL_URL } from "../constants/request.constants";
import { Country, CountryCurrency, CountryFlag, CountryLanguage, CountryName } from "../@types/countries";


type obj = {
    [key: string]: string
}
type objj = {
    [key: string]: string | obj
}


function parseCurrencies(currencies: obj[]): CountryCurrency[] {
    if (!currencies) return [];

    return Object.entries(currencies).map((data)=>{
        const [code, value] = data;

        return {
            code,
            name: (value as obj).name,
            symbol: (value as obj).symbol
        }
    });
}

function parseFlags(flags: obj): CountryFlag {

    return {
        png: flags.png,
        svg: flags.svg,
        alt: flags.alt
    }
}

function parseCountryName(name: objj): CountryName {
    // if (!currencies) return [];


    const common = name.common as string;
    const official = name.official as string;
    let native = ''
    
    if (name.nativeName){
        const variations = Object.entries(name.nativeName);



        // Picking the last one
        if (variations.length >= 1){
            const _last = variations.pop();


            if (_last) {

                native = (_last[1] as unknown as obj).common;
            }

        }
    }

    return {
        common,
        official,
        native
    }
}

function parseLanguages(languages: obj[]): CountryLanguage[] {

    if (!languages) return [];

    return Object.entries(languages).map((each)=>{
        const [short, long] = each;
        return {
            short: short as string,
            long: long as unknown as string
        }
    });
}


function parseCountryCapital(capital:string[]) {
    if (!capital || capital.length < 1) return '';

    return capital[0]
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function parseCountries(countries: any[]): Country[] {
    return countries.map((item): Country =>{

        return {
            flags: parseFlags(item.flags),
            name:parseCountryName(item.name),
            population: item.population,
            tld: item.tld,
            currencies: item.currencies && parseCurrencies(item.currencies),

            languages: item.languages && parseLanguages(item.languages),
            
            region: item.region,
            subregion: item.subregion,
            capital: parseCountryCapital(item.capital),
            borders: item.borders || [],

            cca3: item.cca3,
            cioc: item.cioc
        }
    })
}

export async function loadCountries() {
    // console.log("Loading countries")
    const response = await fetch(REST_COUNTRIES_ALL_URL);


    if (!response.ok) {
      throw new Error('Could not load countries')
    }

    const all_countries = await response.json();


    const countries = parseCountries(all_countries);
    // console.log(countries[100])

    return countries
}

