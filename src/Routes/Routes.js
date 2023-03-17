import { createBrowserRouter, useParams } from "react-router-dom";
import Booking from "../Pages/Booking/Booking";
import Home from "../Pages/Home/Home/Home";
import Main from "../Pages/Layout/Main/Main";

export const route = createBrowserRouter([
    {
        path: '/', element: <Main />, children: [
            { path: '/', element: <Home />, loader: () => fetch('http://localhost:5000/places') },
            { path: '/home', element: <Home></Home> },
            { path: '/booking/:id', element: <Booking />, loader: ({ params }) => fetch(`http://localhost:5000/places/${params.id}`) },
        ]
    }
])