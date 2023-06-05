import axios from "axios";

export const fetchFromAPI = async (url)=> {
    const {data} = await axios.get(`https://fakestoreapi.com/${url}`)
  
    return data
}