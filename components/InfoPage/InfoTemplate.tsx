import Chandelier from "@/vector/InfoPage/Chandelier";
import { JSX } from "react";
import Image from "next/image";

const TextBoxStyle =
  "mt-3 rounded-[1.8125rem] w-[80vw]  md:w-[50vw] bg-[rgba(69,123,202,0.44)] shadow-[0_1.5px_1px_0_rgba(0,0,0,0.25)] backdrop-blur-[5.55px]";
const SmTextStyle =
  " text-2xl sm:text-4xl md:text-6xl lg:text-7xl block md:hidden ";
type categoryType = "clubs" | "organization" | "programme" | "gifted";
const CommonTextStyle =
  "font-bold bg-linear-to-r from-[#F4F2C4] to-[#F3E19D] bg-clip-text text-transparent";
const BigTextItem: Record<categoryType, JSX.Element[]> = {
  clubs: [
    <div key="clubs-0" className="flex flex-col justify-center items-start md:items-end">
      <p
        className={`${CommonTextStyle} overflow-visible text-2xl sm:text-3xl md:text-4xl lg:text-5xl hidden md:block pt-3`}
      >
        ชมรมนี้
      </p>
      <p
        className={`${CommonTextStyle} text-2xl sm:text-5xl md:text-4xl lg:text-5xl hidden md:block`}
      >
        ทำอะไร
      </p>
      <p className={`${CommonTextStyle}  ${SmTextStyle}`}>ชมรมนี้ทำอะไร</p>
    </div>,
    <div key="clubs-1" className="flex flex-col justify-center sm:-space-y-2 items-start">
      <p
        className={`${CommonTextStyle} text-2xl sm:mb-0.5 sm:text-3xl md:text-4xl lg:text-5xl hidden md:block`}
      >
        ประโยชน์
      </p>
      <p className={`${CommonTextStyle} text-lg lg:text-2xl hidden md:block`}>
        ที่ได้รับจาก
      </p>
      <p className={`${CommonTextStyle} text-lg lg:text-2xl hidden md:block`}>
        การเข้าร่วมชมรม
      </p>
      <p className={`${CommonTextStyle} ${SmTextStyle}`}>ประโยชน์ที่ได้รับ</p>
    </div>,
    <div key="clubs-2" className="flex flex-col justify-center items-end">
      <p
        className={`${CommonTextStyle} text-2xl sm:text-5xl lg:text-6xl  hidden md:block`}
      >
        ผลงาน
      </p>
      <p
        className={`${CommonTextStyle} text-2xl md:text-3xl  lg:text-4xl  hidden md:block `}
      >
        ของชมรม
      </p>
      <p className={`${CommonTextStyle} ${SmTextStyle}`}>ผลงานของชมรม</p>
    </div>,
  ],
  organization: [
    <div key="organization-0" className="flex flex-col justify-center items-start md:items-end">
      <p
        className={`${CommonTextStyle} overflow-visible text-2xl sm:text-3xl md:text-4xl lg:text-5xl hidden md:block pt-2`}
      >
        องค์กรนี้
      </p>
      <p
        className={`${CommonTextStyle} text-2xl sm:text-5xl md:text-4xl lg:text-5xl hidden md:block`}
      >
        ทำอะไร
      </p>
      <p className={`${CommonTextStyle}  ${SmTextStyle}`}>องค์กรนี้ทำอะไร</p>
    </div>,
    <div key="organization-1" className="flex flex-col justify-center sm:-space-y-2 items-start">
      <p
        className={`${CommonTextStyle} text-2xl sm:mb-0.5 sm:text-3xl md:text-4xl lg:text-5xl hidden md:block`}
      >
        ตำแหน่ง
      </p>
      <p className={`${CommonTextStyle} text-lg lg:text-2xl hidden md:block`}>
        และหน้าที่ในแต่ละ
      </p>
      <p className={`${CommonTextStyle} text-lg lg:text-2xl hidden md:block`}>
        ตำแหน่ง
      </p>
      <p className={`${CommonTextStyle} ${SmTextStyle}`}>ตำแหน่งและหน้าที่</p>
    </div>,
    <div key="organization-2" className="flex flex-col justify-center items-end">
      <p
        className={`${CommonTextStyle} text-2xl sm:text-5xl lg:text-6xl  hidden md:block`}
      >
        ผลงาน
      </p>
      <p
        className={`${CommonTextStyle} text-2xl md:text-3xl  lg:text-4xl  hidden md:block `}
      >
        ขององค์กร
      </p>
      <p className={`${CommonTextStyle} ${SmTextStyle}`}>ผลงานขององค์กร</p>
    </div>,
  ],
  programme: [
    <div key="programme-0" className="flex flex-col justify-center items-end">
      <p
        className={`${CommonTextStyle}  hidden md:block text-2xl sm:text-2xl lg:text-4xl`}
      >
        การรับสมัคร
      </p>
      <div className="flex flex-row items-start">
        <p
          className={`${CommonTextStyle} text-lg lg:text-2xl mr-1 hidden md:block`}
        >
          และ
        </p>
        <p
          className={`${CommonTextStyle} text-2xl sm:text-5xl md:text-2xl lg:text-4xl hidden md:block`}
        >
          การสอบเข้า
        </p>
      </div>
      <p className={`${CommonTextStyle}  ${SmTextStyle} `}>
        การรับสมัครและการสอบเข้า
      </p>
    </div>,
    <div key="programme-1" className="flex flex-col justify-center items-start">
      <p
        className={`${CommonTextStyle} text-xl sm:text-3xl md:text-5xl  hidden md:block lg:text-7xl`}
      >
        วิชา /
      </p>
      <p
        className={`${CommonTextStyle} font-medium text-lg lg:text-2xl hidden md:block`}
      >
        หลักสูตรเพิ่มเติม
      </p>
      <p className={`${CommonTextStyle}  ${SmTextStyle}`}>
        วิชา / หลักสูตรเพิ่มเติม
      </p>
    </div>,
    <div key="programme-2" className="flex flex-col justify-center items-end">
      <p
        className={`${CommonTextStyle} text-2xl sm:text-4xl md:text-5xl lg:text-6xl hidden md:block`}
      >
        ความ
      </p>
      <p
        className={`${CommonTextStyle} text-2xl sm:text-4xl md:text-5xl lg:text-6xl hidden md:block`}
      >
        น่าสนใจ
      </p>
      <p className={`${CommonTextStyle} font-medium text-xl  hidden md:block `}>
        ของสายการเรียน
      </p>
      <p className={`${CommonTextStyle} ${SmTextStyle} `}>
        ความน่าสนใจของสายการเรียน
      </p>
    </div>,
  ],
  gifted: [
    <div key="gifted-0" className="flex flex-col justify-center items-end">
      <p
        className={`${CommonTextStyle}  hidden md:block text-2xl sm:text-2xl lg:text-4xl`}
      >
        การรับสมัคร
      </p>
      <div className="flex flex-row items-start">
        <p
          className={`${CommonTextStyle} text-lg lg:text-2xl mr-1 hidden md:block`}
        >
          และ
        </p>
        <p
          className={`${CommonTextStyle} text-2xl sm:text-5xl md:text-2xl lg:text-4xl hidden md:block`}
        >
          การสอบเข้า
        </p>
      </div>
      <p className={`${CommonTextStyle}  ${SmTextStyle} `}>
        การรับสมัครและการสอบเข้า
      </p>
    </div>,
    <div key="gifted-1" className="flex flex-col justify-center items-start">
      <p
        className={`${CommonTextStyle} text-xl sm:text-3xl md:text-5xl  hidden md:block lg:text-7xl`}
      >
        วิชา /
      </p>
      <p
        className={`${CommonTextStyle} font-medium text-lg lg:text-2xl hidden md:block`}
      >
        หลักสูตรเพิ่มเติม
      </p>
      <p className={`${CommonTextStyle}  ${SmTextStyle}`}>
        วิชา / หลักสูตรเพิ่มเติม
      </p>
    </div>,
    <div key="gifted-2" className="flex flex-col justify-center items-end">
      <p
        className={`${CommonTextStyle} text-2xl sm:text-4xl md:text-5xl lg:text-6xl hidden md:block`}
      >
        ความ
      </p>
      <p
        className={`${CommonTextStyle} text-2xl sm:text-4xl md:text-5xl lg:text-6xl hidden md:block`}
      >
        น่าสนใจ
      </p>
      <p className={`${CommonTextStyle} font-medium text-xl  hidden md:block `}>
        ของสายการเรียน
      </p>
      <p className={`${CommonTextStyle} ${SmTextStyle} `}>
        ความน่าสนใจของสายการเรียน
      </p>
    </div>,
  ],
};

