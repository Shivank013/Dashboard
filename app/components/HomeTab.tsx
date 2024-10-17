import Image from "next/image";
import { GoBell } from "react-icons/go";
import gallery from "../../public/images/animate.jpg"
import folder from "../../public/images/folder.png"
import play from "../../public/images/play.png"
import planning from "../../public/images/planning.png"
import fb from "../../public/images/facebook.png"
import tw from "../../public/images/twitter.png"
import inst from "../../public/images/social.png"
import task from "../../public/images/goal.png"
import WeatherCard from "./Weathercardd";
import { TiArrowSortedUp } from "react-icons/ti";
import { FaDollarSign } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

export default function HomeTab() {
    return (
      <div className=" h-full">
        <h1 className=" h-[7%] flex items-start font-ramabhadra text-2xl w-full font-semibold">Welcome back, let&apos;s dive in!</h1>
        <div className=" h-[93%] w-full flex flex-col pr-10 pb-[3vh] justify-center items-center">

          <div className=" h-[55%] w-full flex flex-row justify-between items-start">

            <div className=" rounded-2xl p-[4%] flex flex-col justify-between items-center h-[94%] w-[28%] bg-[#FFCECE]">
              <div className=" w-full h-[65%] rounded-2xl overflow-hidden"><Image className="h-full" alt="" src={gallery}/></div>
              <div className=" w-full flex flex-row justify-between items-end h-[35%]">
                <div>
                  <h3 className=" font-ramabhadra text-xl text-[#5534AE]">Latest upload</h3>
                  <span className=" font-ramabhadra">186 total files</span>
                </div>
                <button className=" h-[70%] w-[22%] flex justify-center items-center text-2xl text-white font-bold bg-[#5534AE] rounded-2xl"><FaPlus/></button>
              </div>
            </div>

            <div className=" rounded-2xl h-[94%] w-[36%] flex flex-col justify-between items-center">

              <div className=" shadow-xl cursor-pointer bg-[#FAF1D4] h-[44%] flex justify-between items-center rounded-2xl py-5 px-10 w-full">
                <div className="  h-full w-[40%] justify-center items-start flex flex-col">
                <h3 className=" font-ramabhadra text-xl ">Open Projects</h3>
                <span className=" font-ramabhadra text-[#BEAFE6]">47 task pening</span>
                </div>
                <div className=" h-full w-[25%]"><Image className=" h-full" alt="" src={folder}/></div>
              </div>

              <div className=" flex justify-between items-center h-[42%] w-full">
                <div className=" shadow-xl cursor-pointer rounded-2xl flex flex-col justify-center items-center p-6 bg-[#D5C9F5] w-[44%] h-full">
                  <div className="h-[70%] flex justify-center w-full"><Image alt="" src={play} className=" object-cover w-auto h-full"/></div>
                  <div className=" h-[30%] w-full flex justify-center pt-2 font-ramabhadra text-sm">Watch list</div>
                </div>
                <div className=" rounded-2xl cursor-pointer flex flex-col justify-center items-center p-6 bg-[#5420E0] w-[44%] h-full">
                  <div className="h-[70%] flex justify-center w-full"><Image alt="" src={planning} className=" object-cover w-auto h-full"/></div>
                  <div className=" h-[30%] w-full flex justify-center pt-2 font-ramabhadra text-white text-sm">Urgent to do</div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl h-[94%] w-[28%] bg-[#212121]">
              <WeatherCard/>
            </div>

          </div>

          <div className=" h-[45%] w-full flex flex-row justify-between items-end">

            <div className=" rounded-2xl h-[94%] w-[28%] flex flex-col just">

              <div className=" w-full h-[20%]">
                <button className=" font-radioCanada text-white text-xl px-3 py-1 bg-[#EB6668] rounded-full">Latest Upates</button>
              </div>

              <div className=" w-full h-[80%] flex flex-col justify-between items-center">

                <div className="w-full cursor-pointer flex flex-row justify-between items-center h-[30%] ">
                  <Image className=" h-[85%] w-auto rounded-full object-cover" alt="" src={fb}/>
                  <span className=" font-radioCanada text-xl w-[40%]">Facebook</span>
                  <div className=" flex justify-center text-lg text-[#4267B2] items-center">
                    <span className=" mr-1">~11</span>
                    <GoBell className=" text-[#FFCC00]"/>
                  </div>
                </div>

                <div className="w-full cursor-pointer flex flex-row justify-between items-center h-[30%] ">
                  <Image className=" h-[85%] w-auto rounded-full object-cover" alt="" src={tw}/>
                  <span className=" font-radioCanada text-xl w-[40%]">Twitter</span>
                  <div className=" flex justify-center text-lg text-[#1DA1F2] items-center">
                    <span className=" mr-1">~23</span>
                    <GoBell className=" text-[#FFCC00]"/>
                  </div>
                </div>

                <div className="w-full cursor-pointer flex flex-row justify-between items-center h-[30%] ">
                  <Image className=" h-[85%] w-auto rounded-full object-cover" alt="" src={inst}/>
                  <span className=" font-radioCanada text-xl w-[40%]">Instgram</span>
                  <div className=" flex justify-center text-lg text-[#E1306C] items-center">
                    <span className=" mr-1">~6</span>
                    <GoBell className=" text-[#FFCC00]"/>
                  </div>
                </div>

              </div>

            </div>

            <div className=" rounded-2xl h-[94%] flex justify-center items-center p-10 w-[35%]">
              <div className=" w-[50%] flex justify-center items-center h-full"><Image className=" w-full h-auto object-cover" alt="" src={task}/></div>
              <div className=" w-[50%] flex flex-col justify-center items-center h-full">
                <span className=" font-rajdhani text-5xl text-[#676767] font-light">76%</span>
                <span className=" font-ramabhadra text-xl">Task completed</span>
              </div>
            </div>

            <div className=" cursor-pointer rounded-2xl h-[85%] w-[31%] shadow-2xl flex flex-col justify-center items-center p-6 ">
              <div className=" w-full h-[45%] flex justify-between items-center">
                <div className=" w-16 h-16 rounded-full bg-[#3FC527] flex justify-center items-center text-white text-4xl font-bold"><FaDollarSign/></div>
                <span className=" font-rajdhani font-semibold text-3xl">Revenue</span>
                <div className=" font-ramabhadra text-2xl flex text-[#3FC527]">
                  <TiArrowSortedUp className=" text-3xl"/>
                  <span>20%</span>
                </div>
              </div>
              <div className=" w-full h-[55%] p-10 items-center font-rajdhani flex justify-center">
                <span className=" font-semibold text-7xl">39,500</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }