import axios from "axios";
import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../../assets/image/DETFRIX.svg";
import { register } from "../../action/auth";
import { useNavigate,Navigate } from 'react-router-dom';

function Signup() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector(state => state.message);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const intialUser = {
    firstname:"",
    lastname:"",
    phone:"",
    dob:"",
    email:"",
    password:""
};
const [user, setUser] = useState(intialUser)
  const handleRegister = () =>{
    dispatch(register(firstname,lastname,phone,dob,email, password))
        .then(() => {
          setSuccessful(true);
          setUser(intialUser);
          navigate("/signin");
        })
        .catch(() => {
          setSuccessful(false);
        });
  }
    return (
        
        <section class="bg-blue-100 h-screen  ">
      <div class="flex flex-col items-center font-[roboto] justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
          <img class="w-8 h-8 mr-2 mt-8" src={Logo} alt="logo" />
          <p className="mt-8">Detfrix</p>
        </a>
        <div class="w-full bg-white  rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl ">
              Create an account
            </h1>
              <div className="flex justify-between gap-5">
                <div>
                  <label
                    for="firstName"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your First Name
                  </label>
                  <input
                    type="text"
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Peter "
                    
                  />
                </div>
                <div>
                  <label
                    for="lastName"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Last Name
                  </label>
                  <input
                    type="text"
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="morson"
                  />
                </div>
              </div>

              <div class="flex justify-between gap-5">
                <div>
                <label
                  for="phone"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Phonenumber
                </label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="+(228)239-4232"
                  
                />
              </div>
              <div>
                <label
                  for="dob"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Date of Birth
                </label>
                <input
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  
                />
              </div>
              </div>
              
             <div className="flex justify-between gap-5">
             <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  
                />
              </div>
             </div>

              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label
                    for="terms"
                    class="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the{" "}
                    <a
                      class="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                onClick={handleRegister}
                class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Create an account
              </button>
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <a
                  href="/login"
                  class="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Login here
                </a>
              </p>

              {message && (
            <div className="form-group">
              <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert">
                {message}
              </div>
            </div>
          )}
          </div>
        </div>
      </div>
    </section>
    
    );

}

export default Signup;
