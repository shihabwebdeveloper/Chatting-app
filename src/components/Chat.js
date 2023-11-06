import React, { useEffect, useState } from "react";
import {
  BsThreeDotsVertical,
  BsTriangleFill,
  BsFillCameraFill,
  BsSnapchat,
} from "react-icons/bs";
import { TbSend } from "react-icons/tb";
import { GrGallery } from "react-icons/gr";
import { AiFillAudio, AiFillCloseCircle } from "react-icons/ai";
import { MdEmojiEmotions } from "react-icons/md";
import ModalImage from "react-modal-image";
import Camera, { FACING_MODES, IMAGE_TYPES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import { useSelector } from "react-redux";
import { getDatabase, ref, set, push, onValue } from "firebase/database";

const Chat = () => {
  const db = getDatabase();

  let [check, setCheck] = useState(false);
  let [msg, setMsg] = useState("");
  let [msgList, setMsgList] = useState([]);
  let [captureImage, setCaptureImage] = useState("");
  let data = useSelector((state) => state.userLoginInfo.userInfo);
  let activeChatName = useSelector((state) => state.activeChat);
  console.log(activeChatName.active);

  let handleMsg = () => {
    console.log(msg);
    if (activeChatName.active.status == "single") {
      set(push(ref(db, "singleMsg")), {
        msg: msg,
        whoSendId: data.uid,
        whoSendName: data.displayName,
        whoReceiveId: activeChatName.active.id,
        whoReceiveName: activeChatName.active.name,
        date: `${new Date().getDate()}-${
          new Date().getMonth() + 1
        }-${new Date().getFullYear()}  ${new Date().getHours()}:${new Date().getMinutes()}`,
      });
    } else {
      console.log("ami mingle");
    }
  };

  function handleTakePhoto(dataUri) {
    setCaptureImage(dataUri);
  }

  useEffect(() => {
    onValue(ref(db, "singleMsg"), (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        if (
          (item.val().whoSendId == data.uid &&
            item.val().whoReceiveId == activeChatName.active.id) ||
          (item.val().whoReceiveId == data.uid &&
            item.val().whoSendId == activeChatName.active.id)
        ) {
          arr.push(item.val());
        }
      });
      setMsgList(arr);
    });
  }, []);

  return (
    <div className="bg-white shadow-lg px-12 py-6 rounded-xl">
      <div className="flex items-center justify-between border-b border-solid border-gray-300 pb-6 w-full">
        <div className="flex items-center gap-x-8">
          <div className="w-20 h-20 rounded-full shadow-lg relative">
            <img
              className="w-20 h-20 rounded-full"
              src={activeChatName.active && activeChatName.active.photo}
            />
            <div className="w-4 h-4 rounded-full bg-green-500 ring-2 absolute bottom-2 right-0"></div>
          </div>
          <div>
            <h3 className="font-poppins font-semibold text-2xl">
              {activeChatName.active && activeChatName.active.name}
            </h3>
            <p className="font-poppins font-regular text-sm">Online</p>
          </div>
        </div>
        <div className="">
          <BsThreeDotsVertical className="text-2xl" />
        </div>
      </div>
      <div className="pt-7 overflow-y-auto px-2 h-[700px] border-b border-solid border-slate-200">
        {activeChatName.active.status == "single" ? (
          msgList.map((item) =>
            item.whoSendId == data.uid ? (
              item.whoReceiveId == activeChatName.active.id && (
                <div className="mb-8 text-right">
                  <div className="bg-primary inline-block py-3 px-9 rounded-md relative">
                    <p className="font-poppins font-medium text-base text-white">
                      {item.msg}
                    </p>
                    <BsTriangleFill className="text-primary absolute bottom-[-1px] -right-2 text-2xl" />
                  </div>
                  <p className="font-poppins font-medium text-xs opacity-50 mt-1">
                    Today, 2:01pm
                  </p>
                </div>
              )
            ) : item.whoSendId == activeChatName.active.id &&(
              <div className="mb-8">
                <div className="bg-slate-200 inline-block py-3 px-9 rounded-md relative">
                  <p className="font-poppins font-medium text-base text-black">
                    {item.msg}
                  </p>
                  <BsTriangleFill className="text-slate-200 absolute bottom-[-1px] -left-2 text-2xl" />
                </div>
                <p className="font-poppins font-medium text-xs opacity-50 mt-1">
                  Today, 2:01pm
                </p>
              </div>
            )
          )
        ) : (
          <h1>ami group msg</h1>
        )}
        {/* recieve message start */}
        {/* <div className="mb-8">
          <div className="bg-slate-200 inline-block py-3 px-9 rounded-md relative">
            <p className="font-poppins font-medium text-base text-black">
              Hi there!
            </p>
            <BsTriangleFill className="text-slate-200 absolute bottom-[-1px] -left-2 text-2xl" />
          </div>
          <p className="font-poppins font-medium text-xs opacity-50 mt-1">
            Today, 2:01pm
          </p>
        </div> */}
        {/* recieve message end */}

        {/* send message start */}
        {/* <div className="mb-8 text-right">
          <div className="bg-primary inline-block py-3 px-9 rounded-md relative">
            <p className="font-poppins font-medium text-base text-white">
              Hi there!
            </p>
            <BsTriangleFill className="text-primary absolute bottom-[-1px] -right-2 text-2xl" />
          </div>
          <p className="font-poppins font-medium text-xs opacity-50 mt-1">
            Today, 2:01pm
          </p>
        </div> */}
        {/* send message end */}

        {/* send message start */}
        {/* <div className="mb-8 text-right w-">
          <div className="bg-primary inline-block py-3 px-9 rounded-md relative">
            <p className="font-poppins font-medium text-base text-white text-start">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <BsTriangleFill className="text-primary absolute bottom-[-1px] -right-2 text-2xl" />
          </div>
          <p className="font-poppins font-medium text-xs opacity-50 mt-1">
            Today, 2:01pm
          </p>
        </div> */}
        {/* send message end */}

        {/* recieve message start */}
        {/* <div className="mb-8">
          <div className="bg-slate-200 inline-block py-3 px-9 rounded-md relative">
            <p className="font-poppins font-medium text-base text-black">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <BsTriangleFill className="text-slate-200 absolute bottom-[-1px] -left-2 text-2xl" />
          </div>
          <p className="font-poppins font-medium text-xs opacity-50 mt-1">
            Today, 2:01pm
          </p>
        </div> */}
        {/* recieve message end */}

        {/* send img start */}
        {/* <div className="mb-8 text-right ">
          <div className="bg-primary inline-block p-3 w-72 rounded-md relative">
            <ModalImage
              small={"images/reg-img.png"}
              large={"images/reg-img.png"}
            />
            <BsTriangleFill className="text-primary absolute bottom-[-1px] -right-2 text-2xl" />
          </div>
          <p className="font-poppins font-medium text-xs opacity-50 mt-1">
            Today, 2:01pm
          </p>
        </div> */}
        {/* send img end */}

        {/* recieve img start */}
        {/* <div className="mb-8 ">
          <div className="bg-slate-200 inline-block p-3 w-72 rounded-md relative">
            <ModalImage
              small={"images/groupimg.png"}
              large={"images/groupimg.png"}
            />
            <BsTriangleFill className="text-slate-200 absolute bottom-[-1px] -left-2 text-2xl" />
          </div>
          <p className="font-poppins font-medium text-xs opacity-50 mt-1">
            Today, 2:01pm
          </p>
        </div> */}
        {/* recieve img end */}

        {/* send audio start */}
        {/* <div className="mb-8 text-right ">
          <div className="inline-block">
            <audio controls></audio>
          </div>
          <p className="font-poppins font-medium text-xs opacity-50 mt-1">
            Today, 2:01pm
          </p>
        </div> */}
        {/* send audio end */}

        {/* recieve audio start */}
        {/* <div className="mb-8 ">
          <div className="inline-block">
            <audio controls></audio>
          </div>
          <p className="font-poppins font-medium text-xs opacity-50 mt-1">
            Today, 2:01pm
          </p>
        </div> */}
        {/* recieve audio end */}

        {/* send video start */}
        {/* <div className="mb-8 text-right ">
          <div className="bg-primary inline-block p-3 rounded-md">
            <video controls></video>
          </div>
          <p className="font-poppins font-medium text-xs opacity-50 mt-1">
            Today, 2:01pm
          </p>
        </div> */}
        {/* send video end */}

        {/* recieve video start */}
        {/* <div className="mb-8 ">
          <div className="inline-block bg-slate-200 p-3 rounded-md">
            <video controls></video>
          </div>
          <p className="font-poppins font-medium text-xs opacity-50 mt-1">
            Today, 2:01pm
          </p>
        </div> */}
        {/* recieve video end */}
      </div>
      <div className="flex mt-5">
        <div className="relative flex w-[90%]">
          <input
            onChange={(e) => setMsg(e.target.value)}
            className="bg-slate-100 p-4 w-full rounded-lg shadow-sm border"
          />
          <label>
            <input className="hidden" type="file" />
            <GrGallery className="absolute right-5 bottom-1/4 text-2xl" />
          </label>
          <BsFillCameraFill
            onClick={() => setCheck(!check)}
            className="absolute right-14 bottom-1/4 text-2xl"
          />
          <AiFillAudio className="absolute right-[90px] bottom-1/4 text-2xl" />
          <MdEmojiEmotions className="absolute right-[120px] bottom-1/4 text-2xl" />
        </div>
        {check && (
          <div className="w-full h-screen absolute top-0 left-0 bg-[rgba(0,0,0,.8)] z-50 flex justify-center items-center">
            <Camera
              onTakePhoto={(dataUri) => {
                handleTakePhoto(dataUri);
              }}
              idealFacingMode={FACING_MODES.ENVIRONMENT}
              idealResolution={{ width: 640, height: 480 }}
              imageType={IMAGE_TYPES.JPG}
              imageCompression={0.97}
              isMaxResolution={true}
              isImageMirror={false}
              isSilentMode={false}
              isDisplayStartCameraError={true}
              isFullscreen={false}
              sizeFactor={1}
            />
            <AiFillCloseCircle
              title="Close"
              onClick={() => setCheck(!check)}
              className="text-white text-4xl ml-3"
            />
          </div>
        )}
        <button
          onClick={handleMsg}
          title="Send"
          className="ml-5 bg-primary px-4 rounded-xl"
        >
          <TbSend className="text-3xl text-white" />
        </button>
      </div>
    </div>
  );
};

export default Chat;
