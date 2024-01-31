import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
// import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
// import "./watch.scss";

export default function Watch() {
  const location = useLocation();
  const movie = location.movie;
  return (
    <div className="w-[100vw] h-[100vh] ">
      <Link to="/">
        <div className="flex items-center absolute top-[10px] left-[10px] cursor-pointer z-[2]">
          {/* <ArrowBackOutlined /> */}
          <IoArrowBackOutline/>
          Home
        </div>
      </Link>
      <video className="w-[100%] h-[100%] object-cover" autoPlay progress controls 
      src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"
      />
    </div>
  );
}