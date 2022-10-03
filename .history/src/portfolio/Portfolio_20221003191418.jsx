import React from "react"

export default function Portfolio() {
    return (
        <div className="grid grid-cols gap-5 p-70 items-center -right-23 justify-center w-full bg-gray-100 dark:bg-gray-900">
            


            <a href="#" class="block flex flex-col gap-5  item-start p-6 max-w-2xl bg-white rounded-lg border border-gray-200 shadow-md hover:bg-blue-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="  mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">$1500</h5>
                <p class="font-normal text-sm text-center text-gray-700 dark:text-gray-400">Total Balance</p>
            </a>


            <a href="#" class="block flex flex-col gap-5 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-blue-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">$1500</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">Total Balance</p>
            </a>


            <a href="#" class="block p-6 max-w-sm gap-5 flex flex-col bg-white rounded-lg border border-gray-200 shadow-md hover:bg-blue-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">$1500</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">Total Balance</p>
            </a>


        </div>
    )
}