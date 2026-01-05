"use client";

import { useState, useEffect } from "react";
import { QrReader } from "react-qr-reader";

export default function ScanPage() {
  const [data, setData] = useState("No result");
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [error, setError] = useState<string>("");
  const [permissionState, setPermissionState] = useState<string>("");

  const requestPermission = async () => {
    try {
      console.log("Requesting camera permission...");
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      });
      console.log("✅ Camera access granted!", stream);
      setHasPermission(true);
      setError("");
      // Stop the stream since QrReader will request it again
      stream.getTracks().forEach((track) => track.stop());
    } catch (err: any) {
      console.error("❌ Camera error:", err);
      console.error("Error name:", err.name);
      console.error("Error message:", err.message);

      setError(err.message);
      setHasPermission(false);

      // Provide helpful error messages
      if (err.name === "NotAllowedError") {
        setPermissionState(
          "Camera permission was denied. Please click the camera icon in your browser's address bar and allow access."
        );
      } else if (err.name === "NotFoundError") {
        setPermissionState("No camera found on this device.");
      } else if (err.name === "NotReadableError") {
        setPermissionState("Camera is already in use by another application.");
      } else {
        setPermissionState(err.message);
      }
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <div className="max-w-md mx-auto pt-8">
        <h1 className="text-2xl font-bold mb-6 text-center text-white">
          QR Scanner
        </h1>

        {/* Status indicator */}
        <div className="mb-4 p-3 bg-gray-800 rounded-lg text-white text-sm">
          <p className="mb-2">
            Permission:{" "}
            {hasPermission === null
              ? "Checking..."
              : hasPermission
              ? "✅ Granted"
              : "❌ Denied"}
          </p>
          {permissionState && (
            <p className="text-yellow-300 text-xs mt-2">{permissionState}</p>
          )}
        </div>

        <div className="relative aspect-square bg-black rounded-lg overflow-hidden">
          {hasPermission === true && (
            <QrReader
              onResult={(result, error) => {
                if (!!result) {
                  console.log("QR Code detected:", result);
                  const text = result?.text || result?.getText();
                  setData(text);
                }
                if (!!error) {
                  console.error("QR Reader error:", error);
                }
              }}
              constraints={{
                facingMode: "environment",
              }}
              videoId="video"
              scanDelay={100}
              ViewFinder={() => (
                <div className="absolute inset-0 border-4 border-green-500 rounded-lg m-12" />
              )}
            />
          )}

          {hasPermission === false && (
            <div className="flex flex-col items-center justify-center h-full text-white text-center p-6">
              <div className="mb-4">
                <svg
                  className="w-16 h-16 mx-auto mb-4 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                  <line
                    x1="1"
                    y1="1"
                    x2="23"
                    y2="23"
                    stroke="currentColor"
                    strokeWidth={2}
                  />
                </svg>
                <p className="text-lg font-semibold mb-2">
                  Camera Access Denied
                </p>
                <p className="text-sm text-gray-400 mb-4">
                  Please allow camera access to scan QR codes
                </p>
              </div>
              <button
                onClick={requestPermission}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold"
              >
                Request Permission Again
              </button>
            </div>
          )}
        </div>

        <div className="mt-6 p-4 bg-white rounded-lg">
          <p className="text-sm text-gray-600 mb-2">Scanned Data:</p>
          <p className="break-all font-mono text-sm">{data}</p>
        </div>
      </div>
    </div>
  );
}
