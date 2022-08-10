// import { Route, Routes, Navigate } from "react-router-dom";
import { React, useState } from "react";

import db from "./components/Data";
import PersonCard from "./components/personCard/PersonCard";
import Layout from "./components/Layout";

function App() {
  const [users, setUsers] = useState(db);
  const [currentUser, setCurrentUser] = useState(users[0]);

  console.log(users)
  console.log(currentUser)
  

  return (
    <Layout>
     <PersonCard users={users} setUsers={setUsers} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
    </Layout>
  );
}

export default App;
