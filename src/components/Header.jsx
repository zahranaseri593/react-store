import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { BiCartAlt,BiUser } from "react-icons/bi";
import {useCartContext} from '../utils/CartContextProvider'
import { useAuthContext } from "../utils/AuthContextProvider";

const Header = () => {

    const {state} = useCartContext()
    const {userData} = useAuthContext()
    return ( 
    <header>
        <div>
          Sign up and <span className="font-bold">GET 20% OFF</span> for your first order. 
          <Link to="/" style={{color: "var(--lightest-color)",textDecoration: "underline" , fontWeight: "bold"}}>
            Sign up now</Link>
        </div>

        <nav>
          <Link to='/'>
            <h2 className="Logo">STORE</h2>
          </Link>
            <ul>
              <li>Shop</li>
              <li>Most wanted</li>
              <li>New arrival</li>
              <li>Brands</li>
            </ul>
          <div>
            <SearchBar/>
            <Link to='/cart' className="cart-icon"><BiCartAlt size='20'/><span>{state.cart.length}</span></Link>
            {userData? <BiUser size='20'/> : <Link to='/login'>Sign up</Link>}
          </div>
        </nav>
    </header>
     );
}
 
export default Header;