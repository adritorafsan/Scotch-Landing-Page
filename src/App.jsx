import BackOffice from "./Main Components/BackOffice"
import Discount from "./Main Components/Discount"
import Footer from "./Main Components/Footer"
import Hero from "./Main Components/Hero"
import Navbar from "./Main Components/Navbar"
import NewWay from "./Main Components/NewWay"
import Oldways from "./Main Components/Oldways"
import PosPayment from "./Main Components/PosPayment"


function App() {
 

  return (
   <div className=" max-h-full max-w-[1440px] mx-auto">
      <Navbar />
      <Hero />
      <BackOffice />
      <PosPayment />
      <Oldways />
      <NewWay />
      <Discount />
      <Footer />
   </div>
  )
}

export default App
