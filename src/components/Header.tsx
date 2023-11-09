

const Header = () => {
    return (
        <header className="box-shadow">

            <div className="container pt-1 px-1 d-flex justify-between align-center">

                <h1 className="fw-800 fs-17">Where in the world?</h1>

                <button className="d-flex align-center btn border-none bg-transparent">
                    <ion-icon name="moon-outline"></ion-icon>

                    <span className="ml-07 fs-16 fw-600">Dark Mode</span>
                </button>
            </div>
        </header>
    )
}


export default Header;