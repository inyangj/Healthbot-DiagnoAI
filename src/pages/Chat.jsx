import React, { useState } from "react";
import SideBar from "../components/chatComponent/SideBar";
import MainChat from "./MainChat";
import ChatLayout from "./ChatLayout";
// import { useAuth } from '../contexts/AuthContext'
// import { Navigate } from 'react-router-dom';

const Chat = () => {
  return (
    <ChatLayout>
      <MainChat darkMode={darkMode} />
    </ChatLayout>
  );
};

export default Chat;
