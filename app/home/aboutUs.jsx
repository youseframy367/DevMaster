"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

export const testimonials = [
  {
    name: "Nugraha",
    role: "Founder of Mangcoding",
    avatar: "/icon/501f8c77c3ce2d5e3280f39cae87f9413a9584f2.jpg",
    text: "شركة DevMaster أثبتت أنها شريك موثوق لكل من يسعى لتطوير أعماله الرقمية. فريقهم يقدم خدمات متكاملة من تصميم وبرمجة وتسويق، مع احترافية عالية واهتمام بأدق التفاصيل. تعاوننا معهم ساعدنا على تحسين تجربة عملائنا وزيادة المبيعات بشكل ملحوظ، ونوصي بهم لأي شركة تبحث عن الجودة والتميز في مشاريعها الرقمية"
  },
  {
    name: "Fahd al-zahrany",
    role: "Project Manager",
    avatar: "/imgTwo/personTwo.png",
    text: "التعاون مع DevMaster ساعدنا على إطلاق مشاريعنا بسرعة وبجودة عالية، وحققنا نتائج ملموسة"
  },
  {
    name: "Laila AlMutairi",
    role: "Innovation Manager",
    avatar: "/imgTwo/personThree.png",
    text: "فريق DevMaster ملتزم بتقديم حلول رقمية مبتكرة تلبي احتياجاتنا بالكامل. بفضلهم، تحسنت تجربة العملاء وارتفعت كفاءة العمليات الرقمية بشكل ملحوظ."
  },
  {
    name: "Mohammed AlAli",
    role: "CEO – Al Raya Technology",
    avatar: "/imgTwo/personFor.png",
    text: "DevMaster قدمت لنا حلول مبتكرة ومتكاملة عززت من كفاءة عملياتنا الرقمية ورفعت مستوى خدماتنا للعملاء."
  },
  {
    name: "Fahad AlZahrani",
    role: "Marketing Manager",
    avatar: "/imgTwo/personFife.png",
    text: "لقد كانت تجربتنا مع شركة DevMaster استثنائية بكل المقاييس. الفريق ساهم في رفع حضورنا الرقمي وزيادة المبيعات وتحسين تجربة العملاء بشكل كبير."
  },
  {
    name: "Abdullah AlSaad",
    role: "Operations",
    avatar: "/imgTwo/personsix.png",
    text: "خدمات DevMaster من برمجة وتسويق رقمي ساعدت شركتنا على التوسع وزيادة المبيعات. الالتزام والجودة جعلتهم شركاء موثوقين"
  }
];

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

export default function AboutUs() {

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
    <section className="relative w-full md:mt-[100px] py-20">

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block">

        {/* borders */}
        <motion.div
          variants={borderPulse}
          animate="animate"
          className="absolute right-[3%] top-[-277px] w-[4%] h-[280px] border-[3px] border-blue-500 border-l-0 rounded-r-[46px]"
        />

        <motion.div
          variants={borderPulse}
          animate="animate"
          className="absolute left-[2%] top-0 w-[91%] h-[300px] border-[3px] border-blue-500 border-r-0 border-b-0 rounded-l-[46px]"
        />

        <div className="relative z-10 w-[90%] mx-auto">

          <div className="mb-10 mt-[-10px]">
            <h1 data-aos="fade-up" className="text-[clamp(40px,5vw,68px)] font-normal
            
               bg-gradient-to-l from-[#9795FF] via-white to-[#BE9FFF]
    bg-[length:400%_400%]
    bg-clip-text text-transparent
    animate-gradient
            ">
              What they say about us
            </h1>

            <p data-aos="fade-up" className="text-white mt-4 leading-[28px]">
              Our clients’ feedback reflects the quality of our services and professionalism.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {testimonials.map((t, i) => (
              <div key={i} className="rounded-[24px] p-[1px]" data-aos="fade-up">

                <div className="
                  relative z-[10]
                  rounded-[24px]
                  bg-[rgba(21,21,21,0.6)]
                  backdrop-blur-[30px]
                  p-5 min-h-[300px]
                  shadow-[-2px_0px_1px_-1px_rgba(255,255,255,0.6)]
                ">

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-3">
                      <img src={t.avatar} className="w-12 h-12 rounded-full object-cover" />
                      <div>
                        <h3 className="text-white font-medium">{t.name}</h3>
                        <p className="text-white/70 text-[12px]">{t.role}</p>
                      </div>
                    </div>

                  </div>

                  <p className="mt-5 text-white text-[14px] leading-[28px] text-right">
                    {t.text}
                  </p>

                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* ================= MOBILE SWIPER ================= */}
      <div className="md:hidden w-[90%] mx-auto">

        <div className="w-[100%] flex flex-col justify-center items-center gap-[15px] mb-[25px]">

          <h2 data-aos="fade-up" className="font-[500] text-[20px]  text-[clamp(30px,1vw,105px)]
          bg-[linear-gradient(270deg,#9795FF,#FFFFFF,#FFFFFF,#BE9FFF)]
          bg-[length:400%_400%]
          bg-clip-text
          text-transparent
          animate-gradient ">
         What they say about us
          </h2>

          <p className=" flex text-[#fff] text-[10px] font-[400] w-[90%] text-center" data-aos="fade-up">
         Our clients’ feedback reflects the quality of our services and the professionalism of our team in every project.Our clients’ feedback reflects the quality of our services and the professionalism of our team in every project.
         
          </p>

        </div>

        {/* slider */}
        <div className="overflow-hidden" ref={emblaRef} data-aos="fade-up">
          <div className="flex">

            {testimonials.map((t, i) => (
              <div key={i} className="flex-[0_0_100%] min-w-0 px-2">

                <div className="
                  rounded-[24px]
                  bg-[rgba(21,21,21,0.6)]
                  backdrop-blur-[30px]
                  p-5 min-h-[260px]
                  text-white
                ">

                  <div className="flex items-center gap-3">
                    <img src={t.avatar} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <h3 className="text-[14px]">{t.name}</h3>
                      <p className="text-white/70 text-[11px]">{t.role}</p>
                    </div>
                  </div>

                  <p className="mt-4 text-[13px] leading-6 text-white/80 text-right">
                    {t.text}
                  </p>

                </div>

              </div>
            ))}

          </div>
        </div>

        {/* controls */}
        <div className="flex items-center justify-between mt-6"data-aos="fade-up">

          {/* dots */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex ? "w-6 bg-white" : "w-2 bg-white/30"
                }`}
              />
            ))}
          </div>

          {/* arrows */}
          <div className="flex items-center gap-3">

            <button
              onClick={scrollPrev}
              className="w-[42px] h-[42px] rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white"
            >
              ←
            </button>

            <button
              onClick={scrollNext}
              className="w-[42px] h-[42px] rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white"
            >
              →
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}