import {ADD_TO_CART, REMOVE, ADD_QUANTITY, SUB_QUANTITY} from '../actions/action-types';

const initialState = {
    addedItems:[],
    total: 0

}

const cartReducer = (state = initialState, action)=>{

  if(action.type === ADD_TO_CART){
    let addedItem = action.beer;

    //check if the action beer exists in the addedItems
    let existed_item = state.addedItems.find(item => action.beer.id === item.id)
      if(existed_item) {
        addedItem.quantity += 1
        return {
          ...state,
          total: state.total + addedItem.price
        }
      } else {
        addedItem.quantity = 1;
        //calculating the total
        let newTotal = state.total + addedItem.price
        return {
          ...state,
          addedItems: [...state.addedItems, addedItem],
          total : newTotal
        }
      }
  }
  if(action.type === REMOVE){
    let itemToRemove= state.addedItems.find(item=> action.id === item.id)
    let new_items = state.addedItems.filter(item=> action.id !== item.id)

    //calculating the total
    let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
    return {
      ...state,
      addedItems: new_items,
      total: newTotal
    }
  }
  //INSIDE CART COMPONENT
  if(action.type=== ADD_QUANTITY){
    let addedItemIndex = state.addedItems.findIndex(item=> item.id === action.id)
    state.addedItems[addedItemIndex].quantity += 1

    let newTotal = state.total + state.addedItems[addedItemIndex].price
    return {
      ...state,
      total: newTotal
    }
  }
  if(action.type=== SUB_QUANTITY){
    let addedItem = state.addedItems.find(item=> item.id === action.id)

    //if the qt == 0 then it should be removed
    if(addedItem.quantity === 1){
      let new_items = state.addedItems.filter(item=>item.id !== action.id)
      let newTotal = state.total - addedItem.price
      return {
        ...state,
        addedItems: new_items,
        total: newTotal
      }
    }
    else {
      addedItem.quantity -= 1
      let newTotal = state.total - addedItem.price
      return {
        ...state,
        total: newTotal
      }
    }
  }

  else {
      return state
  }

}
export default cartReducer;
