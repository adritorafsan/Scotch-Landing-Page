import { ImBook } from "react-icons/im";
import { AiFillCopy } from "react-icons/ai";
import { AiFillThunderbolt } from "react-icons/ai";
import { PiScan } from "react-icons/pi";
import image from '../assets/img2.png'
import productimg from '../assets/productface.png'
import Button from "../Sub Components/Button";

const BackOffice = () => {
    return (
        <div className="mt-10 md:mt-15 px-6 md:px-0">
            {/* Header Section: 
                Stack vertically on mobile, row on desktop 
            */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-y-8">
                <div className="space-y-4">
                    <p className="text-primary text-lg md:text-xl flex items-center gap-x-2 font-medium">
                        <ImBook className="shrink-0" /> <span>Back Office</span>
                    </p>
                    <h1 className="text-3xl md:text-4xl font-medium w-full lg:max-w-[80%] text-primary leading-tight">
                        Simplify inventory, ordering, and analytics
                    </h1>
                    <div className="pt-2">
                        <Button text={"Learn More"} />
                    </div>
                </div>

                {/* Feature Icons: 
                    2 columns on small phones, 3 columns on tablets/desktop 
                */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 lg:flex lg:gap-x-8">
                    <div className="flex flex-col gap-y-2">
                        <AiFillThunderbolt className="text-white text-xl" />
                        <p className="text-secondary text-base md:text-lg max-w-[150px]">
                            <span className="text-primary">Optimize</span> stock and margins
                        </p>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <PiScan className="text-white text-xl" />
                        <p className="text-secondary text-base md:text-lg max-w-[150px]">
                            <span className="text-primary">Automatically</span> read invoices
                        </p>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <AiFillCopy className="text-white text-xl" />
                        <p className="text-secondary text-base md:text-lg max-w-[150px]">
                            <span className="text-primary">Access</span> real-time dashboards
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Section: 
                Stack vertically on mobile, horizontal on desktop 
            */}
            <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-x-5">
                <div className="space-y-5 lg:flex-2 w-full">
                    <img className="rounded-xl w-full object-cover shadow-lg" src={image} alt="Back office interface" />
                    
                    {/* Bottom Labels: 
                        Scrollable on small screens if they overflow 
                    */}
                    <div className="flex flex-wrap md:flex-nowrap gap-x-6 md:gap-x-8 items-center pt-4">
                        {["Ordering", "Receiving", "Analytics"].map((label) => (
                            <p key={label} className="text-primary py-2 md:py-3 text-lg md:text-xl border-t-2 border-t-primary">
                                {label}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Side Image: 
                    Hidden -mt logic for mobile to avoid overlap issues 
                */}
                <div className="bg-green-300 lg:flex-1 flex justify-center items-center w-full rounded-xl lg:-mt-20">
                    <img className="w-full h-auto p-4 lg:p-0" src={productimg} alt="Product focus" />
                </div>
            </div>
        </div>
    )
}

export default BackOffice