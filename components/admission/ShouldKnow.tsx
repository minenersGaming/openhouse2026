import LocationIcon from "@/vector/admission/LocationIcon";
import Allowed from "@/vector/admission/Allowed";
import Prohibited from "@/vector/admission/Prohibited";
import Card from "./Card";
import OneIcon from "./OneIcon";

const ShouldKnow = () => {
  return (
    <>
      <Card
        header=""
        element={
          <OneIcon
            icon={<LocationIcon className="w-5 mr-3 mt-1" />}
            header="สถานที่สอบ"
            description="อิมแพ็ค เมืองทองธานี จ.นนทบุรี"
            list={[]}
          />
        }
      />
      <Card
        header=""
        element={
          <>
            <OneIcon
              icon={<Allowed className="w-5 mr-3 mt-1" />}
              header="สิ่งที่สามารถเข้าห้องสอบได้"
              description=""
              list={[
                "บัตรประจำตัวผู้สอบ",
                "บัตรประจำตัวประชาชน",
                "ดินสอ 2B",
                "ยางลบ",
                "กบเหลาดินสอ",
                "ปากกาสีน้ำเงิน",
                "เสื้อกันหนาว",
                "นาฬิกาเข็ม",
                "หน้ากากอนามัย",
              ]}
            />
            <OneIcon
              icon={<Prohibited className="w-5 mr-3 mt-1" />}
              header="ตัวอย่างสิ่งที่ไม่สามารถเข้าห้องสอบได้"
              description="สิ่งของนอกเหนือจากที่กล่าวไปข้างต้น ไม่สามารถนำเข้าห้องสอบได้ เช่น"
              list={[
                "น้ำยาลบคำผิด",
                "โทรศัพท์",
                "อาหาร",
                "น้ำดื่ม",
                "ถุงพลาสติก",
                "วงเวียน",
                "ไม้บรรทัด",
                "กระดาษทิชชู่",
                "ปากกาสีอื่น ๆ นอกจากสีน้ำเงิน",
                "หมวก",
                "แว่นตากันแดด",
                "หน้ากากผ้าลวดลาย",
                "ผ้าห่ม",
                "ผ้าพันคอ",
                "นาฬิกาปลุก",
                "เอกสารอื่น ๆ นอกจากบัตรประจำตัวสอบ",
              ]}
            />
          </>
        }
      />
    </>
  );
};
export default ShouldKnow;
