"use client";

import { useParams, useRouter } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useState } from "react";

type BookingPreview = {
  fullname: string;
  surname: string;
  userStatus: string;
  checkedIn: boolean;
};

async function fetchBooking(registerId: string): Promise<BookingPreview> {
  const res = await fetch(`/api/staff/checkin/${registerId}`, {
    method: "GET",
    credentials: "include",
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || "Invalid QR");
  }

  return res.json();
}

async function confirmCheckIn(
  registerId: string,
  door: "ประตูพญาไท" | "ประตูอังรีดูนังต์"
) {
  const res = await fetch("/api/staff/checkin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ registerId, door }),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || "Check-in failed");
  }
}

export default function StaffBookingPage() {
  const { registerId } = useParams<{ registerId: string }>();
  const router = useRouter();

  const [door, setDoor] = useState<"ประตูพญาไท" | "ประตูอังรีดูนังต์" | null>(null);

  // Fetch booking preview
  const {
    data,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["staff-booking", registerId],
    queryFn: () => fetchBooking(registerId),
  });

  //Confirm check-in
  const mutation = useMutation({
    mutationFn: () => confirmCheckIn(registerId, door!),
    onSuccess: () => {
      toast.success("Checked in successfully");
      router.push("/");
    },
    onError: (e: Error) => {
      toast.error(e.message);
    },
  });

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center text-xl">
        Loading...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="h-screen flex flex-col items-center justify-center text-red-600">
        <p className="text-xl font-bold">Invalid QR</p>
        <p className="mt-2">{(error as Error).message}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">
          Confirm Check-in
        </h1>

        <div className="space-y-2 text-center">
          <p className="text-xl font-semibold">
            {data!.fullname} {data!.surname}
          </p>

          <p className="text-gray-600">
            Status: {data!.userStatus}
          </p>

          {data!.checkedIn && (
            <p className="mt-2 text-red-600 font-bold">
              Already Checked In
            </p>
          )}
        </div>

        {/*Door selection */}
        {!data!.checkedIn && (
          <div className="mt-6 space-y-3">
            <p className="text-lg font-semibold text-center">
              Entrance Door
            </p>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="door"
                value="ประตูพญาไท"
                checked={door === "ประตูพญาไท"}
                onChange={() => setDoor("ประตูพญาไท")}
                className="w-5 h-5"
              />
              <span className="text-lg">ประตูพญาไท</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="door"
                value="ประตูอังรีดูนังต์"
                checked={door === "ประตูอังรีดูนังต์"}
                onChange={() => setDoor("ประตูอังรีดูนังต์")}
                className="w-5 h-5"
              />
              <span className="text-lg">ประตูอังรีดูนังต์</span>
            </label>
          </div>
        )}

        <button
          onClick={() => mutation.mutate()}
          disabled={
            mutation.isPending ||
            data!.checkedIn ||
            !door
          }
          className={`mt-6 w-full py-3 rounded-lg text-white text-lg font-semibold transition
            ${
              data!.checkedIn || !door
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }
          `}
        >
          {mutation.isPending
            ? "Checking in..."
            : data!.checkedIn
            ? "Already Checked In"
            : !door
            ? "Select Entrance Door"
            : "Confirm Check-in"}
        </button>
      </div>
    </div>
  );
}
