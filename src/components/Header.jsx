import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { BiCartAlt,BiUser } from "react-icons/bi";

const Header = () => {
    return ( 
    <header>
        <div>
          Sign up and <span className="font-bold">GET 20% OFF</span> for your first order. 
          <Link to="/" style={{color: "var(--lightest-color)",textDecoration: "underline" , fontWeight: "bold"}}>
            Sign up now</Link>
        </div>

        <nav>
          <h2 className="Logo">STORE</h2>
          <ul>
            <li>Shop</li>
            <li>Most wanted</li>
            <li>New arrival</li>
            <li>Brands</li>
          </ul>
          <div>
          <SearchBar/>
          <BiCartAlt size='20'/>
          <BiUser size='20'/>
          </div>
        </nav>
    </header>
     );
}
 
export default Header;