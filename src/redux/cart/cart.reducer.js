import CART_ACTION_TYPES from "./cart.types"
import { addItemToCart, clearItem, removeItem } from "./cart.utils"

const INTIAL_STATE = {
   cartItems: []
}

const cartReducer = (state = INTIAL_STATE, action) => {
    switch (action.type) {
       case CART_ACTION_TYPES.ADD_ITEM:
           return{
               ...state,
               cartItems : addItemToCart(state.cartItems,action.payload)
           }

           case CART_ACTION_TYPES.CLEAR_ITEM:
           return{
               ...state,
               cartItems : clearItem(state.cartItems,action.payload)
           }

           case CART_ACTION_TYPES.REMOVE_ITEM:
           return{
               ...state,
               cartItems : removeItem(state.cartItems,action.payload)
           }
    
        default:
            return state
    }
}

export default cartReducer