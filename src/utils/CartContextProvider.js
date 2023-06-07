import { createContext, useContext, useState } from "react";

const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    // adding to cart + inc button

    const addToCart=(e,product)=>{
        e.preventDefault()
        const productIndex = cart.findIndex((c) => c.id === product.id)
        const updatedCart = [...cart]
        if(productIndex > -1) //inc
        {
            updatedCart[productIndex].count++
            setCart(updatedCart)
        }
        else{//if doesn't exist add to cart
            setCart([...updatedCart,{...product,count:1}])
        }
    }


    // write the functions you need for adding, removing, inc, dec

    return(
        <CartContext.Provider value={{cart,addToCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = ()=> useContext(CartContext)