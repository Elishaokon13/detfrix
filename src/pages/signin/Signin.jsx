import React from "react";

export default function Signin() {
    return (
        <div className="flex flex-col font-[roboto] bg-blue-100 h-screen items-center justify-center">
            <div className="text-[40px] font-[roboto] font-[700] mb-8">Signin</div>
            <form class="space-y-4 md:space-y-6" action="/dashboard">
              <div>
                <label for="email" class="block mb-2 text-sm font-medium text-white-900 ">Your email</label>
                <input type="email" name="email" id="email" class="bg-white-50 border border-white-300 text-white-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 " placeholder="name@company.com" required="" />
              </div>
              <div>
                <label for="password" class="block mb-2 text-sm font-medium text-white-900 ">Password</label>
                <input type="password" name="password" id="password" placeholder="••••••••" class="bg-white-50 border border-white-300 text-white-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 " required="" />
              </div>
              
            
              <button type="submit" class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Sign In</button>
              <p class="text-sm font-light text-white-500 ">
                Don't have an account? <a href="/signup" class="font-medium text-blue-600 hover:underline dark:text-blue-500">Signup here</a>
              </p>
            </form>
        </div>

    );
    }
