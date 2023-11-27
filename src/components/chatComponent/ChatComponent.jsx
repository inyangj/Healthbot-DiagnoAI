import menu from '../../assets/svg/menu.svg'
import logo from '../../assets/svg/logoBlack.svg'
import mainchatlogo from '../../assets/mainchatai.png'
import { useState, useEffect } from "react"
import MessageBox from './MessageBox'
import SideNav from './SideNav'
import iconhead from '../../assets/iconhead.png'
import { createChat } from '../../utility/ChatApi'

const data = [
  'I feel dizzy and I have a slight headache now and then',
  'Elevated body temperature, often a sign of infection',
  'Feeling of extreme tiredness or lack of energy',
  'Pain or irritation in the throat, often worsened by swallowing',
  'Feeling the urge to vomit or discomfort in the stomach',
  'Repetitive expelling of air from the lungs, common in respiratory infections',
];


const ChatComponent = ({ darkMode,isSubmitted, setIsSubmitted }) => {
    const [userName, setUserName] = useState('');
    

    const handleSubmit = async ( text) => {
 
      const userMessage = text;
  
      setIsSubmitted(true);
      if (userMessage !== "") {
        const userData = JSON.parse(localStorage.getItem("userData"));
  
        const chatData = {
          user: userData.data.id,
          content: userMessage,
        };
  
        const response = await createChat(chatData);
        const {

          chat: chatResponse,
        } = response.data.data;
      
  
        window.location.href = `/chat/${chatResponse.id}`;
      
      }
    };
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('userData'));
        const storedUserName = storedUser ? storedUser.data.fullName : '';
        if (storedUserName) {
          setUserName(storedUserName);
        }
      })

    return (
        <>
        <div className='w-fit flex justify-center relative mx-auto'>
          <img src={mainchatlogo} className='w-72 block mx-auto lg:w-full lg:mx-auto' />
          <div className='font-AeonikTRAIL_Regular w-1/2 bg-[#D9F3EA] p-4 rounded-b-[1.8rem] rounded-l-[1.8rem] text-textprimary text-[0.6rem] absolute top-36 -left-8 shadow-xl  shadow-l-xl sm:-left-8 md:p-4 md:-left-12 lg:text-[1.1rem] lg:-left-16  lg:top-52'>
            <p>Hi, {userName}, how are you</p>
            {isSubmitted ?(
              <p>Fetching your answers</p>
            ):(
              <div>
                <p>feeling today?</p>
                {/* <p>a few common symptoms</p>
                <p>that you might be feeling</p> */}
              </div>
            )}
          </div>
       </div>

         <div className='font-AeonikTRAIL_Regular flex flex-row gap-6 w-full flex-wrap justify-center mb-24'>
        {/* so here we are showing possible chat symptoms for the potential users */}
          {data.map((text, index) => (
            <p  key={index} onClick={(e) => {
              handleSubmit(text);
            }}
                className={`${darkMode ? 'bg-[#333]':'bg-[rgb(246,247,248)]'}
                ${darkMode ? 'text-white' : 'text-[#282828]'} 
                w-[21rem] px-2 py-3 rounded-xl font-AeonikTRAIL_Regular`}>
              {text}
            </p>
          ))}
        </div>
        </>
    )

}

export default ChatComponent