import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Home from "../pages/Home";
import ConfirmEmailScreen from "../pages/ConfirmEmailScreen";
import Chat from "../pages/Chat";
import { MessageBoxProvider } from "../chatcontext/MessageBoxContext"; // Adjust the path accordingly
import ChatLayout from "../pages/ChatLayout";
import MainChat from "../pages/MainChat";
import ActualChat from "../pages/ActualChat";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <MessageBoxProvider>
        <Routes>
          <Route index path={`/`} element={<Home />} />
          <Route path={`/signup`} element={<Signup />} />
          <Route path={`/confirmemail`} element={<ConfirmEmailScreen />} />
          <Route path={`/login`} element={<Login />} />

          <Route path={`/chat`} element={<ChatLayout />}>
            <Route index element={<MainChat />} />
            <Route path={`/chat/:id`} element={<ActualChat />} />
          </Route>
        </Routes>
      </MessageBoxProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
