const valid = ["0", "1", "2", "3"];

const SampleImg =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOeKKhUS-RWX12esBlBAtUvR38Uo6ZLbOmAg&s";
const Samp2 =
  "https://images.emojiterra.com/google/android-12l/512px/1f62d.png";

const ImgData = [
  [SampleImg, Samp2, SampleImg],
  [Samp2, SampleImg, SampleImg],
  [SampleImg, SampleImg, Samp2],
  [SampleImg, SampleImg, Samp2],
];

const TextData = [
  [
    "KEYCHAIN",
    "",
    "67",
    'พวงกุญแจ The Castle of Countless Legacies  ปราสาทแห่งนี้ไม่ใช่เพียงสถานที่เก็บเรื่องราว แต่ยังเป็น "สิ่งเตือนใจ" ซึ่งสามารถห้อยติดตัวไปได้ทุกที่ !',
  ],
  [
    "ANSWER BOOK",
    "",
    "67",
    "สมุดฝนคำตอบที่จะช่วยพาคุณไปสู่เป้าหมายที่ตั้งไว้ ! ซ้อมมือก่อนลงสนามจริงกับ Answer Sheet และวางแผนอย่างเป็นระบบลงใน Planner",
  ],
  [
    "POSTCARD",
    "",
    "67",
    '3 ลาย ที่มาในธีม "ปราสาทร้อยเรื่องราว" ปราสาทที่ดำรงมากว่า 88 ปี และเรียงร้อยเรื่องราวล้ำค่าไว้ ',
  ],
  [
    "STICKER",
    "",
    "67",
    "ลายสิ่งของและน้องแมวในปราสาทร้อยเรื่องราว ที่นอกจากจะน่ารักแล้ว ยังเล่นแสงอีกด้วย !",
  ],
];

const RecommendBar = [
  [1, 2, 3],
  [0, 2, 3],
  [0, 1, 3],
  [0, 1, 2],
];
export default { valid, ImgData, TextData, RecommendBar };
