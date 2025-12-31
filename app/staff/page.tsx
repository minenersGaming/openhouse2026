"use client";

import { useEffect } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { useRouter } from "next/navigation";

export default function ScanPage() {
  const router = useRouter();

  useEffect(() => {
    const qr = new Html5Qrcode("qr-reader");

    qr.start(
      { facingMode: "environment" }, // back camera
      {
        fps: 10,
        qrbox: { width: 250, height: 250 },
      },
      (decodedText) => {
        qr.stop().then(() => {
          router.push(`${decodedText}`);
        });
      },
      () => {}
    );

    return () => {
      qr.stop().catch(() => {});
    };
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-xl font-semibold">Scan QR Code</h1>
      <div
        id="qr-reader"
        className="w-[300px] aspect-square border rounded-lg overflow-hidden"
      />
    </div>
  );
}
