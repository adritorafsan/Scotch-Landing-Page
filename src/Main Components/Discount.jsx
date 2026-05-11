import phoneimg from '../assets/phone.png'
import logo from '../assets/logo.png'
import FilledButton from '../Sub Components/FilledButton'

const Discount = () => {
  return (
    /* 
       1. Changed to flex-col on mobile, flex-row on desktop.
       2. Reset pt-13 for better mobile spacing.
       3. Replaced fixed gap-x-30 with responsive gap.
    */
    <div className="bg-secondary/20 mt-16 md:mt-20 text-primary py-10 md:pt-13 md:pb-0 gap-y-10 lg:gap-x-20 max-w-[95%] md:max-w-[90%] mx-auto rounded-2xl flex flex-col md:flex-row items-center overflow-hidden">
        
        {/* Image Container: 
            Scaling the phone so it fits mobile width without breaking the container 
        */}
        <div className='w-full md:w-1/2 flex justify-center order-2 md:order-1'>
            <img 
                className='w-[80%] md:w-auto md:max-w-[130%] h-auto object-contain md:translate-y-4' 
                src={phoneimg} 
                alt="Phone displaying Scotch app" 
            />
        </div>

        {/* Text Content: 
            Center-aligned on mobile, left-aligned on desktop 
        */}
        <div className='w-full md:w-1/2 space-y-6 md:space-y-10 px-6 md:px-0 text-center md:text-left order-1 md:order-2'>
            <div className="flex justify-center md:justify-start">
                <img className='rounded-full size-12 md:size-16' src={logo} alt="Logo" />
            </div>
            
            {/* Fluid Heading: text-3xl on phones, text-5xl on desktop */}
            <h1 className='text-3xl md:text-5xl font-semibold w-full md:max-w-[90%] leading-tight'>
                Spend 20% less time on the stuff you hate.
            </h1>
            
            <div className="flex justify-center md:justify-start pt-2">
                <FilledButton textColor={"white"} bgColor={"bg-orange"} Text={"Book a demo"} />
            </div>
        </div>
    </div>
  )
}

export default Discount