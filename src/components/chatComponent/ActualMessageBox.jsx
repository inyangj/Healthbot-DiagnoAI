import React, { useState, useEffect } from "react";
import messageboxicon from "../../assets/messageboxicon.png";
import messageboxicondark from "../../assets/messageboxicondark.png";
import { createChat } from "../../utility/ChatApi";
import ChatComponent from "./ChatComponent";
import { useParams } from "react-router-dom";

const ActualMessageBox = ({
  chatList,
  setChatList,
  setChatHistory,
  chatHistory,
  isNew,
  isTyping,
  setIsTyping,
}) => {
  const [textareaContent, setTextareaContent] = useState("");

  const [chat, setChat] = useState({});
  const {id} = useParams();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userMessage = textareaContent.trim();
    setChatHistory(
      userMessage
        ? [...chatHistory, { role: "user", content: userMessage }]
        : chatHistory
    );
    setTextareaContent("");
    const textarea = document.getElementById("text");
    textarea.style.height = "auto";
    setIsTyping(true);

    if (userMessage !== "") {
      const userData = JSON.parse(localStorage.getItem("userData"));
      const chatData = {
        user: userData.data.id,
        content: userMessage,
        chatId: id
      };

      console.log("chatData", chatData);

      const response = await createChat(chatData);
      const { responseMessage, chat: chatResponse } = response.data.data;

      setIsTyping(false);
      setChat(chatResponse);
      setChatHistory([
        ...chatHistory,
        {
          role: responseMessage?.role,
          message: responseMessage?.content,
        },
      ]);

      console.log("chatHistory from ActualMessageBox", chatHistory);
    

      //   if (isNew) {
      //     setChatList([...chatList, chat]);
      //     console.log("chatList", chatList);
      //     window.href.location = `/chat/${chat.id}`;
      //   } else {
      //     setChatHistory([
      //       ...chatHistory,
      //       { role: "user", message: userMessage },
      //       { role: responseMessage?.role, message: responseMessage?.content },
      //     ]);
      //   }
    }
  };

  const handleInputChange = (event) => {
    const content = event.target.value;
    setTextareaContent(content);
    setIsTyping(content.length > 0);
  };

  const adjustTextareaHeight = (event) => {
    const textarea = event.target;
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + 2 + "px";
  };

  return (
    <div className=" w-full relative flex flex-col justify-center items-center">
      <div className="w-[90%] lg:w-2/3 border min-h-12 border-solid border-lighttextgray rounded-2xl mb-12 px-6 py-2">
        <form className="flex items-center" onSubmit={handleSubmit}>
          <textarea
            rows={1}
            placeholder="Message DiagnoAi..."
            value={textareaContent}
            onInput={(e) => {
              handleInputChange(e);
              adjustTextareaHeight(e);
            }}
            id="text"
            className="w-full h-12 bg-transparent outline-none border-transparent resize-none py-2"
          />
          <button type="submit" onClick={handleSubmit}>
            <img
              src={isTyping ? messageboxicondark : messageboxicon}
              alt="message bot icon"
              className="w-6 h-6"
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ActualMessageBox;
