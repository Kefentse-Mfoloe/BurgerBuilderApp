import React from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const keys = Object.keys(props.ingredients);
    const ingredientsList = keys.map((ingredKey) => (
        <li key={ingredKey}>
            <span style={{textTransform: 'capitalize'}}>{ingredKey}</span>: {props.ingredients[ingredKey]}
        </li>
    ))
    return(
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious order with the following ingredients</p>
            <ul>
                { ingredientsList }
            </ul>
            <p><strong>Total Price: R{props.totalPrice.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType='Danger' clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType='Success' clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    )
}

export default orderSummary;