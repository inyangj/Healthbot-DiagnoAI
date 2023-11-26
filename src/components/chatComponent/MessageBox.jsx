import React, { useState, useEffect } from 'react';
import messageboxicon from '../../assets/messageboxicon.png';
import messageboxicondark from '../../assets/messageboxicondark.png';



const MessageBox = () => {
  const [textareaContent, setTextareaContent] = useState('');
  const [isTyping, setIsTyping] = useState(false);


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

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));


    if (userData) {
      setId(userData.data.id);
    }
  }, []);
  const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const getAuthorizationHeader = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  return {
    Authorization: `Bearer ${userData.token}`,
  };
};

 async function createChat(chat) {
    const headers = getAuthorizationHeader();
    return await axios.post(` ${BASE_URL}/api/v1/messages`, chat, {
      headers,
    });
  }



  return (
    <div className='w-[90%] lg:w-2/3 border min-h-12 border-solid border-lighttextgray rounded-2xl mb-12 flex items-center px-6 py-2'>
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
      <img
        src={isTyping ? messageboxicondark : messageboxicon}
        alt="message bot icon"
        className='w-6 h-6'
      />
    </div>
  );
};


export default MessageBox;