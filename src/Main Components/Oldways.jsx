import React from 'react'

const Oldways = () => {
    return (
        /* 
           1. Responsive Width: w-full on mobile, scaling up to md:max-w-[70%] and lg:max-w-[40%]
           2. Responsive Margins: mt-16 for mobile, mt-25 for desktop
           3. Padding: Added px-6 to ensure text doesn't touch screen edges on phones
        */
        <div className='flex flex-col mx-auto w-full md:max-w-[75%] lg:max-w-[40%] justify-center gap-y-4 mt-16 md:mt-25 px-6 md:px-0'>
            
            {/* The Tagline */}
            <p className='flex text-start items-center text-orange text-base md:text-lg gap-x-2 font-medium'>
                <span className='size-[10px] md:size-[14px] bg-orange rounded-full'></span> 
                The old way
            </p>

            {/* Main Quote: Adjusted text size for smaller screens */}
            <p className='text-2xl md:text-3xl font-medium leading-tight'>
                <span className='text-primary'>For decades, liquor retailers have been forced</span>{" "}
                <span className='text-primary/85'>to choose</span>{" "}
                <span className='text-secondary'>between 90s technology or tools built for restaurants.</span>
            </p>

            {/* Sub-quote: scaled from 1.25rem (xl) to 1.5rem (2xl) */}
            <p className='text-secondary text-start font-medium text-xl md:text-2xl mt-4 md:mt-7'>
                We finally built the system liquor stores deserve.
            </p>
        </div>
    )
}

export default Oldways