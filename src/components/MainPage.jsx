import Select from 'react-select';
import poster from '../assets/notice.jpg'
import {BiEnvelope} from 'react-icons/bi'
import Products from './Products';
import { useEffect, useState } from 'react';
import {fetchFromAPI} from '../utils/fetchFromAPI'

const sortOpt = [
  { value: 'desc', label: 'descending' },
  { value: 'asc', label: 'ascending' },
];

const MainPage = () => {

  const [products, setProducst] = useState('')
  const [categories, setCategories ] = useState([{ value: 'all', label: 'all' }])

  const [selectedCategory, setSelectedCategory] = useState( { value: 'jewelery', label: 'jewelery' })
  const [sort, setSort] = useState('desc')

  useEffect(()=>{
    fetchFromAPI(`products/category/${selectedCategory.value}?sort=${sort}&limit=20`)
    .then((data)=> setProducst(data))
    .catch((err) => console.log(err))
  },[selectedCategory,sort])

  useEffect(()=>{
    fetchFromAPI(`products/categories`)
    .then((data)=> setCategories(data.map(c => ({value: c , label: c }))))
    .catch((err) => console.log(err))
  },[])

    return (
        <div id='main'>
            {/* filters */}
            <div className='filter'>
                <p>showing {products.length} results from {selectedCategory.value} category </p>
                <div className='selects'>
                <label htmlFor="sort">Sort by</label>
                    <Select
                      defaultValue={sortOpt[0]}
                      options={sortOpt}
                      onChange={(e)=>setSort(e.value)}
                      />
                    <label htmlFor="sort">category</label>
                    <Select
                      defaultValue={selectedCategory}
                      options={categories}
                      onChange={(e)=>setSelectedCategory(e)}
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