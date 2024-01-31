//import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import React,{ useContext, useState } from "react";
//import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../authContext/AuthContext";
import { logout } from "../authContext/AuthActions";
import { IoIosSearch } from "react-icons/io";
import { MdNotificationsNone } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { dispatch } = useContext(AuthContext);

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={`w-full text-white text-base fixed top-0 z-[999] bg-gradient-to-t from-transparent to-rgba-black-30 ${isScrolled?"bg-gray-500":" "}`}>
      <div className="px-0 md:px-12 flex items-center justify-between h-16">
        <div className="flex items-center">
          <img className="h-[40px] mr-[25px]"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
           <Link to="/" className="link">
            <span className="mr-[20px] cursor-pointer">Homepage</span>
          </Link>
          <Link to="/series" className="link">
            <span className="mr-[20px] cursor-pointer navbarmainLinks">Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span className="mr-[20px] cursor-pointer navbarmainLinks">Movies</span>
          </Link>
          <span className="mr-[20px] cursor-pointer">New and Popular</span>
          <span className="mr-[20px] cursor-pointer">My List</span>
        </div>
        <div className="flex items-center">
          
          <IoIosSearch className="mr-4 cursor-pointer"/>
          
          <span>KID</span>
          <MdNotificationsNone className="mx-4 cursor-pointer text-[20px]"/>
          <img className="w-8 h-8 rounded-full object-cover cursor-pointer"
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <div className="group text-white">
            {/* <ArrowDropDown className="icon" /> */}
            <MdArrowDropDown className="mx-4 cursor-pointer text-[20px]"/>
            <div className=" hidden rounded-[5px] group-hover:flex group-hover: flex-col group-hover:absolute group-hover:bg-black group-hover:textwhite">
              <span className="p-[10px] cursor-pointer">Settings</span>
              {/* <span className="p-[10px] cursor-pointer">Logout</span> */}
              <span className="p-[10px] cursor-pointer" onClick={() => dispatch(logout())}>Logout</span>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Navbar;