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
        <div className="flex flex-col gap-y-12 md:gap-y-15 mt-10 md:mt-20 px-6 md:px-0">
            {/* Main Content Container */}
            <div className="flex flex-col gap-y-6 md:gap-y-8 justify-center items-center">
                <p className="px-3 py-1 rounded-2xl w-fit bg-secondary/20 text-secondary font-normal text-sm md:text-lg text-center">
                    Introducing Scotch
                </p>
                
                {/* Heading: text-4xl on mobile, text-6xl on desktop */}
                <h1 className="text-4xl md:text-6xl font-medium w-full md:max-w-[70%] lg:max-w-[55%] text-center text-primary leading-tight">
                    The system that knows liquor like you do.
                </h1>
                
                {/* Subtext: text-base on mobile, text-xl on desktop */}
                <p className="text-base md:text-xl font-normal w-full md:max-w-[60%] lg:max-w-[40%] text-center text-primary">
                    Far from just another POS, Scotch is the all-in-one operating system designed exclusively for liquor retailers.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-x-3 w-full sm:w-auto items-center">
                    <div className="w-full sm:w-auto">
                        <FilledButton Text={"Book a demo"} bgColor={"bg-orange"} textColor={"text-white"} />
                    </div>
                    <div className="w-full sm:w-auto">
                        <NrmlButton Text={"Pricing"} />
                    </div>
                </div>
            </div>

            {/* Hero Image Container */}
            <div className="flex justify-center items-center overflow-hidden">
                <img 
                    className="w-full md:w-[80%] lg:w-[60%] h-auto object-contain" 
                    src={HeroImg} 
                    alt="Hero Image" 
                />
            </div>

            {/* Retailers Logo Section */}
            <div className="flex flex-col lg:flex-row justify-between items-center mt-6 py-8 border-t border-t-secondary/20 gap-y-8">
                <p className="text-lg md:text-xl font-medium text-secondary text-center lg:text-left">
                    Designed with support from <span className="text-primary">top Retailers</span>
                </p>
                
                {/* Logo Grid: Flex-wrap on mobile, gap adjusted */}
                <div className="flex flex-wrap justify-center items-center gap-6 md:gap-x-10 px-4 md:px-0">
                    <img className="h-6 md:h-8 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" src={h1} alt="Retailer 1" />
                    <img className="h-6 md:h-8 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" src={h2} alt="Retailer 2" />
                    <img className="h-6 md:h-8 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" src={h3} alt="Retailer 3" />
                    <img className="h-6 md:h-8 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" src={h4} alt="Retailer 4" />
                    <img className="h-6 md:h-8 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" src={h5} alt="Retailer 5" />
                    <img className="h-6 md:h-8 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" src={h6} alt="Retailer 6" />
                </div>
            </div>
        </div>
    )
}

export default Hero