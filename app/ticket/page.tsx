"use client";

import Image from "next/image";
import StudentIcon from "@/vector/Eticket/Student";
import DownloadIcon from "@/vector/Eticket/download";
import { useRef } from "react";
import { toPng } from "html-to-image";
import { useQuery } from "@tanstack/react-query";
import QRCode from "qrcode";
import { useEffect, useState } from "react";

const css = {
  textId:
    " text-white [text-shadow:0_2px_2px_rgba(0,0,0,0.25)] [-webkit-text-stroke-width:0.46px] font-[GFS_Didot] text-[20px] font-normal leading-[20px] mt-[30px]",
  userName:
    " text-white [text-shadow:0_2px_2px_rgba(0,0,0,0.25)] [-webkit-text-stroke-width:1.02px] font-[Bethany_Elingston] text-[33px] font-normal leading-[32px] tracking-[4.02px] mb-[10px]",
  thaiName: " ml-7 text-[#F3E8AD] font-inter text-[26px] leading-[23px]",
  student: "text-[#F3E8AD] font-inter text-[17px] leading-[23px]",
};

type BookingMeResponse = {
  userId: string;
  registerId: string;
  username: string;
  fullname: string;
  surname: string;
  userStatus: string;
};

async function fetchMyBooking(): Promise<BookingMeResponse> {
  const res = await fetch("/api/ticket/getBooking", {
    method: "GET",
    credentials: "include", // IMPORTANT for Better Auth cookies
  });

  if (!res.ok) {
    throw new Error("Failed to fetch booking");
  }

  const json = await res.json();
  return json.data;
}

const TicketPage = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["booking", "me"],
    queryFn: fetchMyBooking,
  });
  const [qr, setQr] = useState<string>("");

  useEffect(() => {
    if (!data?.userId) return;

    const userId = JSON.stringify({
      uid: data.userId,
      type: "checkin",
    });

    const qrValue = `${window.location.origin}/api/ticket/checkIn?userId=${userId}`;

    QRCode.toDataURL(qrValue, {
      width: 256,
      margin: 1,
    }).then(setQr);
  }, [data?.userId]);

  const ref = useRef<HTMLDivElement>(null);
  const downloadPNG = async () => {
    if (!ref.current) return;

    try {
      const dataUrl = await toPng(ref.current, {
        pixelRatio: 3,
        cacheBust: true,
        //backgroundColor: "#F4F2C3",
        width: 375,
        height: 695,
        style: {
          margin: "0",
          padding: "0",
          background: "transparent",
        },
      });

      const link = document.createElement("a");
      link.download = "Eticket.png";
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("PNG export failed", err);
    }
  };
  if (isPending) return <div>Loading</div>;
  if (isError) return <div>Error</div>;
  return (
    <>
      <div className=" w-screen py-[25vw] flex flex-col items-center justify-center bg-[linear-gradient(164deg,#E5C675_-6.81%,#F4F2C3_20.9%,#F4F2C3_64.17%,#E5C675_112.12%)] ">
        <div
          ref={ref}
          className="relative w-[375px] h-[695px] mx-auto overflow-hidden"
        >
          <Image src="/Eticket.svg" alt="Ticket" width={800} height={600} />
          <div className="absolute pt-4 top-0 left-0 w-full flex flex-col gap-3">
            <p className={css.textId + " text-center "}>
              ID: {data.registerId}
            </p>
            <p className={css.userName + " text-center uppercase break-all"}>
              {data.username}
            </p>
            <p className={css.thaiName}>{data.fullname}</p>
            <p className={css.thaiName}>{data.surname}</p>
            <div className="ml-7 w-[40%] h-0.5 bg-[#F3E8AD]"></div>
            <div className=" ml-7 flex items-center gap-2">
              <StudentIcon className="w-[17px] h-auto" />
              <p className={css.student}>{data.userStatus}</p>
            </div>
          </div>
          <div className="absolute w-[25%] mx-[30px] my-[15px] right-0 bottom-0">
            {qr && <img src={qr} alt="QR Code" className="w-full h-auto" />}
          </div>
        </div>

        <div
          onClick={downloadPNG}
          className=" shadow-sm mt-[10vw] md:mt-[5vw] w-[200px] h-[50px] rounded-[55.164px] bg-[linear-gradient(93deg,#457BCA_2.18%,#042284_114.09%)] flex items-center justify-center hover:scale-105 transition-all"
        >
          <div className="flex">
            <DownloadIcon className="w-[30px] h-auto mr-3" />
            <p className="text-white text-xl mr-5">Download</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default TicketPage;
