const Product = ({p}) => {
    return ( 
        <div className='product' key={p.id}>
            <div className='product-image' style={{backgroundImage: `url(${p.image})`}}></div>
            <div><span>{p.title.slice(0,10)}</span><span className='font-bold'>${p.price}</span></div>
            <div>{p.category} <a href='/' className='product-btn'>view product</a></div>
        </div>
     );
}
 
export default Product;