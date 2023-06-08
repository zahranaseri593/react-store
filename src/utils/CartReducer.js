export const INITIAL_STATE = {
    cart: [],
    total: 0
}

export const cartReducer = (state,action) => {
    switch(action.type){
        case "ADD_TO_CART":{
            const productIndex = state.cart.findIndex((c) => c.id === action.payload.id)
            const updatedCart = [...state.cart]
            if(productIndex > -1) //increase
            {
                updatedCart[productIndex].count ++
            }
            else{ //add to cart
                updatedCart.push({...action.payload,count:1})
            }
            return{cart: updatedCart,
            total: state.total + action.payload.price}}

        case "DECREMENT":{
            const productIndex = state.cart.findIndex((c) => c.id === action.payload.id)
            let updatedCart = [...state.cart]
            
            if(updatedCart[productIndex].count > 1){//decrease
                updatedCart[productIndex].count--
            }else{//remove
                updatedCart = state.cart.filter(c => c.id !== action.payload.id);
            }
            return{
                cart: updatedCart,
                total: state.total - action.payload.price
            }
        }
        case "REMOVE":{
            const productIndex = state.cart.findIndex((c) => c.id === action.payload)
            let updatedCart = state.cart.filter(c => c.id !== action.payload)
            return {
                total: state.total - state.cart[productIndex].price,
                cart: updatedCart
            }}
        default:
            return state
    }
}