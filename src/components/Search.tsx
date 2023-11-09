

const Search = () => {
    return (
        <div className="search-group box-shadow d-flex align-center justify-start">
            <ion-icon name="search-outline"></ion-icon>
            <input
                name="search"
                placeholder="Search for a country..."
                className="bg-transparent border-none"
            />
        </div>
    )
}

export default Search;