import { signIn } from "@/lib/auth-client";

export default function SignInButton() {
  const handleLogin = async () => {
    await signIn.social({
      provider: "google",
      callbackURL: "/register",
    });
  };
    return (
        <button onClick={handleLogin} className="bg-linear-to-r from-[#F3E19D] via-[#F4F2C4] to-[#E6C674] text-[#062078] rounded-full px-3 py-1 lg:px-5 lg:py-1.5 lg:text-lg text-center cursor-pointer mt-2 font-bold hover:scale-110 transition-all">
            เข้าสู่ระบบ
        </button>
    );


}