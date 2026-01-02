import Link from "next/link";
import ErrorCastle from "@/vector/ErrorCastle";

export default function Custom404() {
  return (
    <main className="min-h-screen flex items-center bg-linear-to-r from-[#0B1855] via-[#042284] to-[#3450B0] justify-center bg-white">
      <div className="flex flex-col items-center space-y-2 p-6 text-center">
        <ErrorCastle className="transition-all drop-shadow-white drop-shadow-lg/0 hover:drop-shadow-lg/40 w-50 md:w-70" />
        <p className="font-noto-sans-thai mt-2 text-5xl md:text-6xl font-bold text-[#F4F2C4]">
          ERROR
        </p>
        <p className="font-noto-sans-thai text-lg lg:text-xl text-[#F4F2C4]">
          This page could not be found.
        </p>
        <Link
          href="../"
          className="mt-3 hover:scale-105 bg-linear-to-r from-[#F3E19D] to-[#F4F2C4] transition-all px-12  py-2 rounded-full"
        >
          <p className="bg-linear-to-t from-[#042284] to-[#3450B0] bg-clip-text text-transparent text-lg lg:text-2xl font-bold">
            กลับสู่หน้าหลัก
          </p>
        </Link>
      </div>
    </main>
  );
}
