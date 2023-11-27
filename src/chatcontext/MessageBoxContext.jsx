// MessageBoxContext.js
import React, { createContext, useContext, useState } from 'react';

const MessageBoxContext = createContext();

export const MessageBoxProvider = ({ children }) => {
  const [textareaContent, setTextareaContent] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);

  const simulateBotResponse = (userMessage) => {
    setTimeout(() => {
      const botResponse = `Bot: Thanks for your message - "${userMessage}"`;
      setChatHistory([...chatHistory, { type: 'user', message: userMessage }, { type: 'bot', message: botResponse }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleClick = () => {
    setIsSubmitted(!isSubmitted);
    setTextareaContent('');
    const textarea = document.getElementById('text');
    textarea.style.height = 'auto';
  };

  const handleSubmit = (userMessage) => {
    setChatHistory([...chatHistory, { type: 'user', message: userMessage }]);
    setTextareaContent('');
    const textarea = document.getElementById('text');
    textarea.style.height = 'auto';
    setIsSubmitted(true);
    setIsTyping(true);
    simulateBotResponse(userMessage);
  };

  const handleInputChange = (content) => {
    setTextareaContent(content);
    setIsTyping(content.length > 0);
  };

  const adjustTextareaHeight = (textarea) => {
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight + 2}px`;
  };

  return (
    <MessageBoxContext.Provider
      value={{
        textareaContent,
        isTyping,
        isSubmitted,
        chatHistory,
        handleClick,
        handleSubmit,
        handleInputChange,
        adjustTextareaHeight,
      }}
    >
      {children}
    </MessageBoxContext.Provider>
  );
};

export const useMessageBoxContext = () => {
  return useContext(MessageBoxContext);
};
