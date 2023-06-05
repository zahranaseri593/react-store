import Select from 'react-select';
import poster from '../assets/notice.jpg'
import {BiEnvelope} from 'react-icons/bi'
import Products from './Products';
import { useEffect, useState } from 'react';
import axios from 'axios';

const sortOpt = [
  { value: 'des', label: 'descending' },
  { value: 'asc', label: 'ascending' },
];

const MainPage = () => {

  const [products, setProducst] = useState('')
  const [categories, setCategories ] = useState([{ value: 'all', label: 'all' }])

  useEffect(()=>{
    async function fetchproducts(){
      const { data } = await axios.get('https://fakestoreapi.com/products?limit=10')
      setProducst(data)
    }
    async function fetchcategory(){
      const { data } = await axios.get('https://fakestoreapi.com/products/categories')
      setCategories(data.map(c => ({value: c , label: c })))
    }
    
    fetchproducts()
    fetchcategory()
  },[])

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
                      options={categories}
                    />
                </div>
            </div>
            {/* products */}
            <Products products={products}/>

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