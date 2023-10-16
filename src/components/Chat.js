import React from "react";
import { BsThreeDotsVertical, BsTriangleFill } from "react-icons/bs";

const Chat = () => {
  return (
    <div className="bg-white shadow-lg px-12 py-6 rounded-xl">
      <div className="flex items-center justify-between border-b border-solid border-gray-300 pb-6 w-full">
        <div className="flex items-center gap-x-8">
          <div className="w-20 h-20 rounded-full shadow-lg relative">
            <img
              className="w-20 h-20 rounded-full"
              src="./images/profilepic.png"
            />
            <div className="w-4 h-4 rounded-full bg-green-500 ring-2 absolute bottom-2 right-0"></div>
          </div>
          <div>
            <h3 className="font-poppins font-semibold text-2xl">Shihab</h3>
            <p className="font-poppins font-regular text-sm">Online</p>
          </div>
        </div>
        <div className="">
          <BsThreeDotsVertical className="text-2xl" />
        </div>
      </div>
      <div className="pt-7 overflow-y-auto px-2 h-[700px]">
        {/* recieve message start */}
        <div className="mb-8">
          <div className="bg-slate-200 inline-block py-3 px-9 rounded-md relative">
            <p className="font-poppins font-medium text-base text-black">Hi there!</p>
            <BsTriangleFill className="text-slate-200 absolute bottom-[-1px] -left-2 text-2xl" />
          </div>
          <p className="font-poppins font-medium text-xs opacity-50 mt-1">Today, 2:01pm</p>
        </div>
        {/* recieve message end */}

        {/* send message start */}
        <div className="mb-8 text-right">
          <div className="bg-primary inline-block py-3 px-9 rounded-md relative">
            <p className="font-poppins font-medium text-base text-white">Hi there!</p>
            <BsTriangleFill className="text-primary absolute bottom-[-1px] -right-2 text-2xl" />
          </div>
          <p className="font-poppins font-medium text-xs opacity-50 mt-1">Today, 2:01pm</p>
        </div>
        <div className="mb-8 text-right w-">
          <div className="bg-primary inline-block py-3 px-9 rounded-md relative">
            <p className="font-poppins font-medium text-base text-white text-start">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <BsTriangleFill className="text-primary absolute bottom-[-1px] -right-2 text-2xl" />
          </div>
          <p className="font-poppins font-medium text-xs opacity-50 mt-1">Today, 2:01pm</p>
        </div>
        {/* send message end */}
        {/* recieve message start */}
        <div className="mb-8">
          <div className="bg-slate-200 inline-block py-3 px-9 rounded-md relative">
            <p className="font-poppins font-medium text-base text-black">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <BsTriangleFill className="text-slate-200 absolute bottom-[-1px] -left-2 text-2xl" />
          </div>
          <p className="font-poppins font-medium text-xs opacity-50 mt-1">Today, 2:01pm</p>
        </div>
        {/* recieve message end */}
      </div>
    </div>
  );
};

export default Chat;
