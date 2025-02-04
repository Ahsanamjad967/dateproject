import { useEffect, useReducer, useRef, useState } from "react";
import { PersonStandingIcon, SearchIcon, Settings2 } from "lucide-react";
import { VscKebabVertical } from "react-icons/vsc";
import { RiChatNewLine } from "react-icons/ri";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaArrowRight } from "react-icons/fa";
import { useForm } from "react-hook-form";
import StepperForm from "./components/stepper";
import Input from "./components/Input";
import OTPInput from "./components/OTP";
import { HiOutlineStatusOnline } from "react-icons/hi";
export default function App() {
  const ref = useRef(null);
  const {
    control,
    setError,
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "onChange" });
  const [selectf, setselectf] = useState("");
  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);
  };
  const menuItems = [
    {
      icon: HiOutlineStatusOnline,
      size: 50,
      isActive: true,
    },
    {
      icon: HiOutlineStatusOnline,
      size: 50,
      isActive: false,
    },
    {
      icon: HiOutlineStatusOnline,
      size: 50,
      isActive: false,
    },
  ];
  const [mobileMenu, setMobileMenu] = useState(true);
  return (
    <>
      <header className="bg-[#00a884] max-md:hidden h-[8rem]"></header>

      <main className="bg-[#0b141a] bg-opacity-100 h-[calc(100vh-8rem)]   "></main>

      <div className="absolute  2xl:inset-x-32 inset-0 z-50-0 2xl:inset-y-2 flex bg-gray-50 max-h-full ">
        {/* Sidebar */}
        <div className="min-w-[4rem] max-md:hidden max-w-[4rem] md:min-w-[5rem] flex flex-col justify-between items-center py-5 bg-gray-50">
          <div className="flex flex-col gap-2 cursor-pointer">
            {menuItems.map((item, idx) => (
              <div
                key={idx}
                className="relative p-2 hover:text-gray-700 transition-all text-gray-500"
              >
                <item.icon size={30} strokeWidth={1.5} />
                {item.isActive && (
                  <div className="h-2 w-2 absolute bg-green-400 rounded-full right-1 top-0"></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2 text-gray-500 cursor-pointer">
            <Settings2 size={30} strokeWidth={1.5} />
            <PersonStandingIcon size={30} strokeWidth={1.5} />
          </div>
        </div>

        {/* Chat List */}
        <div className="max-md:max-w-[100%]  md:w-[35%] lg:w-[30%] bg-white flex flex-col">
          <div className="py-5 px-5">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h1 className="font-bold text-lg text-gray-800">Chats</h1>
              <div className="flex justify-center items-center text-gray-500 gap-4">
                <RiChatNewLine size={15} strokeWidth={1.5} />
                <VscKebabVertical size={15} strokeWidth={1.5} />
              </div>
            </div>

            {/* Search Box */}
            <div className="w-full p-3 flex items-center gap-4 mt-4 bg-gray-100 rounded-xl text-gray-700">
              <SearchIcon className="text-gray-400" size={20} strokeWidth={1} />
              <input
                className="flex-1 bg-transparent focus:outline-none"
                placeholder="Search here..."
                type="search"
              />
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mt-2 text-gray-600 font-normal">
              {["All", "Unread", "Favourites", "Groups"].map((badge, idx) => (
                <div
                  key={idx}
                  className={`${ 
                    idx % 2 === 0 ? "bg-green-100" : "bg-gray-100"
                  } py-2 px-4 rounded-full max-md:px-2 max-md:py-1`}
                >
                  {badge}
                </div>
              ))}
            </div>
          </div>

          {/* Chats */}
          <div
            className="flex flex-col overflow-y-auto [&::-webkit-scrollbar]:hidden
  [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-green-200 h-full px-5"
          >
            {Array.from({ length: 20 }).map((_, idx) => (
              <div
                key={idx}
                className="flex gap-2 items-center border-b h-20 py-2"
              >
                <img
                  src="https://avatar.iran.liara.run/public/boy"
                  alt="User"
                  className="h-12 w-[3.5rem] rounded-full"
                />
                <div className="flex flex-col justify-center min-w-[80%]">
                  <div className="flex justify-between items-center">
                    <h1 className="text-lg font-light">Name</h1>
                    <p className="text-gray-400 text-sm">Yesterday</p>
                  </div>
                  <p className="text-gray-600 font-light truncate w-full">
                    <span className="font-medium">User:</span> Lorem ipsum dolor
                    sit amet, consectetur adipisicing elit. Quae quaerat, neque
                    ea, velit rerum ipsa earum natus facilis quam nesciunt
                    voluptatem est consequatur, esse exercitationem. Optio modi
                    rerum animi ad.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 bg-[url('/wp14199734.jpg')] hidden md:block "></div>
      </div>
    </>

    // <>
    //   <header className="relative bg-white">
    //     <nav className="h-[5rem] text-[#4D4D4D] items-center max-md:justify-between max-md:px-4 flex justify-around">
    //       <div className="flex gap-[2px]">
    //         <img src="./logo.svg" alt="Logo" />
    //       </div>
    //       <div className="hidden md:flex justify-between gap-4 items-center">
    //         {["Home", "Feature", "Community", "Blog", "Pricing"].map((item) => (
    //           <label
    //             key={item}
    //             className="md:text-lg font-normal cursor-pointer"
    //           >
    //             {item}
    //           </label>
    //         ))}
    //         <button
    //           onClick={() => {
    //             console.log(JSON.parse(localStorage.getItem("ref")));
    //           }}
    //           className="bg-green-600 flex items-center px-4 py-3 gap-2 rounded-lg text-white"
    //         >
    //           Register Now! <ArrowRight size={20} />
    //         </button>
    //       </div>
    //       <div className="md:hidden p-2 border-2 border-gray-50">
    //         {!mobileMenu ? (
    //           <button
    //             onClick={() => {
    //               setMobileMenu(true);
    //             }}
    //           >
    //             <MenuIcon size={20} />
    //           </button>
    //         ) : (
    //           <button
    //             onClick={() => {
    //               setMobileMenu(false);
    //             }}
    //           >
    //             <XIcon size={20} />
    //           </button>
    //         )}
    //       </div>
    //     </nav>

    //     <div
    //       className={`${
    //         !mobileMenu ? "hidden" : ""
    //       } w-full h-max absolute pb-3 duration-500 rounded-lg shadow-xl bg-white z-50 text-gray-600`}
    //     >
    //       <div className="flex flex-col gap-4 items-center">
    //         {["Home", "Feature", "Community", "Blog", "Pricing"].map((item) => (
    //           <label
    //             key={item}
    //             className="md:text-lg font-normal cursor-pointer"
    //           >
    //             {item}
    //           </label>
    //         ))}
    //         <button className="bg-green-600 flex items-center px-4 py-3 gap-2 rounded-lg text-white">
    //           Register Now! <FaArrowRight color="red" />
    //         </button>
    //       </div>
    //     </div>
    //   </header>

    //   <main>
    //     <section className="bg-gray-100 py-5">
    //       <div className="flex flex-wrap items-center justify-center gap-16">
    //         <div className="flex-col text-center md:text-left">
    //           <h1 className="text-darkgray font-semibold text-3xl md:text-4xl lg:text-5xl max-w-md mb-4">
    //             Lessons and insights{" "}
    //             <span className="text-green-500">from 8 years</span>
    //           </h1>
    //           <button className="w-auto min-w-max bg-green-600 flex items-center px-4 py-3 gap-2 rounded-lg text-white">
    //             Register Now! <FaArrowRight />
    //           </button>
    //         </div>
    //         <div>
    //           <img src="./avatar.svg" alt="Avatar" />
    //         </div>
    //       </div>
    //     </section>
    //     <section className="mt-4">
    //       <div className="flex flex-col gap-4 items-center">
    //         <h1 className="text-darkgray text-5xl font-normal capitalize">
    //           our clients
    //         </h1>
    //         <p className="text-darkgray text-center">
    //           We have been working with some Fortune 500+ clients
    //         </p>
    //         <div className="flex justify-evenly flex-wrap w-full mt-3"></div>
    //       </div>
    //     </section>

    //     <section>
    //       <h1 className="text-4xl  text-gray-800 text-center">
    //         Here is the list of our satisfied clients
    //       </h1>

    //       <div className="flex gap-4 mt-2 flex-wrap justify-center ">
    //         {Array.from({ length: 10 }, (_, idx) => (
    //           <div className="max-md:w-[90%] flex h-64  p-4 rounded-lg  text-gray-500 shadow-lg">
    //             <div className="flex gap-5 h-full  min-w-[400px] max-w-[400px]   ">
    //               <img
    //                 className="h-15 w-10 max-h-max"
    //                 src="https://avatar.iran.liara.run/public/boy"
    //               ></img>
    //               <div className="h-full  ">
    //                 <h1 className="text-2xl font-medium">Henry Micheal</h1>
    //                 <p className="  ">
    //                   'This is ffrkfkrk cdcdcjkcfjcfjkcjkfcjfjfk Lorem ipsum
    //                   dolor sit amet consectetur adipisicing elit. Provident
    //                   nostrum necessitatibus vitae quos eveniet cumque voluptas
    //                   odio asperiores vero? Sit ullam tenetur accusamus dolorem.
    //                   Suscipit error placeat aut obcaecati voluptate'{" "}
    //                 </p>
    //               </div>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </section>
    //   </main>
    // </>
  );
}
