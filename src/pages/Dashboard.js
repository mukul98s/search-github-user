import React from "react";
import { Navbar, Search, Repos, User, Info } from "../components";

function Dashboard() {
  return (
    <React.Fragment>
      <Navbar />
      <Search />
      <Info />
      <User />
      <Repos />
    </React.Fragment>
  );
}

export default Dashboard;
