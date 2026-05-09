import { FaFontAwesomeFlag } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa";

import { CgProfile } from "react-icons/cg";

import { RiWifiOffLine } from "react-icons/ri";
import Button from "../Sub Components/Button";

import paymentimage from '../assets/3dss.png'
    
const PosPayment = () => {
  return (
    <div className="mt-20">
        <div className="flex justify-center flex-col items-center gap-y-3">
            <p className="space-x-2 text-primary text-xl flex items-center gap-x-2"><FaFontAwesomeFlag /> POS & Payments</p>
            <h1 className="text-3xl font-medium text-primary text-center max-w-[40%]">Process transactions faster with the lowest fees guaranteed</h1>
            <Button text={"Find out more"}/>
        </div>
        <div className="flex justify-center items-center mt-10">
            <img src={paymentimage} alt="Payment" />
        </div>
        <div className="flex justify-center items-center mt-5 gap-x-8">
            <p className="flex text-lg items-center gap-x-3 font-normal text-secondary"> <FaRegCreditCard className="text-white" /> Process faster, with the <span className="text-white">lowest fees</span></p>
            <p className="flex text-lg items-center gap-x-3 font-normal text-secondary"> <CgProfile className="text-white" /> Sign up customers <span className="text-white">instantly</span></p>
            <p className="flex text-lg items-center gap-x-3 font-normal text-secondary"> <RiWifiOffLine className="text-white" />Keep selling — <span className="text-white">even offline</span></p>
        </div>
    </div>
  )
}

export default PosPayment