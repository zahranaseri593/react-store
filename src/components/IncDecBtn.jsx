const IncDecBtn = ({marginRight,decrement,isProductInCart,addToCart,productDetail}) => {
    return ( 
        <div className="inCart" style={{marginRight}}>
            <span onClick={()=>decrement(productDetail.id)}>-</span>
                {isProductInCart(productDetail.id)}
            <span onClick={(e)=>addToCart(e,productDetail)} >+</span>
        </div>
     );
}
 
export default IncDecBtn;