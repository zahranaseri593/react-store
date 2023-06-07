import {useCartContext} from '../utils/CartContextProvider'
import CartItem from './CartItem'

const Cart = () => {
    const {cart} = useCartContext()

    if(!cart.length) return <p>nothing in here</p>
       
    return ( 
        <div className='cart-container'>
            <div>
               <h1>Cart</h1>
               <div className='cart-table'>
                  <h5>PRODUCT</h5><h5>QUANTITY</h5>
                  <h5>PRICE</h5>
               {/* products */}
                 {cart.map((c)=>(
                  <CartItem c={c}/>
                 ))}
               </div>
            </div>
            <div className='total-cost'>
               {/* calculate total considering counts */}
            </div>
        </div>
     )
}
 
export default Cart;