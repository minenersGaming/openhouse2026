import { Suspense } from "react";
import Merchandise from "./Merchandise";

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="py-20 text-center h-screen w-full bg-linear-to-t from-[#E5C675] to-[#F4F2C3] "></div>
      }
    >
      <Merchandise />
    </Suspense>
  );
}
