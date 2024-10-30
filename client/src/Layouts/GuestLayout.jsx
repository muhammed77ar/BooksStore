import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function GuestLayout() {
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
