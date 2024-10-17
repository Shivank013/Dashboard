import { IconType } from "react-icons";
import {BsFillHouseDoorFill,BsFillPersonFill,BsFillPieChartFill,BsFillGearFill} from "react-icons/bs";


interface Tab {
  name: string;
  value: string;
  icon : IconType;
}


export const tabs:Tab[] = [
    { name: 'Home', value: 'home', icon: BsFillHouseDoorFill},
    { name: 'Profile', value: 'profile', icon: BsFillPersonFill},
    { name: 'Analytics', value: 'analytics', icon: BsFillPieChartFill},
    { name: 'Settings', value: 'settings', icon: BsFillGearFill},
  ];