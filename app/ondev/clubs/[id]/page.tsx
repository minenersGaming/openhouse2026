"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import BackIcon from "@/vector/InfoPage/BackIcon";
import MemberIcon from "@/vector/InfoPage/MemberIcon";
import StarBar from "@/vector/InfoPage/StarBar";
import TopCurtain from "@/vector/InfoPage/TopCurtain";
import InfoTemplate from "@/components/InfoPage/InfoTemplate";
import ReviewBox from "@/components/InfoPage/ReviewBox";

export default function ClubsInfoPage() {
  const params = useParams();
  const router = useRouter();
  const id = decodeURIComponent(params.id as string);

  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/doc/getDocument?type=clubs&key=${id}`) //for programs use  type=programs&key=... etc 
      .then((res) => res.json())
      .then((json) => setData(json.data))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="text-center p-10">Loading...</div>;
  if (!data) return <div className="text-center p-10">Not found</div>;

  return (
    <div className="items-center px-3 [background:linear-gradient(180deg,#0B1956_0%,#042284_35%,#467BCA_77.37%,#F4F2C4_100%)]">
      <div className="relative">
        <TopCurtain className="w-full absolute" />
      </div>

      <div className="relative flex flex-col items-center space-y-3 z-50">
        <button
          onClick={() => router.back()}
          className="flex flex-row items-center mt-24 hover:scale-105"
        >
          <BackIcon className="w-5 mr-1" />
          <p className="text-[#F3ECB7]">ย้อนกลับ</p>
        </button>

        <p className="text-[#F3ECB7] font-bold text-4xl text-center px-4 mt-2">
          {data.name}
        </p>

        <div className="flex flex-row items-center space-x-6">
          <div className="flex flex-row items-center space-x-3">
            <MemberIcon className="w-12" />
            <div className="flex flex-col justify-center items-center">
              <p className="font-semibold text-[#F3ECB7]">สมาชิก</p>
              <p className="text-[#F3ECB7] text-4xl font-bold">
                {data.members}
              </p>
            </div>
          </div>

          <div className="h-16 rounded-full bg-[#F3E29E] w-[4px]" />

          <div className="flex flex-col">
            {data.ig && (
              <p className="text-[#F3ECB7] font-light">IG: {data.ig}</p>
            )}
            {data.fb && (
              <p className="text-[#F3ECB7] font-light">FB: {data.fb}</p>
            )}
            {data.others && (
              <p className="text-[#F3ECB7] font-light">
                อื่น ๆ : {data.others}
              </p>
            )}
          </div>
        </div>

        <div className="m-5 w-[65%] flex flex-row items-center justify-center space-x-2">
          <div className="bg-[#F3E3A1] h-[3px] rounded-full w-full" />
          <StarBar className="w-[55px]" />
          <div className="bg-[#F3E3A1] h-[3px] rounded-full w-full" />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        {data.captureimg1 && (
          <InfoTemplate
            type="clubs"
            item={0}
            img={data.captureimg1}
            imgDescription={data.descimg1}
            text={data.activities}
          />
        )}

        {data.captureimg2 && (
          <InfoTemplate
            type="clubs"
            item={1}
            img={data.captureimg2}
            imgDescription={data.descimg2}
            text={data.benefits}
          />
        )}

        {data.captureimg3 && (
          <InfoTemplate
            type="clubs"
            item={2}
            img={data.captureimg3}
            imgDescription={data.descimg3}
            text={data.working}
          />
        )}
      </div>

      {data.reviews?.length > 0 && (
        <div className="w-full flex flex-col justify-center items-center mt-5">
          <div className="w-[80%] flex flex-row items-center justify-center space-x-2">
            <div className="bg-[#F3E3A1] h-[3px] rounded-full w-full hidden md:block" />
              <p className="font-bold text-3xl w-full text-center bg-linear-to-r from-[#F4F2C4] to-[#F3E19D] bg-clip-text text-transparent">
                รีวิวจากรุ่นพี่
              </p>
            <div className="bg-[#F3E3A1] h-[3px] rounded-full w-full hidden md:block" />
          </div>

    {data.reviews.map((r: any, i: number) => (
      <ReviewBox
        key={i}
        name={r.nick}
        img={r.profile}          // ✅ profile picture
        gen={r.gen}
        ig={r.contact}           // ✅ IG / contact text
        text={r.content}         // ✅ HTML content
      />
            ))}
        </div>
        )}

    </div>
  );
}
