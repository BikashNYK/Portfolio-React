import './App.css';
import Spline from '@splinetool/react-spline';
import { useState } from 'react';
import {IoMenu} from "react-icons/io5"
import Main from './Component/Main';
import Timeline from './Component/Timeline';
import Project from './Component/Project';
function App() {
  const [isActive,setIsActive] = useState(false);
  return (
    <div className="flex w-screen min-h-full flex-col items-center justify-center relative bg-primary pb-20">
      {/* navigation part */}
      <nav className="w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-center items-center">
        <div className="w-full md:w-880 bg-navBar p-4 rounded-2xl flex items-center">
          <p className="text-lg text-slate-200 font-medium">Bikash Nayak</p>

          <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
            <a
              href="#home"
              className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
            >
              Contact
            </a>
            <a
              href="#download"
              className="ml-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-200 duration-100 ease-in-out"
            >
              Download
            </a>
          </div>

          <div className="block md:hidden ml-auto cursor-pointer" onClick={()=>setIsActive(!isActive)}>
            <IoMenu className="text-2xl text-textBase" />

            {isActive && (
              <div className="p-4 w-275 bg-navBar rounded-lg fixed top-24 right-16 flex flex-col items-center justify-evenly gap-6">
                <a
                  href="#home"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out" onClick={()=>setIsActive(false)}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out" onClick={()=>setIsActive(false)}
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out" onClick={()=>setIsActive(false)}
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out" onClick={()=>setIsActive(false)}
                >
                  Contact
                </a>
                <a
                  href="#download"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-200 duration-100 ease-in-out" onClick={()=>setIsActive(false)}
                >
                  Download
                </a>
              </div>
            )}
          </div>
        </div>
      </nav>
      <div className="spline" id="home">
        <Spline scene="https://prod.spline.design/anMXnX4AcbmWKqX5/scene.splinecode" />
        <div className=' absolute bottom-10 w-full justify-center items-center flex'>
          <div className=" shadow-md p-4 flex items-center justify-center bg-zinc-900  rounded-3xl">
            <p className=' text-red-500'>Rotate and Zoom</p>
          </div>
        </div>
      </div>

      {/* Main Part */}
      <Main />
      {/* timeline */}
      <Timeline/>
      {/* project */}
      <Project/>
    </div>
  );
}

export default App;
