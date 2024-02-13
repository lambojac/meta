// Inside your React component
import React from 'react';
import './Product.css'; // Import your CSS file

const Product = () => {
  return (
    <div>
      <div className="intro-text">
        <div>Shop Meta products</div>
        <div>The future of virtual reality,<br/> mixed reality and smart glasses is here.</div>
      </div>

      <div className="four-images-section">
        <div className="image-box">
          <img src="meta_quest_image.jpg" alt="Meta Quest" />
          <div className="text">
            <h3>Meta Quest</h3>
            <a href="https://www.meta.com/quest/" className="shop-now-button">Shop Now</a>
          </div>
        </div>

        <div className="image-box">
          <img src="meta_quest_accessories_image.jpg" alt="Meta Quest Accessories" />
          <div className="text">
            <h3>Meta Quest Accessories</h3>
            <a href="shop_now_url2" className="shop-now-button">Shop Now</a>
          </div>
        </div> 

        <div className="image-box">
          <img src="meta_quest_reality_image.jpg" alt="Meta Quest Reality" />
          <div className="text">
            <h3>Meta Quest Reality</h3>
            <a href="shop_now_url3" className="shop-now-button">Shop Now</a>
          </div>
        </div>

        <div className="image-box">
          <img src="ray_ban_meta_image.jpg" alt="Ray-Ban | Meta Smart Glasses" />
          <div className="text">
            <h3>Ray-Ban | Meta Smart Glasses</h3>
            <a href="shop_now_url4" className="shop-now-button">Shop Now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
