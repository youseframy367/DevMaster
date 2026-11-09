
"use client";

import React, { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Footer from "../../partes/fotter"
import { apiUrl } from "../../lib/api";

function ApplyTheJopForm() {
const searchParams = useSearchParams();

  const jobId = Number(searchParams.get("jobId"));

  const [formData, setFormData] = useState({
    jobId: jobId,
    name: "",
    email: "",
    mobile: "",
    residence: "",
    experience: "",
    age: "",
    specialization: "",
    education: "",
    salary: "",
    notice: "",
    cv: null,
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const data = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null && value !== "") {
          data.append(key, value);
        }
      });

      const response = await fetch(apiUrl("/job-applications"), {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong");
      }

      setStatus("Your application has been submitted successfully!");

      setFormData({
        name: "",
        email: "",
        mobile: "",
        residence: "",
        experience: "",
        age: "",
        specialization: "",
        education: "",
        salary: "",
        notice: "",
        cv: null,
        message: "",
      });

      e.target.reset();
    } catch (error) {
      setStatus(error.message || "Failed to submit your application.");
    } finally {
      setLoading(false);
    }
  };

  const fields = [
    { label: "Name", name: "name", type: "text" },
    { label: "E-mail", name: "email", type: "email" },
    { label: "Mobile Number", name: "mobile", type: "tel" },
    { label: "Residence", name: "residence", type: "text" },
    { label: "Years of Experience", name: "experience", type: "number" },
    { label: "Age", name: "age", type: "number" },
    { label: "Specialization", name: "specialization", type: "text" },
    { label: "Education", name: "education", type: "text" },
    { label: "Expected Salary", name: "salary", type: "text" },
    { label: "Notice Period", name: "notice", type: "text" },
  ];

  return (
    <>
      <section className="relative min-h-screen w-full overflow-hidden bg-black pt-20 text-white">

        {/* Background Blur Balls */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="absolute -right-[10%] top-[100px] h-[287px] w-[640px] rounded-full bg-[#504CFF33] opacity-60 blur-[40px]" />

          <div className="absolute -left-[10%] top-[400px] h-[287px] w-[640px] rounded-full bg-[#504CFF33] opacity-60 blur-[40px]" />

          <div className="absolute -right-[10%] top-[700px] h-[287px] w-[640px] rounded-full bg-[#504CFF33] opacity-60 blur-[40px]" />
        </div>

        {/* Form Container */}
        <div className="relative z-10 mx-auto mb-10 w-[85%]">

          {/* Heading */}
          <div className="mb-8" data-aos="fade-up">
            <h1 className="bg-gradient-to-r from-[#BE9FFF] via-white to-[#9795FF] bg-clip-text text-[28px] font-normal leading-[1.4] text-transparent title-gradient sm:text-[42px] sm:leading-[75px]">
              Apply for The Job Now
            </h1>

            <p className="mt-2 text-sm font-normal leading-7 text-white sm:text-base">
              Apply for the job now and attach your CV
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            data-aos="fade-up"
            className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2"
          >
            {/* Inputs */}
            {fields.map((field) => (
              <div
                key={field.name}
                className="flex min-w-0 flex-col gap-3"
              >
                <label
                  htmlFor={field.name}
                  className="text-sm font-normal text-white sm:text-base"
                >
                  {field.label}
                </label>

                <input
                  id={field.name}
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={field.label}
                  required
                  className="w-full rounded-[10px] border border-[#504CFF66] bg-black/30 px-[18px] py-[14px] text-sm text-white outline-none transition-all placeholder:text-gray-400 focus:border-[#9795FF] focus:ring-1 focus:ring-[#504CFF66]"
                />
              </div>
            ))}

            {/* CV Upload */}
            <div className="col-span-1 flex flex-col gap-3 md:col-span-2">
              <label
                htmlFor="cv"
                className="text-sm font-normal text-[#ccc]"
              >
                CV (PDF or DOC)
              </label>

              <input
                id="cv"
                type="file"
                name="cv"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                required
                className="w-full rounded-[10px] border border-[#504CFF66] bg-black/30 px-[18px] py-[14px] text-sm text-white outline-none transition-all file:mr-4 file:rounded-md file:border-0 file:bg-[#504CFF] file:px-4 file:py-2 file:text-white hover:border-[#9795FF]"
              />
            </div>

            {/* Message */}
            <div className="col-span-1 md:col-span-2">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows={4}
                className="w-full resize-y rounded-[10px] border border-[#504CFF66] bg-black/30 px-[18px] py-[14px] text-sm text-white outline-none transition-all placeholder:text-gray-400 focus:border-[#9795FF] focus:ring-1 focus:ring-[#504CFF66]"
              />
            </div>

            {/* Submit Button */}
            <div className="gradient-btn col-span-1 inline-block w-fit rounded-[40px] p-[2px] md:col-span-2">
              <button
                type="submit"
                disabled={loading}
                className="flex items-center gap-3 rounded-[40px] bg-black px-6 py-[14px] text-base font-medium text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit"}

                {!loading && (
                  <img
                    src="/icon/uil_arrow-up(2).png"
                    alt="Submit"
                    className="h-4 w-4 object-contain"
                  />
                )}
              </button>
            </div>

            {/* Status Message */}
            {status && (
              <div
                className={`col-span-1 text-sm md:col-span-2 ${
                  status.includes("successfully")
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {status}
              </div>
            )}
          </form>
        </div>

        {/* Gradient Animation */}
        <style jsx>{`
          .gradient-btn {
            background: linear-gradient(
              90deg,
              #00f2fe,
              #003cbe,
              #00f2fe
            );
            background-size: 200% 200%;
            animation: gradientShift 3s ease infinite;
          }

          @keyframes gradientShift {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}</style>

        {/* Footer */}
        <div className="relative z-10 w-full" data-aos="fade-up">
          <Footer top={false} />
        </div>
      </section>
    </>
  );
}


export default function ApplyTheJop() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black" />}>
      <ApplyTheJopForm />
    </Suspense>
  );
}
