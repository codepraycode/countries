import { useEffect } from "react";
import IonIcon from "./Ion";

const Header = () => {


    useEffect(()=>{
        (()=>{
            const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            const body = document.body;
            const toggle = document.getElementById("theme-toggle");

            if (prefersDark) {
                body.classList.add('dark-theme');
            }


            toggle?.addEventListener('click', (e)=>{
                body.classList.toggle('dark-theme');
                e.preventDefault();
            })
        })()
    }, [])
    return (
        <header className="box-shadow bg-elem">

            <div className="container pt-1 d-flex justify-between align-center">

                <h1 className="fw-800 fs-md-17 fs-sm-17">Where in the world?</h1>

                <button className="d-flex align-center btn border-none bg-transparent" id="theme-toggle">
                    <span className="icon icon--sm">
                        <IonIcon name="moon-outline"/>
                    </span>

                    <span className="ml-07 fs-16 fw-600">Dark Mode</span>
                </button>
            </div>
        </header>
    )
}


export default Header;