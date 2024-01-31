// import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import axios from "axios";
import React,{ useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
//import "./featured.scss";

export default function Featured({ type, setGenre }) {
  const [content, setContent] = useState({});

  // useEffect(() => {
  //   const getRandomContent = async () => {
  //     try {
  //       const res = await axios.get(`/movies/random?type=${type}`, {
  //         headers: {
  //           token:
  //             "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
  //         },
  //       });
  //       setContent(res.data[0]);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getRandomContent();
  // }, [type]);

  // console.log(content);
  return (
    <div className=" h-[90vh] relative ">
      {type &&(
        <div className=" bg-red-400 -z-20 absolute top-[80px] left-[50px] text-3xl font-medium flex items-center">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select
          className="cursor-pointer border-2 border-black text-black ml-[20px] p-[5px]"
            name="genre"
            id="genre"
             onChange={(e) => setGenre(e.target.value)}
          >
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      {/* <img className=" w-full h-full object-cover" src={content.img} alt="" /> */}

      <img className="w-[100%] h-[100%] object-cover"
        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />

      <div className="w-[35%] absolute left-[50px] bottom-[100px] text-white flex flex-col">
        {/* <img src={content.imgTitle} alt="" /> */}

        <img className="w-[400px]"
          src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
          alt=""
        />

        {/* <span className="desc">{content.desc}</span> */}

        <span className="my-[20px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          adipisci repellendus eum quasi illo, velit numquam, maxime tempora
          sint deleniti, aliquid qui? Facilis, adipisci! Ratione hic repudiandae
          temporibus eum earum?
        </span>

        <div className="flex">
          <button className=" w-[100px] h-[50px] bg-white text-black p-2 px-4 border-none rounded-md 
          flex items-center justify-center text-base font-semibold mr-2 cursor-pointer">
            {/* <PlayArrow /> */}
            <FaPlay color="black"/>
            <span className="ml-[5px]">Play</span>
          </button>
          <button className="w-[100px] h-[50px] bg-gray-800 text-white p-2 px-4 border-none rounded-md 
          flex items-center justify-center text-base font-semibold mr-2 cursor-pointer">
            {/* <InfoOutlined /> */}
            <IoMdInformationCircleOutline color="white"/>

            <span className="ml-[5px]">Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}