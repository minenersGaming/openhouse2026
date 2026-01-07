import MapBg from "@/vector/map/MapBg";
import Toilet from "@/vector/map/toilet";
import B1 from "@/vector/map/building/B1";
import B2 from "@/vector/map/building/ฺB2";
import BArt from "@/vector/map/building/BArt";
import B3 from "@/vector/map/building/ฺB3";
import B8 from "@/vector/map/building/ฺB8";
import B72 from "@/vector/map/building/B72";
import B9 from "@/vector/map/building/ฺB9";
import B50 from "@/vector/map/building/B50";
import B55 from "@/vector/map/building/B55";
import B80 from "@/vector/map/building/B80";
import B81 from "@/vector/map/building/ฺB81";
import BRung from "@/vector/map/building/BRung";
import OuterOrg from "@/vector/map/OuterOrg";
import Kubua from "@/vector/map/other/kubua";
import Cafeteria1 from "@/vector/map/other/Cafeteria1";
import Plant from "@/vector/map/other/plant";
import B60 from "@/vector/map/building/B60";
import PE from "@/vector/map/other/PE";
import Lan70 from "@/vector/map/other/lan70";
import LanBanYen from "@/vector/map/other/lanbanyen";
import TennisCourt from "@/vector/map/other/TennisCourt";
import BasketBallCourt from "@/vector/map/other/BasketBallCourt";
import Football from "@/vector/map/other/Football";
import VolleyBall from "@/vector/map/other/volleyball";
import Auditorium from "@/vector/map/other/auditorium";
import P1 from "@/vector/map/programs/P1";
import P2 from "@/vector/map/programs/P2";
import P3 from "@/vector/map/programs/P3";
import P4 from "@/vector/map/programs/P4";
import P5 from "@/vector/map/programs/P5";
import P6 from "@/vector/map/programs/P6";
import P7 from "@/vector/map/programs/P7";
import P8 from "@/vector/map/programs/P8";
import G9 from "@/vector/map/gifted/G9";
import G10 from "@/vector/map/gifted/G10";
import G11 from "@/vector/map/gifted/G11";
import G12 from "@/vector/map/gifted/G12";
import C13 from "@/vector/map/clubs/C13";
import C14 from "@/vector/map/clubs/C14";
import C15 from "@/vector/map/clubs/C15";
import C16 from "@/vector/map/clubs/C16";
import C17 from "@/vector/map/clubs/C17";
import C18 from "@/vector/map/clubs/C18";
import C19 from "@/vector/map/clubs/C19";
import C20 from "@/vector/map/clubs/C20";
import C21 from "@/vector/map/clubs/C21";
import C22 from "@/vector/map/clubs/C22";
import C23 from "@/vector/map/clubs/C23";
import C24 from "@/vector/map/clubs/C24";
import C25 from "@/vector/map/clubs/C25";
import C26 from "@/vector/map/clubs/C26";
import C27 from "@/vector/map/clubs/C27";
import C28 from "@/vector/map/clubs/C28";
import C29 from "@/vector/map/clubs/C29";
import C30 from "@/vector/map/clubs/C30";
import C31 from "@/vector/map/clubs/C31";
import C32 from "@/vector/map/clubs/C32";
import C33 from "@/vector/map/clubs/C33";
import C34 from "@/vector/map/clubs/C34";
import C35 from "@/vector/map/clubs/C35";
import Library from "@/vector/map/clubs/Library";
import C36 from "@/vector/map/clubs/C36";
import C37 from "@/vector/map/clubs/C37";
import C38 from "@/vector/map/clubs/C38";
import C39 from "@/vector/map/clubs/C39";
import C40 from "@/vector/map/clubs/C40";
import C41 from "@/vector/map/clubs/C41";
import C42 from "@/vector/map/clubs/C42";
import C43 from "@/vector/map/clubs/C43";
import C44 from "@/vector/map/clubs/C44";
import C45 from "@/vector/map/clubs/C45";
import C46 from "@/vector/map/clubs/C46";
import C47 from "@/vector/map/clubs/C47";
import C48 from "@/vector/map/clubs/C48";
import C49 from "@/vector/map/clubs/C49";
import C50 from "@/vector/map/clubs/C50";
import C51 from "@/vector/map/clubs/C51";
import C52 from "@/vector/map/clubs/C52";
import C53 from "@/vector/map/clubs/C53";
import O54 from "@/vector/map/organization/O54";
import O55 from "@/vector/map/organization/O55";
import O56 from "@/vector/map/organization/O56";
import O57 from "@/vector/map/organization/O57";
import O58 from "@/vector/map/organization/O58";
import O59 from "@/vector/map/organization/O59";
import O60 from "@/vector/map/organization/O60";
import O61 from "@/vector/map/organization/O61";
import O62 from "@/vector/map/organization/O62";
import O63 from "@/vector/map/organization/O63";
import C54 from "@/vector/map/clubs/C54";
import O64 from "@/vector/map/organization/O64";

