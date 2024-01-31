import React from "react";
import Home from "./pages/Home"
import Navbar from "./components/Navbar.js";
import Login from "./pages/Login"
import Register from "./pages/Register"
import Watch from "./pages/Watch"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext.js";

const App = () => {
  const { user } = useContext(AuthContext);
  return (
    // <Router>
    //   <Routes>
    //     <Route exact path="/"
    //       element = {user ? <Home /> : <Navigate to="/" />}
    //     />
    //     <Route path="/register"
    //       element = {!user ? <Register /> : <Navigate to="/" />}
    //     />
    //     <Route path="/login" element = {!user ? <Login /> : <Navigate to="/" />}/>
    //     {user && (
    //       <>
    //         <Route path="/movies">
    //           <Home type="movie" />
    //         </Route>
    //         <Route path="/series">
    //           <Home type="series" />
    //         </Route>
    //         <Route path="/watch">
    //           <Watch />
    //         </Route>
    //       </>
    //     )}
    //   </Routes>
    // </Router>
  <Router>
    <Watch/>
  </Router>
    
  );
};

export default App;