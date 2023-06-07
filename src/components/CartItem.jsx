import { Link } from 'react-router-dom'
import IncDecBtn from './IncDecBtn';
import { useCartContext } from '../utils/CartContextProvider';
import { BiTrashAlt } from 'react-icons/bi';

const CartItem = ({c}) => {
    const {addToCart,decrement,isProductInCart,removeFromCart} = useCartContext()
    
    return ( 
        <>
        <div className='cart-product'>
            <Link to={`/products/${c.id}`}><div className="cart-image" style={{backgroundImage: `url(${c.image})`}}></div></Link>
            <div><Link to={`/products/${c.id}`}>{c.title.slice(0,20)}</Link><p>{c.category}</p></div>
        </div>
        <div className='cart-quantity'>
        <IncDecBtn
         decrement={decrement}
         isProductInCart={isProductInCart}
         addToCart={addToCart}
         productDetail={c}
         marginRight='auto'
        />
        <button className='removeBtn' onClick={(e)=>removeFromCart(e,c.id)}>remove <BiTrashAlt size='20px'/> </button>
        </div>
        <span className='cart-price'>${c.price}</span></>
     );
}
 
export default CartItem;