"use client";

import { useState } from "react";
import Image from "next/image";
import img from "./imge/Img.png";
import Broject from "../home/project";
import Footer from "../partes/fotter";

const balls = [
  { side: "right", top: "100px" },
  { side: "left", top: "400px" },
  { side: "right", top: "700px" },
  { side: "left", top: "1000px" },
  { side: "right", top: "1300px" },
  { side: "right", top: "1200px" },
  { side: "left", top: "1400px" },
];

export default function BrojectGet() {
  const [hover, setHover] = useState(false);

  return (
    <>
      <div className="relative flex min-h-[150vh] w-full flex-col items-center justify-center bg-black pt-[130px]">
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

        <div className="flex w-[90%] items-center">
          {/* ===== النص ===== */}
          <div className="relative z-[1000] flex w-1/2 flex-col p-[1%] text-white">
            <p
              data-aos="fade-up"
              className="text-[32px] font-medium leading-[40px]"
            >
              More than 60 innovative solutions and 30 registered trademarks
              with the latest global technologies.
            </p>

            <p
              data-aos="fade-up"
              className="text-[18px] font-normal leading-[30px] md:mt-[20px]"
            >
              We are committed to your success. Our technology consulting firm
              offers tailored strategies to ensure business excellence through
              precise solutions and strategic expertise to achieve sustainable
            </p>
          </div>

          {/* ===== الصورة ===== */}
          <div data-aos="fade-up" className="relative z-[999] w-1/2">
            <div
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className={`
                relative
                mr-[40px]
                mt-[40px]
                h-[276px]
                w-[588px]
                cursor-pointer
                overflow-hidden
                rounded-b-[24px]
                transition-all
                duration-[400ms]
                ease-in-out
                ${hover ? "scale-105 brightness-[1.15]" : "scale-100 brightness-100"}
              `}
            >
              <Image
                src={img}
                alt="Projects"
                fill
                sizes="588px"
                priority
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* ===== الحدود الزرقاء ===== */}
        <div className="ml-[90%] mt-[-200px] h-[260px] w-[5%] rounded-r-[46px] border-[3px] border-l-0 border-blue-700" />

        <div className="ml-[-3%] mt-[-3px] h-[370px] w-[90%] rounded-l-[46px] border-[3px] border-r-0 border-b-0 border-blue-700" />

        {/* ===== المشاريع ===== */}
        <div
          data-aos="fade-up"
          className="mt-[-200px] flex w-full flex-col items-center pb-[40px]"
        >
          <Broject showButton={false} showBorder={false} />
        </div>

        {/* ===== الفوتر ===== */}
        <div data-aos="fade-up" className="w-full">
          <Footer />
        </div>
      </div>
    </>
  );
}