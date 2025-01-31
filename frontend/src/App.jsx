import { useEffect, useReducer, useRef, useState } from "react";
import { ArrowRight, MenuIcon, XIcon } from "lucide-react";
import { FaArrowRight } from "react-icons/fa";
import { useForm } from "react-hook-form";
import StepperForm from "./components/stepper";
import Input from "./components/Input";
import OTPInput from "./components/OTP";

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

  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      <header className="relative bg-white">
        <nav className="h-[5rem] text-[#4D4D4D] items-center max-md:justify-between max-md:px-4 flex justify-around">
          <div className="flex gap-[2px]">
            <img src="./logo.svg" alt="Logo" />
          </div>
          <div className="hidden md:flex justify-between gap-4 items-center">
            {["Home", "Feature", "Community", "Blog", "Pricing"].map((item) => (
              <label key={item} className="md:text-lg font-normal cursor-pointer">
                {item}
              </label>
            ))}
            <button
              onClick={() => {
                console.log(JSON.parse(localStorage.getItem("ref")));
              }}
              className="bg-green-600 flex items-center px-4 py-3 gap-2 rounded-lg text-white"
            >
              Register Now! <ArrowRight size={20} />
            </button>
          </div>
          <div className="md:hidden p-2 border-2 border-gray-50">
            {!mobileMenu ? (
              <button
                onClick={() => {
                  setMobileMenu(true);
                }}
              >
                <MenuIcon size={20} />
              </button>
            ) : (
              <button
                onClick={() => {
                  setMobileMenu(false);
                }}
              >
                <XIcon size={20} />
              </button>
            )}
          </div>
        </nav>

        <div
          className={`${
            !mobileMenu ? "hidden" : ""
          } w-full h-max absolute pb-3 duration-500 rounded-lg shadow-xl bg-white z-50 text-gray-600`}
        >
          <div className="flex flex-col gap-4 items-center">
            {["Home", "Feature", "Community", "Blog", "Pricing"].map((item) => (
              <label key={item} className="md:text-lg font-normal cursor-pointer">
                {item}
              </label>
            ))}
            <button className="bg-green-600 flex items-center px-4 py-3 gap-2 rounded-lg text-white">
              Register Now! <FaArrowRight color="red" />
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="bg-gray-100 py-5">
          <div className="flex flex-wrap items-center justify-center gap-16">
            <div className="flex-col text-center md:text-left">
              <h1 className="text-darkgray font-semibold text-3xl md:text-4xl lg:text-5xl max-w-md mb-4">
                Lessons and insights{" "}
                <span className="text-green-500">from 8 years</span>
              </h1>
              <button className="w-auto min-w-max bg-green-600 flex items-center px-4 py-3 gap-2 rounded-lg text-white">
                Register Now! <FaArrowRight />
              </button>
            </div>
            <div>
              <img src="./avatar.svg" alt="Avatar" />
            </div>
          </div>
        </section>
        <section className="mt-4">
          <div className="flex flex-col gap-4 items-center">
            <h1 className="text-darkgray text-5xl font-normal capitalize">
              our clients
            </h1>
            <p className="text-darkgray text-center">
              We have been working with some Fortune 500+ clients
            </p>
            <div className="flex justify-evenly flex-wrap w-full mt-3"></div>
          </div>
        </section>
      </main>
    </>
  );
}
