import Select from 'react-select';
import sampleProduct from '../assets/sample.jpg'
import poster from '../assets/notice.jpg'
import {BiEnvelope} from 'react-icons/bi'

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
                {/* ready to fetch the products from backend and render them to the page*/}
            </div>

            <div className='off'>
              <div className='off-image' style={{backgroundImage: `url(${poster})`}}></div>
              <div className='off-text'>
                <p>limited offer</p>
                <h1>35% off only this friday and get special gift</h1>
                <a href='#' >Grab it now → </a>
              </div>
            </div>

            <div className='newsletter'>
              <h1>Subscribe to our newsletter to get updates to our latest collections</h1>
              <p>Get 20% off on your first order just by subscribing to our newsletter</p>
              <div className='newsletter-input'>
                <div>
                <BiEnvelope size='24'/>
                <input type='text' placeholder='Enter your email'/>
                </div>
                <a href="#">Subscribe</a>
              </div>
              <p>You will be able to unsubscribe at any time <br/> Read our Privacy Policy <a href='/'>here</a></p>
            </div>
        </div>
     );
}
 
export default MainPage;