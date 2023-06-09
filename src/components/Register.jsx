import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuthContext } from "../utils/AuthContextProvider";

const Register = () => {
    const [formData,setFormData] = useState({name:'',email:'',number:'',password:'',password_repeat:''})
    const {UserRegister,error,register,userData} = useAuthContext()
    
    const SubmitRegister = (e) => {
        e.preventDefault()
        UserRegister(formData)
    }
    
    const handleform = (e) => {
        setFormData(prev=>({...prev,[e.target.name]: e.target.value}))
    }

    if(userData) return <Navigate replace to="/products" />

    if(register) return <Navigate replace to="/login" />
    
    return ( 
        <div className="sign-container">
            <h1>Register</h1>
            <form>
                <input type="text" name='name' onChange={handleform} value={formData.name} placeholder="name"/>
                <input type="email" name='email' onChange={handleform} value={formData.email} placeholder="email" />
                <input type="number" name='number' onChange={handleform} value={formData.number} placeholder="number"/>
                <input type="password" name='password' onChange={handleform} value={formData.password} placeholder="password" />
                <input type="password" name='password_repeat' onChange={handleform} value={formData.password_repeat} placeholder="password repeat" />
                <input type="submit"  value='Register' onClick={SubmitRegister}/>
            </form>
            <p>have an account?<Link to='/login'>Login</Link></p>
            {error&& <p className="error-msg">{error}</p> }
        </div>
     );
}
 
export default Register;