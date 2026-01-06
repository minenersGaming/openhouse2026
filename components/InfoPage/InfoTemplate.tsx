import Chandelier from "@/vector/InfoPage/Chandelier";
import { JSX } from "react";

const SampleImg =
  "https://www.ondemand.in.th/wp-content/uploads/2020/07/%E0%B8%9F%E0%B8%B4%E0%B8%AA%E0%B8%B4%E0%B8%81%E0%B8%AA%E0%B9%8C_%E0%B8%A1%E0%B8%9B%E0%B8%A5%E0%B8%B2%E0%B8%A2-2.jpg";
const TextBoxStyle =
  "mt-3 rounded-[1.8125rem] w-[80vw]  md:w-[50vw] bg-[rgba(69,123,202,0.44)] shadow-[0_1.5px_1px_0_rgba(0,0,0,0.25)] backdrop-blur-[5.55px]";
const SmTextStyle =
  " text-2xl sm:text-4xl md:text-6xl lg:text-7xl block md:hidden ";
type categoryType = "clubs" | "organization" | "programme" | "gifted";
const CommonTextStyle =
  "font-bold bg-linear-to-r from-[#F4F2C4] to-[#F3E19D] bg-clip-text text-transparent";
const BigTextItem: Record<categoryType, JSX.Element[]> = {
  clubs: [
    <div className="flex flex-col justify-center items-start md:items-end">
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
    <div className="flex flex-col justify-center sm:-space-y-2 items-start">
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
    <div className="flex flex-col justify-center items-end">
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
    <div className="flex flex-col justify-center items-start md:items-end">
      <p
        className={`${CommonTextStyle} overflow-visible text-2xl sm:text-3xl md:text-4xl lg:text-5xl hidden md:block`}
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
    <div className="flex flex-col justify-center sm:-space-y-2 items-start">
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
    <div className="flex flex-col justify-center items-end">
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
    <div className="flex flex-col justify-center items-end">
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
    <div className="flex flex-col justify-center items-start">
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
    <div className="flex flex-col justify-center items-end">
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
    <div className="flex flex-col justify-center items-end">
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
    <div className="flex flex-col justify-center items-start">
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
    <div className="flex flex-col justify-center items-end">
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
  text: any;
}) => {
  return (
    <div className="z-67 flex flex-col md:max-w-[50vw] items-center justify-center my-3">
      <div
        className={`flex flex-col w-full ${
          item % 2 == 0 ? "md:flex-row" : "md:flex-row-reverse"
        } justify-around`}
      >
        <div
          className={`flex flex-col justify-evenly ${
            item % 2 == 0 ? "items-start md:items-end" : "items-start"
          }`}
        >
          <span className="scale-100">{BigTextItem[type][item]}</span>
          <Chandelier className="hidden md:block w-[12vw] " />
        </div>
        <div className="flex flex-col items-center justify-between ">
          <img
            src={img}
            className="rounded-[6px] object-cover w-[85vw] md:w-[30vw] aspect-8/5"
          />
          <p className="mt-1 text-[#F4F2C4B2] w-[80vw] md:w-[30vw] text-center font-light text-sm font-bai-jamjuree">
            {imgDescription}
          </p>
        </div>
      </div>
      <div className={TextBoxStyle}>
        <p className="bg-transparent font-bai-jamjuree py-2 text-sm md:text-md px-5 *:text-white text-white text-shadow-[0_1.5px_1px_rgba(0,0,0,0.25)]">
          {text}
        </p>
      </div>
    </div>
  );
};
export default InfoTemplate;
