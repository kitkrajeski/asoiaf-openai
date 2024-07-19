import React from "react";
import Auth from "./Auth";
import { Typography } from "./Typography";

function Home() {
  return (
    <>
      <div className="home red--background">
        <Typography variant="title">THE HOUSES OF WESTEROS</Typography>
        <Typography variant="sub-title">
          Explore the World of George RR Martin's A Song of Ice and Fire
        </Typography>
        <Typography variant="sub-title">By: Kit Krajeski</Typography>
      </div>
      <div>
        <Auth />
      </div>
    </>
  );
}

export default Home;
