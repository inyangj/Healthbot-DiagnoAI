import { Link } from "react-router-dom"
import homeimg from "../assets/authImage.png"
import healthicon from '../assets/Vector.png'
// import CardCarousel from "../components/CardCarousel"
import FormData from "../components/FormData"
import google from "../assets/svg/google.svg";


const Signup = () => {


    return (
        <div>
            <div className="flex flex-col gap-y-6 md:flex-row w-full mx-auto bg-white">
                {/* <div className="w-full hidden lg:block relative lg:w-1/2"> */}
                <div className="background-image hidden lg:flex lg:flex-row lg:justify-center lg:items-end lg:w-1/2">
                <div className="absolute top-16 left-6 flex flex-row gap-2">
                            <img src={ healthicon} alt="health icon" className="w-12 h-12" />
                    <h1 className="text-white text-3xl font-semibold">DiagnoAI</h1>
                    
                    </div>
                   
                    {/* <div>
                        <CardCarousel/>
                    </div> */}
                </div>

              
               
                <div className="w-full px-12 py-12 flex flex-col items-center justify-center lg:px-1 lg:w-1/2">

                    <div className="w-96">
                   
                    <h2 className=" font-Nohemi_Bold text-primary font-bold text-[1.625rem] xl:text-[2.25rem]">Create account</h2>
                        <p className="text-textgray my-1 text-sm">Lets get you up and running with DiagnoAI</p>
                        
                        
              <div>
                <FormData />
                       </div>

                <div className="flex items-center my-8">
                <hr className="flex-grow border-t border-gray-400" />
                <p className="mx-2 text-gray-500">or</p>
                <hr className="flex-grow border-t border-gray-400" />
                </div>
                <button className="flex items-center gap-[0.72rem] border border-gray_4 rounded-[0.27rem] w-full justify-center py-2 font-AeonikTRAIL_Bold font-bold mb-8"><img src={google} alt="Google Icon" />Continue with Google</button>
                <p className="text-[0.75rem] text-gray_3">Already have an account?<span className="text-secondary"><Link to={"/signup"}>Login</Link></span></p>
                <div className="flex text-xs justify-center gap-2 text-secondary fixed bottom-2 left-0 right-0 translate-x-0 lg:hidden">
                    <p>Terms of Service</p>
                    <p className="text-black">|</p> <p>Privacy Policy</p>
                </div>
               </div>
                </div>
            </div>
        </div>
    )
}

export default Signup