import React, { useState, useEffect } from 'react';
import messageboxicon from '../../assets/messageboxicon.png';
import messageboxicondark from '../../assets/messageboxicondark.png';
import { createChat } from '../../utility/ChatApi';
import ChatComponent from './ChatComponent';

const MessageBox = () => {
  const [textareaContent, setTextareaContent] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [id, setId] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [originalMessage, setOriginalMessage] = useState({});
  const [responseMessage, setResponseMessage] = useState({});
  const [chat, setChat] = useState({});

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
  
      
    if (userData) {
      setId(userData.data.id)
    } 

    
  }, []);

  // const simulateBotResponse = async (userMessage) => {
    
  //     const botResponse = `Bot: Thanks for your message - "${userMessage}"`;
  //     setChatHistory([...chatHistory, { type: 'user', message: userMessage }, { type: 'bot', message: botResponse }]);
  //     setIsTyping(false);

  //     // Make a POST request to the API
  //     const chat = {
  //       user: '6561ae8c990f150d3c687d7f',
  //       content: userMessage,
  //     };

  //     const response = await createChat(chat);

  //     console.log('API Response:', response.data);
     
   
  // };

  


  const handleSubmit = async (event) => {
    event.preventDefault();
    const userMessage = textareaContent.trim();

    setIsSubmitted(true);
    setIsTyping(true);
    if (userMessage !== '') {
   
      const chatData = {
        user: id,
        content: userMessage,
      };
      
      const response = await createChat(chatData);
      const {originalMessage, responseMessage, chat} = response.data.data;
      setOriginalMessage(originalMessage);
      setResponseMessage(responseMessage);
      setChat(chat);
      setChatHistory([...chatHistory, { role: originalMessage?.role, message: originalMessage?.content }, { role: responseMessage?.role, message: responseMessage?.content }]);
      

      console.log('API Response:', response.data);
      setTextareaContent('');
      const textarea = document.getElementById('text');
      textarea.style.height = 'auto';

      // Simulate bot response
     
      console.log(originalMessage, responseMessage, chat);
    }
  };


  const handleInputChange = (event) => {
    const content = event.target.value;
    setTextareaContent(content);
    setIsTyping(content.length > 0);
  };


  const adjustTextareaHeight = (event) => {
    const textarea = event.target;
    textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight + 2) + 'px';
  };

  return (
    

    <div className=' w-full relative flex flex-col justify-center items-center'>

      {
        isSubmitted ? (
          <div className='w-full min-h-screen flex flex-col'>
          {/* Render chat history */}
          {chatHistory.map((chat, index) => (
            <div key={index}
              className={`message ${chat.role === originalMessage.role ? 'bg-blue-100' : 'bg-gray-200'}
             p-2 mb-2 rounded-lg max-w-md border border-solid border-slate-600 flex flex-row
             self-${chat.role === originalMessage.role ? 'end' : 'start'}`}>
           {isTyping ? (
            chat.message
           ):(
             <img src={messageboxicon} alt="spinner" />
           ) } 
          </div>
          ))}
        </div>
        ) : (
          <ChatComponent />
        )
      }
     
      
    <div className='w-[90%] lg:w-2/3 border min-h-12 border-solid border-lighttextgray rounded-2xl mb-12 px-6 py-2'>
        <form className='flex items-center' onSubmit={handleSubmit}>
        <textarea
        rows={1}
        placeholder='Message DiagnoAi...'
        value={textareaContent}
        onInput={(e) => {
          handleInputChange(e);
          adjustTextareaHeight(e);
        }}
        id="text"
            className='w-full h-12 bg-transparent outline-none border-transparent resize-none py-2'
            
      />
          <button type='submit' onClick={handleSubmit}>
          <img
        src={isTyping ? messageboxicondark : messageboxicon}
        alt="message bot icon"
            className='w-6 h-6'
      />
      </button>
      </form>
    </div>
    </div>
  );
};


export default MessageBox;