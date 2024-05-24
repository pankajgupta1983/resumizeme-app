import React, { Fragment, useEffect, useState } from "react";
import { ReactComponent as Resumizeme } from '../../assets/images/Resumizeme_logo.svg';
import { ReactComponent as FileIcon } from '../../assets/images/file_icon.svg';
import { ReactComponent as SearchIcon } from '../../assets/images/search_icon.svg';
import { ReactComponent as BoardsIcon } from '../../assets/images/board_icon.svg';
import { ReactComponent as AddIcon } from '../../assets/images/add_icon.svg';
import { ReactComponent as FooterIcon } from '../../assets/images/fotter_img.svg';
import { ReactComponent as SettingIcon } from '../../assets/images/setting_icon.svg';
import { ReactComponent as MenuIcon } from '../../assets/images/menu-icon.svg';
import { ReactComponent as CloseIcon } from '../../assets/images/close-icon.svg';
import { myBoards, templates } from "./sidebarInfo";
import './sidebar.css';


const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1080);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <Fragment>
      {isMobile && (
        <button className="toggle-button" onClick={toggleSidebar}>
          {showSidebar ? <CloseIcon /> : <MenuIcon />}
        </button>
      )}

      <div className={`sidebar-wrapper ${isMobile ? 'mobile' : ''} ${showSidebar ? 'show' : ''}`} >
        <div className="middle-section">
          <div className="header-logo">
            <Resumizeme />
          </div>
          <div className="template-wrapper">
            <p><FileIcon /> My templates</p>
            <p><SearchIcon /> Search</p>
          </div>

          <ul className="menu-list">
            {
              templates?.map(item => {
                return (
                  <li key={item.id}>
                    <img src={item.icon} alt={item.icon} />
                    <span className="menu-title">{item.title}</span>
                  </li>
                )
              })
            }
          </ul>

          <div className="template-wrapper menu-list-spread">
            <p><BoardsIcon />My boards </p> <AddIcon />
          </div>

          <ul className="menu-list">
            {
              myBoards?.map(item => {
                return (
                  <li key={item.id}>
                    <img src={item.icon} alt={item.icon} />
                    <span className="menu-title">{item.title}</span>
                  </li>
                )
              })
            }
          </ul>
        </div>

        <div className="footer-section">
          <div className="user-profile">
            <FooterIcon />
            <p>Carla</p>
          </div>
          <SettingIcon />
        </div>

      </div>

    </Fragment>
  );
};

export default Sidebar;
