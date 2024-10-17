"use client";

import { useState } from 'react';
import { tabs } from './Tabs';
import HomeTab from './components/HomeTab';
import ProfileTab from './components/ProfileTab';
import AnalyticsTab from './components/AnalyticsTab';
import SettingsTab from './components/SettingsTab';
import {IoIosArrowForward} from 'react-icons/io';
import Image from 'next/image';
import user from '../public/images/user.png';
import { BsArrowDownSquareFill, BsBoxArrowRight, BsAlarm, BsChatDots, BsCalendar2Check } from "react-icons/bs";

export default function Home() {
  const [selectedTab, setSelectedTab] = useState('home');  

  const renderTabContent = () => {
    switch (selectedTab) {
      case 'home':
        return <HomeTab />;
      case 'profile':
        return <ProfileTab />;
      case 'analytics':
        return <AnalyticsTab />;
      case 'settings':
        return <SettingsTab />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-row h-[100vh] w-full justify-center items-center">
      <div className="h-[100vh] w-1/4 flex flex-col-reverse pl-10 pr-10 justify-center items-end">
        <div className="h-[94vh] w-full flex flex-col justify-between pb-16 shadow-black shadow-lg bg-gradient-to-b from-[#184490] to-[#07152E] rounded-3xl">
          <div className='w-full flex justify-center items-center font-ramabhadra text-2xl mb-5 text-white mt-6'>Textify</div>

          <div className='flex m-5 justify-between px-5 mt-2 items-center'>
            <Image className='h-12 rounded-full w-12' alt='user' src={user} />
            <div className='flex flex-col'>
              <h2 className='font-radioCanada text-sm text-white'>John Doe</h2>
              <span className='font-radioCanada text-[0.6rem] text-white'>Software Developer</span>
            </div>
            <button className='text-purple-500 rounded-sm'><BsArrowDownSquareFill className='bg-white rounded-sm' /></button>
          </div>

          <div className="flex flex-col gap-2 px-10 pb-56 w-full">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setSelectedTab(tab.value)}  
                className={`flex justify-between text-xl items-center w-full h-7 text-white ${selectedTab === tab.value ? 'opacity-100' : 'opacity-75 hover:opacity-100'}`}
              >
                <tab.icon className='' />
                <span className='flex justify-start w-2/4'>{tab.name}</span>
                <IoIosArrowForward className='' />
              </button>
            ))}
          </div>

          <div className='w-full px-7'>
            <button className='flex items-center rounded-lg w-full py-1 bg-white'>
              <BsBoxArrowRight className='ml-5' />
              <span className='ml-5 font-radioCanada text-black'>Logout</span>
            </button>
          </div>
        </div>
      </div>

      <div className="h-[100vh] w-3/4">
        <nav className='w-full h-[10vh] flex items-end justify-between'>
          <h2 className='font-radioCanada text-[#747373] font-semibold text-sm'>Hello John, Welcome back</h2>
          <div className='flex justify-center items-center mr-20 gap-5 text-xl'>
            <BsCalendar2Check />
            <BsChatDots />
            <BsAlarm />
          </div>
        </nav>

        <div className='w-full h-[90vh]'>
          {renderTabContent()} 
        </div>
      </div>
    </div>
  );
}
