import React, { useEffect, useState } from "react";
import Button from "../elements/Button";
import { FaMoon, FaSun } from "react-icons/fa";

import logout from "../../assets/svg/logout.svg";
import profile from "../../assets/svg/profile.svg";
import trash from "../../assets/svg/trash.svg";
import trashLight from "../../assets/svg/trashLight.svg";
import profileLight from "../../assets/svg/profileLight.svg";
import logoutLight from "../../assets/svg/logoutLight.svg";
import Li from "./Li";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchUserChat } from "../../utility/ChatApi";

const SideBar = ({ darkMode, toggleDarkMode, chatList, setChatList }) => {
  // const [chats, setChats] = useState([]);
  

  // const { data, isLoading, error } = useQuery({
  //   queryKey: ["chats"],
  //   staleTime: 60000, // Set a reasonable stale time (in milliseconds)
  //   refetchInterval: 10000,
  //   queryFn: fetchUserChat,
  // });

  useEffect(() => {
    const fetchChats = async () => {
      const response = await fetchUserChat();

      setChatList(response.data);
    };
    fetchChats();
  }, []);

  return (
    <aside className={`${darkMode ? '#fff' : '#000'} ${darkMode ? 'bg-[#282828]' : 'bg-[#fff]'} hidden w-[19rem] pt-10 lg:block border-r boreder-r-[#BDBDBD] h-screen fixed overflow-y-auto overflow-x-hidden left-0 top-0`}>
        <div className='flex flex-col gap-10  w-[18.5rem] min-h-screen'>
        <Link to="/chat" className={` mx-6  h-fit`}>
        <Button className={`w-full`}>+ New Chat</Button>
      </Link>
        <div className='ml-6 mr-3'>
          <ul>
            {chatList.map((chat) => (
              <Link to={`/chat/${chat.id}`} key={chat.id}>
                <li className='my-6'>{chat.title?.replace(/"/g, '')}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className='w-[18.5rem]'>
            <hr className='w-full border-t border-t-[#BDBDBD]'/>
        <ul className='grid gap-6 p-6'>
            <Li src={darkMode ? trashLight : trash } alt="trah-icon" >Clear conversation</Li>
            <li className='flex gap-2 items-center' onClick={toggleDarkMode}>
            {darkMode ? <FaSun /> : <FaMoon />} {darkMode ? 'Light Mode' : 'Dark Mode'}
          </li>
            <Li src={darkMode ? profileLight : profile} alt="Account-icon" >Account Settings</Li>
            <Li src={darkMode ? logoutLight : logout} alt="logout-icon" >Logout</Li>
        </ul>
        </div>
          </div>
        </aside>
  );
};

export default SideBar;
