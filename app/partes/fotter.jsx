"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer({ top = true }) {
  const router = useRouter();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 40,
    },

    visible: (i) => ({
      opacity: 1,
      y: 0,

      transition: {
        delay: i * 0.15,
        duration: 0.7,
      },
    }),
  };

  const socials = [
    {
      icon: FaFacebookF,
      href: "https://www.facebook.com/share/1GK7wnD318/",
    },

    {
      icon: FaWhatsapp,
      href: "https://wa.me/201055395693",
    },

    {
      icon: FaInstagram,
      href: "https://www.instagram.com/hvshim10?igsh=c3o2aTA5eGM3ejF6",
    },

    {
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/in/dev-master-78005b393",
    },
  ];

  return (
    <footer
      className={`relative mt-[30px] overflow-hidden border-y border-[#003ACA] bg-black text-white ${
        top ? "min-h-[630px]" : "min-h-[400px]"
      }`}
    >
      {/* Glow Effects */}
      <div className="absolute right-0 top-[30%] h-[300px] w-[300px] rounded-full bg-[#003FCB]/60 blur-[150px]" />

      <div className="absolute bottom-[-10%] left-0 h-[300px] w-[400px] rounded-full bg-[#003FCB]/60 blur-[150px]" />

      <div className="relative z-10 flex h-full flex-col">
        {/* TOP SECTION */}
        {top && (
          <motion.div
            initial={{
              opacity: 0,
              y: -40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
            className="flex flex-col items-center justify-between gap-10 border-b border-[#003ACA] bg-[#1A1A1A66] px-6 py-10 text-center lg:flex-row lg:items-center lg:px-[60px] lg:text-left"
          >
            <div className="flex flex-col items-center lg:items-start">
              <h2
                className="text-3xl font-normal leading-tight sm:text-4xl md:text-6xl 
                   bg-gradient-to-l from-[#9795FF] via-white to-[#BE9FFF]
    bg-[length:400%_400%]
    bg-clip-text text-transparent
    animate-gradient
    text-center
                
                "
                style={{
                  backgroundImage:
                    "linear-gradient(270deg, #9795FF, #FFFFFF, #FFFFFF, #BE9FFF)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Let’s Work Together
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-gray-300 md:text-base">
                Let’s build something powerful together and turn your
                ideas into real digital success.
              </p>
            </div>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0px 0px 25px rgba(255,255,255,0.4)",
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={() => router.push("/serverReqst")}
              className="flex cursor-pointer items-center gap-[6px] rounded-full w-[80%] md:w-auto justify-center  bg-white px-7 py-4 text-[16px] font-medium text-[#16121E] transition-all duration-300 "
            >
              Service Request

              <img
                src="/icon/uil_arrow-up (1).png"
                alt=""
                className="h-[18px] w-[18px]"
              />
            </motion.button>
          </motion.div>
        )}

        {/* MIDDLE SECTION */}
        <div className="grid grid-cols-1 gap-14 px-6 py-20 text-center md:grid-cols-2 md:items-center lg:grid-cols-3 lg:px-20 lg:text-left">
          {/* Brand */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            custom={3}
            className="flex flex-col items-center lg:items-start"
          >
            <div className="flex items-center gap-3">
              <Image
                src="/icon/logoWhite.svg"
                alt="DevMaster Logo"
                width={50}
                height={50}
              />

              <h3 className="text-2xl font-semibold">
                DevMaster
              </h3>
            </div>

            <p className="mt-5 leading-7    bg-gradient-to-l from-[#9795FF] via-white to-[#BE9FFF]
    bg-[length:400%_400%]
    bg-clip-text text-transparent
    animate-gradient
  ">
              Dev Master empowers businesses and individuals to
              build, grow, and scale with future-ready digital
              solutions.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            custom={2}
            className="flex flex-col items-center lg:items-start"
          >
            <h3 className="mb-5 text-xl font-semibold">
              Services
            </h3>

            <ul className="space-y-3 text-gray-300">
              {[
                "Web Development",
                "E-commerce Developer",
                "Social Media Management",
                "Branding",
                "Mobile App",
              ].map((item, i) => (
                <li
                  key={i}
                  className="cursor-pointer transition-all duration-300 hover:translate-x-2 hover:text-white"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Features */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            custom={1}
            className="flex flex-col items-center lg:items-start"
          >
            <h3 className="mb-5 text-xl font-semibold">
              Business Features
            </h3>

            <ul className="space-y-3 text-gray-300">
              {[
                "Data-Based Chatbot Training",
                "Model Fine-Tuning",
                "Sales & Customer Service Smart Agents",
              ].map((item, i) => (
                <li
                  key={i}
                  className="cursor-pointer transition-all duration-300 hover:translate-x-2 hover:text-white"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col items-center justify-between gap-8 border-t border-white/10 px-6 py-8 text-center lg:flex-row lg:px-20">
          {/* Copyright */}
          <p className="text-sm text-gray-400">
            © 2025 DevMaster. All rights reserved.
          </p>

          {/* Footer Links */}
          <ul className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-300">
            <li
              onClick={() => router.push("/Pravic")}
              className="cursor-pointer transition-all duration-300 hover:text-[#4D7CFF]"
            >
              Cookie Policy
            </li>

            <li
              onClick={() => router.push("/Pravic")}
              className="cursor-pointer transition-all duration-300 hover:text-[#4D7CFF]"
            >
              Terms of Service
            </li>

            <li
              onClick={() => router.push("/pravic")}
              className="cursor-pointer transition-all duration-300 hover:text-[#4D7CFF]"
            >
              Privacy Policy
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-5">
            {socials.map((social, i) => {
              const Icon = social.icon;

              return (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    y: -5,
                    scale: 1.15,
                  }}
                  whileTap={{
                    scale: 0.9,
                  }}
                  className="rounded-full border border-white/10 bg-white/5 p-3 transition-all duration-300 hover:border-[#003ACA] hover:bg-[#003ACA]"
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}