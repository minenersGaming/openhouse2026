"use client";

import RegisterBgmd from "@/vector/register/RegisterBgmd";
import RegisterBgsm from "@/vector/register/RegisterBgsm";
import { useFormik } from "formik";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const css = {
  checkBoxLabel:
    " flex items-center gap-2 text-white font-inter text-[15.882px] font-medium leading-[22.689px]",
  checkBox:
    " flex appearance-none w-[18.151px] h-[18.151px] shrink-0 rounded-[18.151px] border-[1.134px] border-[#D1D5DB] bg-white checked:bg-[#3450B0] checked:border-[#3450B0] checked:after:content-[''] checked:after:block checked:after:w-[8px] checked:after:h-[8px] checked:after:rounded-full checked:after:bg-white checked:after:mx-auto checked:after:my-auto items-center justify-center cursor-pointer",
  squreCheckBox:
    " w-[20.06px] h-[20.06px] shrink-0 rounded-[5.015px] border-[1.254px] border-gray-300 bg-white",
  squreLabel:
    " self-stretch text-white font-['Noto_Sans_Thai'] text-[17.553px] font-medium leading-[25.075px]",
};

interface RegisterFormValues {
  passworddd: string;
}
async function registerUser(values: RegisterFormValues) {
  const res = await fetch("/api/staff", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || "Failed to register");
  }

  return res.json();
}
const StaffPage = () => {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      toast.success("Staff Transformation Successful!");
      router.push("/");
    },
    onError: (error: Error) => {
      toast.error(error.message || "Something went wrong");
    },
  });
  const formik = useFormik<RegisterFormValues>({
    initialValues: {
      passworddd: "",
    },
    onSubmit: (values) => {
      console.log(values);
      mutation.mutate(values);
    },
  });
  return (
    <>
      <div className="w-screen relative bg-[linear-gradient(180deg,#042284_-1.18%,#3450B0_27.05%,#457BCA_44.58%,#F3E09D_68.71%)]">
        <RegisterBgmd className="hidden z-0 md:block top-0 left-0 w-screen h-auto" />
        <RegisterBgsm className="block z-0 md:hidden w-full h-auto left-0 top-0" />
        <form
          className="absolute pt-3 pb-10 z-10 w-1/2 md:w-[60vw] lg:w-[40vw] top-[10vw] left-1/2 -translate-x-1/2 rounded-[41.146px] bg-[rgba(11,24,85,0.65)]  backdrop-blur-[2.2241060733795166px]"
          onSubmit={formik.handleSubmit}
        >
          <div className="w-full flex flex-col gap-[1vw]">
            {/* header */}
            <div className=" ">
              <p className="w-full text-[#F4F2C3] text-center font-inter text-[48.115px] font-bold">
                Staff Secret Code Area
              </p>
              <div className="w-[80%] mx-auto h-[0.1vw] bg-[#F4F2C3]" />
            </div>
            {/* inside box */}
            <div className="w-[75%] flex flex-col gap-[1.5vw] mx-auto">
              {/* name & surname box*/}
              <div className=" flex flex-col gap-4">
                {/*username*/}
                <div>
                  <label
                    htmlFor="username"
                    className="text-white font-['Noto_Sans_Thai'] text-[15.882px] font-normal leading-[22.689px]"
                  >
                    
                  </label>
                  <input
                    type="text"
                    id="passworddd"
                    name="passworddd"
                    placeholder="Secret Code Here"
                    maxLength={120}
                    value={formik.values.passworddd}
                    onChange={formik.handleChange}
                    className="flex w-full items-center self-stretch px-[14.748px] py-[10.21px] rounded-[6.807px] border border-gray-300/0 bg-white shadow-[0_1.134px_2.269px_rgba(0,0,0,0.05)] outline-none focus:border-gray-300"
                  />
                </div>
 
                <button
                  type="submit"
                  disabled={mutation.isPending}
                  className="flex w-[150.127px] h-[42.258px] px-[21.318px] py-[11.286px] justify-center items-center rounded-[45.144px] bg-linear-to-r from-[#E5C675] to-[#C4A063] shadow-[0_1.254px_2.508px_0_rgba(0,0,0,0.05)]"
                >
                  <p className="text-white font-inter text-[17.556px] font-medium leading-[25.08px]">
                    {mutation.isPending ? "Checking Password..." : "Enter"}
                  </p>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default StaffPage;
