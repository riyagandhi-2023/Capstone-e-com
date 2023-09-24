/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const CartContext = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const existingItemIndex = cart.findIndex((item) => item.id === product.id);
        if (existingItemIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingItemIndex].quantity++;
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (productId) => {
        const updatedCart = cart.filter((item) => item.id !== productId);
        setCart(updatedCart);
    };

    const adjustQuantity = (productId, quantity) => {
        const updatedCart = cart.map((item) =>
            item.id === productId ? { ...item, quantity } : item
        );
        setCart(updatedCart);
    };

    const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>
                        {item.name} - ${item.price} x {item.quantity}
                        <button onClick={() => adjustQuantity(item.id, item.quantity - 1)}>-</button>
                        <button onClick={() => adjustQuantity(item.id, item.quantity + 1)}>+</button>
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <div className="cart-total">
                Total: ${cartTotal.toFixed(2)}
            </div>
        </div>
    );
};

export default CartContext;
