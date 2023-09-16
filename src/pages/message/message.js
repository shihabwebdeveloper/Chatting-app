import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Sidebar from "../../components/Sidebar";
import { useNavigate } from "react-router-dom";

const Message = () => {
  let navigate = useNavigate();
  let data = useSelector((state) => state.userLoginInfo.userInfo);

  useEffect(() => {
    if (!data) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      {data && (
        <div className="flex justify-evenly">
          <>
            <div className="w-[200px]">
              <Sidebar active="message" />
            </div>
            <div className="w-1/4">sdfd</div>
            <div className="w-1/4">dfad</div>
            <div className="w-1/4">dsfdef</div>
          </>
        </div>
      )}
    </>
  );
};

export default Message;
