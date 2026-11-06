"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

// كلاسات ثابتة (Tailwind مش بيقرأ كلاسات متولدة ديناميك)
const balls = [
  "right-[-10%] top-[100px]",
  "left-[-10%] top-[400px]",
  "right-[-10%] top-[700px]",
];

export default function DetalesJop() {
  const router = useRouter();
  const { id } = useParams();

  const [itemData, setItemData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch Job Details From Backend
  useEffect(() => {
    if (!id || id === "undefined") {
      setError("Invalid job id");
      setLoading(false);
      return;
    }

    const getJob = async () => {
      try {
        const token = localStorage.getItem("accessToken");

        const response = await fetch(`http://localhost:3001/jobs/${id}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const result = await response.json();

        // Handle different API response structures
        const job = result.data?.job || result.data || result.job || result;

        setItemData(job);
      } catch (err) {
        console.error("Failed to fetch job:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getJob();
  }, [id]);

  // Loading
  if (loading) {
    return (
      <div className="min-h-screen bg-black pt-[100px] text-center text-white">
        Loading Job...
      </div>
    );
  }

  // Error / Not found
  if (error || !itemData) {
    return (
      <div className="min-h-screen bg-black pt-[100px] text-center text-red-500">
        {error || "Job not found"}
      </div>
    );
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-black pb-16 pt-[100px] text-white">
      {/* Background Balls */}
      {balls.map((position, index) => (
        <div
          key={index}
          className={`absolute z-0 h-[287px] w-[640px] rounded-full bg-[#504CFF33] opacity-60 blur-[40px] ${position}`}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 ml-[8%] w-[80%]">
        {/* Title */}
        <h1 className="bg-[linear-gradient(270deg,#9795FF,#FFFFFF,#FFFFFF,#BE9FFF)] bg-clip-text text-[42px] font-normal leading-[75px] text-transparent">
          {itemData.name || itemData.title}
        </h1>

        {/* Info Row */}
        <div className="mt-2 flex w-full flex-wrap items-center justify-between gap-x-6 gap-y-3 md:w-[35%]">
          <p className="flex items-center gap-[5px] text-[14px] font-normal">
            <img src="/icon/MapPinLine.png" alt="" />
            {itemData.site || itemData.location}
          </p>

          <p className="flex items-center gap-[5px] text-[14px] font-normal">
            <img src="/icon/Briefcase.png" alt="" />
            {itemData.time || itemData.jobType}
          </p>

          <p className="flex items-center gap-[5px] text-[14px] font-normal">
            <img src="/icon/ClipboardText.png" alt="" />
            {itemData.count || itemData.vacancies || "01"} Vacancy
          </p>
        </div>

        {/* Responsibilities */}
        <section className="mt-10">
          <h2 className="mb-3 text-base">Job Duties and Responsibilities</h2>
          <ul className="list-disc space-y-2 pl-6 font-normal leading-[28px]">
            {itemData.detales &&
              Object.values(itemData.detales).map((detail, idx) => (
                <li key={idx} className="text-white">
                  {detail}
                </li>
              ))}
          </ul>
        </section>

        {/* Duties */}
        <section className="mt-8">
          <h2 className="mb-3 text-base">Job Duties</h2>
          <ul className="list-disc space-y-2 pl-6 font-normal leading-[28px]">
            {itemData.JobDuties &&
              Object.values(itemData.JobDuties).map((duty, idx) => (
                <li key={idx} className="text-white">
                  {duty}
                </li>
              ))}
          </ul>
        </section>
      </div>

      {/* Apply Button */}
<div className="gradient-btn relative z-10 ml-[8%] mt-12 w-fit rounded-[40px] p-[2px]">
  <button
onClick={() => router.push(`/JobsAll/ApplyForTheJop?jobId=${id}`)}
    className="flex cursor-pointer items-center gap-2 rounded-[40px] border-none bg-black px-8 py-[14px] text-[16px] font-medium text-white outline-none"
  >
    Apply Now <img src="/icon/uil_arrow-up(2).png" alt="" />
  </button>
</div>

      <style>{`
        .gradient-btn {
          background: linear-gradient(90deg, #00f2fe, #003cbe, #00f2fe);
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}