export type MapItem = {
  element: React.ReactElement;
  keyword: string[];
  type: string;
};

export const mapItems: MapItem[] = [
  {
    element: <MapBg className="w-full h-full" />,
    keyword: [" "],
    type: "others",
  },
  {
    element: (
      <Toilet className="absolute left-[36px] top-[210px] scale-50 origin-top-left" />
    ),
    keyword: ["toilet", "ห้องน้ำ"],
    type: "toilet",
  },
  {
    element: (
      <B1 className="absolute left-[400px] top-[690px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ตึก1", "building1"],
    type: "building",
  },
  {
    element: (
      <B2 className="absolute left-[385px] top-[425px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ตึก2", "building2"],
    type: "building",
  },
  {
    element: (
      <BArt className="absolute left-[285px] top-[706px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ตึกศิลปะ", "ArtBuilding"],
    type: "building",
  },
  {
    element: (
      <B3 className="absolute left-[400px] top-[150px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ตึก3", "building3"],
    type: "building",
  },
  {
    element: (
      <B8 className="absolute -left-[19px] top-[246px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ตึก8", "building8"],
    type: "building",
  },
  {
    element: (
      <B72 className="absolute -left-[19px] top-[332px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ตึก72", "building72"],
    type: "building",
  },
  {
    element: (
      <B9 className="absolute left-[186px] top-[475px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ตึก9", "building9"],
    type: "building",
  },
  {
    element: (
      <B50 className="absolute left-[100px] top-[70px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ตึก50ปี", "building 50 years"],
    type: "building",
  },
  {
    element: (
      <B55 className="absolute left-[155px] top-[70px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ตึก55ปี", "building 55 years"],
    type: "building",
  },
  {
    element: (
      <B80 className="absolute left-[290px] top-[460px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ตึก80ปี", "building 80 years"],
    type: "building",
  },
  {
    element: (
      <B81 className="absolute left-[235px] top-[337px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ตึก81ปี", "building 81 years"],
    type: "building",
  },
  {
    element: (
      <BRung className="absolute left-[27px] top-[70px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ตึกคุณหญิงหรั่ง", "lady rung building"],
    type: "building",
  },
  {
    element: (
      <B60 className="absolute left-[70px] top-[540px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ตึก60ปี", "60 years building"],
    type: "building",
  },
  {
    element: (
      <Kubua className="absolute left-[343px] top-[692px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["คูบัว", "pool"],
    type: "others",
  },
  {
    element: (
      <Cafeteria1 className="absolute left-[123px] top-[152px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["โดมทอง", "cafeteria", "โรงอาหาร"],
    type: "others",
  },
  {
    element: (
      <Plant className="absolute -left-[19px] top-[473px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["เรือนเกษตร", "plant"],
    type: "others",
  },
  {
    element: (
      <PE className="absolute left-[197px] top-[549px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["โรงพละ", "PE"],
    type: "others",
  },
  {
    element: (
      <Lan70 className="absolute left-[200px] top-[503px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ลาน70ปี", "lan 70 years"],
    type: "others",
  },
  {
    element: (
      <LanBanYen className="absolute left-[70px] top-[464px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ลานบานเย็น", "lan Ban Yen"],
    type: "others",
  },
  {
    element: (
      <TennisCourt className="absolute left-[360px] top-[350px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["สนามเท็นนิส", "TennisCourt"],
    type: "others",
  },
  {
    element: (
      <BasketBallCourt className="absolute left-[360px] top-[424px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["สนามบาสเก็ตบอล", "BasketBallCourt"],
    type: "others",
  },
  {
    element: (
      <Football className="absolute left-[85px] top-[155px] w-1/2 scale-70 origin-top-left" />
    ),
    keyword: ["สนามฟุตบอล", "FootBallCourt"],
    type: "others",
  },
  {
    element: (
      <OuterOrg className="absolute left-[333px] top-[410px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["องค์กรณ์ภายนอก", "outer organization"],
    type: "outer",
  },
  {
    element: (
      <VolleyBall className="absolute left-[373px] top-[540px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["สนามวอลเลย์บอล", "volleyballcourt"],
    type: "others",
  },
  {
    element: (
      <Auditorium className="absolute left-[290px] top-[595px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["หอประชุม", "Auditorium"],
    type: "others",
  },
  {
    element: (
      <P1 className="absolute left-[47px] top-[447px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["สายการเรียนภาษา-ภาษาญี่ปุ่น", "Program japanease"],
    type: "program",
  },
  {
    element: (
      <P2 className="absolute left-[61px] top-[447px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["สายการเรียนภาษา-ภาษาจีน", "Program chinease"],
    type: "program",
  },
  {
    element: (
      <P3 className="absolute left-[75px] top-[447px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["สายการเรียนภาษา-ภาษาเกาหลี", "Program korea"],
    type: "program",
  },
  {
    element: (
      <P4 className="absolute left-[89px] top-[447px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["สายการเรียนภาษา-ภาษาสเปน", "program spain"],
    type: "program",
  },
  {
    element: (
      <P5 className="absolute left-[103px] top-[447px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["สายการเรียนภาษา-ภาษาฝรั่งเศส", "program french"],
    type: "program",
  },
  {
    element: (
      <P6 className="absolute left-[117px] top-[447px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["สายการเรียนภาษา-ภาษาเยอรมัน", "program germen"],
    type: "program",
  },
  {
    element: (
      <P7 className="absolute left-[55px] top-[470px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["สายการเรียนวิทยาศาสตร์-คณิตศาสตร์", "program science math"],
    type: "program",
  },
  {
    element: (
      <P8 className="absolute left-[93px] top-[470px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["สายการเรียนภาษา-คณิตศาสตร์", "program english math"],
    type: "program",
  },
  {
    element: (
      <G9 className="absolute left-[45px] top-[500px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["Gifted Science", "กิฟต์วิทย์"],
    type: "gifted",
  },
  {
    element: (
      <G10 className="absolute left-[61px] top-[500px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["Gifted Math", "กิฟต์เลข"],
    type: "gifted",
  },
  {
    element: (
      <G11 className="absolute left-[77px] top-[500px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["Gifted English", "กิฟต์อังกฤษ"],
    type: "gifted",
  },
  {
    element: (
      <G12 className="absolute left-[380px] top-[612px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["Gifted Thai", "กิฟต์ไทย"],
    type: "gifted",
  },
  //add new
  {
    element: (
      <C13 className="absolute -left-[13px] top-[385px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ชมรม Quant การเงินเชิงปริมาณ"],
    type: "club",
  },
  {
    element: (
      <C14 className="absolute -left-[13px] top-[400px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ชมรมคณิตศาสตร์"],
    type: "club",
  },
  {
    element: (
      <C15 className="absolute left-[15px] top-[469px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ชมรมเพาะพันธุ์ไม้"],
    type: "club",
  },
  {
    element: (
      <C16 className="absolute left-[15px] top-[496px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ชมรมการ์ตูน", "cartoon"],
    type: "club",
  },
  {
    element: (
      <C17 className="absolute left-[20px] top-[447px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ชมรมสิ่งละอันพันละน้อย"],
    type: "club",
  },
  {
    element: (
      <C18 className="absolute left-[33px] top-[447px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ชมรมสิ่งละอันพันละน้อย (โครเชต์)"],
    type: "club",
  },
  {
    element: (
      <C19 className="absolute left-[94px] top-[500px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ชมรม Crossword"],
    type: "club",
  },
  {
    element: (
      <C20 className="absolute left-[113px] top-[526px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ชมรมดนตรีสากล", "music"],
    type: "club",
  },
  {
    element: (
      <C21 className="absolute left-[139px] top-[530px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ชมรมภาพยนตร์สั้นและสื่อโทรทัศน์"],
    type: "club",
  },
  {
    element: (
      <C22 className="absolute left-[139px] top-[517px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ชมรมผู้บำเพ็ญประโยชน์"],
    type: "club",
  },
  {
    element: (
      <C23 className="absolute left-[139px] top-[503px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ชมรมวรรณศิลป์ ต.อ."],
    type: "club",
  },
  {
    element: (
      <C24 className="absolute left-[139px] top-[489px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ชมรมสร้างสรรค์หนังสือ", "book"],
    type: "club",
  },
  {
    element: (
      <C25 className="absolute left-[139px] top-[475px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ชมรมนิเทศศิลป"],
    type: "club",
  },
  {
    element: (
      <C26 className="absolute left-[139px] top-[461px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ชมรมจิตวิทยา"],
    type: "club",
  },
  {
    element: (
      <C27 className="absolute left-[139px] top-[447px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ชมรมเพื่อนที่ปรึกษา"],
    type: "club",
  },
  {
    element: (
      <C28 className="absolute left-[235px] top-[353px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ชมรม MUN"],
    type: "club",
  },
  {
    element: (
      <C29 className="absolute left-[235px] top-[363px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ชมรม Debate"],
    type: "club",
  },
  {
    element: (
      <C30 className="absolute left-[235px] top-[373px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ชมรมกฎหมายน่ารู้"],
    type: "club",
  },
  {
    element: (
      <C31 className="absolute left-[235px] top-[383px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ชมรมหนังสังคม"],
    type: "club",
  },
  {
    element: (
      <C32 className="absolute left-[235px] top-[393px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ชมรมภาคีสังคม"],
    type: "club",
  },
  {
    element: (
      <C33 className="absolute left-[235px] top-[403px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ชมรมหลากทัศนะประวัติศาสตร์"],
    type: "club",
  },
  {
    element: (
      <C34 className="absolute left-[235px] top-[420px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ชมรมสรรพศึกษา"],
    type: "club",
  },
  {
    element: (
      <Library className="absolute left-[295px] top-[346px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ห้องสมุด", "library"],
    type: "building",
  },
  {
    element: (
      <C36 className="absolute left-[242px] top-[475px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ชมรมศิลปศึกษา"],
    type: "club",
  },
  {
    element: (
      <C37 className="absolute left-[242px] top-[498px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ชมรมของเล่นเพื่อการเรียนรู้"],
    type: "club",
  },
  {
    element: (
      <C38 className="absolute left-[242px] top-[510px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ชมรมวิทยาศาสตร์", "science"],
    type: "club",
  },
  {
    element: (
      <C39 className="absolute left-[242px] top-[521px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ชมรมวิจัย", "research"],
    type: "club",
  },
  {
    element: (
      <C40 className="absolute left-[242px] top-[556px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ชมรมฟิตเนส", "fitness"],
    type: "club",
  },
  {
    element: (
      <C41 className="absolute left-[269px] top-[580px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ชมรมหมากกระดาน"],
    type: "club",
  },
  {
    element: (
      <C42 className="absolute left-[282px] top-[580px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ชมรมผู้นำเยาวชนสาธารณสุข"],
    type: "club",
  },
  {
    element: (
      <C43 className="absolute left-[300px] top-[580px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ชมรมผู้นำเชียร์"],
    type: "club",
  },
  {
    element: (
      <C44 className="absolute left-[313px] top-[580px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ชมรมวาทศิลป์"],
    type: "club",
  },
  {
    element: (
      <C45 className="absolute left-[326px] top-[580px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["งานแนะแนว"],
    type: "club",
  },
  {
    element: (
      <C46 className="absolute left-[340px] top-[566px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ชมรมถ่ายภาพ"],
    type: "club",
  },
  {
    element: (
      <C47 className="absolute left-[373px] top-[598px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ชมรมภาษาไทย"],
    type: "club",
  },
  {
    element: (
      <C49 className="absolute left-[347px] top-[664px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ชมรมภาษาเกาหลี"],
    type: "club",
  },
  {
    element: (
      <C48 className="absolute left-[325px] top-[644px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ชมรมภาษาเกาหลี"],
    type: "club",
  },
  {
    element: (
      <C50 className="absolute left-[360px] top-[664px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ชมรมภาษาญี่ปุ่น"],
    type: "club",
  },
  {
    element: (
      <C51 className="absolute left-[373px] top-[664px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ชมรมภาษาจีน"],
    type: "club",
  },
  {
    element: (
      <C52 className="absolute left-[386px] top-[664px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ชมรมภาษาเยอรมัน"],
    type: "club",
  },
  {
    element: (
      <C53 className="absolute left-[399px] top-[664px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ชมรมภาษาฝรั่งเศส"],
    type: "club",
  },
  {
    element: (
      <C54 className="absolute left-[412px] top-[664px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ชมรมภาษาสเปน"],
    type: "club",
  },
  //organization
  {
    element: (
      <O55 className="absolute left-[99px] top-[526px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["กลุ่มนักเรียนอาสาพยาบาล"],
    type: "organization",
  },
  {
    element: (
      <O56 className="absolute left-[325px] top-[630px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["คณะกรรมการหนังสืออนุสรณ์"],
    type: "organization",
  },
  {
    element: (
      <O57 className="absolute left-[256px] top-[542px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["สปค.ต.อ."],
    type: "organization",
  },
  {
    element: (
      <O58 className="absolute left-[269px] top-[542px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["สนตอ."],
    type: "organization",
  },
  {
    element: (
      <O59 className="absolute left-[282px] top-[542px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["สปค.รร.ต.อ."],
    type: "organization",
  },
  {
    element: (
      <O60 className="absolute left-[300px] top-[542px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["กช.", "tucmc"],
    type: "organization",
  },
  {
    element: (
      <O61 className="absolute left-[313px] top-[542px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["กน."],
    type: "organization",
  },
  {
    element: (
      <O62 className="absolute left-[326px] top-[542px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["AIC"],
    type: "organization",
  },
  {
    element: (
      <O63 className="absolute left-[256px] top-[580px]  w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["สโมสรอาจารย์โรงเรียนฯ"],
    type: "organization",
  },
  {
    element: (
      <O64 className="absolute left-[341px] top-[579px]  w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["TUPRO"],
    type: "organization",
  },
];
