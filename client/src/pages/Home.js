import React from "react";
import Navbar from "../components/Navbar";
import Featured from "../components/Featured";
// import "./home.scss";
import List from "../components/List";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  // useEffect(() => {
  //   const getRandomLists = async () => {
  //     try {
  //       const res = await axios.get(
  //         `lists${type ? "?type=" + type : ""}${
  //           genre ? "&genre=" + genre : ""
  //         }`,
  //         {
  //           headers: {
  //             token:
  //             "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
  //           },
  //         }
  //       );
  //       setLists(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getRandomLists();
  // }, [type, genre]);

  return (
    <div className=" relative bg-black overflow-hidden">
      <Navbar />
      {/* <Featured type={type} setGenre={setGenre} />
      {lists.map((list) => (
        <List list={list} />
      ))} */}

      <Featured type="movies" setGenre={setGenre}/>
      <List/>
      <List/>
      <List/>
      <List/> 
      
    </div>
  );
};

export default Home;