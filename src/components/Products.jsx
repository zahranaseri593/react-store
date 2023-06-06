import { LineWave } from 'react-loader-spinner';
import Product from './Product';

const Products = ({products}) => {
    if(!products) {
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
        <div className='product-list'>
         {products.map(p=> (
            <Product p={p}/>
         ))
         }
        </div>
     );
}
 
export default Products;