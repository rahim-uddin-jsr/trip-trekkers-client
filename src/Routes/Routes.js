import { createBrowserRouter, useParams } from "react-router-dom";
import Booking from "../Pages/Booking/Booking";
import Home from "../Pages/Home/Home/Home";
import Main from "../Pages/Layout/Main/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const route = createBrowserRouter([
    {
        path: '/', element: <Main />, children: [
            { path: '/', element: <Home />, loader: () => fetch('http://localhost:5000/places') },
            { path: '/home', element: <Home></Home> },
            { path: '/login', element: <Login /> },
            { path: '/register', element: <Register /> },
            {
                path: '/booking/:id', element: <PrivateRoute children={
                    <Booking />
                } />, loader: ({ params }) => fetch(`http://localhost:5000/places/${params.id}`)
            },
        ]
    }
])