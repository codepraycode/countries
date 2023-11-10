// import React from "react";


import { Outlet, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Country from "./pages/country";
import MainPage from "./pages/main";

function AppLayout() {

    return (
        <>
            <Header/>
            <Outlet />
        </>
    )
}




const App = createBrowserRouter([
    {
        path:'/',
        element: <AppLayout/>,
        errorElement: <p>Oops.... page does not exist</p>,
        children: [
            {
                path: '',
                element: <MainPage />
            },
            {
                path: ':code',
                element: <Country />
            }
        ]
    }
]);

export default App;
