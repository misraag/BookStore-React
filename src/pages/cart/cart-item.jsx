import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, productName, price, productImage, author } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <div className="cart-img">
        <img src={productImage} />
      </div>

      <div className="cart-description">
        <div>
        <p className="cart-name">
          {productName}
        </p>
        <p className="cart-author">by {author}</p>
        <p className="cart-instock">In Stock</p>
        </div>
        <div>
        <p className="cart-price"> Price: Rs.{price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
          </div>
        </div>
      </div>
    </div>
  );
};
