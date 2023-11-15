import { Link, useNavigate, useParams } from "react-router-dom";
import { useCountry } from "@hooks";
import { Country } from "@@types/countries";
import IonIcon from "@components/Ion";



const CountryTemplate = ({country}: {country: Country}) => (
    <>
        <div
            className="img-large d-flex align-center"
        >
            <img
                src={country.flags.svg}
                alt={country.flags.alt || "Country flag"}
            />
        </div>

        <div>
            <h2 className="fw-800 fs-17">
                {country.name.common}
            </h2>

            <div className="detail">

                <div>
                    
                    <div className="my-07">
                        <span className="fw-600 mr-07">Native Name:</span>
                        {country.name.native}
                    </div>
                    <div className="my-07">
                        <span className="fw-600 mr-07">Population:</span>
                        { country.population }
                    </div>
                    
                    <div className="my-07">
                        <span className="fw-600 mr-07">Region:</span>
                        { country.region }
                    </div>

                    <div className="my-07">
                        <span className="fw-600 mr-07">Sub Region:</span>
                        { country.subregion }
                    </div>

                    <div className="my-07">
                        <span className="fw-600 mr-07">Capital:</span>
                        { country.capital }
                    </div>
                </div>

                <div>
                    <div className="my-07">
                        <span className="fw-600 mr-07">Top Level domain:</span>
                        {country.tld.map((i)=>i).join(',')}
                    di</div>
                    
                    <div className="my-07">
                        <span className="fw-600 mr-07">Currencies:</span>
                        {country.currencies.map((i)=>i.name).join(',')}
                    </div>

                    <div className="my-07">
                        <span className="fw-600 mr-07">Languages:</span>
                        {country.languages.map(i=>i.long).join(',')}
                    </div>

                </div>
                    
                    
            </div>
            <div className="my-07 tags">
                <span className="fw-600">Border coutnries:</span>



                <div className="d-flex wrap">

                    {
                        country.borders.map((item, key)=>(
                            
                            <Link to={`/${item}`} key={key} className="fs-14 box-shadow tag btn mx-07 bg-elem">{item}</Link>
                        ))
                    }
                </div>
            </div>
        </div>
    </>
)

const CountryData = () => {

    const navigation = useNavigate();

    const { code } = useParams(); 
    
    
    const {loading, error, data} = useCountry(code as string);

    let template;

    if (loading) template = <p>Loading...</p>
    if (error) template = <p>An error occured</p>
    else if (data) template = <CountryTemplate country={data}/>



    return (
        <>
            <div className="container my-1 py-2">
                <span
                    className="box-shadow bk-btn btn d-flex align-center justify-center bg-elem"
                    onClick={()=>{
                        navigation(-1)
                    }}
                >
                    <div className="icon">
                        <IonIcon name="arrow-back-outline"/>
                    </div>


                    <span className="ml-07">Back</span>
                </span>
            </div>


            <section className="container info py-2">
                { template }
            </section>
        </>
    )
}


export default CountryData;