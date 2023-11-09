// import React from "react";

import Filter from "./components/Filter";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
    return (
        <>
            <Header/>

            <div className="container d-flex align-center justify-between py-2">
                <Search />

                <Filter />
            </div>
        </>
    )
}

export default App;
