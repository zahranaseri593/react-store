const Footer = () => {
    const footerData = [[
        'SHOP', 'All Collections', 'Winter Edition', 'Discount'
    ],[
        'COMPANY', 'About Us', 'Contact', 'Affiliates'
    ],[
        'SUPPORT', 'FAQs', 'Cookie Policy', 'Terms of Use'
    ]]
    
    return ( 
      <footer>
        <div className="container">
        <div className="about">
            <h2 className="Logo">STORE</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, numquam.</p>
        </div>
        {footerData.map(list => (
            <ul>
                <h4>{list[0]}</h4>
                <li>{list[1]}</li>
                <li>{list[2]}</li>
                <li>{list[3]}</li>
            </ul>
        ))}
        <div>
            <h4 style={{textTransform: 'uppercase'}}>payment methods</h4>
        </div>
        </div>
        <p>Copyright @2023 Zahra Naseri. All right reserved</p>
      </footer>
     );
}
 
export default Footer;