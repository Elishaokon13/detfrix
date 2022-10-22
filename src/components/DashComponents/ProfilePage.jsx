import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import Bottomnav from "./Bottomnav";



function ProfilePage() {

  return (
    <div>
      <div>

        <section>
          <section className='w-full h-full  px-8 py-6'>
            <div className="lg:flex lg:gap-3 lg:mb-0 mt-3 mb-[70px] h-2/3 pb-10">
              <div className="py-3 mt-3 h-full bg-gray-200 rounded-lg lg:w-[32.5%]">
                <div className="h-full px-5 gap-5">
                  <div className="w-full">

                    <div className="w-full">
                      <FaRegUserCircle className="w-1/2 h-1/2 m-auto" />
                    </div>
                    <div className=" gap-4 px-2 rounded-md bg-white w-full pb-5 mt-5">
                      <p className="font-medium pt-2 text-lg">Details</p>
                      <div className="flex items-center gap-4 py-2 border-b-[1px] border-gray-300 w-full">
                        <p className="text-sm">First name:</p>

                        <p className="font-semibold">John</p>

                      </div>
                      <div className="flex items-center gap-4 py-2 border-b-[1px] border-gray-300 w-full">
                        <p className="text-sm">Last name:</p>

                        <p className="font-semibold">Doe</p>

                      </div>
                      <div className="flex items-center gap-4 py-2 border-b-[1px] border-gray-300 w-full">
                        <p className="text-sm">Email:</p>

                        <p className="font-semibold">email@email.com</p>

                      </div>
                      <div className="flex items-center gap-4 py-2 border-b-[1px] border-gray-300 w-full">
                        <p className="text-sm">Bank name:</p>
                        <p className="font-semibold">First Bank</p>
                      </div>
                      <div className="flex items-center gap-4 py-2 border-b-[1px] border-gray-300 w-full">
                        <p className="text-sm">Account number:</p>

                        <p className="font-semibold">234366689</p>
                      </div>
                      <div className="flex items-center gap-4 py-2 border-b-[1px] border-gray-300 w-full">
                        <p className="text-sm">Account name:</p>

                        <p className="font-semibold">John Doe</p>

                      </div>

                    </div>

                  </div>

                </div>
              </div>
              <div className="py-3 mt-3 h-full bg-gray-200 pb-10 rounded-lg lg:w-[67.5%]" >
                <p className="mx-2 font-semibold text-lg pb-6">USER INFORMATION</p>
                <div className="flex h-full px-5 gap-5">
                  <div className="w-full">
                    <div className="flex items-center gap-4 px-5 py-2 rounded-sm bg-white w-full mb-2">
                      <div className="w-full">
                        <p>First name</p>
                        <input class="mr-3 mt-2 font-medium text-sm border-2 rounded-md p-1 focus:outline-none selection:bg-transparent w-full" type={"text"} />
                      </div>
                    </div>
                    <div className="flex items-center gap-4 px-5 py-2 rounded-sm bg-white w-full mb-2">
                      <div className="w-full">
                        <p>Last name</p>
                        <input class="mr-3 mt-2 font-medium text-sm border-2 rounded-md p-1 focus:outline-none selection:bg-transparent w-full" type={"text"} />
                      </div>
                    </div>
                    <div className="flex items-center gap-4 px-5 py-2 rounded-sm bg-white w-full mb-2">
                      <div className="w-full">
                        <p>Email address</p>
                        <input class="mr-3 mt-2 font-medium text-sm border-2 rounded-md p-1 focus:outline-none selection:bg-transparent w-full" type={"email"} />
                      </div>
                    </div>
                    <div className="flex items-center gap-4 px-5 py-2 rounded-sm bg-white w-full mb-2">
                      <div className="w-full">
                        <p>Bank name</p>
                        <input class="mr-3 mt-2 font-medium text-sm border-2 rounded-md p-1 focus:outline-none selection:bg-transparent w-full" type={"text"} />
                      </div>
                    </div>
                    <div className="flex items-center gap-4 px-5 py-2 rounded-sm bg-white w-full mb-2">
                      <div className="w-full">
                        <p>Account number</p>
                        <input class="mr-3 mt-2 font-medium text-sm border-2 rounded-md p-1 focus:outline-none selection:bg-transparent w-full" type={"text"} />
                      </div>
                    </div>
                    <div className="flex items-center gap-4 px-5 py-2 rounded-sm bg-white w-full mb-2">
                      <div className="w-full">
                        <p>Account name</p>
                        <input class="mr-3 mt-2 font-medium text-sm border-2 rounded-md p-1 focus:outline-none selection:bg-transparent w-full" type={"text"} />
                      </div>
                    </div>
                    <button className="py-2 px-7 rounded-md text-white m-auto flex bg-blue-700">SAVE</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <Bottomnav />
          </section>
        </section>

      </div>

    </div>
  );
};

export default ProfilePage;
