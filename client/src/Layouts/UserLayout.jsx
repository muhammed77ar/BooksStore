import { useDispatch, useSelector } from "react-redux";
import axiosClient from "../axios"
import { setUserInfo } from "../Redux/AuthSlice";
import { useEffect } from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

export default function UserLayout() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const user = useSelector((state) => state.auth.user)
  console.log(user)
  const dispatch = useDispatch()
  const GetUserdata = async () => {
    try {
      const response = await axiosClient.get("api/user");
      if (response) {
        dispatch(setUserInfo(response?.data?.user))
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      GetUserdata();
    }
  }, [isAuthenticated])

  return (
    <div className="font-lexend">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
