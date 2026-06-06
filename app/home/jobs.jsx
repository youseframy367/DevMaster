"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

/* ================= DATA ================= */
export const jops = {
  jopOne: {
    name: "Sales Executive",
    site: "Ray-KSA",
    time: "Full-Time",
    count: "01",
    Deadline: "30 Dec, 2025",
    detales: {
      one: "Manage client accounts and maintain strong relationships.",
      two: "Coordinate projects and ensure timely delivery.",
      three: "Develop strategies to achieve business goals.",
      for: "Monitor performance and provide regular reports.",
      fife: "Collaborate with internal teams to optimize results.",
    },
    JobDuties: {
      one: "Manage daily operations and ensure tasks are completed efficiently",
      two: "Communicate effectively with clients and team members.",
      three:
        "Ability to communicate effectively in English, both written and spoken.",
    },
  },

  jopTwo: {
    name: "Full-Stack Developer",
    site: "Mansoura, Egypt",
    time: "Full-Time",
    count: "01",
    Deadline: "30 Dec, 2025",
    detales: {
      one: "Manage client accounts and maintain strong relationships.",
      two: "Coordinate projects and ensure timely delivery.",
      three: "Develop strategies to achieve business goals.",
      for: "Monitor performance and provide regular reports.",
      fife: "Collaborate with internal teams to optimize results.",
    },
    JobDuties: {
      one: "Manage daily operations and ensure tasks are completed efficiently",
      two: "Communicate effectively with clients and team members.",
      three:
        "Ability to communicate effectively in English, both written and spoken.",
    },
  },

  jopThree: {
    name: "SEO Specialist",
    site: "Ray-KSA",
    time: "Full-Time",
    count: "01",
    Deadline: "30 Dec, 2025",
    detales: {
      one: "Manage client accounts and maintain strong relationships.",
      two: "Coordinate projects and ensure timely delivery.",
      three: "Develop strategies to achieve business goals.",
      for: "Monitor performance and provide regular reports.",
      fife: "Collaborate with internal teams to optimize results.",
    },
    JobDuties: {
      one: "Manage daily operations and ensure tasks are completed efficiently",
      two: "Communicate effectively with clients and team members.",
      three:
        "Ability to communicate effectively in English, both written and spoken.",
    },
  },

  jopFor: {
    name: "Front-End Developer",
    site: "Mansoura, Egypt",
    time: "Full-Time",
    count: "01",
    Deadline: "30 Dec, 2025",
    detales: {
      one: "Manage client accounts and maintain strong relationships.",
      two: "Coordinate projects and ensure timely delivery.",
      three: "Develop strategies to achieve business goals.",
      for: "Monitor performance and provide regular reports.",
      fife: "Collaborate with internal teams to optimize results.",
    },
    JobDuties: {
      one: "Manage daily operations and ensure tasks are completed efficiently",
      two: "Communicate effectively with clients and team members.",
      three:
        "Ability to communicate effectively in English, both written and spoken.",
    },
  },

  jopFife: {
    name: "Social Media Specialist",
    site: "Ray-KSA",
    time: "Full-Time",
    count: "02",
    Deadline: "30 Dec, 2025",
    detales: {
      one: "Manage client accounts and maintain strong relationships.",
      two: "Coordinate projects and ensure timely delivery.",
      three: "Develop strategies to achieve business goals.",
      for: "Monitor performance and provide regular reports.",
      fife: "Collaborate with internal teams to optimize results.",
    },
    JobDuties: {
      one: "Manage daily operations and ensure tasks are completed efficiently",
      two: "Communicate effectively with clients and team members.",
      three:
        "Ability to communicate effectively in English, both written and spoken.",
    },
  },

  jopSix: {
    name: "Product Designer (UI/UX Designer)",
    site: "Mansoura, Egypt",
    time: "Full-Time",
    count: "01",
    Deadline: "30 Dec, 2025",
    detales: {
      one: "Manage client accounts and maintain strong relationships.",
      two: "Coordinate projects and ensure timely delivery.",
      three: "Develop strategies to achieve business goals.",
      for: "Monitor performance and provide regular reports.",
      fife: "Collaborate with internal teams to optimize results.",
    },
    JobDuties: {
      one: "Manage daily operations and ensure tasks are completed efficiently",
      two: "Communicate effectively with clients and team members.",
      three:
        "Ability to communicate effectively in English, both written and spoken.",
    },
  },

  jops7: {
    name: "Product Designer (UI/UX Designer)",
    site: "Ray-KSA",
    time: "Full-Time",
    count: "02",
    Deadline: "30 Dec, 2025",
    detales: {
      one: "This text can be replaced with an alternative text that expresses the meaning",
      two: "This text can be replaced with an alternative text that expresses the meaning",
      three: "This text can be replaced with an alternative text that expresses the meaning",
    },
    JobDuties: {
      one: "This text can be replaced with an alternative text that expresses the meaning",
      two: "This text can be replaced with an alternative text that expresses the meaning",
      three: "This text can be replaced with an alternative text that expresses the meaning",
    },
  },
};

