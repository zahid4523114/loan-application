import React from "react";
import { Outlet } from "react-router-dom";
import Tab from "../Components/Tab/Tab";

const Main = () => {
  return (
    <div>
      <Tab></Tab>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
