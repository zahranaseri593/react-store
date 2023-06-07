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

    //decrement
    const decrement = (productId) =>{
        const productIndex = cart.findIndex((c) => c.id === productId)
        const updatedCart = [...cart]
        if(updatedCart[productIndex].count > 1){//if more than 1 decr
            updatedCart[productIndex].count--
            setCart(updatedCart)
        }else{
            //remove item
            const removedIndex = cart.filter(c => c.id !== productId);
            setCart(removedIndex)
        }
    }

    //is the product in cart? if yes; return amount
    const isProductInCart = (productId)=>{
        const pIndex = cart.findIndex((c)=> c.id === productId)
        if(pIndex> -1) return cart[pIndex].count
        else return false
    }

    // write the functions you need for adding, removing, inc, dec

    return(
        <CartContext.Provider value={{cart,addToCart,decrement,isProductInCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = ()=> useContext(CartContext)