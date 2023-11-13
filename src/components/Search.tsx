import { useCountryContext } from "@hooks";
import IonIcond from "./Ion";

const Search = () => {
    const {search} = useCountryContext();

    return (
        <div className="search-group box-shadow d-flex align-center justify-start bg-elem">
            <span className="icon">
                <IonIcond name="search-outline"/>
            </span>
            <input
                name="search"
                placeholder="Search for a country..."
                className="bg-transparent border-none text-white no-outline"
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