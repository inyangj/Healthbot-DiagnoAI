import React, { useState } from 'react'
import SideBar from '../components/chatComponent/SideBar'
import MainChat from '../components/chatComponent/MainChat'
import { useAuth } from '../contexts/AuthContext'
import { Navigate } from 'react-router-dom';

const Chat = () => {
    const [darkMode, setDarkMode] = useState(false);
    const { state } = useAuth();

    // If the user is not authenticated, redirect to the login page
    if (!state.isAuthenticated) {
      return <Navigate to="/login" />;
    }
  

    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    };


  return (
    <main className={`${darkMode ? ' text-white' : ' text-black'} ${darkMode ? 'bg-[#282828]' : 'bg-[#fff]'} flex w-full`}>
     
      <div className='min-h-screen hidden  min-w-[18.5rem] pt-10 lg:flex'></div>
      <SideBar  darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <MainChat darkMode={darkMode}  />
    </main>
  )
}

export default Chat