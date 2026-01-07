import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/staff",
          "/ticket/",
          "/register/user",
        ],
      },
    ],
    sitemap: "https://openhouse.triamudom.ac.th/sitemap.xml",
  };
}
