import { Link } from 'react-router-dom'
import IncDecBtn from './IncDecBtn'
import { useCartContext } from '../utils/CartContextProvider'
import { BiTrashAlt } from 'react-icons/bi'

const CartItem = ({c}) => {
    const {isProductInCart,dispatch} = useCartContext()
    
    const removeHandle = (e,poductId)=>{
        e.preventDefault()
        dispatch({type:"REMOVE",payload: poductId})
    }
    const HandleAdd = (e,productDetail) =>{
        e.preventDefault()
        dispatch({type:"ADD_TO_CART",payload: productDetail})
    }
    const HandleDec = (productDetail) =>{
        dispatch({type:"DECREMENT",payload: productDetail})
    }
    return ( 
        <>
        <div className='cart-product'>
            <Link to={`/products/${c.id}`}><div className="cart-image" style={{backgroundImage: `url(${c.image})`}}></div></Link>
            <div><Link to={`/products/${c.id}`}>{c.title.slice(0,20)}</Link><p>{c.category}</p></div>
        </div>
        <div className='cart-quantity'>
        <IncDecBtn
         decrement={HandleDec}
         isProductInCart={isProductInCart}
         addToCart={HandleAdd}
         productDetail={c}
         marginRight='auto'
        />
        <button className='removeBtn' onClick={(e)=>removeHandle(e,c.id)}>remove <BiTrashAlt size='20px'/> </button>
        </div>
        <span className='cart-price'>${c.price}</span></>
     );
}
 
export default CartItem;