"use client";

import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import "./baner.css";
import ShowProject from "./showBrogect";
import { useRouter } from "next/navigation";
import { apiUrl } from "../lib/api";

const API_URL = apiUrl("/products");

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

export default function Broject({ showButton = true , showBorder=true }) {
  const router = useRouter();
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  // embla
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  // جلب الداتا من الباك
  useEffect(() => {
    const controller = new AbortController();

    const fetchProjects = async () => {
      try {
        const res = await fetch(API_URL, { signal: controller.signal });
        if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);

        const data = await res.json();
        setProjects(Array.isArray(data) ? data : data?.data || []);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Error fetching products:", error);
        }
      }
    };

    fetchProjects();
    return () => controller.abort();
  }, []);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    onSelect();
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  // لما الداتا توصل، حدّث الـ carousel
  useEffect(() => {
    if (emblaApi) emblaApi.reInit();
  }, [emblaApi, projects]);

  return (
    <>
      <div className="w-[90%] mx-auto mt-[-10px] hidden md:block">
        {showBorder&&(
          <>
        <motion.div
          variants={borderPulse}
          animate="animate"
          className="ml-[30%] w-[60%] border-b-[3px] border-blue-500 border-l-0 border-t-0"
          style={{ translateY: "27px" }}
        />

        <motion.div
          variants={borderPulse}
          animate="animate"
          className="ml-[90%] mt-[23px] h-[198px] w-[13%] rounded-r-[45px] border-[3px] border-blue-500 border-l-0 border-b-0"
        />
        </>
)}
        <div className="flex justify-between items-end mt-[-140px]">
          <div className="flex flex-col gap-[15px]">
            <h1
              data-aos="fade-up"
              className="
                font-normal
                text-[clamp(62px,5vw,105px)]
                bg-[linear-gradient(270deg,#9795FF,#FFFFFF,#FFFFFF,#BE9FFF)]
                bg-[length:400%_400%]
                bg-clip-text
                text-transparent
                animate-gradient
              "
            >
              Our Product
            </h1>

            <p
              className="text-white font-normal leading-[28px]"
              data-aos="fade-up"
            >
              We offer high-quality products that meet your needs and help you
              <br />
              achieve your goals easily and effectively.
            </p>
          </div>

          {showButton && (
            <motion.button
              data-aos="fade-up"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(59,130,246,0.7)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push("/services")}
              className="group relative overflow-hidden flex gap-[10px] cursor-pointer items-center rounded-full whitespace-nowrap bg-white px-7 py-4 text-[16px] font-medium text-[#16121E]"
            >
              All Portfollio
              <img
                src="/icon/uil_arrow-up (1).png"
                alt="arrow"
                className="h-4 w-4"
              />
            </motion.button>
          )}
        </div>

        <div className="mt-10 grid md:grid-cols-2 grid-cols-1 gap-8 relative z-[1000]">
          {projects.map((proj, index) => (
            <div
              data-aos="fade-up"
              key={proj.id ?? index}
              onClick={() => setSelectedProject(proj)}
              className="w-full text-white font-[Inter] cursor-pointer"
            >
              <img src={proj.image} alt={proj.title} className="w-full mb-4" />

              <h2 className="text-[32px] font-medium">{proj.title}</h2>

              <p className="mt-2 leading-7 font-normal">{proj.description}</p>
            </div>
          ))}
        </div>

        {selectedProject && (
          <ShowProject
            data-aos="fade-up"
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>

      <div className="block md:hidden w-[90%] mx-auto mt-[40px] overflow-hidden">
        <div className="w-[100%] flex flex-col justify-center items-center gap-[15px] mb-[25px]">
          <h2
            data-aos="fade-up"
            className="font-[500] text-[20px] text-[clamp(30px,1vw,105px)]
              bg-[linear-gradient(270deg,#9795FF,#FFFFFF,#FFFFFF,#BE9FFF)]
              bg-[length:400%_400%]
              bg-clip-text
              text-transparent
              animate-gradient"
          >
            Our Product
          </h2>

          <p
            data-aos="fade-up"
            className="flex text-[#fff] text-[10px] font-[400] w-[90%] text-center"
          >
            We offer high-quality products that meet your needs and help you
            achieve your goals easily and effectively.
          </p>
        </div>

        <div
          data-aos="fade-up"
          className="block md:hidden w-[95%] mx-auto mt-[50px] rounded-[30px] p-[1px] bg-[linear-gradient(270deg,#3B82F6,#8B5CF6,#EC4899,#3B82F6)] bg-[length:400%_400%] animate-gradient-border shadow-[0_0_25px_rgba(59,130,246,0.25)]"
        >
          <div className="bg-[#0B0B14] rounded-[30px] p-0 overflow-hidden">
            <div ref={emblaRef} className="overflow-hidden">
              <div className="flex">
                {projects.map((proj, index) => (
                  <div key={proj.id ?? index} className="flex-[0_0_100%] min-w-0">
                    <div
                      onClick={() => setSelectedProject(proj)}
                      className="text-white cursor-pointer"
                    >
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="w-full rounded-[24px] mb-0"
                      />
                      <div className="flex flex-col p-5">
                        <h2 className="text-[28px] font-medium">{proj.title}</h2>

                        <p className="mt-2 leading-7 text-white/80 text-[14px]">
                          {proj.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* controls */}
        <div className="flex items-center justify-between mt-8" data-aos="fade-up">
          <div className="flex gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi && emblaApi.scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex ? "w-6 bg-white" : "w-2 bg-white/30"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={scrollPrev}
              className="w-[42px] h-[42px] rounded-full bg-white/10 border border-white/10 backdrop-blur-[10px] flex items-center justify-center text-white"
            >
              ←
            </button>

            <button
              onClick={scrollNext}
              className="w-[42px] h-[42px] rounded-full bg-white/10 border border-white/10 backdrop-blur-[10px] flex items-center justify-center text-white"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </>
  );
}