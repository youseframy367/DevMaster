"use client";

import React, { useEffect, useState } from "react";
import { apiUrl } from "../lib/api"
import { motion, AnimatePresence } from "framer-motion";

const TITLE = "Dev Master Journey Through Time";
const API_URL = apiUrl("/about/experience");

export default function TimeStart() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchEvents = async () => {
      try {
        const res = await fetch(API_URL, { signal: controller.signal });
        if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);

        const data = await res.json();
        setEvents(Array.isArray(data) ? data : data?.data || []);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Error fetching years experience:", error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
    return () => controller.abort();
  }, []);

  const activeEvent = events[activeIndex];

  if (loading) {
    return <p className="text-white text-center mt-6">Loading...</p>;
  }

  if (events.length === 0) return null;

  return (
    <>
      {/* ================= DESKTOP ================= */}

      <section className="hidden lg:flex w-[90%] mx-auto text-white mt-[-135px] relative z-50">
        <div className="w-[60%] flex flex-col gap-5">
          <h2 className="text-[36px] font-bold mt-[-60px]">{TITLE}</h2>

          <div className="flex gap-10 mt-5">
            <div className="relative w-[90px] flex flex-col items-center">
              {events.map((item, i) => (
                <div key={item.id ?? i} className="flex flex-col items-center">
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
                          ? "bg-[#003FCA] text-white scale-[1.2]"
                          : "bg-[#0A0A23] text-white"
                      }
                    `}
                  >
                    {item.year}
                  </button>

                  {i !== events.length - 1 && (
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
                    {activeEvent?.description}
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
          {events.map((item, index) => (
            <button
              key={item.id ?? index}
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
              {TITLE}
            </h2>

            <p
              onClick={() => setExpanded(!expanded)}
              className={`
                mt-3
                text-[12px]
                leading-[20px]
                cursor-pointer
                ${!expanded ? "line-clamp-2" : ""}
              `}
            >
              {activeEvent?.description}
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