import React, { useState, useEffect} from 'react'
import menu from '../../assets/svg/menu.svg'
import logo from '../../assets/svg/logoBlack.svg'
import mainchatlogo from '../../assets/mainchatai.png'

const MainChat = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('userData'));
    const storedUserName = storedUser ? storedUser.data.fullName : '';
    if (storedUserName) {
      setUserName(storedUserName);
    }
  })
  return (
    <section className='px-6 pt-5 w-full'>
      <header className='flex justify-between items-center mt-24'>
        <img src={menu} alt="menu-icon" className='md:hidden' />
        <img src={logo} alt="logo-icon" className='md:mx-auto' />
        <div></div>
      </header>
      <div className='relative flex flex-col justify-center items-center'>
        <div className='w-fit flex justify-center relative'>
        <img src={mainchatlogo} className='w-72 lg:w-full' />
        <div className='font-AeonikTRAIL_Regular bg-[#D9F3EA] p-4 rounded-b-[1.8rem] rounded-l-[1.8rem] text-textprimary text-[0.6rem] absolute top-36 -left-8 shadow-xl  shadow-l-xl sm:-left-8 md:p-4 md:-left-12 lg:text-[1.1rem] lg:-left-16  lg:top-52'>
        <p>Hi, {userName}, how are you</p>
        <p>feeling today? Below are</p>
        <p>a few common symptoms</p>
        <p>that you might be feeling</p>
      </div>
       </div>

      <div className='font-AeonikTRAIL_Regular flex flex-row gap-6 w-full flex-wrap justify-center mb-24'>
            <p className='bg-[#F6F7F8] w-[21rem] px-2 py-3 font-AeonikTRAIL_Regular'>
            I feel dizzy and I have slight headache<br/>
            now and then
            </p>
            <p className='bg-[#F6F7F8] w-[21rem] px-2 py-3 font-AeonikTRAIL_Regular'>
            I feel dizzy and I have slight headache<br/>
            now and then
            </p>
            <p className='bg-[#F6F7F8] w-[21rem] px-2 py-3 font-AeonikTRAIL_Regular'>
            I feel dizzy and I have slight headache<br/>
            now and then
            </p>
            <p className='bg-[#F6F7F8] w-[21rem] px-2 py-3 font-AeonikTRAIL_Regular'>
            I feel dizzy and I have slight headache<br/>
            now and then
            </p>
            <p className='bg-[#F6F7F8] w-[21rem] px-2 py-3 font-AeonikTRAIL_Regular'>
            I feel dizzy and I have slight headache<br/>
            now and then
            </p>
            <p className='bg-[#F6F7F8] w-[21rem] px-2 py-3 font-AeonikTRAIL_Regular'>
            I feel dizzy and I have slight headache<br/>
            now and then
            </p>
        </div>  
        <div className='w-[90%] lg:w-2/3 border h-fit border-solid border-lighttextgray rounded-2xl mb-12'>
          <textarea placeholder='Message DiagnoAi...' type='text' id="text" className=' w-full h-12 bg-transparent outline-none border-transparent resize-none py-2 px-3'>
          </textarea>
        </div>  

      </div>
     
    </section>
  )
}

export default MainChat