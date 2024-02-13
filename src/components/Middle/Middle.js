// Inside your React component
import React from 'react';
import './Middle.css'; // Import your CSS file

const Middle = () => {
  return (
    <div className="two-box-section">
      <div className="box">
        <div className="box-content">
          <h3>Dive into VR with Meta Quest 2</h3>
          <p>
            Experience the thrill of immersive games, fitness apps, and entertainment—now for $50 less.
          </p>
          <img src="img1.png" alt="VR Experience" />
          <div className="buttons">
            <button className="add-to-bag-button">Add to Bag</button>
            <a href="#learn-more" className="learn-more-link">Learn more ▶</a>
          </div>
        </div>
      </div>

      <div className="box">
        <div className="box-content">
          <h3>Do more in style with Ray-Ban | Meta</h3>
          <p>
            Next-generation smart glasses that blend an iconic look with cutting-edge technology.
          </p>
          <img src="/img2.png" alt="Ray-Ban | Meta" />
          <div className="buttons">
            <button className="shop-all-styles-button">Shop all styles</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middle;
