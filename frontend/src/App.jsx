import { useState } from "react";
import { ArrowRight, CrossIcon, MenuIcon, XIcon } from "lucide-react";

export default function App() {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      <header className="relative  bg-white">
        <nav className="h-[5rem]  text-[#4D4D4D] items-center max-md:justify-between max-md:px-4  flex justify-around">
          <div className="flex gap-[2px]">
            <img src="./logo.svg" />
          </div>
          <div className="flex max-md:hidden justify-between gap-4 items-center  ">
            {["Home", "Feature", "Community", "Blog", "Pricing"].map((item) => (
              <label className=" md:text-lg font-normal cursor-pointer">
                {item}
              </label>
            ))}
            <button className=" bg-green-600 flex items-center px-4 py-3 gap-2 rounded-lg text-white">
              Register Now! <ArrowRight size={20} />{" "}
            </button>
          </div>
          <div className="md:hidden p-2 border-2 border-gray-50 ">
            {!mobileMenu ? (
              <button
                onClick={() => {
                  setMobileMenu(true);
                }}
              >
                <MenuIcon size={20}></MenuIcon>
              </button>
            ) : (
              <button
                onClick={() => {
                  setMobileMenu(false);
                }}
                className=""
              >
                <XIcon size={20}></XIcon>
              </button>
            )}
          </div>
        </nav>
        {mobileMenu && (
          <div className="w-full h-screen absolute bg-white z-50 text-gray-600 ">
            <div className="flex flex-col gap-4  items-center ">
              {["Home", "Feature", "Community", "Blog", "Pricing"].map(
                (item) => (
                  <label className=" md:text-lg font-normal cursor-pointer ">
                    {item}
                  </label>
                )
              )}
              <button className=" bg-green-600 flex items-center px-4 py-3 gap-2 rounded-lg text-white">
                Register Now! <ArrowRight size={20} />{" "}
              </button>
            </div>
          </div>
        )}
      </header>

      <main className=" bg-gray-100 flex-col w-[100vw]   items-center justify-center">
       
        <section>
        <div className="flex py-10 px-5 items-center max-w-1/2 justify-around">
        <div className="flex-col max-w-full  ">
          <h1 className="text-[#4D4D4D] font-semibold text-2xl  md:text-5xl max-w-md  mb-4">Lessons and insights <span className="text-green-500">from 8 years</span></h1>
          <button className=" w-auto min-w-max    bg-green-600 flex items-center px-4 py-3 gap-2 rounded-lg text-white">Register Now! <ArrowRight size={20}  /> </button>

        </div>
        <div className="max-w-1/2"><img src="./avatar.svg"/></div>
        </div>
        </section>
      </main>
    </>
  );
}
