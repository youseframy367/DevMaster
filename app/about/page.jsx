"use client";

import AboutBaner from "./paner";
import ImgWork from "./imgWork";
import YourBesnis from "./sectionThree";
import LogoAnimation from "../home/logoAnimation";
import { motion } from "framer-motion";
import TimeStart from "./time";

export default function About() {
  const borderPulse = {
    animate: {
      opacity: [0.4, 0.9, 0.4],
      filter: [
        "drop-shadow(0 0 2px rgba(59,130,246,0.3))",
        "drop-shadow(0 0 12px rgba(59,130,246,0.7))",
        "drop-shadow(0 0 2px rgba(59,130,246,0.3))",
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <AboutBaner />

      <ImgWork />

      <motion.div
        variants={borderPulse}
        animate="animate"
        className="
          hidden md:block
          border-[3px]
          border-blue-500
          border-l-0
          w-[5%]
          ml-[93%]
          mt-[-160px]
          rounded-r-[46px]
          h-[210px]
          relative
          z-0
        "
      />

      <motion.div
        variants={borderPulse}
        animate="animate"
        className="
          hidden md:block
          border-[3px]
          border-blue-500
          border-r-0
          border-b-0
          rounded-l-[46px]
          w-[92%]
          ml-[3%]
          mt-[-3px]
          h-[370px]
        "
      />

      <YourBesnis />

      <div className="md:mt-[80px]">
        <LogoAnimation />

        <motion.div
          variants={borderPulse}
          animate="animate"
          className="
            hidden md:block
            w-[60%]
            ml-[35%]
            h-[60px]
            z-[100]
            border-[3px]
            border-blue-500
            border-b-0
            border-l-0
            rounded-tr-[45px]
            translate-y-[17px]
          "
        />

        <motion.div
          variants={borderPulse}
          animate="animate"
          className="
            hidden md:block
            w-[10%]
            ml-[85%]
            mt-[-43px]
            h-[223px]
            border-[3px]
            border-blue-500
            border-l-0
            border-b-0
            rounded-r-[46px]
          "
        />

        <img
          src="/img/Frame 47(1).png"
          className="
            hidden md:block
            ml-[57%]
            -translate-y-[180px]
          "
          data-aos="fade-up"
          alt=""
        />
      </div>

      <div
        className="w-full z-[99999] flex justify-center"
        data-aos="fade-up"
      >
        <TimeStart />
      </div>
    </>
  );
}