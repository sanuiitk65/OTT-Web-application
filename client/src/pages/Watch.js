import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
// import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
// import "./watch.scss";

export default function Watch() {
  const location = useLocation();
  const movie = location.state;
  //console.log(location)
  return (
    <div className="w-[100vw] h-[100vh] ">
      <Link to="/">
        <div className="flex items-center absolute top-[10px] left-[10px] cursor-pointer z-[2]">
          
          <IoArrowBackOutline/>
          Home
        </div>
      </Link>
      <video className="w-[100%] h-[100%] object-cover" autoPlay progress="true" controls 
       src={movie.video}
      />
    </div>
  );
}