import React from "react"

export default function Portfolio() {
    return (
        <div className=" gap-5 items-left justify-left w-full bg-gray-100 dark:bg-gray-900">
            <h1 className=" flex flex-row text-2xl mr-screen px-25 font-semibold text-gray-700 dark:text-gray-200">
                Portfolio
            </h1>


            <a href="#" class="block flex flex-col gap-5 item-start p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">$1500</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </a>


            <a href="#" class="block flex flex-col gap-5 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">$1500</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </a>


            <a href="#" class="block p-6 max-w-sm gap-5 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">$1500</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </a>


        </div>
    )
}