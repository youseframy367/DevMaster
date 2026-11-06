"use client";
import "./baner.css";
import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import type { IconType } from "react-icons";

import { useRouter } from "next/navigation";

interface SocialMedia {
  id?: number;
  title: string;
  link: string;
}

// خريطة: title اللي جاي من الباك -> الأيقونة
const ICONS: Record<string, IconType> = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  whatsapp: FaWhatsapp,
};

export default function Baner() {
  const router = useRouter();
  const [socials, setSocials] = useState<SocialMedia[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    fetch("http://localhost:3001/about/social-media", {
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch social media");
        return res.json();
      })
      .then((data: SocialMedia[]) => setSocials(data))
      .catch((err) => {
        if (err.name !== "AbortError") console.error(err);
      });

    return () => controller.abort();
  }, []);

  return (
    <div
      className="
        absolute
        top-0
        left-0
        w-full
        h-[780px]
       
        flex
        flex-col
        justify-center
        items-center
        bg-cover
        bg-center
      "
      style={{
        backgroundImage: "url('/icon/Header.png')",
      }}
    >
      <div className="flex items-center mt-[70px]" data-aos="fade-up">
        {socials.map((item) => {
          const Icon = ICONS[item.title.toLowerCase()];
          if (!Icon) return null; // منصة مالهاش أيقونة في الخريطة

          return (
            <a
              key={item.id ?? item.link}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.title}
              className="
                text-white
                text-[20px]
                mx-[10px]
                cursor-pointer
                transition-colors
                duration-300
                hover:text-[#9795FF]
              "
            >
              <Icon />
            </a>
          );
        })}
      </div>

      <h1
        data-aos="fade-up"
        className="
          text-center
          mt-5
          font-normal
          leading-[70px]
          md:leading-[110px]
          text-[clamp(40px,8vw,105px)]
          bg-[linear-gradient(270deg,#9795FF,#FFFFFF,#FFFFFF,#BE9FFF)]
          bg-[length:400%_400%]
          bg-clip-text
          text-transparent
          animate-gradient
        "
      >
        Create amazing work with DevMaster Company
      </h1>

      <p
        data-aos="fade-up"
        className="
          text-white
          text-center
          mb-5
          md:whitespace-nowrap
          mt-[6px]
          md:mt-[15px]
          font-normal
          font-['Inter']
          w-[95%]
          text-[16px]
          leading-[45px]
          md:leading-[35px]
        "
      >
        We help you build modern, easy-to-use websites and applications for
        businesses and individuals, with clean design and future support.
      </p>

      <button
        data-aos="fade-up"
        onClick={() => router.push("../servesRequest")}
        className="
          group
          relative
          mt-5
          flex
          items-center
          overflow-hidden
          rounded-[40px]
          border
          border-cyan-400/40
          bg-[#ffff]
          px-6
          py-[14px]
          text-[18px]
          font-normal
          text-black
          transition-all
          duration-300
          cursor-pointer

          shadow-[0_0_15px_rgba(34,211,238,0.25)]
          hover:shadow-[0_0_30px_rgba(34,211,238,0.7)]
          hover:border-cyan-300
          hover:scale-105
        "
      >
        {/* Animated Glow */}
        <span
          className="
            absolute
            inset-0
            bg-[linear-gradient(120deg,transparent,rgba(34,211,238,0.35),transparent)]
            translate-x-[-200%]
            group-hover:translate-x-[200%]
            transition-transform
            duration-1000
          "
        />

        {/* Content */}
        <span className="relative z-10 flex items-center">
          Free Consultation

          <img
            src="/icon/uil_arrow-up (1).png"
            alt="arrow"
            className="
              ml-2
              h-4
              w-4
              transition-transform
              duration-300
              group-hover:translate-x-.5
              group-hover:-translate-y-.5
            "
          />
        </span>
      </button>

      <div className="relative w-[150px] h-[150px] mt-[50px]" data-aos="fade-up">
        <div
          className="
            w-[100px]
            h-[100px]
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            flex
            justify-center
            items-center
          "
        >
          <img src="/icon/Group (5).png" alt="center" />
        </div>

        <svg
          width="150"
          height="150"
          viewBox="0 0 200 200"
          className="absolute top-0 left-0"
        >
          <defs>
            <path
              id="circlePath"
              d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0"
            />
          </defs>

          <text
            fill="#ffffff"
            fontSize="16"
            letterSpacing="2px"
            fontFamily="Inter"
            fontWeight="400"
            className="animate-spin-slow origin-center"
          >
            <textPath href="#circlePath" lengthAdjust="spacingAndGlyphs">
              {("scroll down for work together • ").repeat(20)}
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
}