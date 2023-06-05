import { LineWave } from 'react-loader-spinner';

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