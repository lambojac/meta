// Inside your React component
import React from 'react';
import './Main.css'; // Import your CSS file

const Main = () => {
  return (
    <div className="special-offer-section">
      <video className="background-video" autoPlay muted loop>
        <source src="/ten.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="offer-content">
        <h2>Special Offer</h2>
        <p className="big-text">Mix reality with<br/> Meta Quest 3</p>
        <p>Get Asgard's Wrath 2 free ($59.99 USD value)—and<br/> receive a 6-month trial to Meta Quest+ ($47.94 USD value)<br/> when you upgrade to 512GB.**</p>
        <button className="add-to-bag-button">Add to Bag</button>
        <a href="#learn-more" className="learn-more-link">Learn more ▶</a>
      </div>
    </div>
  );
};

export default Main;
