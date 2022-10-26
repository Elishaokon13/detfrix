import React from "react";

export default function Example() {
    return (
        <>
            <div className="lg:text-center font-[roboto] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-lg font-semibold text-blue-600">Investment Plans</h2>
                <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                    Here's our Suitable Plans
                </p>
                
            </div>
            <div className="grid font-[roboto] md:grid-cols-4 gap-5 pl-15 pt-5 pb-5 mb-5 ml-4 mr-4 mb-4 overflow-x-auto md:overflow-none lg:flex-row justify-center items-center">
                <div class="flex flex-col items-center justify-center w-full max-w-2xl mx-auto space-y-8 lg:space-y-0 lg:flex-row lg:space-x-8">
                    <div class="flex flex-col items-center  justify-center w-full max-w-sm px-8 py-8 space-y-4 bg-white border shadow-2xl border-blue-800 rounded-lg shadow-lg">
                        <div class="flex flex-col items-center justify-center space-y-2">
                            <h3 class="text-xl font-semibold leading-tight text-blue-800 ">VIP 1</h3>
                            <span class="text-base font-normal leading-tight text-white">For the growing business</span>
                        </div>
                        <div class="flex flex-col items-center justify-center w-full space-y-4">
                            <div class="flex items-center justify-center w-full space-x-2">
                                <span class="text-4xl font-semibold leading-tight text-white-800">$</span>
                                <span class="text-6xl font-extrabold leading-tight text-white-800">0.50</span>
                                <span class="text-base font-normal leading-tight text-white-500">/day</span>
                            </div>
                            <ul class="flex flex-col items-start justify-start w-full space-y-3">
                                <li class="flex space-x-3">
                                    <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <span class="text-base font-normal leading-tight text-white-500">$5 Capital</span>
                                </li>
                                <li class="flex space-x-3">
                                    <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <span class="text-base font-normal leading-tight text-white-500 dark:text-white-400">Daily Profit: $0.50</span>
                                </li>
                                <li class="flex space-x-3">
                                    <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <span class="text-base font-normal leading-tight text-white-500 dark:text-white-400">Duration: 60 Days</span>
                                </li>
                                
                            </ul>
                            <button type="button" class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col items-center justify-center  w-full max-w-2xl mx-auto space-y-8 lg:space-y-0 lg:flex-row lg:space-x-8">
                    <div class="flex flex-col items-center justify-center w-full max-w-sm px-8 py-8 space-y-4 border shadow-2xl border-blue-800 rounded-lg  dark:bg-white-800">
                        <div class="flex flex-col items-center  justify-center space-y-2">
                            <h3 class="text-xl font-semibold leading-tight text-white-800 dark:text-white-100">VIP 2</h3>
                            <span class="text-base font-normal leading-tight text-white-500 dark:text-white-400">For the growing business</span>
                        </div>
                        <div class="flex flex-col items-center justify-center w-full space-y-4">
                            <div class="flex items-center justify-center w-full space-x-2">
                                <span class="text-4xl font-semibold leading-tight text-white-800 dark:text-white-100">$</span>
                                <span class="text-6xl font-extrabold leading-tight text-white-800 dark:text-white-100">1</span>
                                <span class="text-base font-normal leading-tight text-white-500 dark:text-white-400">/day</span>
                            </div>
                            <ul class="flex flex-col items-start justify-start w-full space-y-3">
                                <li class="flex space-x-3">
                                    <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <span class="text-base font-normal leading-tight text-white-500 dark:text-white-400">Minimum Deposit: $20</span>
                                </li>
                                <li class="flex space-x-3">
                                    <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <span class="text-base font-normal leading-tight text-white-500 dark:text-white-400">Daily Profit: $1</span>
                                </li>
                                <li class="flex space-x-3">
                                    <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <span class="text-base font-normal leading-tight text-white-500 dark:text-white-400">Duration: 60 Days</span>
                                </li>
                                
                            </ul>
                            <button type="button" class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col items-center justify-center w-full max-w-2xl mx-auto space-y-8 lg:space-y-0 lg:flex-row lg:space-x-8">
                    <div class="flex flex-col items-center justify-center w-full max-w-sm px-8 py-8 space-y-4 border shadow-2xl border-blue-800 rounded-lg">
                        <div class="flex flex-col items-center justify-center space-y-2">
                            <h3 class="text-xl font-semibold leading-tight text-white-800 dark:text-white-100">Pro</h3>
                            <span class="text-base font-normal leading-tight text-white-500 dark:text-white-400">For the growing business</span>
                        </div>
                        <div class="flex flex-col items-center justify-center w-full space-y-4">
                            <div class="flex items-center justify-center w-full space-x-2">
                                <span class="text-4xl font-semibold leading-tight text-white-800 dark:text-white-100">$</span>
                                <span class="text-6xl font-extrabold leading-tight text-white-800 dark:text-white-100">3</span>
                                <span class="text-base font-normal leading-tight text-white-500 dark:text-white-400">/day</span>
                            </div>
                            <ul class="flex flex-col items-start justify-start w-full space-y-3">
                                <li class="flex space-x-3">
                                    <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <span class="text-base font-normal leading-tight text-white-500 dark:text-white-400">Minimum Deposit: $50</span>
                                </li>
                                <li class="flex space-x-3">
                                    <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <span class="text-base font-normal leading-tight text-white-500 dark:text-white-400">Daily Profit: $3</span>
                                </li>
                                <li class="flex space-x-3">
                                    <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <span class="text-base font-normal leading-tight text-white-500 dark:text-white-400">Duration: 60 Days</span>
                                </li>
                                
                            </ul>
                            <button type="button" class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col items-center justify-center w-full max-w-2xl mx-auto space-y-8 lg:space-y-0 lg:flex-row lg:space-x-8">
                    <div class="flex flex-col items-center justify-center w-full max-w-sm px-8 py-8 space-y-4 border shadow-2xl border-blue-800 rounded-lg  dark:bg-white-800">
                        <div class="flex flex-col items-center justify-center space-y-2">
                            <h3 class="text-xl font-semibold leading-tight text-white-800 dark:text-white-100">Pro</h3>
                            <span class="text-base font-normal leading-tight text-white-500 dark:text-white-400">For the growing business</span>
                        </div>
                        <div class="flex flex-col items-center justify-center w-full space-y-4">
                            <div class="flex items-center justify-center w-full space-x-2">
                                <span class="text-4xl font-semibold leading-tight text-white-800 dark:text-white-100">$</span>
                                <span class="text-6xl font-extrabold leading-tight text-white-800 dark:text-white-100">5</span>
                                <span class="text-base font-normal leading-tight text-white-500 dark:text-white-400">/day</span>
                            </div>
                            <ul class="flex flex-col items-start justify-start w-full space-y-3">
                                <li class="flex space-x-3">
                                    <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <span class="text-base font-normal leading-tight text-white-500 dark:text-white-400">Minimum Deposit: $100</span>
                                </li>
                                <li class="flex space-x-3">
                                    <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <span class="text-base font-normal leading-tight text-white-500 dark:text-white-400">Daily Profit: $5</span>
                                </li>
                                <li class="flex space-x-3">
                                    <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <span class="text-base font-normal leading-tight text-white-500 dark:text-white-400">Duration: 60 Days</span>
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
