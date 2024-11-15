import {createBrowserRouter} from "react-router-dom"
import GuestLayout from "./Layouts/GuestLayout"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import About from "./pages/About"
import AuthLayout from "./Layouts/AuthLayout"
import ProtectedRoute from "./ProtectedRoute"
import AdminLayout from "./Layouts/AdminLayout"

const router = createBrowserRouter([
    {
        element : <ProtectedRoute isAuthRoute><GuestLayout /></ProtectedRoute>,
        children : [
            {path:"/", element : <Home />},
            {path:"/about", element: <About />}
        ]
    },
    {
        element : <ProtectedRoute isAuthRoute={false}><AdminLayout /></ProtectedRoute>,
        children : [
            {path: "/admin", element: <Home />},
            {path: "/admin/about", element: <About />}
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