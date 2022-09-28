
import React, {useEffect, useState } from 'react';
import AllFood from '../AllFood/AllFood';
import Cart from '../Cart/Cart';
import './Home.css'

const Home = () => {
    const [allFood, setAllFood] = useState([]);
    const [cart, setCart] = useState([])
    
    
    useEffect( () => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res => res.json())
        .then(data => {
            // console.log(data.meals);
            setAllFood(data.meals)
        })
        
        },[]);

        
        const handleAddToCart = (food) =>{
            
            const newCart = [...cart, food]
            setCart(newCart)
            
            // let newCart = [];
            // const exist = cart.find(meal => meal.idMeal === food.idMeal)
            //         if(!exist){
                   
            //          newCart = [...cart, food];
                    
            //         }else{
            //            const rest = cart.filter(meal => meal.idMeal !== food.idMeal);
                    
            //            newCart = [...rest, exist]
            //         }

            setCart(newCart)
        }
        

    return (
        <div className='main-container'>
            
            <div>
                <AllFood 
                allFood = {allFood}
                handleAddToCart = {handleAddToCart}
                ></AllFood>
            
            </div>
            <div className='cart'>
            <div className='cart-container'>
                <Cart 
                cart={cart}
                ></Cart>
            </div>
            </div>
            
            
        </div>
    );
};

export default Home;