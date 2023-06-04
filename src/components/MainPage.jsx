import Select from 'react-select';
import sampleProduct from '../assets/sample.jpg'

const sortOpt = [
  { value: 'des', label: 'descending' },
  { value: 'asc', label: 'ascending' },
];

const categoryOpt = [
    { value: 'all', label: 'all' },
    { value: 'men', label: 'men' },
    { value: 'women', label: 'women' },
    { value: 'jewelry', label: 'jewelry' },
    { value: 'accessories', label: 'accessories'}
  ]; //fetch categories from api

const MainPage = () => {
    return ( 
        <div id='main'>
            {/* filters */}
            <div className='filter'>
                <p>Showing 10 results from total of 37 </p>
                <div className='selects'>
                <label htmlFor="sort">Sort by</label>
                    <Select
                    // value = { state }
                      options={sortOpt}
                    />
                    <label htmlFor="sort">category</label>
                    <Select
                      options={categoryOpt}
                    />
                </div>
            </div>
            {/* products */}
            <div className='product-list'>
                <div className='product'>
                    <div className='product-image' style={{backgroundImage: `url(${sampleProduct})`}}></div>
                    <div><span>Mens Casual</span><span className='font-bold'>$22.3</span></div>
                    <div>Men {/*<a href='/' className='product-btn'>add to cart</a>*/}</div>
                    <p>Sale</p>
                </div>
                {/* ready to fetch the products from backend and render them to the page
                
                */}
            </div>
        </div>
     );
}
 
export default MainPage;