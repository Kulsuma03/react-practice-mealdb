import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // console.log(newCartName);
    console.log(cart)
    // const food = cart.map(food => food.strTags)
   

    return (
        <div >
            <h3 className='cart-heading'>Food Quantity {cart.length}</h3>
            <div>
                <ol>{cart.map(food => 
                    <li className='cart-food' key={food.idMeal}>
                    <h4>{food.strMeal}</h4>
                    <img src={food.strMealThumb} alt="" />
                    </li>)} 
                </ol>
            </div>
        </div>
    );
};

export default Cart;