import menu from "../assets/svg/menu.svg";
import logo from "../assets/svg/logoBlack.svg";
// import mainchatlogo from "../../assets/mainchatai.png";
import { useState, useEffect } from "react";
import MessageBox from '../components/chatComponent/MessageBox'
import SideNav from "../components/chatComponent/SideNav";
import iconhead from "../assets/iconhead.png";
import ChatComponent from "../components/chatComponent/ChatComponent";



const MainChat = ({ darkMode, chatList, setChatList }) => {
  const [isShown, setIsShown] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleModal = () => {
    setIsShown(!isShown);
  };

  return (
    <section className="px-6 pt-5 w-full">
      <header className="flex justify-between items-center mt-1 lg:mt-24">
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

      <ChatComponent  darkMode={darkMode} setIsSubmitted={setIsSubmitted} isSubmitted={isSubmitted}/>
      <MessageBox setChatList={setChatList} chatList={chatList} isNew={true} isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted}/>
    </section>
  );
};

export default MainChat;
