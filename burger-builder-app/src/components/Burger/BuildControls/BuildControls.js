import React from 'react'
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Meat', type: 'meat' }
]

const buildControls = (props) => {
    return(
        <div className={classes.BuildControls}>
            <p>Current price: R{props.totalPrice.toFixed(2)}</p>
            { controls.map((ctrl) => (
                <BuildControl key={ctrl.label} 
                            label={ctrl.label}
                            addIngredient={() => props.addIngredient(ctrl.type)}
                            removeIngredient={() => props.removeIngredient(ctrl.type)}
                            disabled={props.disabled[ctrl.type]} />  
            ))}
            <button className={classes.OrderButton} 
                    disabled={props.purchaseable}
                    onClick={props.purchasing}>ORDER NOW</button>
        </div>
    );
};

export default buildControls