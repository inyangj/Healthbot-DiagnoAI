import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChatProvider } from "./contexts/ChatContext.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChatProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ChatProvider>
  </React.StrictMode>
);