/* ================= COMPONENT ================= */

export default function Jobs({ numper = 6, showbutton = true }) {


  // animation
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



  const router = useRouter();

  const items = Object.values(jops).slice(0, numper);

  /* ================= EMBLA MOBILE ================= */
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

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

    emblaApi.on("select", onSelect);
    onSelect();

    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  return (
    <section className="w-full  ">
     {/* borders */}
            <motion.div
                variants={borderPulse}
                animate="animate"
                className=" relative z-0 hidden md:block left-[93%] top-[-197px] w-[4%] h-[250px] border-[3px] border-blue-500 border-l-0 rounded-r-[46px]"
            />

            <motion.div
                variants={borderPulse}
                animate="animate"
                className="relative  hidden md:block left-[2%] top-[-200px] w-[91%] h-[300px] border-[3px] border-blue-500 border-r-0 border-b-0 rounded-l-[46px]"
            />

      <div className="w-[90%] mx-auto flex justify-between items-end md:mt-[-440px]  flex-wrap gap-6">

        <div className="hidden md:block" >
          <h1
            data-aos="fade-up"
            className="
                font-medium
                text-[30px] md:text-[40px] lg:text-[68px]

                bg-gradient-to-l from-[#9795FF] via-white to-[#BE9FFF]
                bg-[length:400%_400%]
                bg-clip-text text-transparent
                animate-gradient
                text-center
              "
          >
            Jobs Available Now
          </h1>

          <p
            data-aos="fade-up"
            className="
              text-white
              mt-3
              w-[90%] 
              
              md:text-start
              text-center
              text-[12px] md:text-[14px] lg:text-[16px]
              font-normal
              leading-[22px] md:leading-[26px] lg:leading-[28px]
            "
          >
            We are looking for new talents to join our team.
          </p>
        </div>

        {showbutton && (
          <motion.button
            data-aos="fade-up"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(59,130,246,0.7)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/services")}
            className="
             hidden md:flex
             items-center justify-center
             gap-2
             rounded-full
             bg-white
             px-7 py-4
             text-[16px]
             font-medium
             text-[#16121E]
             overflow-hidden
             relative
             cursor-pointer
           "
          >
            <span>All Jobs</span>
            <img src="/icon/uil_arrow-up (1).png" alt="" />
          </motion.button>
        )}
      </div>

      {/* ================= DESKTOP GRID ================= */}
      <div className="hidden md:grid w-[90%] mx-auto mt-10 grid-cols-3 gap-5">

        {items.map((item, i) => (
          <div
            data-aos="fade-up"
            key={i}
            onClick={() => router.push("/detailsJop", { state: item })}
            className="cursor-pointer bg-[rgba(21,21,21,0.6)] flex flex-col  shadow-[-2px_0px_1px_-1px_rgba(255,255,255,0.6)]  gap-[10px] h-[170px] backdrop-blur-[30px] rounded-[24px] p-4 text-white"
          >
            <h2 className="text-[18px] font-medium">{item.name}</h2>

            <div className="flex justify-between text-[12px] mt-3">
              <div className="flex items-center gap-[6px]">   <img src="/icon/MapPinLine.png"></img> {item.site}</div>
              <div className="flex items-center gap-[6px]">   <img src="/icon/Briefcase.png"></img> {item.time}</div>
               <div className="flex items-center gap-[6px]">   <img src="/icon/ClipboardText.png"></img> {item.count} Vacancy</div>
            </div>

            <div className="h-[1px] bg-white/10 my-3" />

            <p className="text-[13px]">
              Deadline: <span className="text-gray-400">{item.Deadline}</span>
            </p>
          </div>
        ))}
      </div>

     {/* ================= MOBILE SWIPER ================= */}
    <div className="md:hidden w-[90%] mx-auto mt-10">
      
      {/* Header */}
      <div className="w-full flex flex-col justify-center items-center gap-[15px] mb-[25px]">
        
        <h2
        data-aos="fade-up"
          className="
          font-[500]
          text-[30px]
          bg-[linear-gradient(270deg,#9795FF,#FFFFFF,#FFFFFF,#BE9FFF)]
          bg-[length:400%_400%]
          bg-clip-text
          text-transparent
          animate-gradient
          text-center
        "
        >
          Jobs Available Now
        </h2>

        <p data-aos="fade-up" className="text-[#fff] text-[12px] font-[400] w-[90%] text-center leading-[22px]">
          We are looking for new talents to join our team.
        </p>
      </div>

      {/* Slider */}
      <div className="overflow-hidden" ref={emblaRef}>
        
        <div className="flex">
          
          {items.map((item, i) => (
            <div key={i} data-aos="fade-up" className="flex-[0_0_100%] min-w-0 px-2">
              
              <motion.div
                whileTap={{ scale: 0.97 }}
              
                onClick={() =>
                  router.push("/detailsJop", { state: item })
                }
                className="
                  cursor-pointer
                  bg-[rgba(21,21,21,0.6)]
                  backdrop-blur-[30px]
                  rounded-[24px]
                  p-5
                  text-white
                  border border-white/5
                  shadow-[-2px_0px_1px_-1px_rgba(255,255,255,0.6)]
                  flex flex-col
                  gap-[10px]
                  min-h-[180px]
                "
              >
                <h2 className="text-[18px] font-medium leading-[28px]">
                  {item.name}
                </h2>

                <div className="flex  justify-between text-[12px] mt-3">
                  
                  <div className="flex items-center gap-[8px] text-gray-300">
                    <img
                      src="/icon/MapPinLine.png"
                      alt=""
                      className="w-[16px] h-[16px]"
                    />
                    {item.site}
                  </div>

                  <div className="flex items-center gap-[8px] text-gray-300">
                    <img
                      src="/icon/Briefcase.png"
                      alt=""
                      className="w-[16px] h-[16px]"
                    />
                    {item.time}
                  </div>

                  <div className="flex items-center gap-[8px] text-gray-300">
                    <img
                      src="/icon/ClipboardText.png"
                      alt=""
                      className="w-[16px] h-[16px]"
                    />
                    {item.count} Vacancy
                  </div>
                </div>

                <div className="h-[1px] bg-white/10 my-3" />

                <p className="text-[13px]">
                  Deadline:
                  <span className="text-gray-400 ml-1">
                    {item.Deadline}
                  </span>
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-between items-center mt-6">
        
        {/* Dots */}
        <div className="flex gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === selectedIndex
                  ? "w-6 bg-white"
                  : "w-2 bg-white/30"
              }`}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="flex gap-3">
          
          <button
            onClick={scrollPrev}
            className="
              w-10 h-10
              rounded-full
              bg-white/10
              text-white
              border border-white/10
              backdrop-blur-md
              transition-all duration-300
            "
          >
            ←
          </button>

          <button
            onClick={scrollNext}
            className="
              w-10 h-10
              rounded-full
              bg-white/10
              text-white
              border border-white/10
              backdrop-blur-md
              transition-all duration-300
            "
          >
            →
          </button>
        </div>
      </div>
    </div>
    </section>
      );
    }