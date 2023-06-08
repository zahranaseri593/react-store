import { Link } from 'react-router-dom'
import {useCartContext} from '../utils/CartContextProvider'
import CartItem from './CartItem'

const Cart = () => {
    const {state} = useCartContext()

    if(!state.cart.length) return (
    <div className='empty-cart'>
      <p>nothing in here...</p>
    </div>
    )
       
    return ( 
        <div className='cart-container'>
            <div>
               <h1>Cart</h1>
               <div className='cart-table'>
                  <h5>PRODUCT</h5><h5>QUANTITY</h5>
                  <h5>PRICE</h5>
               {/* products */}
                 {state.cart.map((c)=>(
                  <CartItem c={c}/>
                 ))}
               </div>
            </div>
            <div className='total-cost'>
               <div>
                  <h2>Total</h2>
                  <p>$ {Math.floor(state.total)}</p>
               </div>
               {/* calculate total considering counts */}
               <Link to='/transaction'>Purchase</Link>
            </div>
        </div>
     )
}
 
export default Cart;