import { BiStar } from "react-icons/bi";
import sampleProduct from '../assets/sample.jpg';

const ProductPage = () => {
    return ( 
        <div className="product-page">
            <div className="product-container">
                <div className="product-img" style={{backgroundImage: `url(${sampleProduct})`}}></div>
                <div className="product-desc">
                    <h3>Blazer Jacket</h3>
                    <span className='rating'><BiStar size='18'/> 4.5</span>
                    <span className='price'>$12</span>
                    <p className="cat">Women's clothing</p>
                    <p className="desc">descr Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, ex.</p>
                    <a href="/">Add to cart</a>
                </div>
            </div>

            <div className="related-products">
                <h2>Related Products</h2>
                <div>
                    {/*<Product p={p} /> */}
                    <p>product</p>
                    <p>product</p>
                    <p>product</p>
                </div>
            </div>
        </div>
        
     );
}
 
export default ProductPage;