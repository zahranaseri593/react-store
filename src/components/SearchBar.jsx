import { BiSearch } from "react-icons/bi";

const SearchBar = () => {
    return ( 
        <div className="search">
            <BiSearch size='22'/>
            <input type='search' placeholder='search'></input>
        </div>
     );
}
 
export default SearchBar;