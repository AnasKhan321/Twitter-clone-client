import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { GoHomeFill } from "react-icons/go";
import { RiNotification4Line } from "react-icons/ri";
import { BiMessageAlt } from "react-icons/bi";
import { PiNotePencilThin } from "react-icons/pi";
import { IoPeopleOutline } from "react-icons/io5";
import { CiCircleMore } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { GetRecommendeduser, UseUser } from "../ReactQueryHooks";
import GoogleClient from "../GoogleClientComponent";
import { graphqlclient } from "@/clients/api";
import { getCurrentUserQuery } from "@/graphql/queries/user";

interface TwitterLayoutProps {
  children: React.ReactNode;
}

interface TwitterSideBarButton {
  title : string , 
  icon  : React.ReactNode, 
  link? : string
}

const SidebarMenuItems: TwitterSideBarButton[] = [
  {
    title: "Home",
    icon: <GoHomeFill />,
  },
  {
    title: "Explore",
    icon: <CiSearch />,
  },
  {
    title: "Notifications",
    icon: <RiNotification4Line />,
  },
  {
    title: "Messages",
    icon: <BiMessageAlt />,
  },
  {
    title: "Grok",
    icon: <PiNotePencilThin />,
  },
  {
    title: "Community",
    icon: <IoPeopleOutline />,
  },
  {
    title: "Premium",
    icon: <FaXTwitter />,
  },

  {
    title: "Profile",
    icon: <CiUser />,
  },
  {
    title: "More",
    icon: <CiCircleMore />,
  },
];
const TwiterLayout: React.FC<TwitterLayoutProps> = async(props) => {
  const usercomponent = UseUser;
  const data =  await graphqlclient.request(getCurrentUserQuery)
  console.log(data)
  return (
    <div>
      <div className="grid grid-cols-12  h-screen w-screen sm:px-24">
        <div className=" col-span-1 sm:col-span-3 px-1  sm:px-4  pt-2 flex  justify-start  ">
          <div className="mr-4 ">
            <div
              className="text-xl  sm:text-3xl h-fit hover:bg-gray-900 cursor-pointer
                p-1 sm:p-2  rounded-full transition-all w-fit"
            >
              <FaXTwitter />
            </div>

            <div className="mt-2 text-2xl font-semi-bold ">
              <ul>
                {SidebarMenuItems.map((item) => {
                  return (
                    <li
                      className="flex justify-start  items-center
                          gap-4 hover:bg-gray-900  rounded-full
                          px-1 sm:px-6 py-[10px]  w-fit cursor-pointer"
                      key={item.title}
                    >
                      <span className="text-lg sm:text-2xl">{item.icon}</span>
                      <span className="hidden sm:block text-[16px]">{item.title}</span>
                    </li>
                  );
                })}
              </ul>

              <div className="hidden sm:block mr-10  ml-2">
                <button
                  className="bg-[#1A8CD8] w-[200px] rounded-full
                      hover:bg-sky-500 py-3 ml-2 
                      font-bold text-[15px] mt-2   "
                >
                  Post
                </button>
              </div>
            </div>

            <UseUser />
          </div>
        </div>

        <div
          className=" col-span-11  sm:col-span-6 border-r-[1px]  border-l-[1px] 
              border-slate-900 scroll-smooth  overflow-scroll h-screen overflow-x-hidden "
        >
          {props.children}
        </div>

        <div className=" col-span-0 sm:col-span-3">
                <GetRecommendeduser/>
        </div>
      </div>
    </div>
  );
};

export default TwiterLayout;
