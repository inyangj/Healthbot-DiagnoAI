import menu from '../../assets/svg/menu.svg'
import logo from '../../assets/svg/logoBlack.svg'
import mainchatlogo from '../../assets/mainchatai.png'
import { useState, useEffect } from "react"
import MessageBox from './MessageBox'
import SideNav from './SideNav'
import iconhead from '../../assets/iconhead.png'


const data = [
  'I feel dizzy and I have a slight headache now and then',
  'I feel dizzy and I have a slight headache now and then',
  'I feel dizzy and I have a slight headache now and then',
  'I feel dizzy and I have a slight headache now and then',
  'I feel dizzy and I have a slight headache now and then',
  'I feel dizzy and I have a slight headache now and then',
];

const MainChat = ({darkMode}) => {

  const [isShown, setIsShown] = useState(false)
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('userData'));
    const storedUserName = storedUser ? storedUser.data.fullName : '';
    if (storedUserName) {
      setUserName(storedUserName);
    }
  })

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
