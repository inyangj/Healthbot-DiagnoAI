import React, { useState, useEffect } from "react";
import SideBar from "../components/chatComponent/SideBar";
import MainChat from "./MainChat";
import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import { fetchChatMessages } from "../utility/ChatApi";
// import { useAuth } from '../contexts/AuthContext'
// import { Navigate } from 'react-router-dom';

const ChatLayout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [chatList, setChatList] = useState([]);
 

  // const { state } = useAuth();

  // If the user is not authenticated, redirect to the login page
  // if (!state.isAuthenticated) {
  //   return <Navigate to="/login" />;
  // }

 

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <main
      className={`${darkMode ? " text-white" : " text-black"} ${
        darkMode ? "bg-[#282828]" : "bg-[#fff]"
      } flex w-full`}
    >
      <div className="min-h-screen hidden  min-w-[18.5rem] pt-10 lg:flex"></div>
      <SideBar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        chatList={chatList}
        setChatList={setChatList}
      />
      <Outlet chatList ={chatList} setChatList ={setChatList} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </main>
  );
};

export default ChatLayout;
