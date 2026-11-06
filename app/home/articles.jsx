"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";



export default function Articles({
    numper = 3,
    showBotton = true,
    gap = 20,
    showBorder = true,
}) {
    const router = useRouter();
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);


    const ARTICLES_URL = "http://localhost:3001/articles";
const [articles, setArticles] = useState([]);
const [loading, setLoading] = useState(true);
const items = articles.slice(0, numper);

useEffect(() => {
    const fetchArticles = async () => {
        try {
            const res = await fetch(ARTICLES_URL);

            if (!res.ok) {
                throw new Error(`HTTP Error: ${res.status}`);
            }

            const data = await res.json();

            setArticles(Array.isArray(data) ? data : data?.data || []);
        } catch (error) {
            console.error("Error fetching articles:", error);
        } finally {
            setLoading(false);
        }
    };

    fetchArticles();
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

        emblaApi.on("select", onSelect);
        onSelect();

        return () => emblaApi.off("select", onSelect);
    }, [emblaApi]);


    /* ================= ANIMATION ================= */
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
        <section className="w-full md:py-16  relative">
          {showBorder && (
                <>
                    {/* borders */}
                    <motion.div
                        variants={borderPulse}
                        animate="animate"
                        className="absolute hidden md:block right-[3%] top-[-277px] w-[4%] h-[280px] border-[3px] border-blue-500 border-l-0 rounded-r-[46px]"
                    />

                    <motion.div
                        variants={borderPulse}
                        animate="animate"
                        className="absolute hidden md:block left-[2%] top-0 w-[91%] h-[300px] border-[3px] border-blue-500 border-r-0 border-b-0 rounded-l-[46px]"
                    />
                </>
            )}

            {/* ================= DESKTOP GRID ================= */}
            <div className="">


                <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-6">

                    <div className="hidden md:block">
                        <h1 data-aos="fade-up" className="
                        
                            bg-gradient-to-l from-[#9795FF] via-white to-[#BE9FFF]
                            bg-[length:400%_400%]
                            bg-clip-text text-transparent
                            animate-gradient
                            text-center
                        
                        text-[clamp(35px,5vw,68px)] font-normal bg-[linear-gradient(270deg,#9795FF,#FFFFFF,#BE9FFF)] bg-clip-text text-transparent">
                            Find out the latest articles
                        </h1>

                        <p data-aos="fade-up" className="text-white mt-3 leading-[28px]">
                            Explore our latest articles and new content we publish regularly.
                        </p>
                    </div>
                    {showBotton && (
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
                            <span>All article</span>
                            <img src="/icon/uil_arrow-up (1).png" alt="" />
                        </motion.button>
                    )}
                </div>

                <div
                    className="hidden md:grid w-[90%] mx-auto mt-10 relative z-9999"
                    style={{
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: `${gap}px`,
                    }}
                >
                    {items.map((item, index) => (
                        <div
                            data-aos="fade-up"
                            key={index}
                            className="rounded-[20px] bg-[rgba(21,21,21,0.6)]  backdrop-blur-[30px] p-4 shadow-[-1px_-1px_1px_rgba(168,166,166,0.4)]"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full rounded-[10px]"
                            />

                            <div className="flex justify-between text-white mt-3">
                                <p className="font-semibold">{item.title}</p>
                                <p className="text-[#969696] text-[13px]">{item.date}</p>
                            </div>

                            <p className="text-[#CAC6DD] text-[14px] mt-2">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            {/* ================= MOBILE SWIPER ================= */}
            <div className="md:hidden w-[90%] mx-auto mt-0">
                <div className="w-[100%] flex flex-col justify-center items-center gap-[15px] mb-[25px]">

                    <h2 data-aos="fade-up" className="font-[500] text-[20px]  text-[clamp(30px,1vw,105px)]
                        bg-[linear-gradient(270deg,#9795FF,#FFFFFF,#FFFFFF,#BE9FFF)]
                        bg-[length:400%_400%]
                        bg-clip-text
                        text-transparent
                        animate-gradient ">
                        Our Product
                    </h2>

                    <p data-aos="fade-up" className=" flex text-[#fff] text-[10px] font-[400] w-[90%] text-center">
                        We offer high-quality products that meet your needs and help you
                        achieve your goals easily and effectively.
                    </p>

                </div>

                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">

                        {items.map((item, index) => (
                            <div key={index} className="flex-[0_0_100%] min-w-0 px-2" data-aos="fade-up" >

                                <div className="rounded-[20px] bg-[rgba(21,21,21,0.6)] backdrop-blur-[30px] p-4 text-white">

                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full rounded-[10px]"
                                    />

                                    <div className="flex justify-between mt-3">
                                        <p className="font-semibold text-[14px]">
                                            {item.title}
                                        </p>
                                        <p className="text-[#969696] text-[12px]">
                                            {item.date}
                                        </p>
                                    </div>

                                    <p className="text-[#CAC6DD] text-[13px] mt-2">
                                        {item.description}
                                    </p>

                                </div>
                            </div>
                        ))}

                    </div>
                </div>

                {/* controls */}
                <div className="flex justify-between items-center mt-6" data-aos="fade-up" >

                    <div className="flex gap-2">
                        {items.map((_, i) => (
                            <button
                                key={i}
                                className={`h-2 rounded-full transition-all ${i === selectedIndex ? "w-6 bg-white" : "w-2 bg-white/30"
                                    }`}
                            />
                        ))}
                    </div>

                    <div className="flex gap-3">
                        <button
                            onClick={scrollPrev}
                            className="w-10 h-10 rounded-full bg-white/10 text-white"
                        >
                            ←
                        </button>

                        <button
                            onClick={scrollNext}
                            className="w-10 h-10 rounded-full bg-white/10 text-white"
                        >
                            →
                        </button>
                    </div>

                </div>
            </div>

        </section>
    );
}