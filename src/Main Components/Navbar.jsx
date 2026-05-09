import logo from "../assets/logo.png";
import FilledButton from "../Sub Components/FilledButton";
import NrmlButton from "../Sub Components/NrmlButton";

const Navbar = () => {
    const Navlinks =["Products","Pricing","About","Blog"];
  return (
    <div className="flex justify-between py-4 px-8 border-b border-b-secondary/20 items-center">
        <div className=" flex justify-center items-center gap-x-28">
            <div className="flex justify-center items-center gap-x-2 cursor-pointer group">
                <img src={logo} alt="Logo" />
                <h1 className="font-medium text-xl text-primary group-hover:text-secondary">Scotch</h1>
            </div>
            <ul className="flex justify-center items-center gap-x-4">
                {Navlinks.map((items,index)=>{
                    return (
                        <li className="text-xl cursor-pointer font-medium text-primary hover:text-secondary transition-all duration-300 ease-in-out" key={index}>{items}</li>
                    )
                })}</ul>
        </div>
        <div className="flex justify-center items-center gap-x-4">
            <NrmlButton Text={"Login"}/>
            <FilledButton  Text={"Book a demo"} bgColor={"bg-white"}/>
        </div>
    </div>
  )
}

export default Navbar