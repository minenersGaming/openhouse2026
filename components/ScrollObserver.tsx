"use client";
import { useEffect } from "react";

export default function ScrollObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    Array.from(
      document.querySelectorAll(".fade-in-scroll, .drop-down-scroll")
    ).forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
