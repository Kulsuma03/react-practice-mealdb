import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Food.css'

const Food = ({food, handleAddToCart}) => {
    const {strMealThumb, strCategory, strInstructions,strYoutube} = food;
    return (
        <div className='single-food'>
            <img src={strMealThumb} alt="" />
            <h2 className='food-heading'>{strCategory}</h2>
            <p className='food-ins'>{strInstructions? strInstructions.slice(0, 130)+'...' : strInstructions}</p>
            <a className='youtube-link' href={strYoutube? strYoutube : 'Youtube link are not abailavle'}>Go Youtube</a>
            <button className='btn-cart' onClick={() => handleAddToCart(food)}>
                <p>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Food;