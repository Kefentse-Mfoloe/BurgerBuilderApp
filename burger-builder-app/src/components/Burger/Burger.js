import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import classes from './Burger.module.css'

const burger = (props) => {
    const keys = Object.keys(props.ingredients);
    const transformedKeysList = keys.map((ingredKey) => {
        return [...Array(props.ingredients[ingredKey])].map((el) => ingredKey)
    });
    const transformedIngredients = transformedKeysList.map((arr, index) => {
        return arr.map((el, ind) => <BurgerIngredient key={el + ind} type={el} />)
    });
    
    let ingredientsList = transformedIngredients.reduce((arr, el) => {
        return arr.concat(el)
    }, []);

    if(ingredientsList.length === 0){
        ingredientsList = <p>Please add ingredients to the burger</p>
    }

    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            { ingredientsList }
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;