"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import "./baner.css";

export default function DigenToBaner() {
  const router = useRouter();

 
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
    <section className="relative w-full overflow-hidden px-[5%] py-32 mt-[853px] hidden md:block">

    
      <div className="relative w-full">
       

        <motion.div
          variants={borderPulse}
          animate="animate"
          className="absolute right-0 top-[-42px] h-[198px] w-[10%] rounded-r-[45px] border-[3px] border-blue-500 border-l-0 border-t-0"
        />

        <motion.div
          variants={borderPulse}
         
          className="ml-[60%] w-[30%] border-b-[3px] border-blue-500 border-l-0 border-t-0"
          style={{ translateY: "153px" }}
        />

        <div className="relative z-10 -translate-y-[119px]">

          <div className="flex items-center justify-between">

            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[68px] whitespace-nowrap font-normal leading-[75px] bg-[linear-gradient(270deg,#9795FF,#FFFFFF,#FFFFFF,#BE9FFF)] bg-clip-text text-transparent animate-gradient
              
               text-[clamp(60px,5vw,105px)]
          bg-[linear-gradient(270deg,#9795FF,#FFFFFF,#FFFFFF,#BE9FFF)]
          bg-[length:400%_400%]
          bg-clip-text
          text-transparent
          animate-gradient 
              "
            >
              DevMaster Can Help Develop
              <br />
              your Company for the Future
            </motion.h1>

            <motion.button
  
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(59,130,246,0.7)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push("/serverReqst")}
              className="group relative overflow-hidden rounded-full bg-white px-7 py-4 text-[16px] font-medium text-[#16121E] transition-all duration-300"
            >
              <span
                className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.8),transparent)] translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"
              />

              <span className="relative z-10 flex items-center gap-2 whitespace-nowrap cursor-pointer">
                Know More
                <img
                  src="/icon/uil_arrow-up (1).png"
                  alt="arrow"
                  className="h-4 w-4"
                />
              </span>
            </motion.button>
          </div>

         
          <motion.p
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-6 w-[1000px] text-white leading-[28px]"
          >
            We provide everything your business needs to grow:
            advertising campaigns, professional designs,
            website and mobile app development, and full
            marketing services to ensure your success.
          </motion.p>
        </div>
      </div>

      <div className="relative mt-[-80px]">


        <motion.div
          variants={borderPulse}
          animate="animate"
          className="ml-[0%] h-[400px] w-[60%] rounded-l-[46px] border-[3px]  border-blue-500 border-b-0 border-r-0"
        />

        <div className="absolute left-[2%] top-[20px] w-[98%]">

          <motion.h2
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[68px] font-normal leading-[75px] bg-[linear-gradient(270deg,#9795FF,#FFFFFF,#FFFFFF,#BE9FFF)] bg-clip-text text-transparent
            
                 text-[clamp(60px,5vw,105px)]
          bg-[linear-gradient(270deg,#9795FF,#FFFFFF,#FFFFFF,#BE9FFF)]
          bg-[length:400%_400%]
          bg-clip-text
          text-transparent
          animate-gradient 
            
            "
          >
            Let’s work together
            <br />
            with our us
          </motion.h2>

          <div className="mt-10 flex w-[100%] justify-between">
            <motion.p
          
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
         
              className="w-full max-w-[600px] leading-[28px] text-white"
            >
              We are here to support you every step of
              the way toward your digital project’s success.
            </motion.p>

            {/* Button */}
            <motion.button
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}

              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(59,130,246,0.7)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push("/services")}
              className="group relative overflow-hidden rounded-full bg-white px-7 py-4 text-[16px] font-medium text-[#16121E]"
            >
              <span
                className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.8),transparent)] translate-x-[-200%] transition-transform duration-1000 group-hover:translate-x-[200%]"
              />

              <span className="relative z-10 flex items-center gap-2 cursor-pointer">
                Get Started
                <img
                  src="/icon/uil_arrow-up (1).png"
                  alt="arrow"
                  className="h-4 w-4"
                />
              </span>
            </motion.button>
          </div>
        </div>
      </div>

    </section>
  );
}