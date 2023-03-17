import { createBrowserRouter } from "react-router-dom";
import Booking from "../Pages/Booking/Booking";
import Home from "../Pages/Home/Home";
import Main from "../Pages/Layout/Main/Main";

export const route = createBrowserRouter([
    {
        path: '/', element: <Main />, children: [
            { path: '/', element: <Home></Home> },
            { path: '/home', element: <Home></Home> },
            { path: '/booking', element: <Booking /> },
        ]
    }
])