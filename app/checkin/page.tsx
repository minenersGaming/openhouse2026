"use client";

import { Scanner } from "@yudiel/react-qr-scanner";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Formik, Form, Field } from "formik";
import { doors } from "@/constant/doors";
import { callAPI } from "@/utils/callAPI";
import type { Session } from "@/lib/auth-type";
import { useSession } from "@/lib/auth-client";
import toast from "react-hot-toast";

const CheckInPage = () => {
  const [selectedDoor, setSelectedDoor] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [scanUser, setScanUser] = useState("");
  const formikRef = useRef<any>(null);
  const { data: session, isPending } = useSession() as {
    data: Session | null;
    isPending: boolean;
  };

  const router = useRouter();

  useEffect(() => {
    if (!isPending && (!session || !session.user.isStaff)) {
      router.push("/");
    }
  }, [session, isPending, router]);

  // Add Skeleton or better loading state
  if (isPending) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!session || !session.user.isStaff) {
    return null;
  }

  const handleSubmit = async (values: { door: string; registerId: string }) => {
    if (!values.door) {
      toast.error("กรุณาเลือกประตูเข้างาน");
      setIsProcessing(false);
      return;
    }

    if (!values.registerId) {
      toast.error("กรุณาใส่รหัสเข้างาน");
      setIsProcessing(false);
      return;
    }

    setSelectedDoor(values.door);

    toast.loading("กำลังเช็กอิน...", { id: "checkin-toast" });

    // Please keep this simple, no need to use react query
    //"/checkin"
    const response = await callAPI("/checkin", {
      method: "POST",
      data: {
        door: values.door,
        registerId: values.registerId,
      },
    });

    if (response.error) {
      toast.error(response.error, { id: "checkin-toast" });
      setIsProcessing(false);
    } else {
      toast.success(`เช็กอินสำเร็จ - รหัส: ${values.registerId}`, {
        id: "checkin-toast",
      });
      if (formikRef.current) {
        formikRef.current.setFieldValue("registerId", "");
      }
      setIsProcessing(false);
    }
  };

  const handleScan = (data: any) => {
    try {
      if (!data || !data[0]?.rawValue) return;
      if (isProcessing) return;

      // console.log(data);
      // console.log(data[0].rawValue);
      const raw = data[0].rawValue;

      let id: string | undefined;

      if (raw.length === 5) {
        id = raw;
      } else if (
        raw.startsWith("https://openhouse.triamudom.ac.th/staff/checkin")
      ) {
        id = raw.split("/").pop();
      }

      if (id && id.length === 5 && formikRef.current) {
        console.log("use id" + scanUser);

        if (id === scanUser) return;
        setIsProcessing(true);
        const currentDoor = formikRef.current.values.door;
        formikRef.current.setFieldValue("registerId", id);
        console.log("set id");

        handleSubmit({
          door: currentDoor,
          registerId: id,
        });
        setScanUser(id);
      }
    } catch (error) {
      console.error("Scan error:", error);
      setIsProcessing(false);
    }
  };

  return (
    <section className="min-h-screen w-full bg-white flex flex-col items-center pt-10">
      <div className="text-2xl font-bold">Staff Scanner</div>
      <div className="text-lg mb-6">Triam Udom Open House 2026</div>
      <div className="flex flex-col items-center">
        <div className="border w-auto flex flex-col items-center p-15 rounded-lg shadow-md">
          <div className="size-60 border mb-6">
            {/* If you want to setting this please refer to https://www.npmjs.com/package/@yudiel/react-qr-scanner */}
            <Scanner
              onError={() => {
                toast.error("กรุณาอนุญาตสิทธิ์การใช้งานกล้องเพื่อสแกน QR code");
              }}
              onScan={handleScan}
              components={{
                zoom: false,
                torch: false,
                onOff: false,
              }}
            />
          </div>
          <Formik
            initialValues={{
              door: selectedDoor,
              registerId: "",
            }}
            onSubmit={handleSubmit}
            innerRef={formikRef}
          >
            {() => (
              <Form className="w-full flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="door" className="font-medium text-gray-700">
                    เลือกประตู
                  </label>
                  <Field
                    as="select"
                    name="door"
                    id="door"
                    className="border rounded-md p-2 text-gray-800"
                  >
                    <option value="">-- เลือกประตู --</option>
                    {Object.entries(doors).map(([key, value]) => (
                      <option key={key} value={key}>
                        {value}
                      </option>
                    ))}
                  </Field>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="registerId"
                    className="font-medium text-gray-700"
                  >
                    รหัสเข้างาน
                  </label>
                  <Field
                    type="text"
                    name="registerId"
                    id="registerId"
                    placeholder="ใส่รหัสเข้างาน"
                    className="border rounded-md p-2 text-gray-800"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                  เช็กอิน
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default CheckInPage;
