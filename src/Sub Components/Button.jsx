import { FaArrowRightLong } from "react-icons/fa6";

const Button = ({text}) => {
  return (
    <button className="text-xl flex justify-center items-center gap-2 font-medium text-orange cursor-pointer px-1 py-2 group ">{text} <FaArrowRightLong className=" group-hover:translate-x-1 transform transition-transform duration-300 ease-in-out" /></button>
  )
}

export default Button