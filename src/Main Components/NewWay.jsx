import Invoice from '../assets/invoice.png'
import { IoTimerOutline } from "react-icons/io5";
import { IoEarthSharp } from "react-icons/io5";
import { FaChartLine } from "react-icons/fa6";
import NewWaySubCom from '../Sub Components/NewWaySubCom';

const NewWay = () => {
    return (
        <div className='mt-16 md:mt-20 px-6 md:px-0 overflow-hidden'>
            {/* Main Content Section: Stacks on mobile, Side-by-side on desktop */}
            <div className='flex flex-col lg:flex-row items-center justify-between gap-y-12 lg:gap-x-10'>
                
                <div className='w-full lg:w-1/2'>
                    <div className='space-y-4'>
                        <p className='flex text-start items-center text-orange text-base md:text-lg gap-x-2'>
                            <span className='size-[10px] md:size-[14px] bg-orange rounded-full'></span> 
                            The new way
                        </p>
                        <h1 className='text-3xl md:text-4xl lg:text-3xl font-medium text-primary leading-tight w-full lg:max-w-[80%]'>
                            Scotch is the smart, liquor-specific operating system you’ve been waiting for.
                        </h1>
                    </div>

                    {/* Sub-components list */}
                    <div className='space-y-6 mt-10 md:mt-12'>
                        <NewWaySubCom 
                            icon={<IoTimerOutline />} 
                            heading={"Net changes, not manual chores "} 
                            des={"Spend 20% less time on the stuff you hate with smart, automated workflows."} 
                        />
                        <NewWaySubCom 
                            icon={<IoEarthSharp />} 
                            heading={"Total control, from anywhere"} 
                            des={"Run your business from anywhere with one platform for everything."} 
                        />
                        <NewWaySubCom 
                            icon={<FaChartLine />} 
                            heading={"AI-powered for profitability"} 
                            des={"Boost margins with AI-driven insights that power smarter decisions."} 
                        />
                    </div>
                </div>

                {/* Image Section: Scaling for mobile */}
                <div className='w-full lg:w-1/2 flex justify-center lg:justify-end'>
                    <img 
                        className='w-full md:w-[80%] lg:max-w-[120%] h-auto object-contain' 
                        src={Invoice} 
                        alt="Invoice Interface" 
                    />
                </div>
            </div>

            {/* Bottom Testimonial: 
                Reduced mt-40 to mt-20 for mobile, and expanded width
            */}
            <div className='pt-8 border-t border-t-secondary/50 mt-20 md:mt-40 flex items-center justify-center w-full md:max-w-[80%] lg:max-w-[50%] mx-auto'>
                <p className='text-xl md:text-2xl font-normal text-primary text-center leading-relaxed italic'>
                    “Scotch has completely transformed how we run our store—smarter inventory, faster checkouts, and no more compliance headaches!”
                </p>
            </div>
        </div>
    )
}

export default NewWay