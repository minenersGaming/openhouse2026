"use client";
import FooterBackgroundSm from "@/vector/Footer/FooterBackgroundSm";
import FooterBackground from "@/vector/Footer/FooterBackground";
import FBIcon from "@/vector/Contact/FBIcon";
import IGIcon from "@/vector/Contact/IGIcon";
import TwitterIcon from "@/vector/Contact/TwitterIcon";
import YTIcon from "@/vector/Contact/YTIcon";
import TikTokIcon from "@/vector/Contact/TikTokIcon";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "@/lib/auth-client";
import Link from "next/link";

const Style = {
  Contact: "cursor-pointer w-9 m-1.5 hover:scale-110 transition-all",
  Link: "cursor-pointer lg:w-1/2",
  LinkRow:
    "flex flex-col lg:flex-row lg:text-end lg:justify-between space-y-2 text-center mb-2 lg:mb-auto",
};

const Footer = () => {
  const { data, isPending } = useSession();
  const router = useRouter();

  const handleLogin = async () => {
    // to register page
    router.push("/register");
  };
  const handleLogout = async () => {
    await signOut();
    window.location.href = "/";
  };

  return (
    <div className="relative">
      <footer className="bg-[#0B1955] text-[#F4F2C4] px-3 pt-8 footer-xw lg:px-30 h-full overflow-y-clip">
        <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between lg:pb-8">
          <div className="flex flex-col justify-center items-center  lg:justify-start lg:items-start">
            <div className="flex flex-col justify-center lg:justify-start lg:items-start items-center -space-y-1">
              <p className="font-bold text-md lg:text-xl">TRIAM UDOM</p>
              <p className=" text-md lg:text-xl">OPEN HOUSE 2026</p>
            </div>
            <div className="flex py-2  lg:justify-start">
              <Link target="_blank" className="relative z-10" href="https://www.facebook.com/TriamUdomOPH">
                <FBIcon className={`${Style.Contact}`} />
              </Link>
              <Link
                target="_blank "
                className="relative z-10"
                href="https://www.instagram.com/triamudom.oph/"
              >
                <IGIcon className={`${Style.Contact}`} />
              </Link>
              <Link target="_blank" href="https://x.com/triamudomoph">
                <TwitterIcon className={`${Style.Contact}`} />
              </Link>
              <Link
                target="_blank"
                href="https://www.youtube.com/c/TriamUdomOpenHouse"
              >
                <YTIcon className={`${Style.Contact}`} />
              </Link>
              <Link target="_blank" href="https://www.tiktok.com/@triamudom.oph">
                <TikTokIcon className={`${Style.Contact}`} />
              </Link>
            </div>
            {!isPending ? (
              data?.user ? (
                <button
                  onClick={handleLogout}
                  className="bg-linear-to-r from-[#F3E19D] via-[#F4F2C4] to-[#E6C674] text-[#062078] rounded-full px-3 py-1 lg:px-5 lg:py-1.5 lg:text-lg text-center cursor-pointer mt-2 font-bold hover:scale-110 transition-all relative z-10"
                >
                  ออกจากระบบ
                </button>
              ) : (
                <button
                  onClick={handleLogin}
                  className="bg-linear-to-r from-[#F3E19D] via-[#F4F2C4] to-[#E6C674] text-[#062078] rounded-full px-3 py-1 lg:px-5 lg:py-1.5 lg:text-lg text-center cursor-pointer mt-2 font-bold hover:scale-110 transition-all relative z-10"
                >
                  เข้าสู่ระบบ
                </button>
              )
            ) : (
              <button className="bg-linear-to-r from-[#F3E19D] via-[#F4F2C4] to-[#E6C674] text-[#062078] rounded-full px-3 py-1 lg:px-5 lg:py-1.5 lg:text-lg text-center cursor-pointer mt-2 font-bold hover:scale-110 transition-all relative z-10">
                กำลังเช็กข้อมูล
              </button>
            )}
          </div>
          <div className="z-10 p-4 lg:w-1/2">
            <div className={`${Style.LinkRow}`}>
              <Link href="/" className={`${Style.Link}`}>
                หน้าแรก
              </Link>
              <Link href="/map" className={`${Style.Link}`}>
                แผนผัง
              </Link>
            </div>
            <div className={`${Style.LinkRow}`}>
              <Link href="/#programs" className={`${Style.Link}`}>
                สายการเรียน
              </Link>
              <Link href="/admission" className={`${Style.Link}`}>
                การสอบเข้า
              </Link>
            </div>
            <div className={`${Style.LinkRow}`}>
              <Link href="/#clubs" className={`${Style.Link}`}>
                ชมรม
              </Link>
              <Link href="/directions" className={`${Style.Link}`}>
                การเดินทาง
              </Link>
            </div>
            <div className={`${Style.LinkRow}`}>
              <div className="hidden lg:block"></div>
              <Link href="/merchandise" className={`${Style.Link}`}>
                สินค้าที่ระลึก
              </Link>
            </div>
          </div>
        </div>
        <div className="h-px w-60vw lg:w-80vw bg-gray-400 relative z-10"></div>
        <Link href='https://clubs.triamudom.ac.th/' target="_blank" className="flex flex-row p-4 pb-6 justify-center items-center relative z-10">
          <p className="font-bold text-4xl tracking-[-3px] text-[#F4F2C4]">
            กช.
          </p>
          <div className="w-px h-7 mx-2 mt-1 bg-[#F4F2C4]"></div>
          <div className="flex flex-col -space-y-0.5">
            <p className="text-[10px] mt-[5px]">งานกิจกรรมพัฒนาผู้เรียน</p>
            <p className="text-[10px]">โรงเรียนเตรียมอุดมศึกษา</p>
          </div>
        </Link>
      </footer>
      <div className="absolute hidden lg:block w-screen overflow-hidden pointer-events-none bottom-0">
        <FooterBackground className="translate-y-[10%] w-full" />
      </div>
      <div className="absolute lg:hidden w-screen overflow-hidden pointer-events-none bottom-0">
        <FooterBackgroundSm className="translate-y-[0%] mt-[120%] w-full" />
      </div>
    </div>
  );
};
{
  /* <div className="relative overflow-clip w-[150vw] h-full left-0 -translate-x-1/10 z-0">
  <FooterBackgroundSm className="block lg:hidden absolute bottom-0" />
  <FooterBackground className="hidden lg:block absolute object-cover -bottom-1/2 w-[110vw] min-h-full overflow-hidden left-0 z-0" />
</div>; */
}
export default Footer;
