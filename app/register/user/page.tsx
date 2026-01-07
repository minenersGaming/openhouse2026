"use client";

import { useFormik } from "formik";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import BigRegisterBg from "@/vector/register/BigRegisterBg";
import SmallRegisterBg from "@/vector/register/SmallRegisterBg";
import { callAPI } from "@/utils/callAPI";

const receivedInfoOptions = [
  { label: "Facebook Page: Triam Udom Open House", value: "fb" },
  { label: "Instagram: @triamudom.oph / @tucmc_official", value: "ig" },
  { label: "Twitter: @triamudomoph", value: "twitter" },
  { label: "TikTok: @triamudom.oph", value: "tiktok" },
  { label: "เพจ studygram", value: "studygram" },
  { label: "นักเรียนโรงเรียนเตรียมฯ", value: "tuStudent" },
  { label: "เพื่อน", value: "friend" },
  { label: "ผู้ปกครอง", value: "parent" },
  { label: "โรงเรียน", value: "school" },
];

const purposeOptions = [
  {
    label: "หาข้อมูลการสอบเข้าโรงเรียนเตรียมอุดมศึกษา",
    value: "หาข้อมูลการสอบเข้าโรงเรียนเตรียมอุดมศึกษา",
  },
  {
    label: "เข้าชมซุ้มกิจกรรม และ กิจกรรมการแสดง",
    value: "เข้าชมซุ้มกิจกรรม และ กิจกรรมการแสดง",
  },
  {
    label: "หาข้อมูลเกี่ยวกับโรงเรียนเตรียมฯ เพื่อประกอบการตัดสินใจ",
    value: "หาข้อมูลเกี่ยวกับโรงเรียนเตรียมฯ เพื่อประกอบการตัดสินใจ",
  },
  {
    label: "หาแรงบันดาลใจในการสอบเข้าโรงเรียนเตรียมอุดมศึกษา",
    value: "หาแรงบันดาลใจในการสอบเข้าโรงเรียนเตรียมอุดมศึกษา",
  },
  {
    label: "ชมบรรยากาศโรงเรียนเตรียมอุดมศึกษา",
    value: "ชมบรรยากาศโรงเรียนเตรียมอุดมศึกษา",
  },
  { label: "อื่น ๆ โปรดระบุ:", value: "อื่นๆ:" },
];

interface RegisterFormValues {
  username: string;
  fullname: string;
  surname: string;
  userStatus: string;
  school: string;
  grade: string;
  receivedInfo: string[];
  purpose: string[];
}

const css = {
  checkBoxLabel:
    " flex items-center gap-2 text-white font-noto-sans-thai text-[15.882px] font-medium ",
  checkBox:
    " flex appearance-none w-[18.151px] h-[18.151px] shrink-0 rounded-[18.151px] border-[1.134px] border-[#D1D5DB] bg-white checked:bg-[#3450B0] checked:border-[#3450B0] checked:after:content-[''] checked:after:block checked:after:w-[8px] checked:after:h-[8px] checked:after:rounded-full checked:after:bg-white checked:after:mx-auto checked:after:my-auto items-center justify-center cursor-pointer",
  squreCheckBox:
    " w-[20.06px] h-[20.06px] shrink-0 rounded-[5.015px] border-[1.59px] border-gray-300 bg-white ",
  squreLabel:
    " self-stretch text-white font-noto-sans-thai font-medium " +
    " text-[15px] " +
    " sm:text-[17.553px]  ",
  inputBox:
    "flex w-full items-center self-stretch px-[14.748px] py-[10.21px] rounded-[6.807px] border border-gray-300/0 bg-white shadow-[0_1.134px_2.269px_rgba(0,0,0,0.05)] outline-none focus:border-gray-300 ",
  h1: " text-[48.115px] font-noto-sans-thai ",
  h2:
    " text-white font-noto-sans-thai font-semibold " +
    " w-[320px] text-[17px] " +
    " sm:w-[414.073px] sm:text-[19.546px] ",
  h3: "",
  h4: " text-[15.882px] text-white font-noto-sans-thai font-normal ",
  p: "",
};

