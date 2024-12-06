import { useDispatch, useSelector } from "react-redux";
import axiosClient from "../axios"
import { setUserInfo } from "../Redux/AuthSlice";
import { useEffect } from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import AdminNavbar from "../Components/AdminNavbar";

export default function AdminLayout() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); 
  const dispatch = useDispatch()
 

  const GetUserData = async () => {
    try {
      const response = await axiosClient.get("api/admin");
      if (response && response?.data && response?.data?.admin) {
        console.log(dispatch(setUserInfo(response?.data?.admin)))
      }
      
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  useEffect(() => {
    if (isAuthenticated) {
      GetUserData();
    }
  }, [isAuthenticated]);

  return (
    <div className="font-lexend">
      <AdminNavbar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
