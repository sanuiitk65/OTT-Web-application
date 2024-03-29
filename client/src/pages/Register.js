import React from "react";
import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import { useNavigate, Link} from "react-router-dom";
import { mainAxios } from "../baseUrl";
// import "./register.scss";


export default function Register() {
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [username, setUsername] = useState("");
  const history = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = async (e) => {
    e.preventDefault();
    // setPassword(passwordRef.current.value);
    // setUsername(usernameRef.current.value);
    const userPassword = passwordRef.current.value;
    const userUsername = usernameRef.current.value;
    
    try {
      //console.log(userPassword)
      await mainAxios.post("auth/register", { email, username:userUsername, password:userPassword});
      history("/login");
    } catch (err) {
      //console.log(err)
    }
  };
  return (
    <div className="w-screen h-screen relative bg-slate-500 bg-cover" 
    >
      <div className="">
        <div className="p-20 md:p-50 flex items-center justify-between">
          <img
            className="h-[40px]"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <Link to="/login"  className="z-40">
          <div className="  cursor-pointer z-40 bg-blue-400 text-white rounded-5 px-5 py-2 
          text-base font-semibold hover:bg-red-800">Sign In</div>
          </Link>

          {/* <button className=" cursor-pointer z-40">Sign In</button> */}
          
        </div>
      </div>
      <div className="w-full h-full absolute top-0 left-0 
      flex flex-col items-center justify-center text-white">
        <div className="text-[60px]">Unlimited movies, TV shows, and more.</div>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p className="text-[20px]">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="w-1/2 bg-white flex items-center justify-between mt-[20px] border-none rounded-[5px]">
            <input className="w-[82%] px-5 h-full text-[14px] text-black" type="email" placeholder="email address" ref={emailRef}/>
            <button className="w-[18%] px-2 h-full bg-red-500 border-none text-white text-[20px] cursor-pointer" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="w-1/2 bg-white flex items-center justify-between mt-[20px] border-none rounded-[5px]">
            <input className="w-[41%] px-5 h-full text-[14px] text-black" type="username" placeholder="username" ref={usernameRef} />
            <input className="w-[41%] px-5 h-full text-[14px] text-black" type="password" placeholder="password" ref={passwordRef} />
            <button className="w-[18%] px-2 h-full bg-red-500 border-none text-white text-[20px] cursor-pointer" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}


          <div>Please enter the demo mail(example  ......@test.com)</div>
          <div> If you don't want to register You can directly login by using the mail (check@test.com) and password (1234) by clicking on Sign in button</div>
      </div>

      
    </div>
  );
}


//background image lgao