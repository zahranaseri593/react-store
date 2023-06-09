import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuthContext } from "../utils/AuthContextProvider";
import { LineWave } from "react-loader-spinner";

const Login = () => {
    const [formData,setFormData] = useState({username:'',password:''})

    const {UserLogin,error,userData, loading} = useAuthContext()

    const SubmitLogin = (e) => {
        e.preventDefault()
        UserLogin(formData)
    }
    
    const handleform = (e) => {
        setFormData(prev=>({...prev,[e.target.name]: e.target.value}))
    }

    if(userData) return <Navigate replace to="/products" />
    
    return (
        <div className="sign-container">
            <h1>Login</h1>
            <form>
                <input type="text" name='username' onChange={handleform} value={formData.username} placeholder="username"/>
                <input type="password" name='password' onChange={handleform} value={formData.password} placeholder="password" />
                {loading? <div className="spinner"><LineWave
                height="70"
                width="70"
                color="#1f2937"
                ariaLabel="line-wave"
                /></div> : <input type="submit" value='Login' onClick={SubmitLogin}/> }
            </form>
            <p>don't have an account? <Link to='/register'>Register</Link></p>
            {error&& <p className="error-msg">{error}</p> }
        </div>
     );
}
 
export default Login;