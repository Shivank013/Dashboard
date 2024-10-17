import cover from "../../public/images/cover.jpg"
import user from "../../public/images/user.png"
import { FiEdit } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import Image from "next/image";

export default function ProfileTab() {
    return (
      <div className=" h-full">
         <h1 className=" h-[7%] flex items-start font-ramabhadra text-2xl w-full font-semibold">Your story, your way.</h1>
         <div className=" h-[93%] w-full flex flex-col pr-10 pb-[3vh] justify-center items-center">
            <div className=" flex flex-col justify-center items-center w-full h-[32%]">
              <div className=" w-full h-full bg-orange-500">
                <Image className=" h-full w-full object-cover" alt="" src={cover}/>
              </div>
              <div className=" h-[10rem] w-[10rem] z-5 border-[1rem] mt-[11%] border-white absolute rounded-full ">
                <Image className=" w-full h-full rounded-full" alt="" src={user}/>
              </div>
            </div>
            <div className=" flex justify-between items-center w-full h-[67%] bg-red-600">
              <div className=" flex flex-col gap-3 py-10 px-24 w-[49.8%] h-full bg-white">
                <div className=" flex items-center mb-5 font-radioCanada text-2xl gap-1"><span>Basic Info</span><FiEdit className=" cursor-pointer text-blue-800"/></div>
                <div className=" text-[#656565] flex items-center font-radioCanada text-lg"> <span className=" w-[23%]">Name:</span> <span>John Doe</span> </div>
                <div className=" text-[#656565] flex items-center font-radioCanada text-lg"> <span className=" w-[23%]">Birthday:</span> <span>06/08/1998</span> </div>
                <div className=" text-[#656565] flex items-center font-radioCanada text-lg"> <span className=" w-[23%]">Gender:</span> <span>Male</span> </div>
              </div>

              <div className=" flex flex-col gap-3 py-10 px-24 w-[49.8%] h-full bg-white">
                <div className=" flex items-center mb-5 font-radioCanada text-2xl gap-1"><span>Contact Info</span><FiEdit className=" cursor-pointer text-blue-800"/></div>
                <div className=" text-[#656565] flex items-center font-radioCanada text-lg"> <span className=" w-[23%]">Email:</span> <span>johndoe@gmail.com</span> </div>
                <div className=" text-[#656565] flex items-center font-radioCanada text-lg"> <span className=" w-[23%]">Phone:</span> <span>89236510892</span> </div>
                <div className=" text-[#656565] flex items-center font-radioCanada text-lg"> <span className=" w-[40%]">More options</span></div>
                <div className=" w-full flex flex-row-reverse"><button className=" flex justify-center items-center px-3 py-2 bg-[#3E93E8] hover:bg-[#367fc9] gap-2 text-white font-radioCanada"><MdEmail className=" text-xl"/><span className=" text-sm">Manage emails from google</span></button></div>
              </div>

            </div>
         </div>
      </div>
    );
  }