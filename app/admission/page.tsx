import LinkIcon from "@/vector/admission/LinkIcon";
import Card from "@/components/admission/Card";
import CommonText from "@/components/admission/CommonText";
import OneIcon from "@/components/admission/OneIcon";
import ShouldKnow from "@/components/admission/ShouldKnow";
import { Schedule, Programme, Exam } from "@/constant/admission";

const Style = { IdealFlex: "flex flex-col items-center justify-center py-5" };

const Admission = () => {
  return (
    <main className="flex flex-col justify-evenly bg-linear-to-tr from-[#042284] via-[#3450B0] to-[#457BCA]">
      <div className="px-8 py-20 flex  flex-col">
        <div className={Style.IdealFlex}>
          <p className="font-bold text-white text-4xl lg:text-7xl text-center">
            การสอบเข้า ม.4
          </p>
          <p className=" text-white text-xs lg:text-xl text-center">
            โรงเรียนเตรียมอุดมศึกษา ปีการศึกษา 2569
          </p>
        </div>
        <div className={Style.IdealFlex}>
          <p className="font-bold text-center text-[#F4F2C3] text-2xl lg:text-3xl">
            เว็บระบบรับสมัครออนไลน์ ปีการศึกษา 2569
          </p>
          <p className=" text-center text-[#F4F2C3] text-sm lg:text-md pb-3">
            สามารถกดเข้าสู่เว็บได้จากปุ่มด้านล่างนี้
          </p>
          <a
            href="https://admission.triamudom.ac.th/"
            target="_blank"
            className="hover:scale-105 transition-all cursor-pointer flex flex-row bg-linear-to-r from-[#F3E09D] to-[#F4F2C4] p-2 rounded-[20px]"
          >
            <LinkIcon className="w-5" />
            <p className="font-bold lg:text-xl bg-linear-to-r from-[#042284] to-[#3450B0] bg-clip-text  text-transparent px-2">
              TRIAMUDOM ADMISSION
            </p>
          </a>
        </div>
        <div className={Style.IdealFlex}>
          <p className="font-bold text-[#F4F2C3] text-3xl lg:text-5xl text-center">
            กำหนดการสอบ
          </p>
          <p className=" text-[#F4F2C3] text-md lg:text-xl text-center">
            (สอบคัดเลือกทั่วไป)
          </p>
          {Schedule.map((schedule, index) => (
            <Card
              key={index}
              header={schedule.date}
              element={
                <CommonText
                  header={schedule.event}
                  element={schedule.location}
                />
              }
            />
          ))}
        </div>
        <div className={Style.IdealFlex}>
          <p className="font-bold text-[#F4F2C3] text-3xl lg:text-5xl text-center">
            สายการเรียน
          </p>
          {Programme.map((programme, index) => (
            <Card
              key={index}
              header=""
              element={
                <OneIcon
                  key={index}
                  header={programme.name}
                  icon={programme.Icon}
                  description={programme.description}
                  list={programme.list}
                />
              }
            />
          ))}
        </div>
        <div className={Style.IdealFlex}>
          <p className="font-bold text-[#F4F2C3] text-3xl  lg:text-5xl text-center">
            วิชาที่ใช้สอบ
          </p>
          {Exam.map((exam, index) => (
            <Card
              key={index}
              header=""
              element={
                <OneIcon
                  key={index}
                  header={exam.name}
                  icon={exam.Icon}
                  description={exam.description}
                  list={exam.list}
                />
              }
            />
          ))}
        </div>
        <div className={Style.IdealFlex}>
          <p className="font-bold text-[#F4F2C3] text-3xl lg:text-5xl text-center">
            ข้อควรรู้
          </p>
          <ShouldKnow />
        </div>
      </div>
    </main>
  );
};

export default Admission;
