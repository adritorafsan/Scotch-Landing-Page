import { FaFontAwesomeFlag } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { RiWifiOffLine } from "react-icons/ri";
import Button from "../Sub Components/Button";
import paymentimage from '../assets/3dss.png'

const PosPayment = () => {
  return (
    <div className="mt-16 md:mt-20 px-6 md:px-0">
        {/* Header Section */}
        <div className="flex justify-center flex-col items-center gap-y-4 md:gap-y-3">
            <p className="text-primary text-lg md:text-xl flex items-center gap-x-2 font-medium">
                <FaFontAwesomeFlag /> POS & Payments
            </p>
            {/* Heading: Adjusted width for mobile vs desktop */}
            <h1 className="text-2xl md:text-4xl font-medium text-primary text-center w-full md:max-w-[70%] lg:max-w-[40%] leading-tight">
                Process transactions faster with the lowest fees guaranteed
            </h1>
            <div className="pt-2">
                <Button text={"Find out more"}/>
            </div>
        </div>

        {/* Main Image */}
        <div className="flex justify-center items-center mt-10">
            <img 
                src={paymentimage} 
                alt="Payment terminal display" 
                className="w-full md:w-[80%] lg:w-auto h-auto object-contain"
            />
        </div>

        {/* Features List: 
            Stacked vertically on mobile, row on desktop 
        */}
        <div className="flex flex-col md:flex-row justify-center items-start md:items-center mt-10 md:mt-5 gap-y-6 md:gap-x-8">
            <p className="flex text-base md:text-lg items-center gap-x-3 font-normal text-secondary"> 
                <FaRegCreditCard className="text-white shrink-0" /> 
                <span>Process faster, with the <span className="text-white">lowest fees</span></span>
            </p>
            <p className="flex text-base md:text-lg items-center gap-x-3 font-normal text-secondary"> 
                <CgProfile className="text-white shrink-0" /> 
                <span>Sign up customers <span className="text-white">instantly</span></span>
            </p>
            <p className="flex text-base md:text-lg items-center gap-x-3 font-normal text-secondary"> 
                <RiWifiOffLine className="text-white shrink-0" /> 
                <span>Keep selling — <span className="text-white">even offline</span></span>
            </p>
        </div>
    </div>
  )
}

export default PosPayment