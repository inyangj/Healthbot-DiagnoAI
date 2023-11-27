import { Link } from "react-router-dom"
import homeimg from "../assets/authImage.png"
import healthicon from '../assets/Vector.png'
import HomeCardCarousel from "../components/HomeCardCarousel"

const Layout = ({children}) => {


    return (
        <div>
            <div className="flex flex-col gap-y-6 md:flex-row w-full mx-auto bg-white">
            <div className="background-image hidden lg:flex lg:w-1/2">
                    <div className="absolute top-16 left-6 flex flex-row gap-2">
                            <img src={ healthicon} alt="health icon" className="w-12 scale-75 h-12" />
                    <h1 className="text-white text-3xl font-semibold">DiagnoAI</h1>
                    
                    </div>
                   
                    <div className="mx-auto mt-[25rem]">
                        <HomeCardCarousel/>
                       
                    </div>
                </div>

              
               
                <div className="w-full flex flex-col items-center justify-center px-3 lg:px-1 lg:w-1/2">

                  {children}
                </div>
            </div>
        </div>
    )
}

export default Layout   