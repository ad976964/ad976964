import React, { useState, useEffect } from "react";
import "./ProductDetails.css";
import plantImage from "./images/plant1.jpg"; // Import plant image

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(plantImage);

  // Change document title dynamically
  useEffect(() => {
    document.title = "Product Details - Nursery Shop";
  }, []);

  const handleBuyNow = () => {
    alert("Thank you for your purchase! 🌿");
  };

  return (
    <div className="product-container">
      {/* Product Image Section */}
      <div className="image-gallery">
        <img src={selectedImage} alt="Plant" className="main-image" />
        <div className="thumbnail-container">
          <img
            src={plantImage}
            alt="Thumbnail"
            className="thumbnail"
            onClick={() => setSelectedImage(plantImage)}
          />
          <img
            src="https://source.unsplash.com/150x150/?plant"
            alt="Thumbnail 2"
            className="thumbnail"
            onClick={() => setSelectedImage("https://source.unsplash.com/150x150/?plant")}
          />
        </div>
      </div>

      {/* Product Details Section */}
      <div className="product-info">
        <h1>🌿 Aloe Vera Plant</h1>
        <p className="price">💰 ₹299</p>
        <p><strong>Benefits:</strong> Improves air quality, easy to care for, and great for skin treatments.</p>
        <p><strong>Description:</strong> Aloe Vera is a medicinal plant known for its healing properties and aesthetic appeal.</p>

        {/* Quantity Selector */}
        <div className="quantity-selector">
          <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>

        {/* Buttons */}
        <div className="buttons">
          <button className="add-to-cart">🛒 Add to Cart</button>
          <button className="buy-now" onClick={handleBuyNow}>⚡ Buy Now</button>
        </div>

        {/* Customer Reviews */}
        <div className="reviews">
          <h2>Customer Reviews</h2>
          <p>⭐⭐⭐⭐⭐ - "Amazing plant! Super fresh and healthy!" - <strong>Priya</strong></p>
          <p>⭐⭐⭐⭐ - "Great quality and delivery on time!" - <strong>Rahul</strong></p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
