import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import axiosClient from "../axios";
import { setGenres } from "../Redux/GenresSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setBooks } from "../Redux/BooksSlice";


export default function GuestLayout() {
  const dispatch = useDispatch()
  const FetchGenres = async () => {
    try {
      const response = await axiosClient.get("api/genres");
      if (response && response?.data) {
        dispatch(setGenres(response?.data))
      }

    } catch (error) {
      console.error('Error fetching Genres data:', error);
    }
  };

  useEffect(() => {
    FetchGenres();
  }, []);

  const FetchBooks = async () => {
    try {
      const response = await axiosClient.get("/api/books");
      if (response && response?.data && response?.data?.books) {
        dispatch(setBooks(response?.data?.books));
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    FetchBooks();
  }, []);


  return (
    <div className=" font-lexend overflow-hidden">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
