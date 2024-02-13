
import React from 'react';

const Main = () => {
  return (
    <div className="special-offer-section">
      <video className="background-video" autoPlay muted loop>
        <source src="./ten.mp4" type="video/mp4" />
        
        Your browser does not support the video tag.
      </video>
      <div className="offer-content">
        <h2>Special Offer</h2>
        <p>Mix reality with Meta Quest 3</p>
        <p>Get Asgard's Wrath 2 free ($59.99 USD value)—and receive a 6-month trial to Meta Quest+ ($47.94 USD value) when you upgrade to 512GB.**</p>
        <a href="#learn-more" className="learn-more-link">Learn more ▶</a>
        <button className="add-to-bag-button">Add to Bag</button>
      </div>
    </div>
  );
};

export default Main;
