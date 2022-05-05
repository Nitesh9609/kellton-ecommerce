// Utility Functions which allows to keep files clean
export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id)

    // Find Method if it is true it will return true or it will return false
    if(existingCartItem){
        return cartItems.map( cartItem => 
        cartItem.id === cartItemToAdd.id ? 
        // if at all it is true i am adding new key:value pair quantity
        // Object {}
        {...cartItem, quantity: cartItem.quantity +1} 
        : 
        cartItem
        )
        // 
    }
    // else if there is no duplicate 
    // if there is a new item i am intializing quantity: to be 1
    return [...cartItems,{...cartItemToAdd, quantity:1}]
} 


export const clearItem = (cartItems,cartItemtoClear) => {
    const existingCartItem = cartItems.find(
                            cartItem => cartItem.id === cartItemtoClear.id )

    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemtoClear.id )
    }   
    return cartItems.map(cartItem => cartItem.id === cartItemtoClear.id   ? 
        {...cartItem, quantity: cartItem.quantity - 1} : cartItem )
}


export const removeItem = (cartItems,cartItemToRemove) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
}