import FilledButton from "../Sub Components/FilledButton";
import NrmlButton from "../Sub Components/NrmlButton";
import HeroImg from "../assets/hero.png"
import h1 from '../assets/h1.png'
import h2 from '../assets/h2.png'
import h3 from '../assets/h3.png'
import h4 from '../assets/h4.png'
import h5 from '../assets/h5.png'
import h6 from '../assets/h6.png'

const Hero = () => {
    return (
        <div className="flex flex-col gap-y-15 mt-20 ">
            <div className=" flex flex-col gap-y-8 justify-center items-center">
                <p className="px-3 py-1 rounded-2xl w-fit bg-secondary/20 text-secondary font-normal text-lg text-center">Introducing Scotch</p>
                <h1 className=" text-6xl font-medium max-w-[55%] text-center text-primary">The system that knows liquor like you do.</h1>
                <p className="text-xl font-normal max-w-[40%] text-center text-primary">Far from just another POS, Scotch is the all-in-one operating system designed exclusively for liquor retailers.</p>
                <div className="space-x-3">
                    <FilledButton Text={"Book a demo"} bgColor={"bg-orange"} textColor={"text-white"} />
                    <NrmlButton Text={"Pricing"} />
                </div>

            </div>
            <div className="flex justify-center items-center">

            <img className="size-[60%]" src={HeroImg} alt="Hero Image" />
            </div>
            <div className="flex justify-between items-center mt-6 py-8 border-t border-t-secondary/20">
                <p className="text-xl font-medium text-secondary">Designed with support from <span className="text-primary">top Retailers</span> </p>
                <div className="flex gap-x-10">
                    <img src={h1} alt="" />
                    <img src={h2} alt="" />
                    <img src={h3} alt="" />
                    <img src={h4} alt="" />
                    <img src={h5} alt="" />
                    <img src={h6} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero