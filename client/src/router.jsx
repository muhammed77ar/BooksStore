import {createBrowserRouter} from "react-router-dom"
import GuestLayout from "./Layouts/GuestLayout"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import About from "./pages/About"
import AuthLayout from "./Layouts/AuthLayout"

const router = createBrowserRouter([
    {
        element : <GuestLayout />,
        children : [
            {path:"/", element : <Home />},
            {path:"/about", element: <About />}
        ]
    },
    {
        element : <AuthLayout />,
        children : [
            {path:"/login", element: <Login />},
            {path:"/signup", element: <Signup />},
        ]
    }
])

export default router