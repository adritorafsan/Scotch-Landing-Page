import { ImBook } from "react-icons/im";

import { AiFillCopy } from "react-icons/ai";
import { AiFillThunderbolt } from "react-icons/ai";
import { PiScan } from "react-icons/pi";
import image from '../assets/img2.png'
import productimg from '../assets/productface.png'
import Button from "../Sub Components/Button";


const BackOffice = () => {
    return (
        <div className="mt-15">
            <div className="flex justify-between items-center mb-4">
                <div className=" space-y-3">
                    <p className="space-x-2 text-primary text-xl flex items-center gap-x-2"><ImBook /> <span>Back Office</span></p>
                    <h1 className="text-3xl font-medium max-w-[60%] text-primary">Simplify inventory, ordering, and analytics</h1>
                    <Button text={"Learn More"} />
                </div>
                <div className="flex gap-x-3">
                    <div className="flex flex-col gap-y-2 ">
                        <AiFillThunderbolt className="text-white" />
                        <p className="text-secondary text-lg max-w-[200px]"><span className="text-primary">Optimize </span> stock and margins</p>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <PiScan className="text-white" />
                        <p className="text-secondary text-lg max-w-[200px]"> <span className="text-primary">Automatically</span> read invoices</p>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <AiFillCopy className="text-white" />
                        <p className="text-secondary text-lg max-w-[200px]"><span className="text-primary">Access  </span>real-time dashboards</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center gap-x-5">
                <div className="space-y-5 flex-2">
                    <img className=" rounded-xl w-full" src={image} alt="" />
                    <div className="flex gap-x-3 items-center pt-4">
                        <p className="text-primary py-3 text-xl border-t-2 border-t-primary">Ordering</p>
                        <p className="text-primary py-3 text-xl border-t-2 border-t-primary">Receiving</p>
                        <p className="text-primary py-3 text-xl border-t-2 border-t-primary">Analytics</p>
                    </div>
                </div>
                <div className="bg-green-300 flex-1 flex justify-center items-center -mt-20">

                <img className=" w-full " src={productimg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default BackOffice