import BackOffice from "./Main Components/BackOffice"
import Hero from "./Main Components/Hero"
import Navbar from "./Main Components/Navbar"
import PosPayment from "./Main Components/PosPayment"


function App() {
 

  return (
   <div className=" max-h-full max-w-[1440px] mx-auto">
      <Navbar />
      <Hero />
      <BackOffice />
      <PosPayment />
   </div>
  )
}

export default App
