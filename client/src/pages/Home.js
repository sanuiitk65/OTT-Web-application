import React from "react";
import Navbar from "../components/Navbar";
import Featured from "../components/Featured";
// import "./home.scss";
import List from "../components/List";
import { useEffect, useState } from "react";
import axios from "axios";
import { mainAxios } from "../baseUrl";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await mainAxios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
              "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
            },
          }

          // {
          //   headers: {
          //     token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YjNmNzVkZjkxODZlODFmNjFhZDFiNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNjQ3MDA4NiwiZXhwIjoxNzA2OTAyMDg2fQ.iBOQaPuo0Ev4HOBvZ5q6u-eOQ_Z5vsscTvE-uMEkcPA"
          //   }
          // }
        );
        setLists(res.data) 
        //console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className=" relative bg-black overflow-hidden">
      <Navbar />
      {/* <Featured type={type} setGenre={setGenre} />
      {lists.map((list) => (
        <List list={list} />
      ))} */}
      

      <Featured type={type} setGenre={setGenre}/>

      {/* <List list = {lists[2]}/> */}
      {
        lists.map((list)=>(
          <List list = {list} key={list._id}/>
        ))
      }

    
      
      

      
    </div>
  );
};

export default Home;