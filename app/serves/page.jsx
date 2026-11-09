"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import imgOne from "./imge/image 11.png";
import Footer from "../partes/fotter";
import Credit from "../home/cridetSection"; 
const balls = [
  { side: "right", top: "100px" },
  { side: "left", top: "400px" },
  { side: "right", top: "700px" },
  { side: "left", top: "900px" },
  { side: "right", top: "1100px" },
  { side: "left", top: "1300px" },
  { side: "right", top: "1500px" },
];

export default function Serves() {
  const router = useRouter();
  const [hover, setHover] = useState(false);

  const goRequest = () => router.push("../servesRequest");

  return (
    <>
      <div className="relative flex min-h-[160vh] w-full flex-col items-center justify-center bg-black pt-[130px]">
        {/* ===== الكرات المضبّبة ===== */}
        {balls.map((ball, index) => (
          <div
            key={index}
            style={{ top: ball.top }}
            className={`absolute z-[1000] h-[287px] w-[640px] rounded-[50%] bg-[#504CFF33] opacity-60 blur-[40px] ${
              ball.side === "right" ? "right-[-10%]" : "left-[-10%]"
            }`}
          />
        ))}

        {/* ===== الجزء العلوي ===== */}
        <div className="flex w-[90%]">
          {/* النص */}
          <div className="relative z-[1000] flex w-1/2 flex-col gap-5 p-[4%] text-white">
            <p
              data-aos="fade-up"
              className="text-[32px] font-medium leading-[40px]"
            >
              More than one integrated service provided by the Dev Sparks for a
              complete digital transformation
            </p>

            <p
              data-aos="fade-up"
              className="text-[18px] font-normal leading-[30px] text-white/90"
            >
              More than one integrated service provided by Dev Sparks for a
              complete digital transformation Dev Sparks offers a range of
              integrated services designed to guide your business through a full
              digital transformation. From strategy development and creative
              solutions to implementation and optimization, our comprehensive
              approach ensures seamless and measurable results for every client.
            </p>

            <button
              data-aos="fade-up"
              onClick={goRequest}
              className="
                mt-2 w-[230px] cursor-pointer rounded-full bg-white px-5 py-[14px]
                text-[18px] text-[#131313]
                transition-all duration-300
                hover:scale-105 
                hover:shadow-[0_0_30px_rgba(59,130,246,0.7)]
                active:scale-95
              "
            >
              Request Service Now
            </button>
          </div>

          {/* ===== الصورة ===== */}
          <div data-aos="fade-up" className="relative z-[999] w-1/2">
            <div
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className={`
                relative z-[9999] m-[40px] h-[488px] w-[93%] cursor-pointer
                overflow-hidden rounded-b-[24px]
                transition-all duration-[400ms] ease-in-out
                ${hover ? "scale-105 brightness-[1.15]" : "scale-100 brightness-100"}
              `}
            >
              <Image
                src={imgOne}
                alt="Technical Consultation"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                priority
                className="object-cover object-center"
              />

              {/* overlay شفاف يظهر بالهوفر */}
              <div
                className={`absolute inset-0 rounded-b-[24px] transition-colors duration-[400ms] ease-in-out ${
                  hover ? "bg-black/40" : "bg-black/0"
                }`}
              />

              {/* النص فوق الصورة */}
              <p className="absolute bottom-0 z-[2] flex h-[50px] w-full items-center justify-center bg-[rgba(16,15,27,0.2)] text-[18px] font-medium text-white">
                Technical Consultation With Dev Sparks
              </p>
            </div>
          </div>
        </div>

        {/* ===== الحدود الزرقاء ===== */}
        <div className="relative z-0 ml-[90%] mt-[-200px] h-[260px] w-[5%] rounded-r-[46px] border-[3px] border-l-0 border-[blue]" />

        <div className="ml-[-3%] mt-[-3px] h-[370px] w-[88%] rounded-l-[46px] border-[3px] border-r-0 border-b-0 border-[blue]" />

        {/* ===== قسم الخدمات ===== */}
        <div className="mt-[-430px] flex min-h-screen w-full items-center justify-center py-[100px] text-white">
          <div className="flex w-[95%] flex-col items-center justify-center">
            {/* العنوان */}
            <div className="flex w-full flex-col gap-4 pl-[90px]">
              <p
                data-aos="fade-up"
                className="bg-[linear-gradient(270deg,#9795FF,#FFFFFF,#FFFFFF,#BE9FFF)] bg-clip-text text-[68px] font-normal leading-[75px] text-transparent title-gradient"
              >
                Let’s work together with us
              </p>

              <p
                data-aos="fade-up"
                className="font-normal leading-[28px] text-white/90"
              >
                We help you build a modern, easy-to-use website and mobile
                application for your company with a clean design.
              </p>
            </div>

            {/* ===== الكروت (من component الـ Credit) ===== */}
            <div className="relative z-[200] w-full pt-[300px]">
              <Credit />
            </div>
          </div>
        </div>

        {/* ===== الفوتر ===== */}
        <div data-aos="fade-up" className="z-[999] w-full bg-black">
          <Footer />
        </div>
      </div>
    </>
  );
}