import { BiStar } from "react-icons/bi";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { LineWave } from "react-loader-spinner";
import Product from "./Product";

const ProductPage = () => {
    const [productDetail, setProductDetail] = useState(null);
    // const [products, setProducts] = useState();
    
    const {id} = useParams()

    useEffect(()=>{
        fetchFromAPI(`products/${id}`)
        .then((data)=> setProductDetail(data))
        .catch((err) => console.log(err))
    },[id])
    // useEffect(()=>{
    //     fetchFromAPI(`products/&limit=4`)
    //     .then((data)=> setProducts(data))
    //     .catch((err) => console.log(err))
    // },[])
    
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
                    <a href="/">Add to cart</a>
                </div>
            </div>

            <div className="related-products">
                <h2>Related Products</h2>
                <div>
                    {/* {products? .map((p)=>(
                        <Product p={p}/>
                    )) : <LineWave/>} */}
                </div>
            </div>
        </div>
        
     );
}
 
export default ProductPage;