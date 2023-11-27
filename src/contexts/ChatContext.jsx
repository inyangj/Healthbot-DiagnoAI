// ChatContext.js

import React, { createContext, useContext, useState } from 'react';

const ChatContext = createContext({
  isOpen: false,
  openChat: () => {},
  closeChat: () => {},
  sendMessage: () => {},
  setAuthToken: () => {}, // Added setAuthToken function
  authToken: '', // Added authToken state
  message: [],
});

export const ChatProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [authToken, setAuthToken] = useState(''); // Initialize authToken state

  const openChat = () => {
    setIsOpen(true);
  };

  const closeChat = () => {
    setIsOpen(false);
  };

  const sendMessage = (message) => {
    const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
    
    // Implement logic to send the message to the backend with authToken
    console.log('Sending message to backend with authToken:', authToken);
    // You can make an API call or perform any other necessary actions here
    setMessages([...messages, { content: message, timestamp: new Date() }]);
  };

  return (
    <ChatContext.Provider value={{ isOpen, openChat, closeChat, sendMessage, setAuthToken, authToken, messages }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  return useContext(ChatContext);
};
