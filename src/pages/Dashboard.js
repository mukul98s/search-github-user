import React from "react";
import styled from "styled-components";
import { Navbar, Search, Repos, User, Info } from "../components";
import Loader from "../components/Loader";
import { GlobalContext } from "../context/context";

function Dashboard() {
  const { isLoading } = React.useContext(GlobalContext);
  if (isLoading) {
    return (
      <React.Fragment>
        <Navbar />
        <Search />
        <Loader />
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <Navbar />
      <Search />
      <User />
      <Info />
      <Repos />
    </React.Fragment>
  );
}

export default Dashboard;
