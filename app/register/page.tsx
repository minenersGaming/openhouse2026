"use client";

import RegisterBgmd from "@/vector/register/RegisterBgmd";
import RegisterBgsm from "@/vector/register/RegisterBgsm";
import { useFormik, Field } from "formik";
import Link from "next/link";

const css = {
  checkBoxLabel:
    "border flex items-center gap-2 text-white font-inter text-[15.882px] font-medium leading-[22.689px]",
  checkBox:
    " flex appearance-none w-[18.151px] h-[18.151px] shrink-0 rounded-[18.151px] border-[1.134px] border-[#D1D5DB] bg-white checked:bg-[#3450B0] checked:border-[#3450B0] checked:after:content-[''] checked:after:block checked:after:w-[8px] checked:after:h-[8px] checked:after:rounded-full checked:after:bg-white checked:after:mx-auto checked:after:my-auto items-center justify-center cursor-pointer",
  squreCheckBox:
    " w-[20.06px] h-[20.06px] shrink-0 rounded-[5.015px] border-[1.254px] border-gray-300 bg-white",
  squreLabel:
    " self-stretch text-white font-['Noto_Sans_Thai'] text-[17.553px] font-medium leading-[25.075px]",
};
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
  { label: "อื่น ๆ โปรดระบุ:", value: "อื่นๆ :" },
];
interface RegisterFormValues {
  username: string;
  fullname: string;
  surname: string;
  userStatus: string;
  school: string;
  grade: string;
  receivedInfo: string[]; // ✅ important
  purpose: string[];
}

