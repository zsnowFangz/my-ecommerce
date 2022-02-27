import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import productData from "../assets/fake-data/products";

import Helmet from "../components/Helmet";
import Button from "../components/Button";
import CartItem from "../components/CartItem";

import numberWithCommas from "../utils/numberWithCommas";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems.value);
  const [cartProducts, setCartProducts] = useState(
    productData.getCartItemsInfo(cartItems)
  );
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCartProducts(productData.getCartItemsInfo(cartItems));
    setTotalProducts(
      cartItems.reduce((total, item) => total + Number(item.quantity), 0)
    );
    setTotalPrice(
      cartItems.reduce(
        (total, item) => total + Number(item.quantity) * Number(item.price),
        0
      )
    );
  }, [cartItems]);
  return (
    <Helmet title="Shopping Cart">
      <div className="cart">
        <div className="cart__list">
          {cartProducts.map((item, index) => (
            <CartItem item={item} key={index} />
          ))}
        </div>
        <div className="cart__info">
          <div className="cart__info__txt">
            <p>{totalProducts} more products in your cart</p>
            <div className="cart__info__txt__price">
              Total ({totalProducts} item): {numberWithCommas(totalPrice)}
            </div>
          </div>
          <div className="cart__info__btn">
            <Button size="block">Check out</Button>
            <Link to="/catalog">
              <Button size="block">Keep buying</Button>
            </Link>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default Cart;
