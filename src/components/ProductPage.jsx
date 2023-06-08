import { BiStar } from "react-icons/bi";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { LineWave } from "react-loader-spinner";
import Product from "./Product";
import {useCartContext} from '../utils/CartContextProvider'
import IncDecBtn from "./IncDecBtn";

const ProductPage = () => {
    const [productDetail, setProductDetail] = useState(null); //fetched product
    const [products, setProducts] = useState('');//suggestions

    const {isProductInCart,dispatch} = useCartContext()
    
    const {id} = useParams()

    useEffect(()=>{
        
      const fetchResults = async () => {
          const data = await fetchFromAPI(`products/${id}`)
          setProductDetail(data)

          const relative = await fetchFromAPI(`products/category/${data.category}?limit=4`)
          setProducts(relative)
      }
      fetchResults()
    },[id])

    const HandleAdd = (e,productDetail) =>{
        e.preventDefault()
        dispatch({type:"ADD_TO_CART",payload: productDetail})
    }
    const HandleDec = (productDetail) =>{
        dispatch({type:"DECREMENT",payload: productDetail})
    }
    
    if(!productDetail) {
        return(
            <div className='spinner'>
            <LineWave
                height="100"
                width="100"
                color="#1f2937"
                ariaLabel="line-wave"
            />
            </div>
    )}

    return ( 
        <div className="product-page">
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

            <div className="related-products">
                <h2>Related Products</h2>
                <div>
                {products.length? 
                    products?.map((p)=> <Product p={p}/> )
                    : 
                    <LineWave
                        height="100"
                        width="100"
                        color="#1f2937"
                        ariaLabel="line-wave"
                    />}
                </div>
            </div>
        </div>
        
     );
}
 
export default ProductPage;