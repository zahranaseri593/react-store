import { BiStar } from "react-icons/bi"
import { useCartContext } from "../utils/CartContextProvider"
import IncDecBtn from "./IncDecBtn"


const ProductDetail = ({productDetail}) => {
    const {isProductInCart,dispatch} = useCartContext()

    const HandleAdd = (e,productDetail) =>{
        e.preventDefault()
        dispatch({type:"ADD_TO_CART",payload: productDetail})
    }
    const HandleDec = (productDetail) =>{
        dispatch({type:"DECREMENT",payload: productDetail})
    }
    
    return (
        <div className="product-container">
            <div className="product-img" style={{backgroundImage: `url(${productDetail.image})`}}></div>
            <div className="product-desc">
                <h3>{productDetail.title}</h3>
                <span className='rating'><BiStar size='18'/> 4.5</span>
                <span className='price'>${productDetail.price}</span>
                <p className="cat">{productDetail.category}</p>
                <p className="desc">{productDetail.description.slice(0,200)}</p>
                {isProductInCart(productDetail.id) ? 
                    <IncDecBtn 
                    decrement={HandleDec}
                    isProductInCart={isProductInCart}
                    addToCart={HandleAdd}
                    productDetail={productDetail} /> 
                    :
                    <a href="/" onClick={(e)=>HandleAdd(e,productDetail)}>Add to cart</a>
                }
            </div>
        </div>
     );
}
 
export default ProductDetail;