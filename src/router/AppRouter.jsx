import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Home from "../pages/Home";
import ConfirmEmailScreen from "../pages/ConfirmEmailScreen";
import Chat from "../pages/Chat";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path={`/`} element={<Home />} />
        <Route path={`/signup`} element={<Signup />} />
        <Route path={`/confirmemail`} element={<ConfirmEmailScreen />} />
        <Route path={`/login`} element={<Login />} />
        <Route path={`/chat`} element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
