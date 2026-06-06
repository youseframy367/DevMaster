
"use client";

import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";

import "./baner.css";

export default function Credit() {

    const handleNavigate = () => {};

    // desktop cards
    const staticCards = [
        {
            icon: "/icon/webApp.svg",
            title: "Website Dev",
            description:
                "Building fast, modern, and scalable websites with clean code and seamless user experience.",
            img: "/imgTwo/web.png",
            widthClass: "w-[50%]",
        },
        {
            icon: "/icon/MobileAppicon.svg",
            title: "Mobile App",
            description:
                "We design and develop modern mobile apps with smooth performance and great user experience.",
            img: "/imgTwo/uiux.png",
            widthClass: "w-[40%]",
        },
        {
            icon: "/icon/prandingIcon.svg",
            title: "Branding",
            description:
                "We build strong brand identities that stand out and stay memorable.",
            img: "/imgTwo/jj.png",
            widthClass: "w-[40%]",
        },
    ];

    const dynamicCards = [
        {
            title: "Shopify",
            description:
                "Help you build a company website that is modern, user-friendly, SEO-friendly, and has a clean design using Salla, Zid, Shopify, and WordPress.",
            icon: "/icon/sala.png",
            img: "/imgTwo/poer.png",
        },
        {
            title: "Zid",
            description:
                "Help you build a company website that is modern, user-friendly, SEO-friendly, and has a clean design using Salla, Zid, Shopify, and WordPress.",
            icon: "/icon/sala.png",
            img: "/img/Gemini_Generated_Image_fz551hfz551hfz55 (1) 2.svg",
        },
        {
            title: "Salla",
            description:
                "Help you build a company website that is modern, user-friendly, SEO-friendly, and has a clean design using Salla, Zid, Shopify, and WordPress.",
            icon: "/icon/sala.png",
            img: "/img/salla.svg",
        },
        {
            title: "WordPress",
            description:
                "Help you build a company website that is modern, user-friendly, SEO-friendly, and has a clean design using Salla, Zid, Shopify, and WordPress.",
            icon: "/icon/sala.png",
            img: "/img/wordpress 1.svg",
        },
    ];

    // desktop animation
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);

            setTimeout(() => {
                setCurrentIndex(
                    (prevIndex) =>
                        (prevIndex + 1) % dynamicCards.length
                );

                setFade(true);
            }, 300);
        }, 3000);

        return () => clearInterval(interval);
    }, [dynamicCards.length]);

    const currentDynamicCard = dynamicCards[currentIndex];

    // mobile cards
    const mobileCards = [
        ...staticCards.map(({ widthClass, ...rest }) => rest),
        ...dynamicCards,
    ];

    // embla
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
        },
        [Fade()]
    );

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
            setSelectedIndex(
                emblaApi.selectedScrollSnap()
            );
        };

        onSelect();

        emblaApi.on("select", onSelect);

        return () => {
            emblaApi.off("select", onSelect);
        };
    }, [emblaApi]);

    return (
        <>

            {/* desktop */}
            <div className="flex-col gap-10 w-full px-4 md:mt-[-150px] hidden md:flex">

                <div
                    className="flex flex-row items-center justify-center w-[95%] mx-auto h-[500px] z-[200] gap-5 -mt-[130px]"
                    data-aos="fade-up"
                >

                    {staticCards.slice(0, 2).map((card, idx) => (

                        <div
                            key={idx}
                            onClick={handleNavigate}
                            data-aos="fade-up"
                            className={`group relative flex ${card.widthClass} h-[350px] text-white rounded-[24px] overflow-hidden bg-white/10 backdrop-blur-[30px] transition-all duration-300 ease-in-out hover:bg-[#003EC5] hover:scale-[1.02] hover:shadow-2xl cursor-pointer`}
                        >

                            <div className="w-[65%] m-5 flex flex-col justify-between h-[85%]">

                                <div>

                                    <div className="w-[60px] h-[60px] bg-white/20 backdrop-blur-[20px] flex justify-center items-center rounded-full">
                                        <img src={card.icon} alt="icon" />
                                    </div>

                                    <p className="text-[32px] font-normal font-sans tracking-wide">
                                        {card.title}
                                    </p>

                                    <p className="w-[230px] leading-[28px] mt-2 text-white/90">
                                        {card.description}
                                    </p>

                                </div>

                                <button className="bg-transparent cursor-pointer flex items-center text-white font-normal underline border-none outline-none mt-2 hover:text-white/80">

                                    Start with us

                                    <img
                                        src="/icon/uil_arrow-up(1).png"
                                        alt="arrow"
                                        className="ml-1"
                                    />

                                </button>

                            </div>

                            <img
                                src={card.img}
                                alt="illustration"
                                className="absolute right-[-5%] top-[-20%] w-[406px] h-[406px] object-contain translate-x-[100px] translate-y-[120px] transition-transform duration-500 ease-in-out group-hover:translate-x-[80px] group-hover:translate-y-[100px]"
                            />

                        </div>
                    ))}
                </div>

                <div
                    className="flex flex-row items-center justify-center w-[95%] mx-auto h-[500px] z-[200] gap-5 -mt-[130px]"
                    data-aos="fade-up"
                >

                    <div
                        onClick={handleNavigate}
                        className="group relative flex w-[40%] h-[350px] text-white rounded-[24px] overflow-hidden bg-white/10 backdrop-blur-[30px] transition-all duration-300 ease-in-out hover:bg-[#003EC5] hover:scale-[1.02] hover:shadow-2xl cursor-pointer"
                    >

                        <div className="w-[65%] m-5 flex flex-col justify-between h-[85%]">

                            <div>

                                <div className="w-[60px] h-[60px] bg-white/20 backdrop-blur-[20px] flex justify-center items-center rounded-full">
                                    <img src={staticCards[2].icon} alt="icon" />
                                </div>

                                <p className="text-[32px] font-normal font-sans tracking-wide">
                                    {staticCards[2].title}
                                </p>

                                <p className="w-[230px] leading-[28px] mt-2 text-white/90">
                                    {staticCards[2].description}
                                </p>

                            </div>

                            <button className="bg-transparent cursor-pointer flex items-center text-white font-normal underline border-none outline-none mt-2 hover:text-white/80">

                                Start with us

                                <img
                                    src="/icon/uil_arrow-up(1).png"
                                    alt="arrow"
                                    className="ml-1"
                                />

                            </button>

                        </div>

                        <img
                            src={staticCards[2].img}
                            alt="illustration"
                            className="absolute right-0 bottom-0 w-[406px] h-[406px] object-contain translate-x-[100px] translate-y-[120px] transition-transform duration-500 ease-in-out group-hover:translate-x-[80px] group-hover:translate-y-[100px]"
                        />

                    </div>

                    <div
                        onClick={handleNavigate}
                        className="group relative flex w-[50%] h-[350px] text-white rounded-[24px] overflow-hidden bg-white/10 backdrop-blur-[30px] transition-all duration-300 ease-in-out hover:bg-[#003EC5] hover:scale-[1.02] hover:shadow-2xl cursor-pointer"
                    >

                        <div
                            className={`w-full h-full flex transition-opacity duration-300 ${
                                fade ? "opacity-100" : "opacity-0"
                            }`}
                        >

                            <div className="w-[65%] m-5 flex flex-col justify-between h-[85%] z-10">

                                <div>

                                    <div className="w-[60px] h-[60px] bg-white/20 backdrop-blur-[20px] flex justify-center items-center rounded-full">
                                        <img
                                            src={currentDynamicCard.icon}
                                            alt="icon"
                                        />
                                    </div>

                                    <p className="text-[32px] font-normal font-sans tracking-wide">
                                        {currentDynamicCard.title}
                                    </p>

                                    <p className="w-[310px] leading-[28px] mt-2 text-white/90 text-[14px]">
                                        {currentDynamicCard.description}
                                    </p>

                                </div>

                                <button className="bg-transparent cursor-pointer flex items-center text-white font-normal underline border-none outline-none mt-2 hover:text-white/80">

                                    Start with us

                                    <img
                                        src="/icon/uil_arrow-up(1).png"
                                        alt="arrow"
                                        className="ml-1"
                                    />

                                </button>

                            </div>

                            <img
                                src={currentDynamicCard.img}
                                alt="platform graphics"
                                className="absolute left-[32%] top-[10%] w-[462px] h-[238px] object-contain translate-x-[20px] translate-y-[40px] transition-transform duration-500 ease-in-out group-hover:translate-y-[20px]"
                            />

                        </div>

                        <div className="absolute bottom-3 left-5 flex gap-1.5 z-20">

                            {dynamicCards.map((_, index) => (

                                <span
                                    key={index}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${
                                        index === currentIndex
                                            ? "w-4 bg-white"
                                            : "w-1.5 bg-white/40"
                                    }`}
                                />

                            ))}

                        </div>

                    </div>

                </div>

            </div>



{/* mobile */}
<div className="block md:hidden px-4 mt-[95vh] flex flex-col overflow-hidden">
    <div className="w-[100%] flex flex-col justify-center items-center gap-[15px] mb-[25px]">

        <h2 className="font-[500] text-[20px]  text-[clamp(30px,1vw,105px)]
          bg-[linear-gradient(270deg,#9795FF,#FFFFFF,#FFFFFF,#BE9FFF)]
          bg-[length:400%_400%]
          bg-clip-text
          text-transparent
          animate-gradient ">Services</h2>
          <p className=" flex text-[#fff] text-[10px] font-[400] w-[90%] text-center">
            We provide everything your business needs to grow: advertising campaigns, professional designs, website and mobile app development, and full marketing services to ensure your success.
          </p>
    </div>


    <div ref={emblaRef} className="overflow-hidden">

        <div className="flex">

            {mobileCards.map((card, index) => (

                <div
                    key={index}
                    className="flex-[0_0_100%] min-w-0"
                >

                    <div
                        onClick={handleNavigate}
                        className="relative h-[470px] rounded-[28px] overflow-hidden bg-white/10 backdrop-blur-[30px] border border-white/10 text-white p-5"
                    >

                        <div className="relative z-10 flex flex-col justify-between h-full">

                            {/* top section */}
                            <div>

                                <div className="flex gap-[15px] items-center">

                                    <div className="w-[60px] h-[60px] rounded-full bg-white/20 flex items-center justify-center">
                                        <img
                                            src={card.icon}
                                            alt="icon"
                                            className="w-[28px]"
                                        />
                                    </div>

                                    <h3 className="text-[26px] font-normal">
                                        {card.title}
                                    </h3>

                                </div>

                                <p className="mt-4 text-[14px] leading-7 text-white/80">
                                    {card.description}
                                </p>

                            </div>

                            {/* image */}
                            <img
                                src={card.img}
                                alt="card"
                                className="absolute left-[20%] bottom-[40px] w-[220px] max-h-[250px] object-contain opacity-90"
                            />

                            {/* button */}
                            <button className="flex items-center gap-1 underline mt-4 z-20 relative">
                                Start with us
                                <img
                                    src="/icon/uil_arrow-up(1).png"
                                    alt="arrow"
                                    className="w-4"
                                />
                            </button>

                        </div>

                    </div>

                </div>

            ))}

        </div>

    </div>

    {/* controls */}
    <div className="flex items-center justify-between mt-6">

        <div className="flex gap-2">

            {mobileCards.map((_, index) => (

                <button
                    key={index}
                    className={`h-2 rounded-full transition-all duration-300 ${
                        index === selectedIndex
                            ? "w-6 bg-white"
                            : "w-2 bg-white/30"
                    }`}
                />

            ))}

        </div>

        <div className="flex items-center gap-3">

            <button
                onClick={scrollPrev}
                className="w-[42px] h-[42px] rounded-full bg-white/10 backdrop-blur-[10px] border border-white/10 flex items-center justify-center text-white"
            >
                ←
            </button>

            <button
                onClick={scrollNext}
                className="w-[42px] h-[42px] rounded-full bg-white/10 backdrop-blur-[10px] border border-white/10 flex items-center justify-center text-white"
            >
                →
            </button>

        </div>

    </div>

</div>

        

        </>
    );
}

