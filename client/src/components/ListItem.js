// import "./listItem.scss";
// import {
//   PlayArrow,
//   Add,
//   ThumbUpAltOutlined,
//   ThumbDownOutlined,
// } from "@material-ui/icons";
import { IoPlayCircleOutline,IoAddCircleOutline} from "react-icons/io5";
import { FaRegThumbsUp,FaRegThumbsDown} from "react-icons/fa";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

  // useEffect(() => {
  //   const getMovie = async () => {
  //     try {
  //       const res = await axios.get("/movies/find/" + item, {
  //         headers: {
  //           token:
  //           "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
  //         },
  //       });
  //       setMovie(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getMovie();
  // }, [item]);

  return (
    <Link to={{ pathname: "/watch", movie: movie }}>
      <div
        className="z-0 w-[225px] h-[120px] mr-[5px] overflow-hidden cursor-pointer
         transform transition-all duration-800  ease-linear hover:absolute hover:w-[325px] hover:h-[300px]
         hover:mt-[-150px] hover:z-50"
        //  className="w-[225px] h-[120px] mr-[5px] overflow-hidden cursor-pointer -z-10 
        //  transform transition-scale duration-300  ease-linear hover:scale-150 hover:z-40" 
        style={{ left: isHovered && (index * 225 -50 + index * 2.5)}}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* hover:w-[325px] hover:h-[300px] hover:absolute hover:z-20 */}
        {/* <img src={movie?.imgSm} alt="" /> */}
        
        <img
          className="w-[100%] h-[140px] object-cover"
          src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee"
          alt=""
        />
        {isHovered &&(
        <>
          
            {/* <video src={movie.trailer} autoPlay={true} loop /> */}

          
            
            <video
              className= "absolute w-[100%] h-[140px]  object-cover top-0 left-0"
              src={trailer}
              autoPlay={true}
              loop
            />

            
            

            <div className="relative w-full flex flex-col p-[5px] text-white bg-black z-10">
              <div className="flex m-[10px] ">
                <IoPlayCircleOutline color="white" className=" w-[30px] h-[30px] p-[1px] rounded-[50%] mr-[5px]" />
                <IoAddCircleOutline color="white" className=" w-[30px] h-[30px] p-[1px] rounded-[50%] mr-[5px]" />
                <FaRegThumbsUp color="white" className=" w-[30px] h-[30px] p-[1px] rounded-[50%] mr-[5px]" />
                <FaRegThumbsDown color="white" className="w-[30px] h-[30px] p-[1px] rounded-[50%] mr-[5px]" />
              </div>
              <div className="flex items-center mb-[10px] text-[14px] font-[600] text-white">
                {/* <span>{movie.duration}</span>
                <span className="limit">+{movie.limit}</span>
                <span>{movie.year}</span> */}

                <span>1 hour 14 mins</span>

                <span className="border-1 border-solid border-gray my-0 mx-[10px] ">+16</span>
                <span>1999</span>
              </div>

              {/* <div className="text-[13px] mb-[10px]">{movie.desc}</div>
              <div className="text-[14px] text-gray-400">{movie.genre}</div> */}

              <div className="text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Praesentium hic rem eveniet error possimus, neque ex doloribus.
              </div>
              <div className="text-white">Action</div>
            </div>
            
          </>
          )}
         
      </div>
    </Link>
  );
}