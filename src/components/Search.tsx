import { useCountryContext } from "@hooks";
import IonIcond from "./Ion";

const Search = () => {
    const {search} = useCountryContext();

    return (
        <div className="search-group box-shadow d-flex align-center justify-start">
            <IonIcond name="search-outline"/>
            <input
                name="search"
                placeholder="Search for a country..."
                className="bg-transparent border-none"
                onChange={(e)=>{
                    const value = e.target.value;

                    if (value === '') return search(null) // clear search
                    return search(value);
                }}
            />
        </div>
    )
}

export default Search;