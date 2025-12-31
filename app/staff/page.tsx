"use client";

import { useEffect, useRef } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { useRouter } from "next/navigation";

export default function ScanPage() {
  const router = useRouter();
  const qrRef = useRef<Html5Qrcode | null>(null);

  useEffect(() => {
    const qr = new Html5Qrcode("qr-reader");
    qrRef.current = qr;

    qr.start(
      { facingMode: "environment" },
      {
        fps: 10,
        qrbox: (w, h) => {
          const size = Math.min(w, h) * 0.65;
          return { width: size, height: size };
        },
      },
      (decodedText) => {
        qr.stop().then(() => {
          router.push(decodedText);
        });
      }
    );

    return () => {
      if (qrRef.current?.isScanning) {
        qrRef.current.stop().catch(() => {});
      }
    };
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-xl text-white font-semibold">Scan QR Code</h1>

      <div
        id="qr-reader"
        className="w-[300px] aspect-square rounded-xl overflow-hidden bg-black"
      />
    </div>
  );
}
