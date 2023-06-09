import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { LineWave } from "react-loader-spinner";
import Product from "./Product";
import ProductDetail from "./ProductDetail";

const ProductPage = () => {
    const [productDetail, setProductDetail] = useState(null); //fetched product
    const [products, setProducts] = useState('');//suggestions

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

    if(!productDetail) {
        return(
        <div className='spinner'>
        <LineWave
            height="100"
            width="100"
            color="#1f2937"
            ariaLabel="line-wave"
        /></div>)}

    return ( 
        <div className="product-page">
            <ProductDetail
                productDetail={productDetail}  
            />

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