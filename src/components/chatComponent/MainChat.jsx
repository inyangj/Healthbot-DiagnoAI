import menu from '../../assets/svg/menu.svg'
import logo from '../../assets/svg/logoBlack.svg'
import mainchatlogo from '../../assets/mainchatai.png'
import { useState, useEffect } from "react"
import MessageBox from './MessageBox'
import SideNav from './SideNav'
import iconhead from '../../assets/iconhead.png'
import ChatComponent from './ChatComponent'


const MainChat = ({darkMode}) => {

  const [isShown, setIsShown] = useState(false)

 

  const handleModal = () => {
    setIsShown(!isShown)
  }

  return (
    <section className='px-6 pt-5 w-full'>
      <header className='flex justify-between items-center mt-1 lg:mt-24'>
        <img src={menu} alt="menu-icon" className='lg:hidden' onClick={handleModal} />
        {isShown &&
              (<SideNav handleModal={handleModal} />)
            }
        <img src={darkMode ? iconhead : logo } alt="logo-icon" className='mx-auto' />
        <div></div>
      </header>
  
        <MessageBox />
     
    </section>
  )
}

export default MainChat