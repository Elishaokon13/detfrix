import React from "react";

export default function Testimonals() {
    return (
<section class="bg-blue-100 font-[roboto]">
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"/>
      <div class="mx-auto max-w-screen-sm">
          <h2 class="text-lg font-semibold text-center text-blue-600">Testimonials</h2>
          <p class="mt-2 text-3xl font-bold leading-8 tracking-tight text-center text-gray-900 sm:text-4xl">What our Clients say about us</p>
      </div> 
      <div class="grid mb-8 lg:mb-12 bg-blue-100 lg:grid-cols-2">
          <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
              <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Speechless with how easy this was to integrate</h3>
                  <p class="my-4">"I recently got my hands on Flowbite Pro, and holy crap, I'm speechless with how easy this was to integrate within my application. Most templates are a pain, code is scattered, and near impossible to theme.</p>
                  <p class="my-4">Flowbite has code in one place and I'm not joking when I say it took me a matter of minutes to copy the code, customise it and integrate within a Laravel + Vue application.</p>
                  <p class="my-4">If you care for your time, I hands down would go with this."</p>
              </blockquote>
              <figcaption class="flex justify-center items-center space-x-3">
                  <img class="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture"/>
                  <div class="space-y-0.5 font-medium dark:text-white text-left">
                      <div>Bonnie Green</div>
                      <div class="text-sm font-light text-gray-500 dark:text-gray-400">Developer at Open AI</div>
                  </div>
              </figcaption>    
          </figure>
          <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
              <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Solid foundation for any project</h3>
                  <p class="my-4">"FlowBite provides a robust set of design tokens and components based on the popular Tailwind CSS framework. From the most used UI components like forms and navigation bars to the whole app screens designed both for desktop and mobile, this UI kit provides a solid foundation for any project.</p>
                  <p class="my-4">Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!"</p>
              </blockquote>
              <figcaption class="flex justify-center items-center space-x-3">
                  <img class="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile picture"/>
                  <div class="space-y-0.5 font-medium dark:text-white text-left">
                      <div>Roberta Casas</div>
                      <div class="text-sm font-light text-gray-500 dark:text-gray-400">Lead designer at Dropbox</div>
                  </div>
              </figcaption>    
          </figure>
          <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 lg:border-b-0 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
              <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Mindblowing workflow and variants</h3>
                  <p class="my-4">"As someone who mainly designs in the browser, I've been a casual user of Figma, but as soon as I saw and started playing with FlowBite my mind was 🤯.</p>
                  <p class="my-4">Everything is so well structured and simple to use (I've learnt so much about Figma by just using the toolkit).</p>
                  <p class="my-4">Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application."</p>
              </blockquote>
              <figcaption class="flex justify-center items-center space-x-3">
                  <img class="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture"/>
                  <div class="space-y-0.5 font-medium dark:text-white text-left">
                      <div>Jese Leos</div>
                      <div class="text-sm font-light text-gray-500 dark:text-gray-400">Software Engineer at Facebook</div>
                  </div>
              </figcaption>    
          </figure>
          <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
              <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Efficient Collaborating</h3>
                  <p class="my-4">"This is a very complex and beautiful set of elements. Under the hood it comes with the best things from 2 different worlds: Figma and Tailwind.</p>
                  <p class="my-4">You have many examples that can be used to create a fast prototype for your team."</p>
              </blockquote>
              <figcaption class="flex justify-center items-center space-x-3">
                  <img class="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile picture"/>
                  <div class="space-y-0.5 font-medium dark:text-white text-left">
                      <div>Joseph McFall</div>
                      <div class="text-sm font-light text-gray-500 dark:text-gray-400">CTO at Google</div>
                  </div>
              </figcaption>    
          </figure>
      </div>
      <div class="text-center">
          <Link href="#" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Show more...</Link> 
      </div>
</section>
    )
}
