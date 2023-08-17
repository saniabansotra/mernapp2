import React, { useState } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import pic from "./pic.jpg";
const Home = () => {
  const [users, setusers] = useState([]);
  const [firstname, setfirstname] = useState("");
  const [email, setemail] = useState("");
  const [lastname, setlastname] = useState("");
  return (
    <>
      <div id="hometext">
        <h1>
          Hii There, I'm <br />
          Sania Bansotra
        </h1>
        <h3>I am into Web Develop</h3>
      </div>
      <button class="button">
        About Me <ArrowDownwardIcon />
      </button>
      <img src={pic} class="image" />
    </>
  );
};
export default Home;
