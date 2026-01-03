import Chandelier from "@/vector/InfoPage/Chandelier";
import { JSX } from "react";

const SampleImg =
  "https://www.ondemand.in.th/wp-content/uploads/2020/07/%E0%B8%9F%E0%B8%B4%E0%B8%AA%E0%B8%B4%E0%B8%81%E0%B8%AA%E0%B9%8C_%E0%B8%A1%E0%B8%9B%E0%B8%A5%E0%B8%B2%E0%B8%A2-2.jpg";
const TextBoxStyle =
  "mt-3 rounded-[1.8125rem] w-[75vw] bg-[rgba(69,123,202,0.44)] shadow-[0_1.5px_1px_0_rgba(0,0,0,0.25)] backdrop-blur-[5.55px]";

type categoryType = "clubs" | "organization" | "programme" | "gifted";

const BigTextItem: Record<categoryType, JSX.Element[]> = {
  clubs: [
    <div className="flex flex-col justify-center items-end">
      <p className="font-bold text-2xl bg-linear-to-r from-[#F4F2C4] to-[#F3E19D] bg-clip-text text-transparent">
        ชมรมนี้
      </p>
      <p className="font-bold text-2xl bg-linear-to-r from-[#F4F2C4] to-[#F3E19D] bg-clip-text text-transparent">
        ทำอะไร
      </p>
    </div>,
    <div className="flex flex-col justify-center items-start">
      <p className="font-bold text-2xl bg-linear-to-r from-[#F4F2C4] to-[#F3E19D] bg-clip-text text-transparent">
        ประโยชน์
      </p>
      <p className="font-bold text-2xl bg-linear-to-r from-[#F4F2C4] to-[#F3E19D] bg-clip-text text-transparent">
        ที่ได้รับ
      </p>
    </div>,
    <div className="flex flex-col justify-center items-end">
      <p className="font-bold text-2xl bg-linear-to-r from-[#F4F2C4] to-[#F3E19D] bg-clip-text text-transparent">
        ผลงาน
      </p>
      <p className="font-bold text-2xl bg-linear-to-r from-[#F4F2C4] to-[#F3E19D] bg-clip-text text-transparent">
        ชมรม
      </p>
    </div>,
  ],
  organization: [],
  programme: [],
  gifted: [],
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
    <div className="flex flex-col items-center justify-center my-3">
      <div
        className={`flex ${
          item % 2 == 0 ? "flex-row" : "flex-row-reverse"
        } justify-center`}
      >
        <div
          className={`flex flex-col justify-center ${
            item % 2 == 0 ? "items-end" : "items-start"
          } justify-center`}
        >
          {BigTextItem[type][item]}
          <Chandelier className="w-[20vw]" />
        </div>
        <div className="flex flex-col items-center justify-center  mx-3">
          <img
            src={img}
            className="rounded-[6px] object-cover w-[50vw] aspect-8/5"
          />
          <p className="text-[#F4F2C4B2] font-light text-sm font-bai-jamjuree">
            {imgDescription}
          </p>
        </div>
      </div>
      <div className={TextBoxStyle}>
        <p className="font-bai-jamjuree py-2 px-5 text-white text-shadow-[0_1.5px_1px_rgba(0,0,0,0.25)]">
          {text}
        </p>
      </div>
    </div>
  );
};
export default InfoTemplate;
