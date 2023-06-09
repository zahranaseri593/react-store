import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../utils/AuthContextProvider";

const Register = () => {
    const [formData,setFormData] = useState({username:'',password:''})
    const {UserRegister} = useAuthContext()
    
    const SubmitRegister = (e) => {
        e.preventDefault()
        UserRegister()
    }
    
    const handleform = (e) => {
        setFormData(prev=>({...prev,[e.target.name]: e.target.value}))
    }
    
    return ( 
        <div className="sign-container">
            <h1>Register</h1>
            <form>
                <input type="text" name='username' onChange={handleform} value={formData.username} placeholder="username"/>
                <input type="password" name='password' onChange={handleform} value={formData.password} placeholder="password" />
                <input type="submit"  value='Register' onClick={SubmitRegister}/>
            </form>
            <p>have an account?<Link to='/login'>Login</Link></p>
        </div>
     );
}
 
export default Register;