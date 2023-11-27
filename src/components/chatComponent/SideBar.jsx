import React from 'react'
import Button from '../elements/Button'
import { FaMoon, FaSun } from 'react-icons/fa'

import logout from '../../assets/svg/logout.svg'
import profile from '../../assets/svg/profile.svg'
import trash from '../../assets/svg/trash.svg'
import trashLight from '../../assets/svg/trashLight.svg'
import profileLight from '../../assets/svg/profileLight.svg'
import logoutLight from '../../assets/svg/logoutLight.svg'
import Li from './Li'
import { Link } from 'react-router-dom'

const SideBar = ({ darkMode, toggleDarkMode, handleClick }) => {
  return (
    <aside className={`${darkMode ? '#fff' : '#000'} ${darkMode ? 'bg-[#282828]' : 'bg-[#fff]'} hidden  min-w-[18.5rem] pt-10 lg:grid border-r boreder-r-[#BDBDBD] h-screen fixed left-0 top-0`}>
      <Button className={` mx-6  h-fit`} onClick={handleClick}>+ New Chat</Button>
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