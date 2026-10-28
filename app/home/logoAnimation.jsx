"use client";
import { motion } from "framer-motion";

export default function LogoAnimation({
  width = 100,
  height = "170",
  heightImgAnimwtion = "60",
  marginLogo = "20"
}) {
  const logos = [
    "/icon/e6b08986e699dd21b87627e3b0a86a309ee36f03.png",
    "/icon/Group(6).png",
    "/icon/NnlhqIdId8noSZWwrhwTL9m7z9W9SZaU8oejDOQ4 1(1).png",
    "/icon/logo-white 1.png",
    "/icon/arabic-logo 1.png",
    "/icon/website_images_logos_splash_sa_ar_logo-splash 1.png",
    "/icon/FAxacBciPwmGGziG44usNqMrhpSsBJqVGg6QXn0Q 1.png",
    "/icon/449738f6-d67c-4f00-8731-0f80609a647c 1.png",
    "/icon/e6b08986e699dd21b87627e3b0a86a309ee36f03.png",
    "/icon/Group(6).png",
    "/icon/NnlhqIdId8noSZWwrhwTL9m7z9W9SZaU8oejDOQ4 1(1).png",
    "/icon/logo-white 1.png",
    "/icon/arabic-logo 1.png",
    "/icon/website_images_logos_splash_sa_ar_logo-splash 1.png",
    "/icon/FAxacBciPwmGGziG44usNqMrhpSsBJqVGg6QXn0Q 1.png",
    "/icon/449738f6-d67c-4f00-8731-0f80609a647c 1.png",
    "/icon/e6b08986e699dd21b87627e3b0a86a309ee36f03.png",
    "/icon/Group(6).png",
    "/icon/NnlhqIdId8noSZWwrhwTL9m7z9W9SZaU8oejDOQ4 1(1).png",
    "/icon/logo-white 1.png",
    "/icon/arabic-logo 1.png",
    "/icon/website_images_logos_splash_sa_ar_logo-splash 1.png",
    "/icon/FAxacBciPwmGGziG44usNqMrhpSsBJqVGg6QXn0Q 1.png",
    "/icon/449738f6-d67c-4f00-8731-0f80609a647c 1.png"
  ];

  const borderPulse = {
    animate: {
      opacity: [0.4, 0.9, 0.4],
      filter: [
        "drop-shadow(0 0 2px rgba(59,130,246,0.3))",
        "drop-shadow(0 0 12px rgba(59,130,246,0.7))",
        "drop-shadow(0 0 2px rgba(59,130,246,0.3))"
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <>
     
      <motion.div
        variants={borderPulse}
        animate="animate"
        className="right-0 ml-[20%] mt-[-110px] h-[80px] w-[40%] hidden md:block rounded-r-[45px] border-[3px] border-blue-500 border-l-0 border-r-0 border-t-0"
      />

      <motion.div
        variants={borderPulse}
        animate="animate"
        className="right-0 ml-[5%] mt-[-3px] h-[250px] w-[30%] rounded-l-[45px] border-[3px] hidden md:block border-blue-500 border-r-0"
      />

   
      <div
      data-aos="fade-up"
        className={`relative w-[100%] md:h-[170px] h-[40px] mb-[40px] overflow-hidden bg-cover  bg-center bg-no-repeat z-[200] mt-[20px] md:mt-[-230px]`}
        style={{
      
          backgroundImage: "url('/icon/backgroundLogo.svg')",
        }}
      >
        
        <div
          className="flex justify-center items-center gap-10 whitespace-nowrap animate-marquee md:mt-[25px]   md:rotate-1"
          style={{ marginTop: `${marginLogo}px` }}
        >
          {[...logos, ...logos].map((src, i) => (
            <img
              key={i}
              src={src}
              alt="logo"
            
              className="md:h-[60px] h-[30px] object-contain mt-[-15px] md:mt-[20px]"
           
            />
          ))}
        </div>
      </div>

    
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </>
  );
}