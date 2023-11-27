import { useState, useEffect } from "react";
import React from 'react'
import add from '../../assets/add.png'
import history from '../../assets/history.png'
import profile from '../../assets/profile.png'
import moon from '../../assets/moon.png'
import helpcenter from '../../assets/helpcenter.png'
import logout from '../../assets/logout.png'
import { logout as signout } from "../../utility/ChatApi";





const SideNav = ({ darkMode, toggleDarkMode, handleModal }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Set a timeout to open the sidebar after the overlay is rendered
    const timeoutId = setTimeout(() => {
      setIsOpen(true);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  
    const storedUser = JSON.parse(localStorage.getItem('userData'));
    const userName =  storedUser.data.fullName ;
    const email =  storedUser.data.email ;
    


    
  const handleClose = () => {
    setIsOpen(false);
    // Optionally, you can add a delay before fully closing the sidebar
    setTimeout(() => {
      handleModal();
    }, 300); // Adjust the delay time as needed
  };
    
    
  return (
    <div>
      <div
        className={`w-full h-screen bg-lighttextgray opacity-60 fixed top-0 left-0 z-[1000] transition-opacity ${
          isOpen ? "opacity-60" : "opacity-0"
        }`}
        onClick={handleClose}
      ></div>
      <div
        className={`w-[17rem] bg-white fixed h-screen px-6 top-0 left-0 z-[1200] transform transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
          >
              <div className="py-6 border-b border-b-solid border-b-lighttextgray flex flex-row gap-3 items-center">
                  <h1 className="px-4 py-2 bg-textprimary text-white font-AeonikTRAIL_Bold w-fit rounded-full">{userName[0]}</h1>
                  <div>
                      <h3 className="font-AeonikTRAIL_Bold font-bold">{userName}</h3>
                      <p className="text-xs text-textgray">{email}</p>
                  </div>
              </div>

              <div className="py-6 border-b border-b-solid border-b-lighttextgray space-y-8">
                  <div className="flex flex-row gap-4 items-center">
                  <img src={add} alt="add icon" />
                  <h3 className="font-AeonikTRAIL_Regular">New chat</h3>
                  </div>

                  <div className="flex flex-row gap-4 items-center">
                  <img src={history} alt="history icon" />
                  <h3 className="font-AeonikTRAIL_Regular">History</h3>
                  </div>
                
              </div>
      
              <ul className="py-6 border-b border-b-solid border-b-lighttextgray space-y-8">
                  <li className="flex flex-row gap-4 items-center">
                  <img src={profile} alt="profile icon" />
                  <h3 className="font-AeonikTRAIL_Regular">Account Settings</h3>
                  </li>

                  <li className="flex flex-row gap-4 items-center">
                  <img src={moon} alt="add icon" />
                  <h3 className="font-AeonikTRAIL_Bold">Darkmode</h3>
                  </li>

                  <li className="flex flex-row gap-4 items-center">
                  <img src={helpcenter} alt="add icon" />
                  <h3 className="font-AeonikTRAIL_Bold">Help Center</h3>
                  </li>
                
              </ul>

              <div className="py-6" onClick={() => signout()}>
              <div className="flex flex-row gap-4 items-center">
                <img src={logout} alt="profile icon " />
                <h3 className="font-AeonikTRAIL_Regular">Logout</h3>
              </div> 
              </div>
      </div>
    </div>
  );
};

export default SideNav;
