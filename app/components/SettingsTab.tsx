import { SlMagnifier } from "react-icons/sl";
import { MdPlayArrow } from "react-icons/md";
import { BsTrashFill } from "react-icons/bs";


export default function SettingsTab() {
    return (
      <div className="h-full">
        <h1 className=" h-[7%] flex items-start font-ramabhadra text-2xl w-full font-semibold">Customize your experince.</h1>
        <div className=" h-[93%] w-full flex flex-col pr-10 pb-[3vh] justify-center items-center">

          <div className=" w-full flex justify-center items-center h-[20%]">
            <div className=" w-[82%] h-12 border-[0.1rem] mt-1 border-black flex items-center bg-[#F9F3F3] cursor-text hover:bg-[#e3dddd] rounded-full">
            <SlMagnifier className=" ml-6 text-2xl"/>
            <span className=" font-radioCanada text-xl ml-6">Search Setting</span>
            </div>
          </div>

          <div className=" w-full h-[80%] flex flex-col items-center ">
            <div className=" w-[82%] my-6 gap-2 flex flex-col justify-center items-center">
              <button className=" justify-between px-6 items-center flex w-full h-12 border-[0.1rem] border-black bg-[#D9D9D9] hover:bg-[#bcbbbb]">
                <span className=" font-radioCanada text-xl">Account settings </span>
                <MdPlayArrow/>
              </button>
              <button className=" justify-between px-6 items-center flex w-full h-12 border-[0.1rem] border-black bg-[#D9D9D9] hover:bg-[#bcbbbb]">
                <span className=" font-radioCanada text-xl">Privacy and security </span>
                <MdPlayArrow/>
              </button>
              <button className=" justify-between px-6 items-center flex w-full h-12 border-[0.1rem] border-black bg-[#D9D9D9] hover:bg-[#bcbbbb]">
                <span className=" font-radioCanada text-xl">Notification and preference </span>
                <MdPlayArrow/>
              </button>
              <button className=" justify-between px-6 items-center flex w-full h-12 border-[0.1rem] border-black bg-[#D9D9D9] hover:bg-[#bcbbbb]">
                <span className=" font-radioCanada text-xl">Linked accounts </span>
                <MdPlayArrow/>
              </button>
            </div>
            <div className=" flex items-center justify-end w-[82%] mt-2">
              <button className=" px-2 py-1 text-xl flex justify-center items-center gap-2 font-radioCanada bg-red-500 hover:bg-red-600 border-[0.1rem] border-red-700 text-white">
                <span>Delete account</span>
                <BsTrashFill/>
              </button>
            </div>
          </div>

        </div>
      </div>
    );
  }