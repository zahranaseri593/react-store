import {useCartContext} from '../utils/CartContextProvider'

const Cart = () => {
    const {cart} = useCartContext()

    if(!cart.length) return <p>nothing in here</p>
       
    return ( 
        cart?.map( (c) => (
           <p>{c.title}</p> 
        ))
     )
}
 
export default Cart;
