
"use client";

import React, { useState, useEffect } from "react";
import Footer from "../partes/fotter";

// رابط الباك اند الأساسي
const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

// POST -> إرسال الفورم
const CONTACT_URL = "http://localhost:3001/contacts";

// GET -> بيانات التواصل
const CONTACT_INFO_URL = "http://localhost:3001/about/info";

// الكلاسات
const balls = [
  "right-[-10%] top-[100px]",
  "left-[-10%] top-[400px]",
  "right-[-10%] top-[700px]",
  "left-[-10%] top-[1000px]",
  "right-[-10%] top-[1300px]",
  "right-[-10%] top-[1200px]",
  "left-[-10%] top-[1400px]",
  "right-[-10%] top-[1600px]",
  "left-[-10%] top-[1800px]",
];

const fieldCls = "flex flex-col gap-2";

const inputCls =
  "w-full box-border rounded-[10px] border border-[#504CFF66] bg-black/30 " +
  "px-[18px] py-[14px] text-[14px] text-white outline-none font-[inherit] " +
  "max-[480px]:text-[16px]";

const socialCls = "text-[20px] text-white no-underline";

const linkCls =
  "text-white no-underline transition-all duration-300 [overflow-wrap:anywhere]";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", text: "" });

  const [info, setInfo] = useState({
    phone: "",
    email: "",
    address: "",
  });

  // جلب بيانات التواصل من الباك اند
  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const res = await fetch(CONTACT_INFO_URL);

        if (!res.ok) {
          throw new Error(`HTTP Error: ${res.status}`);
        }

        const data = await res.json();
        const about = Array.isArray(data) ? data[0] : data;

        setInfo({
          phone: about?.phone || "",
          email: about?.email || "",
          address: about?.address || "",
        });
      } catch (error) {
        console.error("Error fetching contact info:", error);
      }
    };

    fetchInfo();
  }, []);

  // التعامل مع تغيير بيانات الفورم
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // إرسال الفورم
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setStatus({ type: "", text: "" });

    try {
      const res = await fetch(CONTACT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        let msg = "Something went wrong, please try again.";

        try {
          const data = await res.json();

          if (data?.message) {
            msg = data.message;
          }
        } catch (_) {}

        throw new Error(msg);
      }

      setStatus({
        type: "success",
        text: "Your message has been sent successfully!",
      });

      // تصحيح اسم phoneNumber بدل mobile
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
    } catch (err) {
      setStatus({
        type: "error",
        text: err.message || "Failed to send your message.",
      });
    } finally {
      setLoading(false);
    }
  };

  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    info.address
  )}`;

  return (
    <div
      className="relative top-0 box-border flex min-h-screen w-full flex-col items-center
                 overflow-hidden bg-black pt-[120px] font-['Inter',sans-serif] text-[#FFF]
                 max-[860px]:pt-[100px] max-[480px]:pt-[90px]"
    >
      {/* الخلفية المتوهجة */}
      {balls.map((pos, index) => (
        <div
          key={index}
          className={`pointer-events-none absolute z-0 h-[287px] w-[640px] rounded-full
                      bg-[#504CFF33] opacity-60 blur-[40px]
                      max-[860px]:h-[150px] max-[860px]:w-[320px] ${pos}`}
        ></div>
      ))}

      <div
        className="z-[1] mb-10 flex w-[90%] items-start justify-between gap-10
                   max-[1024px]:gap-6
                   max-[860px]:flex-col max-[860px]:items-stretch max-[860px]:gap-10
                   max-[480px]:w-[92%]"
      >
        {/* النصوص */}
        <div
          className="flex min-w-0 max-w-[460px] flex-col gap-8 max-[860px]:max-w-full"
          data-aos="fade-up"
        >
          {/* العنوان */}
          <div className="flex flex-col gap-2">
            <h1
              className="m-0 bg-[linear-gradient(270deg,#9795FF,#FFFFFF,#FFFFFF,#BE9FFF)]
                         bg-clip-text text-[42px] font-normal leading-[56px] text-transparent
                         max-[1024px]:text-[36px] max-[1024px]:leading-[48px]
                         max-[480px]:text-[30px] max-[480px]:leading-[40px]"
            >
              Apply for The Job Now
            </h1>

            <p className="m-0 font-normal leading-[28px] text-[#DDD] max-[480px]:leading-[26px]">
              Apply for the job now and attach your CV
            </p>
          </div>

          {/* وصف */}
          <div className="flex flex-col gap-[10px]">
            <p className="m-0 text-[18px] font-medium">
              Contact us for more information
            </p>

            <p className="m-0 font-normal leading-[28px] text-[#ccc] max-[480px]:leading-[26px]">
              Do not hesitate to contact us to inquire about our company's
              services in the field of information technology. We will be happy
              to provide assistance and meet your needs efficiently and
              professionally.
            </p>
          </div>

          {/* بيانات التواصل من الباك اند */}
          <ul className="m-0 flex list-none flex-col gap-3 p-0">
            <li className="flex items-center gap-[10px]">
              <img
                src="/imgTwo/call.png"
                alt="phone"
                className="h-6 w-6 shrink-0"
              />

              <a href={`tel:${info.phone}`} className={linkCls}>
                Contact Us Now
              </a>
            </li>

            <li className="flex items-center gap-[10px]">
              <img
                src="/imgTwo/email.png"
                alt="email"
                className="h-6 w-6 shrink-0"
              />

              <a href={`mailto:${info.email}`} className={linkCls}>
                Send Email Now
              </a>
            </li>

            <li className="flex items-center gap-[10px]">
              <img
                src="/imgTwo/site.png"
                alt="location"
                className="h-6 w-6 shrink-0"
              />

              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={linkCls}
              >
                {info.address}
              </a>
            </li>
          </ul>

          {/* السوشيال */}
          <div className="flex flex-col gap-3">
            <span>Contact us now</span>
            <span>Follow us on social media platforms</span>

            <div className="z-[1] flex gap-4">
              <a
                href="https://www.facebook.com/share/1GK7wnD318/"
                target="_blank"
                rel="noopener noreferrer"
                className={socialCls}
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>

              <a
                href="https://wa.me/201055395693"
                target="_blank"
                rel="noopener noreferrer"
                className={socialCls}
                aria-label="WhatsApp"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>

              <a
                href="https://www.instagram.com/hvshim10?igsh=c3o2aTA5eGM3ejF6"
                target="_blank"
                rel="noopener noreferrer"
                className={socialCls}
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/dev-master-78005b393"
                target="_blank"
                rel="noopener noreferrer"
                className={socialCls}
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        {/* الفورم */}
        <div
          className="z-[1] box-border flex w-[40%] flex-col items-center justify-center
                     rounded-[24px] border border-[#01C5FF] px-5 py-7
                     font-['Inter',sans-serif] backdrop-blur-[30px]
                     max-[1024px]:w-[48%]
                     max-[860px]:w-full max-[860px]:px-4 max-[860px]:py-6"
          data-aos="fade-up"
        >
          <form
            onSubmit={handleSubmit}
            className="flex w-[95%] flex-col gap-5 max-[860px]:w-full"
          >
            <div className={fieldCls}>
              <label htmlFor="name">Name</label>

              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className={inputCls}
              />
            </div>

            <div className={fieldCls}>
              <label htmlFor="email">Email</label>

              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E-mail"
                required
                className={inputCls}
              />
            </div>

            <div className={fieldCls}>
              <label htmlFor="mobile">Mobile Number</label>

              <input
                id="mobile"
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Mobile Number"
                required
                className={inputCls}
              />
            </div>

            <div className={fieldCls}>
              <label htmlFor="message">Your Message</label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows={2}
                className={`${inputCls} resize-y`}
              />
            </div>

            {status.text && (
              <p
                role="status"
                className={`m-0 text-center text-[14px] ${
                  status.type === "success"
                    ? "text-[#4ade80]"
                    : "text-[#f87171]"
                }`}
              >
                {status.text}
              </p>
            )}

            {/* زرار الإرسال */}
            <div
              className={`mx-auto w-[120px] rounded-[40px] p-[2px]
                          bg-[linear-gradient(90deg,#00f2fe,#003cbe,#00f2fe)]
                          bg-[length:200%_200%]
                          animate-[gradientShift_3s_ease_infinite]
                          motion-reduce:animate-none
                          ${loading ? "opacity-60" : "opacity-100"}`}
            >
              <button
                type="submit"
                disabled={loading}
                className={`flex w-full items-center justify-center gap-[10px] rounded-[40px]
                            border-none bg-black px-6 py-[14px] text-[16px] font-medium
                            text-white outline-none
                            ${loading ? "cursor-not-allowed" : "cursor-pointer"}`}
              >
                {loading ? "Sending..." : "Send"}

                {!loading && (
                  <img src="/icon/uil_arrow-up(2).png" alt="" />
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="z-[1] w-full" data-aos="fade-up">
        <Footer top={false} />
      </div>

      {/* keyframes */}
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}
