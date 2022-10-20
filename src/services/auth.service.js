import axios from "axios";
import { baseURL } from "../config";


const register = async ( firstname, lastname, phone, dob, email, password) => {
    const result = await axios.post(baseURL + "/register", {
      
      firstname, lastname, phone, dob, email, password
    });
    return result;

  }


  const login = async (email, password) =>
  {
 
     await axios.post(baseURL + "/login", {
      email, password
     })
    .then((res) => {
        if (res.data.accessToken) {
            localStorage.setItem(res.data);
        }
  
        return res.data;
      });
    
   
  }

  const logout = () => {
    localStorage.removeItem("users");
  };

  export default {
    register,
    login,
    logout,
  };