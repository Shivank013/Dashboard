import Barchart from "./Barchart";
import Piechart from "./Piechart";

export default function AnalyticsTab() {
  return (
    <div className="h-full">
        <h1 className=" h-[7%] flex items-start font-ramabhadra text-2xl w-full font-semibold">Insights at a glance.</h1>
        <div className=" h-[93%] w-full flex flex-col pr-10 pb-[3vh] justify-center items-center">

          <div className=" w-full flex justify-between items-center pb-5 h-[30%] bg-blue">
            <div className=" flex flex-col justify-center py-5 items-center shadow-xl h-full w-[22%] rounded-2xl">
              <span className=" text-[#676767] text-5xl">47</span>
              <span className=" text-xl text-blue-500">Projects completed</span>
            </div>
            <div className=" flex flex-col justify-center py-5 items-center shadow-xl h-full w-[22%] rounded-2xl">
              <span className=" text-[#676767] text-5xl">16</span>
              <span className=" text-xl text-red-500">Projects pending</span>
            </div>
            <div className=" flex flex-col justify-center py-5 items-center shadow-xl h-full w-[22%] rounded-2xl">
              <span className=" text-[#676767] text-5xl">32</span>
              <span className=" text-xl text-green-500">Projects deployed</span>
            </div>
            <div className=" flex flex-col justify-center py-5 items-center shadow-xl h-full w-[22%] rounded-2xl">
              <span className=" text-[#676767] text-5xl">11</span>
              <span className="  text-xl text-yellow-500">Task overdue</span>
            </div>
          </div>

          <div className=" w-full h-[70%] flex pt-4 justify-between items-center">
            <div className=" overflow-hidden shadow-xl w-[48%] h-full rounded-2xl"><Piechart/></div>
            <div className=" overflow-hidden shadow-xl w-[49%] h-full rounded-2xl"><Barchart/></div>
          </div>

        </div>
    </div>
  );
}