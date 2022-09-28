
import Food from '../Food/Food';
import './AllFood.css'

const AllFood = ({allFood, handleAddToCart}) => {
    // console.log(allFood)

   

    return (
        <div className='food-container'>
            {
                allFood.map(food => <Food 
                    key = {food.idMeal}
                    food={food}
                    handleAddToCart={handleAddToCart}
                    ></Food>)
            }
            

             
        </div>
    );
};

export default AllFood;