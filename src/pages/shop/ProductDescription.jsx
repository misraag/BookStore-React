import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import "./ProductDescription.css"; // Import the CSS file

const ProductDescription = () => {
  const { id } = useParams();
  const { addToCart, cartItems } = useContext(ShopContext);
  const product = PRODUCTS.find((product) => product.id === parseInt(id));

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
        <div className="description">
            <h4>Product Description</h4>
          <p>{product.description}</p>
        </div>
        <h3>Rs.  {product.price}</h3>
        <button onClick={() => addToCart(id)}>
          Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
        </button>
      </div>
    </div>
  );
};

export default ProductDescription;
