import type { Metadata } from 'next'
import favicon from '../public/favicon.ico'
import ogImage from '../public/ogImage.png'

export function getMetadata(): Metadata {
  return {
    title: {
      default: "Triam Udom Open House 2026",
      template: "%s | Triam Udom Open House 2026",
    },
    keywords: [
      "Open House", "Triam Udom", "เตรียมอุดมศึกษา", "งานนิทรรศการ", "กิจกรรม", "แนะแนวการศึกษา", "เปิดบ้านวิชาการ", "TU Open House", "เตรียมอุดม", "Triam Udom Open House 2026",
      "TU", "โรงเรียนเตรียมอุดมศึกษา", "สอบเข้า", "Open House 2026", "TU Open House 2026"
    ],
    authors: [{ name: "Triam Udom Suksa School", url: "https://triamudom.ac.th" }],
    icons: [{ rel: 'icon', url: favicon.src }],
    description:
      "88 ปีงานนิทรรศการวิชาการเตรียมอุดมศึกษา (Triam Udom Open House 2026)",
    metadataBase: new URL("https://openhouse.triamudom.ac.th"),
    openGraph: {
      title: "Triam Udom Open House 2026",
      description:
        "88 ปีงานนิทรรศการวิชาการเตรียมอุดมศึกษา (Triam Udom Open House 2026)",
      url: "https://openhouse.triamudom.ac.th",
      siteName: "Triam Udom Open House 2026",
      images: [
        {
          url: ogImage.src,
          width: ogImage.width,
          height: ogImage.height,
        }
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: 'Triam Udom Open House 2025',
      site: '@triamudomoph',
      description:
        'งานนิทรรศการประจำปีของโรงเรียนเตรียมอุดมศึกษา พบกับกิจกรรมที่น่าสนใจจากนักเรียนโรงเรียนเตรียมอุดมศึกษา อาทิ แนะแนวการศึกษาต่อ แนะนำสายการเรียน และกิจกรรมจากชมรมต่าง ๆ',
      images: [
        {
          url: ogImage.src,
          width: ogImage.width,
          height: ogImage.height,
        },
      ],
    },
  }
};
