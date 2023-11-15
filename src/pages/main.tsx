import { Link } from "react-router-dom";
import Filter from "../components/Filter"
import Search from "../components/Search"
import { useCountryContext } from "../hooks";



const MainPage = () => {
    const {countries} = useCountryContext();


    return (
        <>
            <div className="container not-hidden d-flex align-center justify-between py-2">
                <Search />

                <Filter />
            </div>
                

            <section className="container d-flex wrap x">

                {
                    countries?.map((item, index)=>{
                        return (
                            <Link to={`/${item.cca3}`} className="d-block" key={index}>
                                <article className="box-shadow bg-elem">
                                    <div className="img">
                                        <img
                                            src={item.flags.svg}
                                            alt={item.flags.alt || "Country flag"}
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
                            </Link>
                        )
                    })
                }
            </section>
        </>
    )
}

export default MainPage;