import React, { useEffect, useState } from 'react'
import Button from '../elements/Button'
import { FaMoon, FaSun } from 'react-icons/fa'

import logout from '../../assets/svg/logout.svg'
import profile from '../../assets/svg/profile.svg'
import trash from '../../assets/svg/trash.svg'
import trashLight from '../../assets/svg/trashLight.svg'
import profileLight from '../../assets/svg/profileLight.svg'
import logoutLight from '../../assets/svg/logoutLight.svg'
import Li from './Li'
import { Link, Navigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchUserChat } from '../../utility/ChatApi'





const SideBar = ({ darkMode, toggleDarkMode }) => {
  const [chats, setChats] = useState([]);

  const {
    data,
    isLoading,
    error,
  } = useQuery({ queryKey: ["chats"], queryFn: fetchUserChat });

  useEffect(() => {
    if (data) {
      setChats(data.data);
    }
  }, [data]);

  if (isLoading) {
    return (
      <div>
        <img src={trash} className=" mx-auto" alt="icon" />
      </div>
    );
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  

  const handclick = () => {
    <Navigate to="/chat" />
  }
  return (
    <aside className={`${darkMode ? '#fff' : '#000'} ${darkMode ? 'bg-[#282828]' : 'bg-[#fff]'} hidden  min-w-[18.5rem] pt-10 lg:grid border-r boreder-r-[#BDBDBD] h-screen fixed left-0 top-0`}>
       
        <Button onClick={handclick} className={` mx-6  h-fit`}>+ New Chat</Button>

        <div>
          <ul>
            {chats.map((chat) => (
              <Link to={`/chat/${chat.id}`} key={chat.id}>
              <li >{chat.title}</li>

              </Link>
            ))}
          </ul>
        </div>
        
        <div className='self-end'>
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
    </aside>
  )
}

export default SideBar