import { useEffect, useState } from 'react';

import { floatingSpices2 } from '../../helpers/images';

import classes from './RandomMealPicker.module.css';

const RandomMealPicker = () => {
    const [randomRecipe, setRandomRecipe]=useState(null);
    const [loading, setIsLoading]=useState(true);
    useEffect(()=>{
        const fetchRandomRecipe= async ()=>{
            try{
                const response=await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
                const data=await response.json();
                console.log(data.meals[0]);
                setRandomRecipe(data.meals[0]);
                setIsLoading(false);
            }
            catch (error){
                console.error(error);
                setIsLoading(false);
            }
        }
        fetchRandomRecipe();
    },[])
    
  return (
    <div className={classes.randomMealPickerSection} style={{ backgroundImage: `url(${floatingSpices2})`, backgroundRepeat: 'no-repeat', backgroundSize:'contain', backgroundPosition: 'right'}}>
        <div className={classes.sectionHeading}>Choose Random Recipe</div>
        {
            loading && <div className={classes.loadingText}>Ohh...Wait it's Cooking.</div>
        }
        {
            randomRecipe && !loading && <div className={classes.randomMeal}>
                <img src={randomRecipe.strMealThumb} className={classes.randomFoodImage} alt='Random food'/>
                <div>
                    <div className={classes.dishName}>{randomRecipe.strMeal}</div>
                    <div className={classes.dishCategory}>Category: {randomRecipe.strCategory}</div>
                    <button className={classes.button}>Cook Now</button>
                </div>
            </div>
        }
    </div>
  )
}

export default RandomMealPicker;