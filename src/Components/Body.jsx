import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { BASE_URL } from "../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addUser } from "../Utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user);
  const fetchUser = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/profile/view`, {
        withCredentials: true,
      });
      dispatch(addUser(res.data.data));
    } catch (error) {
      console.log(error);
      if (error.response.status == 401) {
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    if (!userData) fetchUser();
  }, []);
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
