import axios from "axios";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [userData,setUserData] = useState()
    const [error,setError] = useState()

    const UserLogin = async (data) => {
        try {
            setError('')
            const response = await axios.post('https://fakestoreapi.com/auth/login',
            JSON.stringify({...data})
            ,{
                headers:{ 
                    'Content-type': 'application/json; charset=UTF-8',
                }
            }
            )
            setUserData({...data,...response.data})
        } catch (error) {
            if(error.response) setError(error.response.data)
            
        }
    }

    const UserRegister = async (data) => {
        try {
            const response = await axios.post('https://api.storerestapi.com/auth/register',
            JSON.stringify({
               name: 'Alex Pi',
               email: 'example@mail.com',
               number: 12025550108,
               password: 'Simple12345',
               password_repeat: 'Simple12345'
            })
            ,{
                headers:{ 
                    'Content-type': 'application/json; charset=UTF-8',
                }
            }
            )
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
    
    return(
        <AuthContext.Provider value={{userData,setUserData,UserLogin,UserRegister,error}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = ()=> useContext(AuthContext)