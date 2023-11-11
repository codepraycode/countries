import IonIcon from "./Ion";

const Header = () => {
    return (
        <header className="box-shadow">

            <div className="container pt-1 d-flex justify-between align-center">

                <h1 className="fw-800 fs-md-17 fs-sm-17">Where in the world?</h1>

                <button className="d-flex align-center btn border-none bg-transparent">
                    <IonIcon name="moon-outlin"/>

                    <span className="ml-07 fs-16 fw-600">Dark Mode</span>
                </button>
            </div>
        </header>
    )
}


export default Header;