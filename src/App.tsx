// import { useState } from 'react'
import './App.css'
import Menu from "./Menu.tsx";
import navioNoTextLogo from "./../public/navio_without_text.png";
import managerIpad from "./../public/manager-ipad.jpg"
import kalle from "./../public/kalle.png"
import violet from "./../public/Violet.png"
import roman from "./../public/roman.png"
import {Button} from "./components/ui/button.tsx";
import { FaPlus } from 'react-icons/fa';
import { FaFileSignature, FaSquareInstagram, FaXTwitter, FaFacebook, FaYoutube } from 'react-icons/fa6';
import { GiTalk } from 'react-icons/gi';
import { MdOutlinePayment } from 'react-icons/md';
import { AiOutlineScan } from 'react-icons/ai';
import {Model} from "./Model.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ViewModel from "./ViewModel.tsx";

function Home() {
    return (
        <div className={"min-h-screen"}>
            <Menu />
            <div>
                <img src={navioNoTextLogo} alt="logo" className={"mx-auto"}/>
                <h1>
                    <b>
                        Navio puts the control of facilities in your own hands.
                    </b>
                </h1>
                <Button className={"bg-amber-50 m-8 text-blue-950 hover:bg-blue-400"}>
                    <b>
                        Get in touch!
                    </b>
                </Button>
            </div>
            <div className={"bg-amber-50 h-96 flex justify-between"}>
                <div className={"flex-1 flex justify-center items-center mx-40 font-bold text-xl"}>
                    "Buildings lack information.
                    This leads to people getting lost inside of them,
                    managers struggling to maintain them and owners to sell them.
                    We will help you to get these back in your hands."
                </div>
                <div className={"flex-1"}>
                    <img src={managerIpad} alt="manager ipad" className={"max-h-full object-cover ml-auto"}/>
                </div>
            </div>
            <div>
                <div className={"flex justify-center items-center m-10"}>
                    <FaPlus className={"text-green-500"} />
                    <div className={"w-[30%]"}>
                        Easier navigation through your buildings with the use of precise LiDAR mapping and unique navigational algorithms.
                    </div>
                </div>
                <div className={"flex justify-center items-center m-10"}>
                    <FaPlus className={"text-green-500"} />
                    <div className={"w-[30%]"}>
                        Envision how renovations would improve your building by placing and coloring your objects in any way you want.
                    </div>
                </div>
                <div className={"flex justify-center items-center m-10"}>
                    <FaPlus className={"text-green-500"} />
                    <div className={"w-[30%]"}>
                        See easily where certain equipment like sockets or pipelines are located in your rooms for employees and maintenance workers
                    </div>
                </div>
            </div>
            <div className={"h-70 bg-amber-50"}>
                <div className={"font-bold text-xl mt-10"}>
                    How it works
                </div>
                <div className="flex justify-center gap-8">
                    {[
                        {
                            Icon: FaFileSignature,
                            text: "Sign up to book an appointment with one of our specialized employees"
                        },
                        {
                            Icon: GiTalk,
                            text: "Our specialized employees will explain to you what value the product provides to you"
                        },
                        {
                            Icon: MdOutlinePayment,
                            text: "Pay the initial set-up and scanning fee, then only subscription payment"
                        },
                        {
                            Icon: AiOutlineScan,
                            text: "Our employee will visit your building to scan it."
                        }
                    ].map(({ Icon, text }, i) => (
                        <div key={i} className="flex flex-col items-center justify-center w-[20vw] text-center">
                            <Icon className="w-[8vw] h-[8vw] my-5" />
                            <div className="w-[80%]">{text}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={"flex justify-center gap-20 mt-10"}>
                {
                    [
                        {
                            Profile: kalle,
                            text: "\"The product has transformed our company in a business ready for the future! Unbelievable that this is available for such a welcoming price.\" \n - Kalle scheringa"
                        },
                        {
                            Profile: violet,
                            text: "\"This service has helped us save time by integrating all the chores we have with our facilities into a one simple solution.\"\n"+
                                "\n"+
                                "            - Peter van Violet\n"+
                                "               (former politician)"
                        },
                        {
                            Profile: roman,
                            text: "\"This product helped me so much with installing piping and electric wires quicker and more efficiently, I recommend it a lot.\"\n" +
                                "\n" +
                                "            - Elon Pižmý\n" +
                                "                (Electrician)"
                        }
                    ].map(({ Profile, text }, i) => (
                        <div key={i} className="flex flex-col items-center justify-center w-[20vw] text-center bg-blue-300 border-2 border-blue-400 rounded-2xl">
                            <div className="w-[80%]">{text}</div>
                            <img src={Profile} className="w-[5vw] h-[5vw] my-5" alt={"profile"}/>
                        </div>
                    ))}
            </div>
            <div className={"bg-blue-600 h-[20vh] mt-10"}>
                <div className={"flex h-[20vh] justify-center items-center text-center"}>
                    <div className={"font-bold text-3xl text-blue-300 mr-10"}>
                        Ready to dive in with us?
                    </div>
                    <Button className={"font-bold text-xl bg-red-500 hover:bg-red-600 hover:text-red-950"}>
                        Click here!
                    </Button>
                </div>
            </div>
            <div>
                <Model scale={10}/>
            </div>
            <div className={"flex bg-gray-100 h-[25vh] border-t-3 border-black justify-between"}>
                <div className={"mt-10 ml-3 text-left"}>
                    About Us<br/>
                    Privacy policy<br/>
                    General terms and conditions<br/>
                    <br/>
                    All rights reserved 2025 · Privacy Policy
                </div>
                <div className={"mt-10 mr-2"}>
                    <div className={"text-left mb-2 font-bold"}>
                        Follow us:
                    </div>
                    <div className="flex gap-2">
                        <a href="https://www.instagram.com/navio_tbe/" target="_blank" rel="noopener noreferrer">
                            <FaSquareInstagram className="w-12 h-12" />
                        </a>
                        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                            <FaXTwitter className="w-12 h-12" />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="w-12 h-12" />
                        </a>
                        <div>
                            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">
                                <FaYoutube className="w-12 h-12" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Preview() {
    return (
        <ViewModel/>
    )
}
function App() {
  // const [count, setCount] = useState(0)
    const base = import.meta.env.BASE_URL
  return (
      <BrowserRouter>
          <Routes>
              <Route path={`${base}`} element={<Home />} />
              <Route path={`${base}preview`} element={<Preview />} />
          </Routes>
      </BrowserRouter>
  )
}


export default App
