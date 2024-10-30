import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function AuthLayout() {
  return (
    <div className=" font-lexend">
    <Navbar />
    <main>
        <Outlet />
    </main>
    <Footer />
    </div>
  )
}
