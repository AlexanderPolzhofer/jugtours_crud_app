import React from "react";
import { Route, Routes } from "react-router-dom";
import { GroupEdit } from "./pages/GroupEdit/GroupEdit";
import { GroupList } from "./pages/GroupList/GroupList";
import { Home } from "./pages/Home/Home";
import { Navbar } from "./pages/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/groups" element={<GroupList />} />
        <Route path="/edit-group" element={<GroupEdit />} />
      </Routes>
    </>
  );
}
export default App;
