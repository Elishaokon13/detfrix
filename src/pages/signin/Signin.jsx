import React, {   useState } from "react";
import { useNavigate,Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../action/auth";
import DashHome from "../DashPages/DashHome";


export default function Signin() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  let navigate = useNavigate();
  const { isLoggedIn } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleLogin = (e) =>{

    e.preventDefault();
    
    dispatch(login(email, password))
    .then(() => {
      navigate("dashboard");
      window.location.reload();
    });

  if (isLoggedIn) {
    return <Navigate to="dashboard" />;
  }
  }


    return (
        <div className="flex flex-col font-{grotesk} bg-blue-100 h-screen items-center justify-center">
            <div className="text-[40px] font-[grotesk] font-[700] mb-8">Signin</div>
            <div class="space-y-4 md:space-y-6">
              <div>
                <label for="email" class="block mb-2 text-sm font-medium text-white-900 ">Your email</label>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} class="bg-white-50 border border-white-300 text-white-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 " placeholder="name@company.com" required="" />
              </div>
              <div>
                <label for="password" class="block mb-2 text-sm font-medium text-white-900 ">Password</label>
                <input type="password" password={password} onChange={(e)=>setPassword(e.target.value)} placeholder="••••••••" class="bg-white-50 border border-white-300 text-white-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 " required="" />
              </div>
              
            
              <button type="submit" onClick={handleLogin} class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Sign In</button>
              <p class="text-sm font-light text-white-500 ">
                Don't have an account? <a href="/signup" class="font-medium text-blue-600 hover:underline dark:text-blue-500">Signup here</a>
              </p>
            </div>
        </div>

    );
    }