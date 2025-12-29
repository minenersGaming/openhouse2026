import Image from "next/image";
import StudentIcon from "@/vector/Eticket/Student";
import ExampleQR from "@/vector/Eticket/ExampleQR";
const css = {
  textId:
    " text-white [text-shadow:0_2px_2px_rgba(0,0,0,0.25)] [-webkit-text-stroke-width:0.46px] [-webkit-text-stroke-color:#F4F2C3] font-[GFS_Didot] text-[5vw] md:text-[3vw] lg:text-[2vw] font-normal leading-[7vw] md:leading-[5vw] lg:leading-[2vw]",
  userName:
    " text-white [text-shadow:0_2px_2px_rgba(0,0,0,0.25)] [-webkit-text-stroke-width:1.02px] [-webkit-text-stroke-color:#F4F2C3] font-[Bethany_Elingston] text-[7vw] md:text-[5vw] lg:text-[3.8vw] font-normal leading-[8vw] md:leading-[5vw] lg:leading-[4vw] tracking-[4.02px]",
  thaiName:
    " text-[#F3E8AD] font-inter text-[6vw] md:text-[4.3vw] lg:text-[3vw] font-medium leading-[5vw] md:leading-[4vw] lg:leading-[2.6vw]",
  student:
    "text-[#F3E8AD] font-inter text-[6vw]  md:text-[4.3vw] lg:text-[3vw] font-medium leading-[5vw] md:leading-[4vw] lg:leading-[2.6vw]",
};
const TicketPage = () => {
  return (
    <>
      <div className=" w-screen py-[25vw] md:py-[10vw] flex justify-center bg-[linear-gradient(164deg,#E5C675_-6.81%,#F4F2C3_20.9%,#F4F2C3_64.17%,#E5C675_112.12%)] ">
        <div className="relative w-[80%] md:w-[60%] lg:w-[40%] mx-auto border">
          <Image
            src="/Eticket.svg"
            alt="Ticket"
            width={800}
            height={600}
            className="w-full"
          />
          <div className="absolute pt-[6vw] md:pt-[3vw] pb-[3vw] px-[1vw] top-0 left-0 w-full border flex flex-col gap-[3vw] md:gap-[2vw] lg:gap-[1.2vw]">
            <p className={css.textId + " text-center "}>ID: 00001</p>
            <p className={css.userName + " text-center uppercase break-all"}>
              12345678901234567890123456789012
            </p>
            <p className={css.thaiName}>จิรวัฒน์</p>
            <p className={css.thaiName}>เอสเปร่า</p>
            <div className=" w-[40%] h-[0.05vw] lg:h-[0.1vw] bg-[#F3E8AD]"></div>
            <div className="flex items-center border gap-2">
              <StudentIcon className="w-[5vw]  md:w-[4.3vw] lg:w-[3vw] h-auto" />
              <p className={css.student}>นักเรียน</p>
            </div>
          </div>
          <div className="absolute w-[25%] mx-[6vw] my-[2vw] md:mx-[3vw] md:my-[1.5vw] border right-0 bottom-0">
            <ExampleQR className="w-full h-auto" />
          </div>
        </div>
      </div>
    </>
  );
};
export default TicketPage;
