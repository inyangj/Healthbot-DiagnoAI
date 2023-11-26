import React, { useState, useEffect} from 'react'
import menu from '../../assets/svg/menu.svg'
import logo from '../../assets/svg/logoBlack.svg'
import mainchatlogo from '../../assets/mainchatai.png'

const MainChat = () => {
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

      <div className='relative flex flex-col justify-center items-center'>
        <div className='w-fit flex justify-center relative'>
        <img src={mainchatlogo} className='w-72 lg:w-full' />
        <div className='font-AeonikTRAIL_Regular bg-[#D9F3EA] p-4 rounded-b-[1.8rem] rounded-l-[1.8rem] text-textprimary text-[0.6rem] absolute top-36 -left-8 shadow-xl  shadow-l-xl sm:-left-8 md:p-4 md:-left-12 lg:text-[1.1rem] lg:-left-16  lg:top-52'>
        <p>Hi, John Doe, how are you</p>
        <p>feeling today? Below are</p>
        <p>a few common symptoms</p>
        <p>that you might be feeling</p>
      </div>
       </div>

        <div className='font-AeonikTRAIL_Regular flex flex-row gap-6 w-full flex-wrap justify-center mb-24'>
        {/* so here we are showing possible chat symptoms for the potential users */}
          {data.map((text, index) => (
            <p  key={index}
                className={`${darkMode ? 'bg-[#333]' : 'bg-[rgb(246,247,248)]'}
                ${darkMode ? 'text-white' : 'text-[#282828]'} 
                w-[21rem] px-2 py-3 rounded-xl font-AeonikTRAIL_Regular`}>
              {text}
            </p>
          ))}
        </div>
        
        <MessageBox />

      </div>
     
    </section>
  )
}

export default MainChat