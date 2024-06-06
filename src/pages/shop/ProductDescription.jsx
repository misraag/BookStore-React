import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import "./ProductDescription.css"; // Import the CSS file

const ProductDescription = () => {
  const { id } = useParams();
  const { addToCart, cartItems } = useContext(ShopContext);
  const product = PRODUCTS.find((product) => product.id === parseInt(id));
  const [activeTab, setActiveTab] = useState("description");

  if (!product) {
    return <div>Product not found</div>;
  }

  const cartItemCount = cartItems[id] || 0;

  return (
    <div className="product-description">
      <div className="product-image">
        <img src={product.productImage} alt={product.productName} />
      </div>
      <div className="product-details">
        <h2>{product.productName}</h2>
        <div className="tabs">
          <button
            className={`tab-button ${activeTab === "description" ? "active" : ""}`}
            onClick={() => setActiveTab("description")}
          >
            Product Description
          </button>
          <button
            className={`tab-button ${activeTab === "details" ? "active" : ""}`}
            onClick={() => setActiveTab("details")}
          >
            Product Details
          </button>
        </div>
        {activeTab === "description" ? (
          <div className="description">
            <h3>About the Author</h3>
            {product.description.split('\n').map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        ) : (
          <div className="details">
            {product.details.split('\n').map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        )}
        <h3 className="description-price">Rs. {product.price}</h3>
        <button className="cartBtn" onClick={() => addToCart(id)}>
          Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
        </button>
      </div>
    </div>
  );
};

export default ProductDescription;