const InfoTemplate = ({
  type,
  item,
  img,
  imgDescription,
  text,
}: {
  type: categoryType;
  item: number;
  img: string;
  imgDescription: string;
  text: string;
}) => {
  return (
    <div className="z-67 flex flex-col md:max-w-[50vw] items-center justify-center my-3">
      <div
        className={`flex flex-col w-full ${item % 2 == 0 ? "md:flex-row" : "md:flex-row-reverse"
          } justify-around`}
      >
        <div
          className={`flex flex-col justify-evenly ${item % 2 == 0 ? "items-start md:items-end" : "items-start"
            }`}
        >
          <span className="scale-100">{BigTextItem[type][item]}</span>
          <Chandelier className="hidden md:block w-[12vw] " />
        </div>
        <div className="flex flex-col items-center justify-between ">
          <Image
            src={img}
            alt={imgDescription}
            width={400}
            height={250}
            className="rounded-md object-cover w-[85vw] md:w-[30vw] aspect-8/5"
          />
          <p className="mt-1 text-[#F4F2C4B2] w-[80vw] md:w-[30vw] text-center font-light text-sm font-bai-jamjuree">
            {imgDescription}
          </p>
        </div>
      </div>
      <div className={TextBoxStyle}>
        <div dangerouslySetInnerHTML={{ __html: text }} className="bg-transparent font-bai-jamjuree py-2 text-sm md:text-md px-5 *:text-white text-white text-shadow-[0_1.5px_1px_rgba(0,0,0,0.25)]" />
      </div>
    </div>
  );
};
export default InfoTemplate;