const container = {
  bg:
    " z-0 left-0 top-0 " + " md:hidden " + " h-480 w-auto sm:w-full sm:h-auto ",
  bgxl:
    " z-0 left-0 top-0 " +
    " hidden md:block " +
    " h-480 w-auto xl:w-full xl:h-auto ",
  outerBox: "",
  innerBox: "",
};
async function registerUser(values: RegisterFormValues) {
  const response = await callAPI("/register", {
    method: "POST",
    data: values,
  });

  if (response.error) {
    throw new Error(response.error);
  }

  return response.data;
}
const RegisterPage = () => {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      toast.success("ลงทะเบียนสำเร็จ");
      router.push("/ticket");
    },
    onError: (error: Error) => {
      toast.error(error.message || "เกิดข้อผิดพลาด กรุณาติดต่อกช.");
    },
  });

  const formik = useFormik<RegisterFormValues>({
    initialValues: {
      username: "",
      fullname: "",
      surname: "",
      userStatus: "",
      school: "",
      grade: "",
      receivedInfo: [],
      purpose: [],
    },
    onSubmit: (values) => {
      mutation.mutate(values);
    },
  });
  const handleSignOut = async () => {
    await signOut();
    window.location.href = "/";
  };
  return (
    <>
      <div className="w-screen relative overflow-hidden">
        <SmallRegisterBg className={container.bg} />
        <BigRegisterBg className={container.bgxl} />
        <form
          className="absolute pt-3 pb-10 z-10 mt-5 sm:mt-[8vw] md:mt-0 w-[95vw] sm:w-[80vw] md:w-[60vw] lg:w-[40vw] lg:min-w-150 top-[10vw] left-1/2 -translate-x-1/2 rounded-[41.146px] bg-[rgba(11,24,85,0.65)]  backdrop-blur-[2.2241060733795166px]"
          onSubmit={formik.handleSubmit}
        >
          <div className="w-full flex flex-col gap-[1vw]">
            {/* header */}
            <div className=" ">
              <p
                className={
                  "w-full text-[#F4F2C3] text-center font-bold" + css.h1
                }
              >
                ลงทะเบียน
              </p>
              <div className="w-[80%] mx-auto h-[0.1vw] bg-[#F4F2C3]" />
            </div>
            {/* inside box */}
            <div className="w-[75%] flex flex-col gap-[1.5vw] mx-auto">
              {/* name & surname box*/}
              <div className=" flex flex-col gap-4">
                {/*username*/}
                <div>
                  <label htmlFor="username" className={css.h4}>
                    ชื่อผู้ใช้ (username)
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="ความยาวไม่เกิน 32 ตัวอักษร"
                    maxLength={32}
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    className={css.inputBox}
                  />
                </div>
                {/*fullname*/}
                <div>
                  <label htmlFor="fullname" className={css.h4}>
                    ชื่อ (ไม่ต้องมีคำนำหน้า)
                  </label>
                  <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    placeholder="เรียนเด่น"
                    value={formik.values.fullname}
                    onChange={formik.handleChange}
                    className={css.inputBox}
                  />
                </div>
                {/*surname*/}
                <div>
                  <label htmlFor="surname" className={css.h4}>
                    นามสกุล
                  </label>
                  <input
                    type="text"
                    id="surname"
                    name="surname"
                    placeholder="เล่นดี"
                    value={formik.values.surname}
                    onChange={formik.handleChange}
                    className={css.inputBox}
                  />
                </div>
                {/* white line */}
                <div className="w-full mx-auto h-[0.05vw] bg-white" />
              </div>
              {/*Userstatus*/}
              <div className="flex flex-col gap-4">
                <p className="w-[83.428px] h-[27.227px] text-white font-noto-sans-thai text-[18.151px] font-medium ">
                  สถานภาพ
                </p>
                <label className={css.checkBoxLabel}>
                  <input
                    type="checkbox"
                    name="statusStudent"
                    checked={formik.values.userStatus === "นักเรียน"}
                    onChange={(e) =>
                      formik.setFieldValue(
                        "userStatus",
                        e.target.checked ? "นักเรียน" : ""
                      )
                    }
                    className={css.checkBox}
                  />
                  นักเรียน
                </label>
                <label className={css.checkBoxLabel}>
                  <input
                    type="checkbox"
                    name="statusParent"
                    checked={formik.values.userStatus === "ผู้ปกครอง"}
                    onChange={(e) =>
                      formik.setFieldValue(
                        "userStatus",
                        e.target.checked ? "ผู้ปกครอง" : ""
                      )
                    }
                    className={css.checkBox}
                  />
                  ผู้ปกครอง
                </label>
                <label className={css.checkBoxLabel}>
                  <input
                    type="checkbox"
                    name="statusTeacher"
                    checked={formik.values.userStatus === "ครู"}
                    onChange={(e) =>
                      formik.setFieldValue(
                        "userStatus",
                        e.target.checked ? "ครู" : ""
                      )
                    }
                    className={css.checkBox}
                  />
                  ครู/บุคลากรโรงเรียน
                </label>
                <label className={css.checkBoxLabel}>
                  <input
                    type="checkbox"
                    name="statusOther"
                    checked={formik.values.userStatus === "อื่นๆ"}
                    onChange={(e) =>
                      formik.setFieldValue(
                        "userStatus",
                        e.target.checked ? "อื่นๆ" : ""
                      )
                    }
                    className={css.checkBox}
                  />
                  อื่นๆ
                </label>
                {/* white line */}
                <div className="w-full mx-auto h-[0.05vw] bg-white" />
              </div>
              {/* school & grade*/}
              <div className="flex flex-col gap-4">
                {/*school*/}
                <div>
                  <label
                    htmlFor="school"
                    className="text-white font-['Noto_Sans_Thai'] text-[15.882px] font-normal "
                  >
                    โรงเรียน
                  </label>
                  <input
                    type="text"
                    id="school"
                    name="school"
                    placeholder="โรงเรียนเตรียมอุดมศึกษา"
                    value={formik.values.school}
                    onChange={formik.handleChange}
                    className="flex w-full items-center self-stretch px-[14.748px] py-[10.21px] rounded-[6.807px] border-[1.134px] border-gray-300/0 bg-white shadow-[0_1.134px_2.269px_rgba(0,0,0,0.05)] outline-none focus:border-gray-300"
                  />
                </div>
                {/*grade*/}
                <div>
                  <label
                    htmlFor="grade"
                    className="text-white font-['Noto_Sans_Thai'] text-[15.882px] font-normal "
                  >
                    ระดับชั้น
                  </label>
                  <input
                    type="text"
                    id="grade"
                    name="grade"
                    placeholder="ม.3"
                    value={formik.values.grade}
                    onChange={formik.handleChange}
                    className="flex w-full items-center self-stretch px-[14.748px] py-[10.21px] rounded-[6.807px] border-[1.134px] border-gray-300/0 bg-white shadow-[0_1.134px_2.269px_rgba(0,0,0,0.05)] outline-none focus:border-gray-300"
                  />
                </div>
                {/* white line */}
                <div className="w-full mx-auto h-[0.05vw] bg-white" />
              </div>
              {/* received infomation */}
              <div className="flex flex-col gap-4">
                <p className={css.h2}>
                  ได้รับข่าวสารของ Triam Udom Open House จากที่ใดบ้าง
                  (ตอบได้มากกว่า 1 ข้อ)
                </p>
                {receivedInfoOptions.map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      name="receivedInfo"
                      value={option.value}
                      checked={formik.values.receivedInfo.includes(
                        option.value
                      )}
                      onChange={(e) => {
                        if (e.target.checked) {
                          formik.setFieldValue("receivedInfo", [
                            ...formik.values.receivedInfo,
                            option.value,
                          ]);
                        } else {
                          formik.setFieldValue(
                            "receivedInfo",
                            formik.values.receivedInfo.filter(
                              (v) => v !== option.value
                            )
                          );
                        }
                      }}
                      className={css.squreCheckBox}
                    />

                    <span className={css.squreLabel}>{option.label}</span>
                  </label>
                ))}
                {/* white line */}
                <div className="w-full mx-auto h-[0.05vw] bg-white" />
              </div>
              {/*purpose*/}
              <div className="flex flex-col gap-4">
                <p className={css.h2}>
                  จุดประสงค์ในการเข้าร่วม Triam Udom Open House (ตอบได้มากกว่า 1
                  ข้อ)
                </p>
                {purposeOptions.map((option) => (
                  <div key={option.value}>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="purpose"
                        value={option.value}
                        checked={formik.values.purpose.some((p) =>
                          p.startsWith(option.value)
                        )}
                        onChange={(e) => {
                          if (e.target.checked) {
                            formik.setFieldValue("purpose", [
                              ...formik.values.purpose,
                              option.value,
                            ]);
                          } else {
                            formik.setFieldValue(
                              "purpose",
                              formik.values.purpose.filter(
                                (v) => !v.startsWith(option.value)
                              )
                            );
                          }
                        }}
                        className={css.squreCheckBox}
                      />
                      <span className={css.squreLabel}>{option.label}</span>

                      {/* Conditional input field for "อื่นๆ โปรดระบุ:" - inline */}
                      {option.value === "อื่นๆ:" &&
                        formik.values.purpose.some((p) =>
                          p.startsWith("อื่นๆ:")
                        ) && (
                          <input
                            type="text"
                            placeholder="โปรดระบุ..."
                            value={
                              formik.values.purpose
                                .find((p) => p.startsWith("อื่นๆ:"))
                                ?.replace("อื่นๆ:", "") || ""
                            }
                            onChange={(e) => {
                              const filteredPurpose =
                                formik.values.purpose.filter(
                                  (v) => !v.startsWith("อื่นๆ:")
                                );
                              formik.setFieldValue("purpose", [
                                ...filteredPurpose,
                                `อื่นๆ:${e.target.value}`,
                              ]);
                            }}
                            className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-white/50 ml-2"
                          />
                        )}
                    </label>
                  </div>
                ))}
                {/* white line */}
                <div className="w-full mx-auto h-[0.05vw] bg-white" />
              </div>
              {/*submit*/}
              <div>
                <div className="flex w-full justify-center items-center gap-[1.5vw] mt-[1.5vw]">
                  <div
                    onClick={handleSignOut}
                    className="flex w-[150.127px] h-[42.258px] px-[21.318px] py-[11.286px] justify-center items-center rounded-[45.144px] border-[1.112px] border-white shadow-[0_1.254px_2.508px_0_rgba(0,0,0,0.05)]"
                  >
                    <p className="text-white font-inter text-[17.556px] font-medium ">
                      ย้อนกลับ
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={mutation.isPending}
                    className="flex w-[150.127px] h-[42.258px] px-[21.318px] py-[11.286px] justify-center items-center rounded-[45.144px] bg-linear-to-r from-[#E5C675] to-[#C4A063] shadow-[0_1.254px_2.508px_0_rgba(0,0,0,0.05)]"
                  >
                    <p className="text-white font-noto-sans-thai text-[17.556px] font-medium ">
                      {mutation.isPending ? "กำลังลงทะเบียน..." : "ลงทะเบียน"}
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default RegisterPage;
