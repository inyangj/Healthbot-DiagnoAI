import confirmemaillogo from "../assets/confirmemaillogo.png"
import healthicon from '../assets/Vector.png'
import HomeCardCarousel from "../components/HomeCardCarousel"
// import CardCarousel from "../components/cardCarousel"

const ConfirmEmailScreen = () => {


    return (
        <div>
            <div className="flex flex-col gap-y-6 md:flex-row w-full mx-auto bg-white">
            <div className="background-image hidden lg:flex lg:w-1/2">
                    <div className="absolute top-16 left-6 flex flex-row gap-2">
                            <img src={ healthicon} alt="health icon" className="w-12 h-12" />
                    <h1 className="text-white text-3xl font-semibold">DiagnoAI</h1>
                    
                    </div>
                   
                    <div className="mx-auto mt-[25rem]">
                        <HomeCardCarousel/>
                        {/* <CardCarousel/> */}
                    </div>
                </div>

              
               
                <div className="w-full mt-44 flex flex-col items-start justify-center px-24 lg:mt-1 lg:w-1/2">
                    <img src={confirmemaillogo} alt="confirm email logo" className="w-12" />
                    <h1 className="text-textprimary text-4xl font-bold">Verify email</h1>
                    <p className="text-sm text-textgray mt-2">
                    We sent a verification link to <span className="text-textprimary font-bold">john***@gmail.com.</span><br/>
                    Kindly go to your email and verify account to proceed
                    </p>
                
                </div>
            </div>
        </div>
    )
}

export default ConfirmEmailScreen