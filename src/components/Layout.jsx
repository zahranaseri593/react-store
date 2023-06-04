import Footer from "./Footer";
import Header from "./Header";

const Layout = ({children}) => {
    return (  
        <>
            <Header/>
            <div className="pages-content">
            {children}
            </div>
            <Footer/>
        </>
    );
}
 
export default Layout;