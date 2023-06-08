import { createContext, useContext, useReducer } from "react";
import { INITIAL_STATE, cartReducer } from "./CartReducer";

const CartContext = createContext()

export const CartContextProvider = ({children}) => {

    const [state,dispatch] = useReducer(cartReducer, INITIAL_STATE)

    //if in cart return amount
    const isProductInCart = (productId)=>{
        const pIndex = state.cart.findIndex((c)=> c.id === productId)
        if(pIndex> -1) return state.cart[pIndex].count
        else return false
    }

    return(
        <CartContext.Provider value={{state,dispatch,isProductInCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = ()=> useContext(CartContext)