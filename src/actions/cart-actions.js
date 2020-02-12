import {ADD_TO_CART,REMOVE,SUB_QUANTITY,ADD_QUANTITY} from './action-types';

export const addToCart = (beer)=>{
  return {
    type: ADD_TO_CART,
    beer
  }
}

//remove beer action
export const remove=(id)=>{
    return{
        type: REMOVE,
        id
    }
}
//subtract qt action
export const subtractQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}
