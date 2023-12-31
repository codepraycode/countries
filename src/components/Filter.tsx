import { useCountries } from "@hooks";
import IonIcon from "@reacticons/ionicons";
import { useEffect } from "react";


const Filter = () => {

    const { regions } = useCountries();

    useEffect(()=>{
        
        (
            ()=>{

                const dropdown = document.getElementById("dropdown");
        
                dropdown?.addEventListener('click', ()=>{
                    if (dropdown.hasAttribute("data-show")) return dropdown.removeAttribute('data-show');
        
                    return dropdown?.setAttribute('data-show', 'true');
                });

                window.addEventListener('click',(e)=>{

                    if (dropdown?.contains(e.target as Node)) return
                    
                    dropdown?.removeAttribute('data-show');
                })
            }
        )()

    }, [])



    return (
        <div className="dropdown box-shadow" id="dropdown">
            <button className="fs-14 fw-300 btn border-none px-1 bg-elem d-flex justify-between align-center">
                Filter by Region
                <span className="icon icon--base">
                    <IonIcon name="chevron-down-outline"/>
                </span>
            </button>

            <ul role="list" className="dropdown-menu bg-elem">
                {regions.map((item, index)=> (
                    <li className="fs-14" key={index}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Filter;