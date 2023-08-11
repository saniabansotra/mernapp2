import React, { useState } from "react";
const Home = () => {
  const [users, setusers] = useState([]);
  const [firstname, setfirstname] = useState("");
  const [email, setemail] = useState("");
  const [lastname, setlastname] = useState("");
  return (
    <>
      <input
        type="text"
        value={firstname}
        onChange={(e) => setfirstname(e.target.value)}
      />
      <input
        type="text"
        value={lastname}
        onChange={(e) => setlastname(e.target.value)}
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setemail(e.target.value)}
      />
      {}
    </>
  );
};
export default Home;
