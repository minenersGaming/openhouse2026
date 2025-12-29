"use client";
import { useParams } from "next/navigation";
const ClubPage = () => {
  const params = useParams();
  return (
    <div className="h-200 flex flex-col justify-center items-center">
      <p>Club ID: {params.id}</p>
    </div>
  );
};
export default ClubPage;
