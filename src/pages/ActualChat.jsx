import menu from "../assets/svg/menu.svg";
import logo from "../assets/svg/logoBlack.svg";
// import mainchatlogo from '../../assets/mainchatai.png'
import { useState, useEffect } from "react";
import ActualMessageBox from "../components/chatComponent/ActualMessageBox";
import SideNav from "../components/chatComponent/SideNav";
import iconhead from "../assets/iconhead.png";
import { fetchChatMessages } from "../utility/ChatApi";
import { useParams } from "react-router-dom";

const ActualChat = ({
  darkMode,
  chatList,
  setChatList,
//   chatHistory,
//   setChatHistory,
//   isTyping,
//   setIsTyping,
}) => {
  const [isShown, setIsShown] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);


  

  const { id } = useParams();
  console.log("id from chat layout", id);

  useEffect(() => {
    const fetchMessages = async () => {
      const messages = await fetchChatMessages(id);
      console.log("messages", messages);
      setChatHistory(messages.data);
      console.log("chatHistory from ACTUAL MESSAGE BOX", chatHistory);
    };

    fetchMessages();
  }, [id]);
  
  console.log('chatHistory from ActualChat',chatHistory)

  const handleModal = () => {
    setIsShown(!isShown);
  };

  return (
    <section className="px-6 pt-5 w-full">
      <header className="flex justify-between items-center mt-1 lg:mt-8">
        <img
          src={menu}
          alt="menu-icon"
          className="lg:hidden"
          onClick={handleModal}
        />
        {isShown && <SideNav handleModal={handleModal} />}
        <img
          src={darkMode ? iconhead : logo}
          alt="logo-icon"
          className="mx-auto"
        />
        <div></div>
      </header>

     

      <div className="w-full min-h-screen flex flex-col">
        {chatHistory?.map((chat, index) => (
          <div
            key={index}
            className={`message ${chat.role === 'user' ? darkMode? 'bg-[#333]' : 'bg-[#D9F3EA]' : darkMode? 'bg-[#032f20]' : 'bg-[#F3F3F3]'}
             p-2 mb-2 rounded-s-[16px] max-w-md border border-solid border-slate-600 flex flex-row
             self-${chat.role === "user" ? "end" : "start"} `}
          >
            <p className="text-black">{chat.content}</p>
          </div>
        ))}
        {isTyping && (
          <div
            className={`message bg-[#F3F3F3] p-2 mb-2 rounded-lg max-w-md border border-solid border-slate-600 flex flex-row
            self-start`}
          >
            replying....
          </div>
        )}
      </div>

      <ActualMessageBox
        chatList={chatList}
        setChatList={setChatList}
        chatHistory={chatHistory}
        setChatHistory={setChatHistory}
        isNew={false}
        isTyping={isTyping}
        setIsTyping={setIsTyping}
      />
    </section>
  );
};

export default ActualChat;
