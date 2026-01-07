// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useRef, useState } from "react";
// import BackIcon from "./BackIcon";
// import { EmblaOptionsType } from "embla-carousel";

// import EmblaCarousel from "./EmblaCarousel";

// interface GeneralProps {
//   name: string;
//   eng: string;
//   desc: string;
//   price: number;
//   check: string;
//   imgs: string[];
// }

// const OPTIONS: EmblaOptionsType = { loop: true };
// const SLIDE_COUNT = 5;
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

// const General: React.FC<GeneralProps> = ({
//   name,
//   eng,
//   desc,
//   price,
//   imgs,
//   check,
// }) => {
//   const [merch, setMerch] = useState<string[]>([]);

//   const list = ["tarot", "sticker", "postcard", "key", "tarot-boxset", "ctotw"];

//   useEffect(() => {
//     function randomMerch() {
//       const list = [
//         "tarot",
//         "sticker",
//         "postcard",
//         "key",
//         "tarot-boxset",
//         "ctotw",
//       ];

//       const filteredList = list.filter((item) => item !== check);
//       const result: string[] = [];

//       while (result.length < 3 && filteredList.length > 0) {
//         const randomIndex = Math.floor(Math.random() * filteredList.length);
//         const item = filteredList[randomIndex];

//         if (item && !result.includes(item)) {
//           result.push(item);
//         }
//       }

//       return result;
//     }

//     const selectedMerch = randomMerch() as string[];
//     setMerch(selectedMerch);
//   }, []);

//   return (
//     <section className="-mt-20 bg-[#FFFCE8] py-20 lg:h-[150vh]">
//       <div className="mx-4 flex flex-col items-center justify-between space-y-8 py-6 md:mx-20">
//         <div className="w-[90vw] md:mx-36 md:w-[80vw]">
//           <section className="flex items-center justify-start space-x-1 transition-all hover:scale-105 lg:hover:scale-100">
//             <Link
//               href={`/merchandise`}
//               className="flex items-center justify-center"
//             >
//               <BackIcon className="h-5 w-5 sm:h-8 sm:w-8 md:h-10 md:w-10" />
//             </Link>
//             <Link
//               href={"/merchandise"}
//               className="text-[1rem] text-heroMiddle sm:text-lg md:text-2xl"
//             >
//               ย้อนกลับ
//             </Link>
//           </section>
//           <div className="mt-2">
//             <EmblaCarousel options={OPTIONS} imgs={imgs} />
//           </div>
//         </div>

//         <div className="flex w-full flex-col items-start justify-center space-y-2 text-greenText">
//           <div className="flex w-full items-start justify-between">
//             <div className="flex flex-col items-start justify-center">
//               <h1 className="text-xl font-bold md:text-3xl lg:text-4xl">
//                 {name}
//               </h1>
//               <h2 className="text-[1rem] font-semibold md:text-xl lg:text-2xl">
//                 {eng}
//               </h2>
//             </div>
//             <h4 className="text-xl md:text-3xl lg:text-4xl">{price} THB</h4>
//           </div>
//           <p className="text-xs md:text-lg lg:text-xl">{desc}</p>
//         </div>

//         <div className="lg:mb-10 flex w-full flex-col items-start justify-center space-y-4 md:items-center">
//           <h2 className="text-greenText md:text-2xl lg:text-3xl">
//             Official Merchandise
//           </h2>
//           <div className="flex w-full items-center justify-around space-x-2 md:justify-center md:space-x-4 lg:space-x-8">
//             {merch.map((p, index) => (
//               <Link
//                 href={`/merchandise/${p}`}
//                 className="text-center lg:hidden"
//                 key={index}
//               >
//                 <div className="relative flex flex-col items-center justify-center">
//                   <Image
//                     src={`/assets/merch/${p}.jpg`}
//                     alt={p}
//                     width={1000}
//                     height={500}
//                     className="h-40 w-28 rounded-xl md:h-[18rem] md:w-44"
//                   />
//                   <p className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#1A8B6D] to-[#147568] px-2 py-1 text-[0.5rem] text-white hover:underline md:px-3 md:py-2 md:text-xs">
//                     ดูเพิ่มเติม
//                   </p>
//                 </div>
//                 {/* <p className="text-xs text-greenText mt-1">{p.th}</p> */}
//               </Link>
//             ))}

//             {/* for larger scene */}

//             {list.map((p) => (
//               <Link
//                 href={`/merchandise/${p}`}
//                 className="text-center hidden lg:block hover:scale-105 transition-all duration-300 ease-in-out"
//               >
//                 <div className="relative flex flex-col items-center justify-center">
//                   <Image
//                     src={`/assets/merch/${p}.jpg`}
//                     alt={p}
//                     width={500}
//                     height={500}
//                     className="h-40 w-28 rounded-xl md:h-[14rem] md:w-44"
//                   />
//                   <p className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#1A8B6D] to-[#147568] px-2 py-1 text-[0.5rem] text-white hover:underline hover:from-white hover:to-white  hover:text-heroMiddle transition-all md:px-3 md:py-2 md:text-xs">
//                     ดูเพิ่มเติม
//                   </p>
//                 </div>
//                 {/* <p className="text-xs text-greenText mt-1">{p.th}</p> */}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default General;
