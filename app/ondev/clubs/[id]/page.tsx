"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const TYPES = ["clubs", "programs", "gifted", "organizations"];

export default function ClubViewPage() {
  const params = useParams();
  const id = decodeURIComponent(params.id as string);

  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        for (const type of TYPES) {
          const res = await fetch(
            `/api/doc/getDocument?type=${type}&key=${id}`
          );

          if (!res.ok) continue;

          const json = await res.json();
          if (json?.data) {
            setData({ ...json.data, __type: type });
            return;
          }
        }

        throw new Error("Document not found in any category");
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading)
    return <div className="p-6 text-center text-white">Loading...</div>;

  if (error)
    return <div className="p-6 text-red-400">ERROR: {error}</div>;

  if (!data)
    return <div className="p-6 text-white">Not found</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 text-white">
      <div>
        <h1 className="text-3xl font-bold">{data.name}</h1>
        <p className="text-white/70">{data.thainame}</p>
        <p className="text-sm text-white/50 capitalize">
          Category: {data.__type}
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {data.members && (
          <div className="px-4 py-2 rounded-xl border border-white/20 bg-white/5">
            <b>Members:</b> {data.members}
          </div>
        )}
        <div className="px-4 py-2 rounded-xl border border-white/20 bg-white/5"> <b>Status:</b> {data.status} </div>
      </div>

      {data.activities && (
        <section className="rounded-2xl border border-white/20 bg-white/5 p-4">
          <h2 className="font-semibold text-xl mb-1">Activities</h2>
          <p className="text-white/80">{data.activities}</p>
        </section>
      )}

      {data.benefits && (
        <section className="rounded-2xl border border-white/20 bg-white/5 p-4">
          <h2 className="font-semibold text-xl mb-1">Benefits</h2>
          <p className="text-white/80">{data.benefits}</p>
        </section>
      )}

      {data.working && (
        <section className="rounded-2xl border border-white/20 bg-white/5 p-4">
          <h2 className="font-semibold text-xl mb-1">Working</h2>
          <p className="text-white/80">{data.working}</p>
        </section>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.captureimg1 && (
          <img src={data.captureimg1} className="rounded-2xl" />
        )}
        {data.captureimg2 && (
          <img src={data.captureimg2} className="rounded-2xl" />
        )}
        {data.captureimg3 && (
          <img src={data.captureimg3} className="rounded-2xl" />
        )}
      </div>

      {data.reviews?.length > 0 && (
        <section>
          <h2 className="font-semibold text-xl mb-3">Reviews</h2>
          <div className="space-y-4">
            {data.reviews.map((r: any, i: number) => (
              <div
                key={i}
                className="rounded-2xl border border-white/20 bg-white/5 p-4"
              >
                <p className="font-bold">{r.nick}</p>
                <p className="text-sm text-white/60 mb-1">{r.gen}</p>
                <p className="text-white/80">{r.content}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="rounded-2xl border border-white/20 bg-white/5 p-4 space-y-1 text-white/80">
        {data.ig && <p>IG: {data.ig}</p>}
        {data.fb && <p>FB: {data.fb}</p>}
        {data.others && <p>Other: {data.others}</p>}
      </div>
    </div>
  );
}