const RegisterPage = () => {
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
      console.log(values);
    },
  });
  return (
    <>
      <div className="w-screen relative border-2 bg-[linear-gradient(180deg,#042284_-1.18%,#3450B0_27.05%,#457BCA_44.58%,#F3E09D_68.71%)]">
        <RegisterBgmd className="hidden z-0 md:block border-2 top-0 left-0 w-screen h-auto" />
        <RegisterBgsm className="block md:hidden absolute w-full left-0 top-0" />
        <form
          className="absolute pt-3 pb-10 z-10 w-1/2 md:w-1/2 lg:w-[40vw] top-40 left-1/2 -translate-x-1/2 rounded-[41.146px] bg-[rgba(11,24,85,0.65)]  backdrop-blur-[2.2241060733795166px]"
          onSubmit={formik.handleSubmit}
        >
          <div className="w-full flex flex-col gap-[1vw]">
            {/* header */}
            <div className=" border ">
              <p className="w-full text-[#F4F2C3] text-center font-inter text-[48.115px] font-bold">
                ลงทะเบียน
              </p>
              <div className="w-[80%] mx-auto h-[0.1vw] bg-[#F4F2C3]" />
            </div>
            {/* inside box */}
            <div className="w-[75%] border flex flex-col gap-[1.5vw] mx-auto border">
              {/* name & surname box*/}
              <div className=" flex flex-col gap-4">
                {/*username*/}
                <div>
                  <label
                    htmlFor="username"
                    className="text-white font-['Noto_Sans_Thai'] text-[15.882px] font-normal leading-[22.689px]"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    className="flex w-full items-center self-stretch px-[14.748px] py-[10.21px] rounded-[6.807px] border border-[1.134px] border-gray-300/0 bg-white shadow-[0_1.134px_2.269px_rgba(0,0,0,0.05)] outline-none focus:border-gray-300"
                  />
                </div>
                {/*fullname*/}
                <div>
                  <label
                    htmlFor="fullname"
                    className="text-white font-['Noto_Sans_Thai'] text-[15.882px] font-normal leading-[22.689px]"
                  >
                    fullname
                  </label>
                  <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    placeholder="Fullname"
                    value={formik.values.fullname}
                    onChange={formik.handleChange}
                    className="flex w-full items-center self-stretch px-[14.748px] py-[10.21px] rounded-[6.807px] border border-[1.134px] border-gray-300/0 bg-white shadow-[0_1.134px_2.269px_rgba(0,0,0,0.05)] outline-none focus:border-gray-300"
                  />
                </div>
                {/*surname*/}
                <div>
                  <label
                    htmlFor="surname"
                    className="text-white font-['Noto_Sans_Thai'] text-[15.882px] font-normal leading-[22.689px]"
                  >
                    surname
                  </label>
                  <input
                    type="text"
                    id="surname"
                    name="surname"
                    placeholder="Surname"
                    value={formik.values.surname}
                    onChange={formik.handleChange}
                    className="flex w-full items-center self-stretch px-[14.748px] py-[10.21px] rounded-[6.807px] border border-[1.134px] border-gray-300/0 bg-white shadow-[0_1.134px_2.269px_rgba(0,0,0,0.05)] outline-none focus:border-gray-300"
                  />
                </div>
                {/* white line */}
                <div className="w-full mx-auto h-[0.05vw] bg-white" />
              </div>
              {/*Userstatus*/}
              <div className="flex flex-col gap-4">
                <p className="w-[83.428px] h-[27.227px] text-white font-inter text-[18.151px] font-medium leading-[27.227px]">
                  สถานภาพ
                </p>
                <label className={css.checkBoxLabel}>
                  <input
                    type="checkbox"
                    name="statusStudent"
                    checked={formik.values.userStatus === "student"}
                    onChange={(e) =>
                      formik.setFieldValue(
                        "userStatus",
                        e.target.checked ? "student" : ""
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
                    checked={formik.values.userStatus === "parent"}
                    onChange={(e) =>
                      formik.setFieldValue(
                        "userStatus",
                        e.target.checked ? "parent" : ""
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
                    checked={formik.values.userStatus === "teacher"}
                    onChange={(e) =>
                      formik.setFieldValue(
                        "userStatus",
                        e.target.checked ? "teacher" : ""
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
                    checked={formik.values.userStatus === "other"}
                    onChange={(e) =>
                      formik.setFieldValue(
                        "userStatus",
                        e.target.checked ? "other" : ""
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
                    className="text-white font-['Noto_Sans_Thai'] text-[15.882px] font-normal leading-[22.689px]"
                  >
                    โรงเรียน
                  </label>
                  <input
                    type="text"
                    id="school"
                    name="school"
                    placeholder="school"
                    value={formik.values.school}
                    onChange={formik.handleChange}
                    className="flex w-full items-center self-stretch px-[14.748px] py-[10.21px] rounded-[6.807px] border-[1.134px] border-gray-300/0 bg-white shadow-[0_1.134px_2.269px_rgba(0,0,0,0.05)] outline-none focus:border-gray-300"
                  />
                </div>
                {/*grade*/}
                <div>
                  <label
                    htmlFor="grade"
                    className="text-white font-['Noto_Sans_Thai'] text-[15.882px] font-normal leading-[22.689px]"
                  >
                    ระดับชั้น
                  </label>
                  <input
                    type="text"
                    id="grade"
                    name="grade"
                    placeholder="grade"
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
                <p className=" w-[414.073px] text-white font-['Inter'] text-[19.546px] font-semibold leading-[27.375px]">
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
                <p className=" w-[414.073px] text-white font-['Inter'] text-[19.546px] font-semibold leading-[27.375px]">
                  จุดประสงค์ในการเข้าร่วม Triam Udom Open House (ตอบได้มากกว่า 1
                  ข้อ)
                </p>
                {purposeOptions.map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      name="purpose"
                      value={option.value}
                      checked={formik.values.purpose.includes(option.value)}
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
              {/*submit*/}
              <div>
                <div className="flex w-full justify-center items-center gap-[1.5vw] border mt-[1.5vw]">
                  <Link href="/">
                    <div className="flex w-[150.127px] h-[42.258px] px-[21.318px] py-[11.286px] justify-center items-center rounded-[45.144px] border-[1.112px] border-white shadow-[0_1.254px_2.508px_0_rgba(0,0,0,0.05)]">
                      <p className="text-white font-inter text-[17.556px] font-medium leading-[25.08px]">
                        ย้อนกลับ
                      </p>
                    </div>
                  </Link>

                  <button
                    type="submit"
                    className="flex w-[150.127px] h-[42.258px] px-[21.318px] py-[11.286px] justify-center items-center rounded-[45.144px] bg-linear-to-r from-[#E5C675] to-[#C4A063] shadow-[0_1.254px_2.508px_0_rgba(0,0,0,0.05)]"
                  >
                    <p className="text-white font-inter text-[17.556px] font-medium leading-[25.08px]">
                      ลงทะเบียน
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
