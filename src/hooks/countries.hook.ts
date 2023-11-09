import { useQuery } from "@tanstack/react-query";
import { loadCountries } from "../helpers/countries.helper";
import { useMemo } from "react";


export function useCountries() {
    const {
        data:countries,
        error,
        isLoading:loading
    } = useQuery({
        queryKey: ["countries"],
        queryFn: loadCountries,
    })



    return {
        countries,
        error,
        loading
    }
}

export function useSearchCountry(search:string) {
    const {countries, error, loading} = useCountries();


    const data = useMemo(()=>{
        const rx = new RegExp(search, "i")
        if (!countries) return;
        
        const filter = countries.filter((country)=>{
            const {common, official, native} = country.name;
    
            return common.match(rx)
                || official.match(rx)
                || native.match(rx)
        })


        // setSearchResult(()=>filter);

        return filter;
    }, [search, countries])


    return {
        loading,
        error,
        data
    }
}

export function useRegionCountries(region:string) {
    const {countries, error, loading} = useCountries();


    const data = useMemo(()=>{
        if (!countries) return;

        const rx = new RegExp(region, "i");
        const filter = countries.filter((country)=>{
    
            return country.region.match(rx);
        })


        return filter;
    }, [region, countries])


    return {
        loading,
        error,
        data
    }
}

export function useCountry(code:string) {

    const {countries, error, loading} = useCountries();

    const data = useMemo(()=>{
        if (!countries) return;
        const isName = code.length > 3;

        const rx = new RegExp((code as string), "i");

        const filter = countries.filter((country)=>{

            if (isName) {

                const {common, official, native} = country.name;

                return common.match(rx)
                    || official.match(rx)
                    || native.match(rx)
            }

            return country.cca3?.match(rx)
                || country.cioc?.match(rx)
        })


        if (filter.length < 1) return;

        return filter[0]

    }, [code, countries])


    return {
        loading,
        error,
        data
    }
}
