// import React from "react";

import Filter from "./components/Filter";
import Header from "./components/Header";
import Search from "./components/Search";
import { useCountries } from "./hooks";
import { Country } from "./utils/types";

function App() {
    const {countries:data, error} = useCountries();


    const countries = error ? [] : (data as Country[]);

    return (
        <>
            <Header/>

            <section>
                
                <div className="container d-flex align-center justify-between py-2">
                    <Search />

                    <Filter />
                </div>
            </section>

            <section className="container d-flex wrap x">

                {
                    countries?.map((item, index)=>{
                        return (
                            <article key={index} className="box-shadow bg-white">
                                <div className="img">
                                    <img
                                        src={item.flags.svg}
                                        alt={item.flags.alt}
                                    />
                                </div>

                                <div className="details">

                                    <h2 className="fw-800 fs-16">
                                        {item.name.common}
                                    </h2>
                                    
                                    <div>
                                        <span className="fw-600 mr-07">Population:</span>
                                        {item.population}
                                    </div>
                                    
                                    <div>
                                        <span className="fw-600 mr-07">Region:</span>
                                        {item.region}
                                    </div>

                                    <div>
                                        <span className="fw-600 mr-07">Capital:</span>
                                        {item.capital}
                                    </div>
                                </div>
                            </article>
                        )
                    })
                }
            </section>
        </>
    )
}

export default App;
