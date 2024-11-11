"use client";

import { UserCurrentUser  , Follouser , UnFollowUser } from "@/Hooks/user";
import { GetAllTweets } from "@/Hooks/tweet";

import { alltweetDatatype, User } from "@/Interfaces/index";

import FeedCard from "@/Components/FeedCard/index";
import GoogleClient from "../GoogleClientComponent";
import { IoIosArrowRoundBack } from "react-icons/io";
import Image from "next/image"
import { useMemo } from "react";
import { unFollowUser } from "@/graphql/mutations/user";
import Link from "next/link";
import {MoonLoader}  from 'react-spinners'

export function UseUser() {
  const data = UserCurrentUser();
  if (data?.email == undefined) {
    return (
      <div className="flex items-center justify-center mt-2">
        <GoogleClient />
      </div>
    );
  }
  return (
    <Link href={`/${data.id}`}> 
    <div className=" flex items-center gap-x-3 m-2 mt-6 cursor-pointer hover:bg-gray-900 rounded-full p-2 transition-all ">
      <div>
        {data?.profileImageUrl && (
          <Image
            src={data.profileImageUrl}
            alt="Profile Image"
            width={50}
            height={50}
            className="rounded-full"
          />
        )}
      </div>
      <div className="hidden sm:block">
        <div className="font-semibold">
          {data?.firstName} {data?.lastName}
        </div>
        <div className="text-gray-500">@{data?.email}</div>
      </div>
    </div></Link>
  );
}

export  const GetRecommendeduser = ()=>{
  const data = UserCurrentUser();
  if (data?.email == undefined) {
    return (
      <div className="flex items-center justify-center mt-2">
        <GoogleClient />
      </div>
    );
  }else{
      return(
        <div className="m-4 border-gray-800  border-2 p-2  rounded-md "> 
          <h1 className="">Who To Follow</h1>
            {
              data.recommendedUser.map((item)=>{
                return(
                  <Link key={item.id}  href={`/${item.id}`}> 
                  <div className=" grid  grid-cols-12 gap-x-2 my-2  cursor-pointer rounded-full">
                        <div className="col-span-2">
                          
                            <Image src={item.profileImageUrl}  width={50}  height={50}  className="rounded-full " alt="profileimage"/>  
                         </div> 
                        <div className="col-span-7"> 

                            <div>
                                {item.email}
                            </div>
                            <div className="text-gray-700">
                                {item.firstName} {item.lastName}
                              </div> 
                        </div>
                        <div className="col-span-3   "> 
                          
                            <button className="px-2 mt-1 py-1 bg-white text-black rounded-full">View</button>  
                        </div> 
                     </div>
                     </Link>
                )
              })
            }

            
        </div>
      )
  }
}

export function AllTweets() {
  const data: alltweetDatatype | undefined = GetAllTweets();

  if (data?.getAllTweets) {
    return (
      <div>
        {data.getAllTweets.map((tweet) => (
          <FeedCard key={tweet.id} {...tweet} />
        ))}
      </div>
    );
  } else {
    return <div className="flex text-center items-center justify-center mt-10   w-full " ><MoonLoader className="text-center" color="#ffffff" /></div>;
  }
}

export function UseUserData({data}  : {data : User}) {

  console.log(data)
  
  const user = UserCurrentUser()
  console.log(user)
  const amIfollowing = useMemo(()=>{
    if(user == undefined)  return false 
    const userconsider = user.following.findIndex(ele => ele.email == data.email)
    console.log(userconsider)
    return userconsider  < 0 ? false : true
  },[user])
  const followuser = Follouser()
  const unFollowuser = UnFollowUser()

  const handleUnfollowUser = ()=>{
    if(user){
      console.log("unfollow user")
      unFollowuser.mutate(data.id)

    }
  }
  const handleFollowUser = ()=>{
    console.log("clicked")
    if(user){
      followuser.mutate(data.id)
    }
  
  }
 
  return (
    

    <div>
        <div className="grid grid-cols-12 px-4 py-1   items-center">
            <IoIosArrowRoundBack className="text-3xl col-span-1" />
            <div className="col-span-11">
                <h1 className="font-bold text-xl ">
                {" "}
                {data?.firstName} {data?.lastName}{" "}
                </h1>
               
                <p className="text-sm text-slate-500">40 Posts</p>
            </div>
            </div>

            <div className="p-2 ">
                {data?.profileImageUrl &&
                <Image src={data?.profileImageUrl} alt="user_profile"   width={80}  height={80} className="rounded-full"/> }
                <div className="font-bold text-xl mt-2  ">{data?.firstName} {data?.lastName}</div>
              

                <div className="flex items-center justify-between">

                  <div className="flex gap-x-4 text-gray-500">
                    <span>{data.followers.length} followers </span>
                    <span>{data.following.length} following</span>
                  </div>
                  {user?.id !== data.id && 
                  
                        <> 
                          {amIfollowing && <button  onClick={handleUnfollowUser} className="px-2 py-1 text-black bg-white rounded-full"> unfollow   </button>}
                          {!amIfollowing && <button onClick={handleFollowUser} className="px-2 py-1 text-black bg-white rounded-full" > Follow </button>}
                        </>
                   
                 }

                </div>
            </div>

            <div>
                {data?.tweets.map((tweet)=>{
                    return(
                        <FeedCard key={tweet.id} {...tweet}/> 
                    )
                })}
                

            </div>
    </div>
 
  );
}
