// "use client";

// import { useSession } from "@/lib/auth-client";
// import type { Session } from "@/lib/auth-type";
// import { useRouter } from "next/navigation";

// const StaffButton = () => {
//   const router = useRouter(); // Fixed: should be useRouter() with parentheses

//   const { data: session, isPending } = useSession() as {
//     data: Session | null;
//     isPending: boolean;
//   };

//   if (isPending) return null; // Fixed: return null instead of empty return

//   // Not logged in or not staff
//   if (!session || !session.user.isStaff) return null; // Fixed: return null

//   return (
//     <div
//       onClick={() => router.push("/checkin")} // Fixed: wrap in arrow function
//       className="absolute top-20 right-10 rounded-full bg-amber-400 shadow-xl p-4 text-[20px] cursor-pointer"
//     >
//       Staff
//     </div>
//   );
// };

// export default StaffButton;
