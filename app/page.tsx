

import { FaXTwitter } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { GoHomeFill } from "react-icons/go";
import { RiNotification4Line } from "react-icons/ri";
import { BiMessageAlt } from "react-icons/bi";
import { PiNotePencilThin } from "react-icons/pi";
import { IoPeopleOutline } from "react-icons/io5";
import { CiCircleMore } from "react-icons/ci";
import {Inter}  from "next/font/google"
import FeedCard from "@/Components/FeedCard/index"
const inter = Inter({subsets : ["latin"]})

import { CiUser } from "react-icons/ci";
interface TwitterSideBarButton {
  title : string , 
  icon : React.ReactNode ,

}

const SidebarMenuItems  : TwitterSideBarButton[]  = [
  {
    title :  "Home" ,
    icon :  <GoHomeFill/> 
  } , {
    title : "Explore", 
    icon : <CiSearch/>
  
  }  , 
  {
    title : "Notifications"  ,
    icon : <RiNotification4Line/> 
  }  ,
  {
    title : "Messages"  ,
    icon : <BiMessageAlt/>
  }  , 
  {
    title  : "Grok"  , 
    icon : <PiNotePencilThin/> 
  } , 
  {
    title : "Community"  , 
    icon : <IoPeopleOutline/> 
  } ,
  {
    title : "Premium" , 
    icon : <FaXTwitter/> 
  },

  {
    title : "Profile"  , 
    icon  : <CiUser/> 
  },
  {
    title : "More"  , 
    icon : <CiCircleMore/> 
  }  , 

]

export default function Home() {
  return (
      <div className={inter.className} >
       <div className="grid grid-cols-12  h-screen w-screen px-24">
          <div className="col-span-3  px-4  pt-2  ">

            <div  className="text-3xl h-fit hover:bg-gray-900 cursor-pointer
            p-2  rounded-full transition-all w-fit" >
            <FaXTwitter />
            </div>

                <div className="mt-2 text-2xl font-semi-bold ">

                  <ul>

                  {SidebarMenuItems.map((item)=>{
                    return(
                      <li className="flex justify-start  items-center
                      gap-4 hover:bg-gray-900  rounded-full
                      px-6 py-[10px]  w-fit cursor-pointer" key={item.title} > 
                      <span className="text-2xl">{item.icon}</span> 
                        <span className="text-[16px]">{item.title}</span>
                      
                      </li>
                      
                    )
                  })}

                  </ul>


<div className="mr-10  ml-2"> 
<button  className="bg-[#1A8CD8] w-full rounded-full
                  hover:bg-sky-500 py-3 ml-2 
                  font-bold text-[15px] mt-2  "  >Post</button>
  
  </div> 
            

                  
                </div>
         


          </div>
          <div className="col-span-6 border-r-[1px]  border-l-[1px] 
          border-slate-900 scroll-smooth  overflow-scroll h-screen overflow-x-hidden ">

            <FeedCard/>
            <FeedCard/>
            <FeedCard/>
            <FeedCard/>
            <FeedCard/>
            <FeedCard/>
            <FeedCard/>




          </div>
          <div className="col-span-3"></div>
       </div>
      </div>
  
  );
}
