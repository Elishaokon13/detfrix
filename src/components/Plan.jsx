import React from "react";

export default function Example() {
    return (
        <>
            <div className="lg:text-center">
                <h2 className="text-lg font-semibold text-blue-600">Our Plans</h2>
                <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                    Our flexible Plans
                </p>

            </div>
       <div className="flex flex-col-3 gap-5 pl-15 bg-blue-100 pt-5 pb-5 mb-5 ml-4 mr-4 mb-4 overflow-x-auto md:overflow-none lg:flex-row justify-center items-center">     
       <div class="flex flex-col items-center justify-center w-full max-w-2xl mx-auto space-y-8 lg:space-y-0 lg:flex-row lg:space-x-8">
                <div class="flex flex-col items-center bg-blue-400 justify-center w-full max-w-sm px-8 py-8 space-y-4 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    <div class="flex flex-col items-center justify-center space-y-2">
                        <h3 class="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-100">Pro</h3>
                        <span class="text-base font-normal leading-tight text-white dark:text-gray-400">For the growing business</span>
                    </div>
                    <div class="flex flex-col items-center justify-center w-full space-y-4">
                        <div class="flex items-center justify-center w-full space-x-2">
                            <span class="text-4xl font-semibold leading-tight text-gray-800 dark:text-gray-100">$</span>
                            <span class="text-6xl font-extrabold leading-tight text-gray-800 dark:text-gray-100">49</span>
                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">/mo</span>
                        </div>
                        <ul class="flex flex-col items-start justify-start w-full space-y-3">
                            <li class="flex space-x-3">
                                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">2 team members</span>
                            </li>
                            <li class="flex space-x-3">
                                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">API Access</span>
                            </li>
                            <li class="flex space-x-3">
                                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Complete documentation</span>
                            </li>
                            <li class="flex space-x-3">
                                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">24×7 phone & email support</span>
                            </li>
                        </ul>
                        <button type="button" class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
                    </div>
                </div>
            </div>

            <div class="flex flex-col items-center justify-center w-full max-w-2xl mx-auto space-y-8 lg:space-y-0 lg:flex-row lg:space-x-8">
                <div class="flex flex-col items-center justify-center w-full max-w-sm px-8 py-8 space-y-4 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    <div class="flex flex-col items-center justify-center space-y-2">
                        <h3 class="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-100">Pro</h3>
                        <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">For the growing business</span>
                    </div>
                    <div class="flex flex-col items-center justify-center w-full space-y-4">
                        <div class="flex items-center justify-center w-full space-x-2">
                            <span class="text-4xl font-semibold leading-tight text-gray-800 dark:text-gray-100">$</span>
                            <span class="text-6xl font-extrabold leading-tight text-gray-800 dark:text-gray-100">49</span>
                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">/mo</span>
                        </div>
                        <ul class="flex flex-col items-start justify-start w-full space-y-3">
                            <li class="flex space-x-3">
                                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">2 team members</span>
                            </li>
                            <li class="flex space-x-3">
                                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">API Access</span>
                            </li>
                            <li class="flex space-x-3">
                                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Complete documentation</span>
                            </li>
                            <li class="flex space-x-3">
                                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">24×7 phone & email support</span>
                            </li>
                        </ul>
                        <button type="button" class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
                    </div>
                </div>
            </div>

            <div class="flex flex-col items-center justify-center w-full max-w-2xl mx-auto space-y-8 lg:space-y-0 lg:flex-row lg:space-x-8">
                <div class="flex flex-col items-center justify-center w-full max-w-sm px-8 py-8 space-y-4 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    <div class="flex flex-col items-center justify-center space-y-2">
                        <h3 class="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-100">Pro</h3>
                        <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">For the growing business</span>
                    </div>
                    <div class="flex flex-col items-center justify-center w-full space-y-4">
                        <div class="flex items-center justify-center w-full space-x-2">
                            <span class="text-4xl font-semibold leading-tight text-gray-800 dark:text-gray-100">$</span>
                            <span class="text-6xl font-extrabold leading-tight text-gray-800 dark:text-gray-100">49</span>
                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">/mo</span>
                        </div>
                        <ul class="flex flex-col items-start justify-start w-full space-y-3">
                            <li class="flex space-x-3">
                                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">2 team members</span>
                            </li>
                            <li class="flex space-x-3">
                                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">API Access</span>
                            </li>
                            <li class="flex space-x-3">
                                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Complete documentation</span>
                            </li>
                            <li class="flex space-x-3">
                                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">24×7 phone & email support</span>
                            </li>
                        </ul>
                        <button type="button" class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
                    </div>
                </div>
            </div>

            <div class="flex flex-col items-center justify-center w-full max-w-2xl mx-auto space-y-8 lg:space-y-0 lg:flex-row lg:space-x-8">
                <div class="flex flex-col items-center justify-center w-full max-w-sm px-8 py-8 space-y-4 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    <div class="flex flex-col items-center justify-center space-y-2">
                        <h3 class="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-100">Pro</h3>
                        <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">For the growing business</span>
                    </div>
                    <div class="flex flex-col items-center justify-center w-full space-y-4">
                        <div class="flex items-center justify-center w-full space-x-2">
                            <span class="text-4xl font-semibold leading-tight text-gray-800 dark:text-gray-100">$</span>
                            <span class="text-6xl font-extrabold leading-tight text-gray-800 dark:text-gray-100">49</span>
                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">/mo</span>
                        </div>
                        <ul class="flex flex-col items-start justify-start w-full space-y-3">
                            <li class="flex space-x-3">
                                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">2 team members</span>
                            </li>
                            <li class="flex space-x-3">
                                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">API Access</span>
                            </li>
                            <li class="flex space-x-3">
                                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Complete documentation</span>
                            </li>
                            <li class="flex space-x-3">
                                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">24×7 phone & email support</span>
                            </li>
                        </ul>
                        <button type="button" class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
                    </div>
                </div>
            </div>
          </div>  
        </>
 );
}
