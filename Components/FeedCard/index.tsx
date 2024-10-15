import React from "react";
import Image from "next/image";
import { BiHeart, BiMessageRounded } from "react-icons/bi";
import { BiRepost } from "react-icons/bi";

import { CiBookmark } from "react-icons/ci";
import { CgInsights } from "react-icons/cg";
import { IoShareOutline } from "react-icons/io5";
const FeedCard: React.FC = () => {
  return (
    <div
      className="border  grid grid-cols-12 cursor-pointer transition-all  border-y-2 border-gray-900
      p-5 "
    >
      <div className="col-span-1 ">
        <Image
          src="https://avatars.githubusercontent.com/u/109456462?v=4"
          width={50}
          height={50}
          className="rounded-full"
          alt="User_Image"
        />
      </div>
      <div className="col-span-11 pl-4 pr-2   ">
        <h5>Anas Khan</h5>

        <p>
          Hey, @X , #connect me with people #interested in: 🧑‍💻Software
          Engineering 📷Web Development 📷Backend 📷DSA 📷DevOps 📷JavaScript
          📷Sports 📷 Investment Let's connect and grow together 📷
          #letsconnect#buildinpublic #Coding 🤝🏻
        </p>

        <div></div>

        <div className="flex items-center justify-between   mt-5 text-xl text-gray-500">
          <div className="flex gap-x-1 group hover:text-blue-500  transition-all items-center ">
            <BiMessageRounded className=" rounded-full p-2 group-hover:bg-blue-500/10   text-4xl " />
            <span className="text-sm">27</span>
          </div>
          <BiRepost className="hover:text-green-500 transition-all  hover:bg-green-500/10 p-2 rounded-full text-4xl   " />
          <div className="flex gap-x-1 group hover:text-red-500  transition-all  group items-center">
            <BiHeart className="group-hover:bg-red-500/10 text-4xl p-2 rounded-full " />
            <span className="text-sm">27</span>
          </div>

          <div className="flex gap-x-1 group hover:text-blue-500  transition-all items-center">
            <CgInsights className="group-hover:bg-blue-500/10 text-4xl p-2 rounded-full " />
            <span className="text-sm">727</span>
          </div>

          <div className="flex items-center gap-x-1  text-gray-500">
            <CiBookmark className="hover:text-blue-500    hover:bg-blue-500/10 text-4xl p-2 rounded-full" />
            <IoShareOutline className="hover:text-blue-500    hover:bg-blue-500/10 text-4xl p-2 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
