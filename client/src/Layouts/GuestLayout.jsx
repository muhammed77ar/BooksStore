import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";


export default function GuestLayout() {
  return (
    <div className=" font-lexend">
    <main>
         <Outlet />
    </main>
   
    <Footer />
    </div>
  )
}
