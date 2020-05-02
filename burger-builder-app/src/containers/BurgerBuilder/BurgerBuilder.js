import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.3,
    bacon: 0.8,
    cheese: 0.5,
    meat: 1.2
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 0,
        purchaseable: false,
        purchasing: false
    }
    
    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const oldTotalPrice = this.state.totalPrice;
        
        const increasedCount = oldCount + 1;
        const increasedTotalPrice = oldTotalPrice + INGREDIENT_PRICES[type];

        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = increasedCount;

        this.setState({ingredients: updatedIngredients, totalPrice: increasedTotalPrice});
        this.updatePurchaseableHandler(increasedTotalPrice);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0)
            return;
        const oldTotalPrice = this.state.totalPrice;
        
        const decreasedCount = oldCount - 1;
        const decreasedTotalPrice = oldTotalPrice - INGREDIENT_PRICES[type];

        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = decreasedCount;

        this.setState({ingredients: updatedIngredients, totalPrice: decreasedTotalPrice});
        this.updatePurchaseableHandler(decreasedTotalPrice);
    }

    updatePurchaseableHandler = (totalPrice) => {
        this.setState({purchaseable: totalPrice > 0});
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    cancelPurchaseHandler = () => {
        this.setState({purchasing: false});
    }

    continuePurchaseHandler = () => {
        alert('To be continued...');
        this.setState({purchasing: false});
    }

    render(){
        const disabledInfo = { ...this.state.ingredients };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return(
            <Aux>
                <Modal show={this.state.purchasing}
                        closeModal={this.cancelPurchaseHandler}>
                    <OrderSummary ingredients={this.state.ingredients}
                                    purchaseCancelled={this.cancelPurchaseHandler}
                                    purchaseContinued={this.continuePurchaseHandler}
                                    totalPrice={this.state.totalPrice} />
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls addIngredient={this.addIngredientHandler}
                                removeIngredient={this.removeIngredientHandler}
                                disabled={disabledInfo}
                                totalPrice={this.state.totalPrice}
                                purchaseable={!this.state.purchaseable}
                                purchasing={this.purchaseHandler} />
            </Aux>
        )
    }
}

export default BurgerBuilder;