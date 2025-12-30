import SciMathIcon from "@/vector/admission/Programme/SciMathIcon";
import ArtsMathIcon from "@/vector/admission/Programme/ArtsMathIcon";
import ArtsLangIcon from "@/vector/admission/Programme/ArtsLang";

const Schedule = [
  {
    date: "25 ก.พ. 2569 - 1 มี.ค. 2569",
    event: "เปิดรับสมัคร",
    location: "ผ่านระบบรับสมัครออนไลน์ ปีการศึกษา 2569",
  },
  {
    date: "5-6 มี.ค. 2569",
    event: "ตรวจสอบเลขที่นั่งสอบ",
    location: "ผ่านระบบรับสมัครออนไลน์ ปีการศึกษา 2569",
  },
  {
    date: "7 มี.ค. 2569",
    event: "วันสอบคัดเลือก",
    location: "สนามสอบอิมแพ็ค เมืองทองธานี จ.นนทบุรี",
  },
  {
    date: "17 มี.ค. 2569",
    event: "วันประกาศผล",
    location: "สนามฟุตบอลโรงเรียนเตรียมอุดมศึกษา / งานประชาสัมพันธ์",
  },
  {
    date: "17 มี.ค. 2569",
    event: "วันรายงานตัว",
    location: "โรงเรียนเตรียมอุดมศึกษา",
  },
  {
    date: "21 มี.ค. 2569",
    event: "วันมอบตัว",
    location: "โรงเรียนเตรียมอุดมศึกษา",
  },
];
const Programme = [
  {
    Icon: <SciMathIcon className="w-9 mr-3" />,
    name: "วิทยาศาสตร์-คณิตศาสตร์",
    description: "รับ 1000 คน",
    list: [],
  },
  {
    Icon: <ArtsMathIcon className="w-9 mr-3" />,
    name: "ภาษา-คณิตศาสตร์",
    description: "รับ 120 คน",
    list: [],
  },
  {
    Icon: <ArtsLangIcon className="w-9 mr-3" />,
    name: "ภาษา-ภาษาต่างประเทศ",
    description: "รวม 6 สาย รับ 400 คน",
    list: [
      "ภาษา-ภาษาฝรั่งเศส 80 คน",
      "ภาษา-ภาษาเยอรมัน 80 คน",
      "ภาษา-ภาษาญี่ปุ่น 80 คน",
      "ภาษา-ภาษาจีน 80 คน",
      "ภาษา-ภาษาสเปน 40 คน",
      "ภาษา-ภาษาเกาหลี 40 คน",
    ],
  },
];
const Exam = [
  {
    Icon: <SciMathIcon className="w-9 mr-3" />,
    name: "วิทยาศาสตร์-คณิตศาสตร์",
    description: "สอบ 5 วิชา",
    list: ["คณิตศาสตร์", "วิทยาศาสตร์", "ภาษาไทย", "สังคมศึกษา", "ภาษาอังกฤษ"],
  },
  {
    Icon: <ArtsMathIcon className="w-9 mr-3" />,
    name: "ภาษา-คณิตศาสตร์",
    description: "สอบ 4 วิชา",
    list: [
      "คณิตศาสตร์",
      "ภาษาไทย (ฉบับที่ 1 และ 2)",
      "สังคมศึกษา",
      "ภาษาอังกฤษ",
    ],
  },
  {
    Icon: <ArtsLangIcon className="w-9 mr-3" />,
    name: "ภาษา-ภาษาต่างประเทศ",
    description: "รวม 6 สาย รับ 400 คน",
    list: [
      "ภาษาไทย (ฉบับที่ 1 และ 2)",
      "สังคมศึกษา",
      "ภาษาอังกฤษ (ฉบับที่ 1 และ 2)",
    ],
  },
];
export { Schedule, Programme, Exam };
