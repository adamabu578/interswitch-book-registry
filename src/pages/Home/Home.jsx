import React from "react";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import Signin from "../../components/Sign-in/Signin";
import Register from "../../components/register/Register";

const Home = () => {
  return (
    <main>
      <Header />
      {/* <Register /> */}
      {/* <Signin /> */}
      <Outlet />
    </main>
  );
};

export default Home;
