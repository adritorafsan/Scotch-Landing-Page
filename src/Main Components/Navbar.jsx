import React, { useState } from "react";
import logo from "../assets/logo.png";
import FilledButton from "../Sub Components/FilledButton";
import NrmlButton from "../Sub Components/NrmlButton";
import { FiMenu, FiX } from "react-icons/fi"; // Using react-icons for the toggle

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const Navlinks = ["Products", "Pricing", "About", "Blog"];

    return (
        <div className="sticky top-0 z-50 bg-transparent backdrop-blur-md border-b border-b-secondary/20 shadow-2xl">
            <div className="flex justify-between py-4 px-6 md:px-8 items-center max-w-[1440px] mx-auto">
                
                {/* Left Side: Logo and Desktop Links */}
                <div className="flex justify-center items-center gap-x-8 lg:gap-x-28">
                    <div 
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
                        className="flex justify-center items-center gap-x-2 cursor-pointer group"
                    >
                        <img src={logo} alt="Logo" className="w-8 h-8 md:w-auto" />
                        <h1 className="font-medium text-xl text-primary group-hover:text-secondary">Scotch</h1>
                    </div>

                    {/* Desktop Navigation Links - Hidden on Mobile/Tablet */}
                    <ul className="hidden md:flex justify-center items-center gap-x-6">
                        {Navlinks.map((items, index) => (
                            <li 
                                className="text-lg lg:text-xl cursor-pointer font-medium text-primary hover:text-secondary transition-all duration-300 ease-in-out whitespace-nowrap" 
                                key={index}
                            >
                                {items}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Side: Buttons & Mobile Toggle */}
                <div className="flex justify-center items-center gap-x-4">
                    {/* Buttons - Hidden on small mobile, shown from 'sm' up */}
                    <div className="hidden sm:flex items-center gap-x-4">
                        <NrmlButton Text={"Login"} />
                        <FilledButton Text={"Book a demo"} bgColor={"bg-white"} />
                    </div>

                    {/* Mobile Menu Toggle Button */}
                    <button 
                        className="md:hidden text-primary text-3xl focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile/Tablet Menu Drawer */}
            <div className={`
                absolute top-full left-0 w-full bg-zinc-900 border-b border-secondary/20 transition-all duration-300 ease-in-out md:hidden overflow-hidden
                ${isOpen ? "max-h-screen opacity-100 py-8" : "max-h-0 opacity-0 py-0"}
            `}>
                <ul className="flex flex-col items-center gap-y-6">
                    {Navlinks.map((items, index) => (
                        <li 
                            key={index}
                            className="text-xl font-medium text-primary hover:text-secondary"
                            onClick={() => setIsOpen(false)}
                        >
                            {items}
                        </li>
                    ))}
                    {/* Buttons for very small screens that hide the desktop buttons */}
                    <div className="flex flex-col items-center gap-y-4 sm:hidden pt-4">
                        <NrmlButton Text={"Login"} />
                        <FilledButton Text={"Book a demo"} bgColor={"bg-white"} />
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;