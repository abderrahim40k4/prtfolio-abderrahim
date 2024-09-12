import { FaBaby } from "react-icons/fa6"
import NavBar from "./components/NavBar"
import Navbar from "./components/NavBar"
import HeroSec from "./components/HeroSec"
import AboutSec from "./components/AboutSec"


function App() {

  return (
    <>
          <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-500 selection:text-cyan-900 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] ">
          <div class="fixed top-0 z-[-2] h-full w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            <div className="h-full w-full flixed top-0 -z-0"></div>
            <div className="container mx-auto px-8">
            <Navbar />
            <HeroSec/>
              <AboutSec/>
            </div>

          </div>
    </>
  )
}

export default App
