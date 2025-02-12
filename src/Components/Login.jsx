import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const handleLogin = async () => {
    try {
      if (!email.trim() || !password.trim()) {
        setError({ response: { data: "Email and Password are required!" } });
        return;
      }
      const params = {
        emailId: email,
        password: password,
      };
      const response = await axios.post(`${BASE_URL}/login`, params, {
        withCredentials: true,
      });
      console.log(response.data.data);
      dispatch(addUser(response.data.data));
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };
  return (
    <div className="h-full flex-1 flex justify-center items-center text-black mt-4">
      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title flex justify-center">Login</h2>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Email ID</span>
            </div>
            <input
              type="text"
              placeholder="Enter email id"
              className="input input-bordered w-full max-w-xs"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full max-w-xs"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <p className="text-red-400 p-3 text-center">{error?.response?.data}</p>
        <div className="card-actions justify-center mb-4">
          <button className="btn btn-primary px-8" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
