"use client";
import { SetStateAction, useCallback, useState } from "react";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { CreateTweet } from "@/Hooks/tweet";
import Image from "next/image";
import { MdOutlineGifBox } from "react-icons/md";
import { BiPoll } from "react-icons/bi";
import { LuSmile } from "react-icons/lu";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";
import { UserCurrentUser } from "@/Hooks/user";
import { graphqlclient } from "@/clients/api";
import { getSignedUrlforTweetQuery } from "@/graphql/queries/tweet";
import axios from "axios";
import toast from "react-hot-toast";


interface urlData {
  getSignedURLForTweet: string;
}

export const Tweet = () => {
  const [content, setcontent] = useState("");
  const { mutate } = CreateTweet();
  const [imageUrl, setimageUrl] = useState("");
  const handleChange = (e: { target: { value: SetStateAction<string>; }; }  ) => {
    setcontent(e.target.value);
  };

  const data = UserCurrentUser();

  const handleClick = useCallback(() => {
    mutate({
      content,
      imageURL: imageUrl,
    });

    setcontent("")
    setimageUrl("")
  }, [content, mutate, imageUrl]);

  const handleClickImage = useCallback(() => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.addEventListener("change", (event) => {
      event.preventDefault()
      if (input.files !== null) {
        getUrl(input.files[0].name, input.files[0].type, input.files[0]);
      }
    });
  }, []);

  const getUrl = async (imageName: string, imagetype: string, file: File) => {
    const data: urlData = await graphqlclient.request(
      getSignedUrlforTweetQuery,
      {
        imageName: imageName,
        imageType: imagetype.split("/")[1],
      }
    );

    if (data.getSignedURLForTweet) {
      await axios.put(data.getSignedURLForTweet, file, {
        headers: {
          "Content-Type": file.type,
        },
      });
      toast.success("uploaded Successfully");

      const url = new URL(data.getSignedURLForTweet);
      const myfilepath = `${url.origin}${url.pathname}`;
      setimageUrl(myfilepath);
    }
  };

  return (
    <div className="border  grid grid-cols-12 cursor-pointer transition-all  border-y-2 border-gray-900 p-5 ">
      <div className="col-span-1 ">
        {data?.profileImageUrl && (
          <Image
            src={data.profileImageUrl}
            width={50}
            height={50}
            className="rounded-full"
            alt="User_Image"
          />
        )}
      </div>
      <div className="col-span-11 pl-4 pr-2   ">
        <textarea
          value={content}
          onChange={handleChange}
          name=""
          id=""
          className=" w-full bg-transparent focus:outline-none text-xl px-3 py-1 border-b-2  border-b-slate-600  "
          rows={3}
          placeholder="What's Happening "
        ></textarea>
        {imageUrl == "" ? (
          <span> </span>
        ) : (
          <Image src={imageUrl} alt="uploaded image" width={500} height={500} />
        )}
        <div className="flex justify-between ">
          <div className="flex items-center">
            <MdOutlinePhotoSizeSelectActual
              onClick={handleClickImage}
              className="hover:text-blue-500  transition-all  hover:bg-blue-500/10 p-2 rounded-full text-4xl   text-blue-500  "
            />

            <MdOutlineGifBox className="hover:text-blue-500 transition-all  hover:bg-blue-500/10 p-2 rounded-full text-4xl   text-blue-500 " />
            <BiPoll className="hover:text-blue-500 transition-all  hover:bg-blue-500/10 p-2 rounded-full text-4xl   text-blue-500 " />
            <LuSmile className="hover:text-blue-500 transition-all  hover:bg-blue-500/10 p-2 rounded-full text-4xl  text-blue-500  " />
            <RiCalendarScheduleLine className="hover:text-blue-500 transition-all  hover:bg-blue-500/10 p-2 rounded-full text-4xl  text-blue-500  " />
            <CiLocationOn className="hover:text-blue-500 transition-all   hover:bg-blue-500/10 p-2 rounded-full text-4xl  text-blue-500  " />
          </div>

          <button
            className="px-3 py-1  bg-blue-500 rounded-full "
            onClick={handleClick}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};
