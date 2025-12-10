import FooterBackgroundSm from "@/vector/FooterBackgroundSm";
import FooterBackground from "@/vector/FooterBackground";
import FBIcon from "@/vector/Contact/FBIcon";
import IGIcon from "@/vector/Contact/IGIcon";
import TwitterIcon from "@/vector/Contact/TwitterIcon";
import YTIcon from "@/vector/Contact/YTIcon";
import TikTokIcon from "@/vector/Contact/TikTokIcon";

const Style = {
  Contact: "cursor-pointer w-9 m-1 hover:scale-110 transition-all",
  Link: "cursor-pointer lg:w-1/2",
  LinkRow:
    "flex flex-col lg:flex-row lg:text-end lg:justify-between space-y-2 text-center mb-2 lg:mb-auto",
};

const Footer = () => {
  return (
    <footer className=" bg-[#0B1955] text-[#F4F2C4] px-3 pt-8 lg:px-30">
      <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between lg:pb-8">
        <div className="flex flex-col justify-center items-center  lg:justify-start lg:items-start">
          {/** TEXT */}
          <div className="flex flex-col justify-center lg:justify-start lg:items-start items-center -space-y-1">
            <p className="font-bold text-md lg:text-xl">TRIAM UDOM</p>
            <p className=" text-md lg:text-xl">OPEN HOUSE 2026</p>
          </div>
          <div className="flex py-2  lg:justify-start">
            <a href="/">
              <FBIcon className={`${Style.Contact}`} />
            </a>
            <a href="/">
              <IGIcon className={`${Style.Contact}`} />
            </a>
            <a href="/">
              <TwitterIcon className={`${Style.Contact}`} />
            </a>
            <a href="/">
              <YTIcon className={`${Style.Contact}`} />
            </a>
            <a href="/">
              <TikTokIcon className={`${Style.Contact}`} />
            </a>
          </div>
          <div className="bg-linear-to-r from-[#F3E19D] via-[#F4F2C4] to-[#E6C674] text-[#062078] rounded-full px-3 py-1 lg:px-5 lg:py-1.5 lg:text-lg text-center cursor-pointer mt-2 font-bold hover:scale-110 transition-all">
            เข้าสู่ระบบ
          </div>
        </div>
        <div className=" p-4 lg:w-1/2">
          <div className={`${Style.LinkRow}`}>
            <a href="/" className={`${Style.Link}`}>
              หน้าแรก
            </a>
            <a href="/" className={`${Style.Link}`}>
              แผนผัง
            </a>
          </div>
          <div className={`${Style.LinkRow}`}>
            <a href="/" className={`${Style.Link}`}>
              สายการเรียน
            </a>
            <a href="/" className={`${Style.Link}`}>
              การสอบเข้า
            </a>
          </div>
          <div className={`${Style.LinkRow}`}>
            <a href="/" className={`${Style.Link}`}>
              ชมรม
            </a>
            <a href="/" className={`${Style.Link}`}>
              การเดินทาง
            </a>
          </div>
          <div className={`${Style.LinkRow}`}>
            <div className="hidden lg:block"></div>
            <a href="/" className={`${Style.Link}`}>
              ติดต่อ
            </a>
          </div>
        </div>
      </div>
      <div className="h-px w-60vw lg:w-80vw bg-gray-400"></div>
      <div className="flex flex-row p-4 pb-6 justify-center items-center">
        <p className="font-bold text-4xl tracking-tighter text-[#F4F2C4]">
          กช.
        </p>
        <div className="w-px h-7 mx-2 bg-[#F4F2C4]"></div>
        <div className="flex flex-col -space-y-0.5">
          <p className="text-sm">งานกิจกรรมพัฒนาผู้เรียน</p>
          <p className="text-sm">โรงเรียนเตรียมอุดมศึกษา</p>
        </div>
      </div>
      <div className="w-full absolute bottom-0">
        <FooterBackgroundSm className=" hidden bottom-0" />
      </div>
    </footer>
  );
};

export default Footer;
