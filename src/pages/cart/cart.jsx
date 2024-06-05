import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

import "./cart.css";
export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="shopping-cart">
      {totalAmount > 0 && (
        <div className="cart">
              
              <div className="carts no-scrollbars">
                <h1>Your Cart Items</h1>
                  {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                      return <CartItem data={product} />;
                    }
                  })}
              </div>

              <div className="checkout">
                <div>
                <p className="cart-total"> Subtotal: Rs.  {totalAmount} </p>
                </div>
                <div>
                <button onClick={() => navigate("/")}> Continue Shopping </button>
                <button
                  onClick={() => {
                    checkout();
                    navigate("/checkout");
                  }}
                >
                  {" "}
                  Checkout{" "}
                </button>
                </div>
              </div>
        </div>
      )}
      {totalAmount <= 0 && <h1> Your Shopping Cart is Empty</h1>}
    </div>
  );
};
