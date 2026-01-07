"use client";

import Image from "next/image";
import StudentIcon from "@/vector/Eticket/Student";
import DownloadIcon from "@/vector/Eticket/download";
import { useRef } from "react";
import { toPng } from "html-to-image";
import { useQuery } from "@tanstack/react-query";
import QRCode from "qrcode";
import { useEffect, useState } from "react";
import LoadingPage from "@/components/ticket/LoadingPage";
import { toast } from "react-hot-toast";

const css = {
  textId:
    " text-white [text-shadow:0_2px_2px_rgba(0,0,0,0.25)] [-webkit-text-stroke-width:0.46px] font-[GFS_Didot] text-[20px] font-normal leading-[20px] mt-[30px] mb-1",
  thaiName:
    " ml-7 text-[#F3E8AD] font-noto-sans-thai text-[20px] leading-[13px]",
  student: "text-[#F3E8AD] font-noto-sans-thai text-[15px] leading-[10px]",
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
  const [imageLoaded, setImageLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!data?.registerId) return;

    const qrValue = `${window.location.origin}/staff/checkin/${data.registerId}`;

    QRCode.toDataURL(qrValue, {
      width: 256,
      margin: 0,
      color: {
        dark: "#F3F1C2", // QR color (dots)
        light: "#00000000", // transparent background
      },
    }).then(setQr);
  }, [data?.registerId]);

  const generatePNG = async () => {
    if (!ref.current) return null;

    try {
      const dataUrl = await toPng(ref.current, {
        pixelRatio: 3,
        cacheBust: true,
        width: 375,
        height: 695,
        style: {
          margin: "0",
          padding: "0",
          background: "transparent",
        },
      });

      const response = await fetch(dataUrl);
      const blob = await response.blob();
      return new File([blob], "Eticket.png", { type: "image/png" });
    } catch (err) {
      console.error("PNG generation failed:", err);
      throw err;
    }
  };

  const downloadFile = async (file: File) => {
    try {
      const blobUrl = URL.createObjectURL(file);
      const link = document.createElement("a");

      link.href = blobUrl;
      link.download = file.name;
      link.style.display = "none";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);

      return true;
    } catch (err) {
      console.error("Download failed:", err);
      return false;
    }
  };

  const shareFile = async (file: File) => {
    // Check if share is supported
    if (!navigator.share) {
      console.log("Share not supported");
      return { success: false, reason: "not-supported" };
    }

    // IMPORTANT: iOS/iPadOS requires checking canShare
    if (navigator.canShare && !navigator.canShare({ files: [file] })) {
      console.log("Cannot share this file type");
      return { success: false, reason: "file-not-supported" };
    }

    try {
      // iOS requires user gesture - make sure this is called directly from a click event
      await navigator.share({
        files: [file],
        title: "E-Ticket",
        text: "E-Ticket", // Adding text can help on some iOS versions
      });
      return { success: true };
    } catch (err) {
      console.error("Share error:", err);
      if (err instanceof Error) {
        console.log("Error name:", err.name);
        console.log("Error message:", err.message);

        if (err.name === "AbortError") {
          return { success: false, reason: "cancelled" };
        }
        if (err.name === "NotAllowedError") {
          return { success: false, reason: "not-allowed" };
        }
      }
      return { success: false, reason: "error" };
    }
  };

  // Main function that combines both
  const downloadAndSharePNG = async () => {
    if (!ref.current) return;

    const toastId = toast.loading("กำลังดาวน์โหลด...");

    try {
      // Generate PNG once
      const file = await generatePNG();
      if (!file) {
        toast.error("เกิดข้อผิดพลาดในการสร้างรูปภาพ", { id: toastId });
        return;
      }

      // Download file
      const downloadSuccess = await downloadFile(file);
      if (downloadSuccess) {
        toast.success("ดาวน์โหลดสำเร็จ!", { id: toastId });
      } else {
        toast.error("ดาวน์โหลดล้มเหลว", { id: toastId });
      }

      // Small delay before sharing
      await new Promise((resolve) => setTimeout(resolve, 300));

      // Share file
      const shareResult = await shareFile(file);

      if (shareResult.success) {
        toast.success("แชร์สำเร็จ!");
      } else if (shareResult.reason === "not-supported") {
        console.log("Share API not supported on this device");
      } else if (shareResult.reason === "file-not-supported") {
        toast.error("ไม่สามารถแชร์ไฟล์ชนิดนี้ได้");
      } else if (shareResult.reason === "not-allowed") {
        toast.error("ไม่ได้รับอนุญาตให้แชร์");
      } else if (shareResult.reason === "error" && !downloadSuccess) {
        toast.error("แชร์ล้มเหลว");
      }
      // Don't show error for "cancelled"
    } catch (err) {
      console.error("PNG generation failed:", err);
      toast.error("เกิดข้อผิดพลาดในการสร้างรูปภาพ", { id: toastId });
    }
  };
  const isLoading = isPending || !imageLoaded;

  if (isError) {
    return (
      <div className="w-screen min-h-screen py-[15vw] flex flex-col items-center justify-center bg-[linear-gradient(164deg,#E5C675_-6.81%,#F4F2C3_20.9%,#F4F2C3_64.17%,#E5C675_112.12%)]">
        <div className="text-center">
          <p className="text-[#0B1855] font-noto-sans-thai text-2xl font-bold mb-4">
            เกิดข้อผิดพลาด
          </p>
          <p className="text-[#0B1855] font-noto-sans-thai text-lg">
            ไม่สามารถโหลดข้อมูลได้ กรุณาลองใหม่อีกครั้ง
          </p>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className=" w-screen py-[15vh] flex flex-col items-center justify-center bg-[linear-gradient(164deg,#E5C675_-6.81%,#F4F2C3_20.9%,#F4F2C3_64.17%,#E5C675_112.12%)] ">
        {isLoading && <LoadingPage />}

        {data && (
          <div
            className={
              isLoading ? "hidden" : "mx-auto flex flex-col items-center"
            }
          >
            <div className="mt-10 mb-20">
              <p className=" text-[#0B1855] text-center font-noto-sans-thai text-[50px] font-bold leading-[31.881px]">
                E-Ticket
              </p>
              <p className=" text-[#0B1855] font-noto-sans-thai text-[33px] font-medium leading-[61.881px] ">
                สำหรับแสดงเพื่อเข้างาน
              </p>
            </div>
            <div
              ref={ref}
              className="relative w-[375px] h-[695px] mx-auto overflow-hidden"
            >
              <Image
                src="/Eticket2.svg"
                alt="Ticket"
                width={800}
                height={600}
                onLoad={() => setImageLoaded(true)}
                priority
              />
              <div className="absolute pt-4 top-0 left-0 w-full flex flex-col gap-3">
                <p className={css.textId + " text-center "}>
                  ID: {data.registerId}
                </p>
                <p
                  style={{ fontFamily: "var(--font-bethany)" }}
                  className={
                    "text-white [text-shadow:0_2px_2px_rgba(0,0,0,0.25)] text-[33px] font-bold leading-[32px] tracking-[4.02px] mb-[14px] text-center uppercase break-all"
                  }
                >
                  {data.username}
                </p>
                <p className={css.thaiName}>{data.fullname}</p>
                <p className={css.thaiName}>{data.surname}</p>
                <div className="ml-7 w-[40%] h-0.5 bg-[#F3E8AD]"></div>
                <div className=" ml-7 flex items-center gap-2">
                  <StudentIcon className="w-4 h-auto" />
                  <p className={css.student}>{data.userStatus}</p>
                </div>
              </div>
              <div className="absolute w-[25%] mx-[30px] my-[15px] right-0 bottom-0">
                {qr && <img src={qr} alt="QR Code" className="w-full h-auto" />}
              </div>
            </div>
            <div
              onClick={downloadAndSharePNG}
              className=" cursor-pointer z-40 shadow-sm mt-[10vw] md:mt-[5vw] w-[200px] h-[50px] rounded-[55.164px] bg-[linear-gradient(93deg,#457BCA_2.18%,#042284_114.09%)] flex items-center justify-center hover:scale-105 transition-all"
            >
              <div className="flex">
                <DownloadIcon className="w-[30px] h-auto mr-3" />
                <p className="text-white text-xl mr-5">Download</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default TicketPage;
