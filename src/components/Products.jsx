import { RotatingLines } from 'react-loader-spinner';
import sampleProduct from '../assets/sample.jpg'

const Products = ({products}) => {
    if(!products) {
        return(
            <div className='spinner'>
            <RotatingLines
              strokeColor="pink"
              strokeWidth="5"
              animationDuration="0.75"
              width="96"
              visible={true}
            />
            </div>
    )}
    
    return ( 
        <div className='product-list'>
         {products.map(p=> (
            <div className='product' key={p.id}>
                <div className='product-image' style={{backgroundImage: `url(${p.image})`}}></div>
                <div><span>{p.title.slice(0,10)}</span><span className='font-bold'>${p.price}</span></div>
                <div>{p.category} <a href='/' className='product-btn'>view product</a></div>
            </div>
         ))
         }
        </div>
     );
}
 
export default Products;