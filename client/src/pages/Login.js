
import React, { useContext, useState } from "react";
import { login } from "../authContext/apiCalls";
import { AuthContext } from "../authContext/AuthContext";
import { Link } from "react-router-dom";
// import "./login.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };
  return (
    <div className=" w-screen h-screen bg-gradient-to-b from-transparent to-black relative bg-cover">
      <div className="top">
        <div className="p-20 md:p-50 flex items-center justify-between">
          <img
            className="h-[40px]"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="w-full h-full absolute top-0 left-0 flex flex-col items-center justify-center  text-black">
        <form className="w-[300px] h-[300px] bg-black p-[30px] rounded-5 bg-main-color flex flex-col gap-3 justify-between">
          <h1>Sign In</h1>
          <input 
            className="p-2"
            type="email"
            placeholder="Email or phone number"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="p-2"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="h-[40px] rounded-5 bg-red-500 text-black border-none 
          text-base font-semibold cursor-pointer" onClick={handleLogin}>
            Sign In
          </button>
          <Link to='/register'>
          <span>
            New to Netflix? <b>Sign up now.</b>
          </span>
          </Link>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
}