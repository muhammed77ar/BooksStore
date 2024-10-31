import {createBrowserRouter} from "react-router-dom"
import GuestLayout from "./Layouts/GuestLayout"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import About from "./pages/About"
import AuthLayout from "./Layouts/AuthLayout"
import UserLayout from "./Layouts/UserLayout"
import ProtectedRoute from "./ProtectedRoute"

const router = createBrowserRouter([
    {
        element : <ProtectedRoute isAuthRoute><GuestLayout /></ProtectedRoute>,
        children : [
            {path:"/", element : <Home />},
            {path:"/about", element: <About />}
        ]
    },
    {
        element : <ProtectedRoute isAuthRoute={false}><UserLayout /></ProtectedRoute>,
        children : [
            {path: "/user", element: <Home />},
            {path: "/user/about", element: <About />}
        ]
    },
    {
        element : <ProtectedRoute isAuthRoute><AuthLayout /></ProtectedRoute>,
        children : [
            {path:"/login", element: <Login />},
            {path:"/signup", element: <Signup />},
        ]
    }
])

export default router