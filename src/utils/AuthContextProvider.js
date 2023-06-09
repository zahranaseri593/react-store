import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [userData,setUserData] = useState()
    const [register, setRegsiter] = useState() //to simulate register
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState()

    useEffect(()=>{
        setUserData(localStorage.getItem("UserAuth"))
    },[userData])

    const UserLogin = async (data) => {
        try {
            setLoading(true)
            setError('')
            const response = await axios.post('https://fakestoreapi.com/auth/login',
            JSON.stringify({...data})
            ,{
                headers:{ 
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
            setUserData({...data,...response.data})
            localStorage.setItem('UserAuth', userData)
            if(userData) setLoading(false)
        } catch (error) {
            if(error.response) {
                setError(error.response.data)
                setLoading(false)
            }
        
        }
    }

    //in the fake db users arent added, so I just simulate the experience of registering
    const UserRegister = async (data) => {
        try {
            setError('')
            const response = await axios.post('https://api.storerestapi.com/auth/register',
            JSON.stringify({...data})
            ,{
                headers:{ 
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
            setRegsiter({...data,...response.data})
        } catch (error) {
            if(error.response) setError(error.response.data)
        }
    }
    
    return(
        <AuthContext.Provider value={{userData,setUserData,UserLogin,UserRegister,register,error,loading}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = ()=> useContext(AuthContext)