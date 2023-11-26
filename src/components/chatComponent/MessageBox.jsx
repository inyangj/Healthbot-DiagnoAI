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

  return (
    

    <div className=' w-full relative flex flex-col justify-center items-center'>

      {
        isSubmitted ? (
          <div className='w-full'>
          {/* Render chat history */}
          {chatHistory.map((chat, index) => (
            <div key={index}
              className={`message ${chat.type === 'user' ? 'bg-blue-100' : 'bg-gray-200'}
             p-2 mb-2 rounded-lg max-w-md border border-solid border-slate-600 flex flex-row
             self-${chat.type === 'user' ? 'end' : 'start'}`}>
            {chat.message}
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