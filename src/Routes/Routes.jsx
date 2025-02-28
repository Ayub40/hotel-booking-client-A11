import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../ExtraPage/ErrorPage";
import Home from "../Home/Home";
import Room from "../Home/Room";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import RoomDetails from "../Home/RoomDetails";
import MyBookings from "../component/MyBookings";
import PrivateRoute from "../Context/PrivateRoute";
import FeaturedRooms from "../Home/FeaturedRooms";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:2000/room')
            },
            {
                path: '/rooms',
                element: <Room></Room>,
                loader: () => fetch('http://localhost:2000/room')
            },
            {
                path: '/featuresRoom',
                element: <FeaturedRooms></FeaturedRooms>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/roomdetail/:id',
                element: <RoomDetails></RoomDetails>,
                // loader: ({ params }) => fetch(`http://localhost:5173/room/${params.id}`)
                loader: ({ params }) => fetch(`http://localhost:2000/room/${params.id}`)

            },
            {
                path: '/mybookings',
                element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>
            }
        ]
    },
]);


export default router;