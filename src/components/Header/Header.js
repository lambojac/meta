import React, { useState } from 'react';
import { FaMeta } from "react-icons/fa6";
import "./Header.css"
import { CiSearch } from "react-icons/ci";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { CgProfile } from "react-icons/cg";


const Header = () => {
  const [showQuestMenu, setShowQuestMenu] = useState(false);
  const [showRayBanMenu, setShowRayBanMenu] = useState(false);
  const [showAppsGamesMenu, setShowAppsGamesMenu] = useState(false);
  const [showSupportMenu, setShowSupportMenu] = useState(false);

  const handleHover = (menu, setShowMenu) => {
    // Handle hover logic here
    setShowQuestMenu(false);
    setShowRayBanMenu(false);
    setShowAppsGamesMenu(false);
    setShowSupportMenu(false);
    setShowMenu(true);
  };

  const handleMouseLeave = () => {
    // Handle mouse leave logic here
    setShowQuestMenu(false);
    setShowRayBanMenu(false);
    setShowAppsGamesMenu(false);
    setShowSupportMenu(false);
  };

  return (
    <div className="header">
      <div className="logo" >
        <FaMeta/>
      </div>
      <div>Meta</div>
      <div className="nav-item" onMouseEnter={() => handleHover('quest', setShowQuestMenu)}>
        <span>Meta Quest</span>
        {showQuestMenu && (
          <div className="submenu" onMouseLeave={handleMouseLeave}>
            {/* Quest submenu content */}
          </div>
        )}
      </div>
      <div className="nav-item" onMouseEnter={() => handleHover('rayBan', setShowRayBanMenu)}>
        <span>Ray-Ban|Meta</span>
        {showRayBanMenu && (
          <div className="submenu" onMouseLeave={handleMouseLeave}>
           <ul className='ul-list'>
            <li>Ray-Ban | Meta overview</li>
            <li>Shop all</li>
            <li>Wayfarer</li>
            <li>Headliner</li>
           </ul>
          </div>
        )}
      </div>
      <div className="nav-item" onMouseEnter={() => handleHover('appsGames', setShowAppsGamesMenu)}>
        <span>Apps and Games</span>
        {showAppsGamesMenu && (
          <div className="submenu" onMouseLeave={handleMouseLeave}>
            <ul className='ul-list'>
            <li>Shop all</li>
            <li>Social Gaming</li>
            <li>Fitness</li>
           </ul>
           <ul class="right-direction">
            <li>Entertainment</li>
            <li>productivity</li>
            <li>mixed reality</li>
            <li>meta quest +</li>
           </ul>
          </div>
        )}
      </div>
      <div className="nav-item">About Meta</div>
      <div className="nav-item" onMouseEnter={() => handleHover('support', setShowSupportMenu)}>
        <span>Support</span>
        {showSupportMenu && (
          // Inside your React component
<div className="submenu" onMouseLeave={handleMouseLeave}>
  <div className="submenu-column">
    <h3>Store and Device Help Centers</h3>
    <ul>
      <li>Find order</li>
      <li>Meta Quest and Quest Pro</li>
      <li>Meta Portal</li>
      <li>Smart Glasses</li>
    </ul>
  </div>
  <div className="submenu-column">
    <h3>Meta Help Center</h3>
    <ul>
      <li>Meta Help Center</li>
      <li>Accounts Center</li>
      <li>Meta Pay</li>
      <li>Policies</li>
      <li>Connected Experiences</li>
    </ul>
  </div>
  <div className="submenu-column">
    <h3>App Help Centers</h3>
    <ul>
      <li>Meta Horizon</li>
      <li>Facebook</li>
      <li>Messenger</li>
      <li>Instagram</li>
      <li>WhatsApp</li>
      <li>Workplace</li>
    </ul>
  </div>
</div>

        )}
      </div>
    
<div className="search-box">
<div className="search-icon">
<CiSearch/>
  </div>

  <input type="text" placeholder="Search Meta Store" />
 
</div>

      <div className="icons">
      <div className="icon">
  <LiaShoppingBagSolid />
</div>
<div className="icon">
  <CgProfile />
</div>
      </div>
    </div>
  );
};

export default Header;
