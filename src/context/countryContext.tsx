import { FC, createContext, useMemo, useState } from "react";
import { CountryContextType, ProviderType, initialState } from "../@types/context";
import { useCountries } from "../hooks";



export const CountryContext = createContext<CountryContextType>(initialState);


export const CountryContextProvider:FC<ProviderType> = ({ children }) => {

    const [searchValue, setSearchValue] = useState<string | null>(null);
    const {countries, error, loading} = useCountries();


    const data = useMemo(()=>{
        if (!countries) return [];


        if (searchValue) {

            const rx = new RegExp(searchValue, "i")
            
            const filter = countries.filter((country)=>{
                const {common, official, native} = country.name;
        
                return common.match(rx)
                    || official.match(rx)
                    || native.match(rx)
            })


            return filter;
        }


        return countries;

        
    }, [searchValue, countries])


    const context = {
        countries: data,
        loading,
        error,

        search: (text: string | null = null)=>setSearchValue(text)
    }

    
    return <CountryContext.Provider value={context}>
        {children}
    </CountryContext.Provider>;
}


