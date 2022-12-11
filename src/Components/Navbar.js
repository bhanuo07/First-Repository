import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  let location = useLocation();
  useEffect(() => {
    // console.log(location);
  });
  return (
    <>
      <nav className="py-3 px-10 fixed w-full z-10 bg-gray-900 space-x-20 flex justify-between ">
        <div className="">
          <Link to="/general" className="text-2xl text-white font-[poppins] cursor-pointer"> Bhanu's News App </Link>
        </div>
        <ul className=" flex items-center  w-auto  space-x-8 transition-all 
        duration-500 ">
          <li className="w-fit text-center"><Link className={`text-xl hover:text-cyan-500 duration-500 cursor-pointer ${location.pathname === "/general" ? "text-cyan-500" : "text-gray-400"} `} to="/general">General</Link></li>
          <li className="w-fit text-center"><Link className={`text-xl hover:text-cyan-500 duration-500 cursor-pointer ${location.pathname === "/business" ? "text-cyan-500" : "text-gray-400"} `} to="/business">Business</Link></li>
          <li className="w-fit text-center"><Link className={`text-xl hover:text-cyan-500 duration-500 cursor-pointer ${location.pathname === "/entertainment" ? "text-cyan-500" : "text-gray-400"} `} to="/entertainment">Entertainment</Link></li>
          <li className="w-fit text-center"><Link className={`text-xl hover:text-cyan-500 duration-500 cursor-pointer ${location.pathname === "/health" ? "text-cyan-500" : "text-gray-400"} `} to="/health">Health</Link></li>
          <li className="w-fit text-center"><Link className={`text-xl hover:text-cyan-500 duration-500 cursor-pointer ${location.pathname === "/science" ? "text-cyan-500" : "text-gray-400"} `} to="/science">Science</Link></li>
          <li className="w-fit text-center"><Link className={`text-xl hover:text-cyan-500 duration-500 cursor-pointer ${location.pathname === "/sports" ? "text-cyan-500" : "text-gray-400"} `} to="/sports">Sports</Link></li>
          <li className="w-fit text-center"><Link className={`text-xl hover:text-cyan-500 duration-500 cursor-pointer ${location.pathname === "/technology" ? "text-cyan-500" : "text-gray-400"} `} to="/technology">Technology</Link></li>
        </ul>
      </nav>
    </>
  )
}