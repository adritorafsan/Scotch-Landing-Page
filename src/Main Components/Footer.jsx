import React from 'react'
import Footerlist from '../Sub Components/Footerlist'
import logo from "../assets/logo.png";

const Footer = () => {
    return (
        <div className='mt-16 md:mt-25 px-6 md:px-10 max-w-[1440px] mx-auto'>

            {/* Main Footer Content: 
                Stacks vertically on mobile, row on desktop 
            */}
            <div className='flex flex-col md:flex-row gap-y-10 md:gap-x-20'>
                
                {/* Branding Section */}
                <div className="flex gap-x-2 cursor-pointer group w-fit">
                    <div className="shrink-0">
                        <img src={logo} alt="Logo" className="w-8 h-8 md:w-auto" />
                    </div>
                    <h1 className="font-medium text-xl text-primary group-hover:text-secondary">Scotch</h1>
                </div>

                {/* Links Container: 
                    Uses grid for a clean 2-column layout on small screens 
                */}
                <div className='grid grid-cols-2 gap-x-12 sm:gap-x-20 md:flex md:gap-x-16'>
                    <div className="space-y-4">
                        <p className='text-sm md:text-md font-semibold text-secondary uppercase tracking-wider'>Products</p>
                        <ul className='space-y-2'>
                            <Footerlist text="POS & Payments" />
                            <Footerlist text="Back Office" />
                        </ul>
                    </div>
                    
                    <div className="space-y-4">
                        <p className='text-sm md:text-md font-semibold text-secondary uppercase tracking-wider'>Company</p>
                        <ul className='space-y-2'>
                            <Footerlist text="Pricing" />
                            <Footerlist text="About" />
                            <Footerlist text="Blog" />
                            <Footerlist text="Careers" />
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar: 
                Adjusted the massive top margin for mobile consistency 
            */}
            <div className='pt-8 border-t border-t-secondary/30 mt-20 md:mt-40 w-full lg:max-w-[60%] mb-8'>
                <p className='text-secondary text-xs md:text-sm'>
                    &copy; Scotch 2026. All rights reserved. 
                   
                </p>
            </div>
        </div>
    )
}

export default Footer