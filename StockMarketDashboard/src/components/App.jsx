import { useState } from "react";
import "../styles/App.css";
import SideBar from "./sidebar/SideBar";
import MainContent from "./MainContent";

function App() {
  return (
    <div className='app'>
      <SideBar></SideBar>
      <MainContent></MainContent>
    </div>
  );
}

export default App;
