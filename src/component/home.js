import React, { useState } from "react";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
const Home = () => {
  const [users, setusers] = useState([]);
  const [firstname, setfirstname] = useState("");
  const [email, setemail] = useState("");
  const [lastname, setlastname] = useState("");
  return (
    <>
      <h1>Hii There, I'm Sania Bansotra</h1>
      <h3>I am into Web Develop</h3>
      <button>About Me <ArrowDownwardIcon/></button>
    </>
  );
};
export default Home;
