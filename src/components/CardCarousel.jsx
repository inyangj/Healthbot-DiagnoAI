import React, { useState } from 'react';
import msgimbox from "../assets/msgboxicon.png";
// import './CardCarousel.css';

const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      Image: {msgimbox},
      content: `I was so down and sick and did not have the funds and strength to visit the hospital.
      Went online and saw DiagnoAI. I put in my symptoms and it helped me figure out what was wrong.
      I am doing way better now because of the diagnosis. Thank you DiagnoAI.`,
      name: 'Zoe Grace',
      title: "CEO, ZapBank"
    },
    {
      Image: {msgimbox},
     
      content: `I was so down and sick and did not have the funds and strength to visit the hospital.
      Went online and saw DiagnoAI. I put in my symptoms and it helped me figure out what was wrong.
      I am doing way better now because of the diagnosis. Thank you DiagnoAI.`,
        name: 'Zoe Grace',
        title: "CEO, ZapBank"
    },
    {
      Image: {msgimbox},
      
      content: `I was so down and sick and did not have the funds and strength to visit the hospital.
      Went online and saw DiagnoAI. I put in my symptoms and it helped me figure out what was wrong.
      I am doing way better now because of the diagnosis. Thank you DiagnoAI.`,
      name: 'Mark Grayson',
      title: "CEO, ZapBank"
    },
  ];

  const showNextCard = () => {
    setCurrentIndex((currentIndex + 1) % cards.length);
  };

  const showPrevCard = () => {
    setCurrentIndex((currentIndex - 1 + cards.length) % cards.length);
  };

    return (
        <div className="bg-darkgray opacity-95 rounded-xl w-[60%] h-fit mb-20 lg:w-72">
          <div className="flex flex-col px-3 md:px-8 py-6 justify-center items-center gap-3 relative text-slate-400">
      <div className="card-container">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card ${index === currentIndex ? 'visible' : ''}`}
          >
            <img src={card.Image[0]} alt="" className="w-10 h-10 mx-auto mb-6" />
           
            <p className="text-white text-xs text-center max-w-xs">
              {card.content}
                </p>
                <div className='my-4 text-center space-y-3'>
                <h3 className='text-white text-sm'>{ card.name}</h3>
                <p className='text-lighttextgray text-[3px] md:text-xs'>{card.title}</p>
              </div>
          </div>
        ))}
                </div>
                
                
      <div className="dot-container">
        {cards.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>

      <button onClick={showPrevCard} className='text-xs hidden md:block absolute left-3 top-24'>&lt;</button>
      <button onClick={showNextCard} className='text-xs hidden md:block absolute right-3 top-24'> &gt;</button>
    </div>
      </div>

  );
};

export default CardCarousel;
