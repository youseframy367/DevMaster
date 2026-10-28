"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const timelineData = {
  title: "Dev Master Journey Through Time",
  events: [
    {
      year: "2021",
      description:
        "In 2021, DevMaster was established in Egypt, marking the beginning of a journey fueled by innovation and determination. From the outset, our company embraced a spirit of creativity, striving to deliver solutions that are not only effective but also distinctive and forward-thinking.",
    },
    {
      year: "2022",
      description:
        "In 2022, DevMaster continued its growth journey, strengthening its position in the market through innovative solutions and a commitment to excellence.",
    },
    {
      year: "2023",
      description:
        "In 2023, DevMaster expanded its capabilities and built stronger partnerships, helping clients achieve sustainable growth and digital transformation.",
    },
    {
      year: "2024",
      description:
        "In 2024, DevMaster focused on innovation and quality, delivering cutting-edge services and reinforcing its commitment to client success.",
    },
    {
      year: "2025",
      description:
        "In 2025, DevMaster reached new milestones, building long-term relationships with clients and continuing its mission to provide impactful and forward-thinking solutions.",
    },
  ],
};

export default function TimeStart() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      {/* ================= DESKTOP ================= */}

      <section className="hidden lg:flex w-[90%] mx-auto text-white mt-[-135px] relative z-50">
        <div className="w-[60%] flex flex-col gap-5">
          <h2 className="text-[36px] font-bold mt-[-60px]">
            {timelineData.title}
          </h2>

          <div className="flex gap-10 mt-5">
            <div className="relative w-[90px] flex flex-col items-center">
              {timelineData.events.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center"
                >
                  <button
                    onClick={() => setActiveIndex(i)}
                    className={`
                      w-[60px]
                      h-[60px]
                      rounded-full
                      border-[1.8px]
                      border-[#003FCA]
                      flex
                      items-center
                      justify-center
                      font-bold
                      transition-all
                      duration-300
                      z-10
                      ${
                        activeIndex === i
                          ? "bg-[#003FCA] text-white  scale-[1.2]"
                          : "bg-[#0A0A23] text-white"
                      }
                    `}
                  >
                    {item.year}
                  </button>

                  {i !== timelineData.events.length - 1 && (
                    <div className="flex flex-col items-center">
                      <div className="h-[15px] w-[2px] bg-[#003FCA]" />
                      <div className="w-[6px] h-[6px] rounded-full bg-[#003FCA]" />
                      <div className="h-[15px] w-[2px] bg-[#003FCA]" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-[18px] pr-[10px] leading-[30px] text-[#E2DEDC]">
                    {timelineData.events[activeIndex].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="w-[40%] flex justify-center items-center">
          <img
            src="/img/imgTime.jpg"
            alt=""
            className="
              w-[90%]
              h-[390px]
              object-cover
              rounded-[24px]
            "
          />
        </div>
      </section>

      {/* ================= MOBILE ================= */}

      <section className="lg:hidden w-full px-0 mt-6">
      <div
  className="
    flex
    justify-center
    items-center
    gap-3
    pb-3
    overflow-x-auto
    overflow-y-hidden
    no-scrollbar
    bg-white
    h-[36px]
    w-full
  "
>
          {timelineData.events.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`
                w-[103px]
                h-[32px]
                rounded-[30px]
                text-[12px]
                font-extrabold
                flex
                items-center
                justify-center
                transition-all
                mt-[11px]
                ${
                  activeIndex === index
                    ? "bg-[#003FCA] text-white border-2 border-[#003FCA]"
                    : "bg-white text-[#003EC5] border border-white"
                }
              `}
            >
              {item.year}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="
              mt-5
              bg-[#15151566]
              rounded-[24px]
              p-4
              mx-4
              text-[#E2DEDC]
            "
          >
            <img
              src="/imgSmolScren/experins.png"
              alt=""
              className="
                w-full
                rounded-[24px]
              "
            />

            <h2
              className="
                mt-4
                text-center
                font-bold
                text-[20px]
                leading-[29px]
                bg-[linear-gradient(270deg,#9795FF,#FFFFFF,#FFFFFF,#BE9FFF)]
                bg-clip-text
                text-transparent
              "
            >
              {timelineData.title}
            </h2>

            <p
              onClick={() => setExpanded(!expanded)}
              className={`
                mt-3
                text-[12px]
                leading-[20px]
                cursor-pointer
                ${
                  !expanded
                    ? "line-clamp-2"
                    : ""
                }
              `}
            >
              {timelineData.events[activeIndex].description}
            </p>

            <div className="flex justify-center mt-5">
              <button
                className="
                  px-6
                  py-3
                  rounded-full
                  bg-white
                  text-[#131313]
                  text-[11px]
                  font-medium
                "
              >
                Request Service Now
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>
    </>
  );
}