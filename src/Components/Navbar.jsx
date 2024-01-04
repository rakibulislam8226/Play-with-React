import { useState } from 'react'

import lock from '../assets/Lock.svg'
import hambarg from '../assets/hamburgerMenu.svg'
import close from '../assets/close.svg'


export const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => setToggle(!toggle);

    return (
        <div className="w-full h-[96px] bg-white border-b">
            <div className="lg:max-w-[1480px] max-w-[600px] justify-between items-center m-auto w-full h-full flex px-4">

                <div className='text-3xl'>
                    <h2 className="text-blue-700">LAND<span className="text-blue-400">ING</span></h2>
                </div>

                <div className="hidden lg:flex">
                    <ul className="flex gap-6 font-sans text-md">
                        <li>Home</li>
                        <li>About</li>
                        <li>Course</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div className='hidden lg:flex'>
                    <button className='flex justify-between bg-transparent gap-3 px-6 items-center'>
                        <img src={lock} alt="lock" className='' />
                        Login
                    </button>
                    <button className="bg-[#20B486] text-white font-bold px-5 py-2 rounded-md">Sign up for Free</button>
                </div>

                <div className='lg:hidden'>
                    <img src={toggle ? close : hambarg} alt="hambarg" onClick={handleToggle} />
                </div>

            </div>

            <div className={`${toggle ? "opacity-100" : "opacity-0"} absolute lg:hidden z-10 p-4 bg-white text-center px-8 w-full transition-opacity duration-300`}>
                <ul className="font-sans text-md bg-slate-100 bg-transparent">
                    <li className='p-4 hover:bg-gray-200'>Home</li>
                    <li className='p-4 hover:bg-gray-200'>About</li>
                    <li className='p-4 hover:bg-gray-200'>Course</li>
                    <li className='p-4 hover:bg-gray-200'>Blog</li>
                    <li className='p-4 hover:bg-gray-200'>Contact</li>

                    <div className='flex flex-col gap-y-2'>
                        <button className='flex border border-[#20B486] justify-center gap-3 px-5 py-3 rounded-md hover:bg-[#93e5cb]'>
                            <img src={lock} alt="lock" className='' />
                            Login
                        </button>
                        <button className="bg-[#20B486] text-white font-bold px-5 py-3 rounded-md hover:bg-[#173129]">Sign up for Free</button>
                    </div>
                </ul>
            </div>
        </div>
    )
}
