import { Link } from "react-router-dom";

const Product = ({p}) => {


    return ( 
        <div className='product' key={p.id}>
            <Link to={`/products/${p.id}`}>
            <div className='product-image' style={{backgroundImage: `url(${p.image})`}}></div>
            <div><span>{p.title.slice(0,10)}</span><span className='font-bold'>${p.price}</span></div>
            </Link>
            <div>{p.category} <Link to={`/products/${p.id}`} className='product-btn'>view product</Link></div>
        </div>
     );
}
 
export default Product;