import BackIcon from "@/vector/InfoPage/BackIcon";
import MemberIcon from "@/vector/InfoPage/MemberIcon";
import StarBar from "@/vector/InfoPage/StarBar";
import TopCurtain from "@/vector/InfoPage/TopCurtain";
import CloudAndMoon from "@/vector/InfoPage/CloudAndMoon";
import Bubble1 from "@/vector/InfoPage/Bubble1";
import BottomCastle from "@/vector/InfoPage/BottomCastle";
import Bubble2 from "@/vector/InfoPage/Bubble2";
import Bricks from "@/vector/InfoPage/Bricks";
import Comet from "@/vector/InfoPage/Comet";
import Candle1 from "@/vector/InfoPage/Candle1";
import Candle2 from "@/vector/InfoPage/Candle2";
import Candle3 from "@/vector/InfoPage/Candle3";
import Smoke1 from "@/vector/InfoPage/Smoke1";
import Smoke2 from "@/vector/InfoPage/Smoke2";
import InfoTemplate from "@/components/InfoPage/InfoTemplate";
import ReviewBox from "@/components/InfoPage/ReviewBox";
import Custom404 from "@/app/not-found";
import organizationData from "@public/data/organizations.json";

import Link from "next/link";

export const generateStaticParams = async () => {
  return organizationData.map((organization) => ({ id: organization.key }));
};

export default async function OrganizationInfoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const key = await params;
  const organizationKey = decodeURIComponent(key.id);
  const data = organizationData.find(
    (organization) => organization.key === organizationKey
  );

  if (!data)
    return (
      <div className="text-center p-10">
        <Custom404 />
      </div>
    );

  return (
    <div className="overflow-hidden relative items-center min-h-screen [background:linear-gradient(180deg,#0B1956_0%,#042284_35%,#467BCA_77.37%,#F4F2C4_100%)]">
      <div className="relative">
        <TopCurtain className="w-full -translate-y-[3%] absolute z-30" />
      </div>

      <Bricks className="w-[50vw] top-[8%] left-0 translate-x-1/2 absolute z-30" />
      <CloudAndMoon className="left-0 scale-140 top-[60%]  absolute z-5" />
      <Bubble1 className="absolute right-0 w-1/6 translate-x-[0%] top-[27%] z-0" />
      <Bubble2 className=" absolute left-0 w-1/6 translate-x-[5%] top-[32%] z-0" />
      <Candle1 className=" absolute right-0  w-1/5 translate-x-[5%] top-[33%] z-0" />
      <Candle2 className="w-1/6 absolute left-0 translate-x-[5%] top-[43%] z-0" />
      <Candle3 className="w-1/4 absolute right-0 translate-x-[13%] top-[47%] z-0 " />
      <Comet className=" absolute left-0 w-1/3 translate-x-[-13%] top-[20%] z-0" />
      <Comet className="w-1/3 absolute right-0 translate-x-[7%] top-[38%] z-0" />
      <Smoke2 className=" absolute right-0  w-7/10 translate-x-[13%] top-[20%] z-0" />
      <Smoke1 className="w-7/10 absolute left-0 -translate-x-[12%]  top-[35%] z-0" />

      <div className="relative flex flex-col items-center mt-[6vw] space-y-3 z-67 px-3">
        <Link
          href="/#organizations"
          className="flex flex-row items-center mt-24 lg:mt-[13%] transition-all hover:scale-105"
        >
          <BackIcon className="w-5 mr-1" />
          <span className="text-[#F3ECB7]">ย้อนกลับ</span>
        </Link>

        <h1 className="text-[#F3ECB7] max-w-[70vw] font-bold text-4xl lg:text-7xl text-center px-4 mt-2">
          {data.name}
        </h1>

        <div className="flex flex-row items-center justify-center space-x-6">
          <div className="flex flex-row items-center space-x-3">
            <MemberIcon className="w-12" />
            <div className="flex flex-col justify-center items-center">
              <span className="font-semibold text-[#F3ECB7]">สมาชิก</span>
              <span className="text-[#F3ECB7] text-4xl font-bold">
                {data.members}
              </span>
            </div>
          </div>

          <div className="h-16 rounded-full bg-[#F3E29E] w-1" />

          <div className="flex flex-col">
            {data.contacts.ig && (
              <span className="text-[#F3ECB7] font-light">
                IG: {data.contacts.ig}
              </span>
            )}
            {data.contacts.fb && (
              <span className="text-[#F3ECB7] font-light">
                FB: {data.contacts.fb}
              </span>
            )}
            {data.contacts.others && (
              <span className="text-[#F3ECB7] font-light">
                อื่น ๆ : {data.contacts.others}
              </span>
            )}
          </div>
        </div>

        <div className="m-5 w-[65%] flex flex-row items-center justify-center space-x-2">
          <div className="bg-[#F3E3A1] h-[3px] rounded-full w-full" />
          <StarBar className="w-[55px]" />
          <div className="bg-[#F3E3A1] h-[3px] rounded-full w-full" />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center z-67">
        {data.info.activities && (
          <InfoTemplate
            type="organization"
            item={0}
            img={data.info.activities.img}
            imgDescription={data.info.activities.imgDescription}
            text={data.info.activities.text}
          />
        )}

        {data.info.positions && (
          <InfoTemplate
            type="organization"
            item={1}
            img={data.info.positions.img}
            imgDescription={data.info.positions.imgDescription}
            text={data.info.positions.text}
          />
        )}

        {data.info.workings && (
          <InfoTemplate
            type="organization"
            item={2}
            img={data.info.workings.img}
            imgDescription={data.info.workings.imgDescription}
            text={data.info.workings.text}
          />
        )}
      </div>

      {data.reviews.length > 0 && (
        <div className="w-full flex flex-col justify-center items-center mt-5">
          <div className="w-[65%] flex flex-row items-center justify-center space-x-2">
            <h2 className="pt-2 pb-2 font-bold text-3xl lg:text-4xl w-full text-center bg-linear-to-r from-[#F4F2C4] to-[#F3E19D] bg-clip-text text-transparent">
              รีวิวจากรุ่นพี่
            </h2>
          </div>

          {data.reviews.map((r, i) => (
            <ReviewBox
              key={i}
              name={r.nick}
              img={r.profile}
              gen={r.gen}
              ig={r.contact}
              text={r.content}
            />
          ))}
        </div>
      )}
      <BottomCastle className=" block w-screen mt-[10%] translate-y-[1%]" />
    </div>
  );
}
