// import {
//     ArrowBackIosOutlined,
//     ArrowForwardIosOutlined,
//   } from "@material-ui/icons";
  import { MdArrowBackIosNew , MdArrowForwardIos} from "react-icons/md";

  import React, { useRef, useState } from "react";
  import ListItem from "./ListItem";
  //import "./list.scss";
  
  export default function List({list}) {
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);
    const [clickLimit, setClickLimit] = useState(window.innerWidth / 230);
  
    const listRef = useRef();
  
    const handleClick = (direction) => {
      setIsMoved(true);
      let distance = listRef.current.getBoundingClientRect().x - 50;
      if (direction === "left" && slideNumber > 0) {
        setSlideNumber(slideNumber - 1);
        listRef.current.style.transform = `translateX(${230 + distance}px)`;
      }
      if (direction === "right" && slideNumber < 10 - clickLimit) {
        setSlideNumber(slideNumber + 1);
        listRef.current.style.transform = `translateX(${-230 + distance}px)`;
      }
    };
    return (
      <div className="w-[100%] mt-[10px]">
        {/* <span className="listTitle">{list.title}</span> */}
        <span className="text-white text-[20px] font-[500] ml-[50px]">{list.title}</span>
        <div className="relative">
          <MdArrowBackIosNew
            color="white"
            className="absolute w-[50px] h-[100%] bg-black z-[99] top-0 bottom-0 m-auto  cursor-pointer"
            onClick={() => handleClick("left")}
            style={{ display: !isMoved && "none" }}
          />

          {/* <div className="container" ref={listRef}>
            {list.content.map((item, i) => (
              <ListItem index={i} item={item} />
            ))}
          </div> */}

          <div className="relative ml-[50px] flex  w-max translate-x-0 transition-all duration-1000 ease-in-out"
           ref={listRef}>
            
             {list.content.map((item, i) => (
              <ListItem index={i} item={item} />
            ))}

            {/* <ListItem index={0}/>
            <ListItem index={1}/>
            <ListItem index={2}/>
            <ListItem index={3}/>
            <ListItem index={4}/> */}

          </div>

          <MdArrowForwardIos
            color="white"
            className="absolute w-[50px] h-[100%] bg-[#000000] z-[99] top-0 bottom-0 m-auto cursor-pointer right-[0px]"
            onClick={() => handleClick("right")}
          />
        </div>
      </div>
    );
  }