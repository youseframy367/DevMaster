"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Header.css";

export default function Header() {
  const [scrollTop, setScrollTop] = useState(false);
  const [openSidbar, setOpenSidbar] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith("/dashboard")) return undefined;

    const handleScroll = () => {
      const nextScrollState = window.scrollY > 780;
      setScrollTop((currentScrollState) => currentScrollState === nextScrollState ? currentScrollState : nextScrollState);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const navItems = [
    "Home",
    "About",
    "Services",
    "Products",
    "News",
    "Jobs",
    "Contact Us",
  ];

  const routes = {
    Home: "/",
    About: "/about",
    Services: "/serves",
    Products: "/progect",
    News: "/articles",
    Jobs: "/JobsAll",
    "Contact Us": "/Contact",
  };

  const sidbarMopile = [
    {
      title: "Home",
      router: "/",
      icon: "/icon/HomeIcon.svg",
      iconActive: "/icon/HomeIconActive.svg",
    },
    {
      title: "About Us",
      router: "/about",
      icon: "/icon/about.svg",
      iconActive: "/icon/aboutUsIcon.png",
    },
    {
      title: "Contact Us",
      router: "/Contact",
      icon: "/icon/contactUs.svg",
      iconActive: "/icon/contactUsIconActive.svg",
    },
    {
      title: "Our Jobs",
      router: "/JobsAll",
      icon: "/icon/JopsIcon.svg",
      iconActive: "/icon/ourJopIconActive.svg",
    },
    {
      title: "Our Projects",
      router: "/projects",
      icon: "/icon/progectIcon.svg",
      iconActive: "/icon/ourBrogectIconActive.svg",
    },
    {
      title: "Our Services",
      router: "/services",
      icon: "/icon/servesIcon.svg",
      iconActive: "/icon/OurServesIconActive.svg",
    },
    {
      title: "Our News",
      router: "/news",
      icon: "/icon/NewsIcon.svg",
      iconActive: "/icon/OurNewsIconActive.svg",
    },
  ];

  const isServerRequest = pathname === "/serverReqst";

  if (pathname.startsWith("/dashboard")) return null;

  return (
    <>
      <header>
        {/* Desktop Design */}
        <div
          className={`
            hidden md:flex
            fixed top-0 left-0 z-[8888]
            items-center justify-around
            w-full h-[79px]
            px-[40px]
            font-['Roboto']
            transition-all duration-500

            ${
              scrollTop
                ? "bg-white text-black shadow-lg"
                : "bg-[linear-gradient(90deg,#01002B4D,#01002B4D)] text-white"
            }
          `}
        >
          <img
            data-aos="fade-up"
            src={scrollTop ? "/icon/result 1.png" : "/icon/logoWhite.svg"}
            alt="Logo"
            className="h-[50px]"
          />

          <ul className="flex gap-[30px] list-none p-0 m-0" data-aos="fade-up">
            {navItems.map((item) => {
              const isActive = pathname === routes[item];

              return (
                <li
                  key={item}
                  className={`
                    relative
                    font-normal
                    text-[16px]
                    transition-all duration-300
                    ${isActive ? "active-nav" : ""}
                  `}
                >
                  <Link
                    href={routes[item] || "/"}
                    className="block px-[8px] py-[4px] cursor-pointer text-inherit no-underline"
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div
            data-aos="fade-up"
            className={`
              rounded-[40px]
              p-[1px]
              inline-block
              overflow-hidden
              border border-transparent
              bg-[length:300%_300%]
              transition-all duration-500
              bg-[linear-gradient(90deg,#00f2fe,#003cbe,#00f2fe)]
              animate-borderShift
            `}
          >
            <Link
              href="/servesRequest"
              className={`
                group
                border-none
                rounded-[38px]
                px-[18px]
                py-[10px]
                cursor-pointer
                no-underline
                transition-all duration-500
                flex items-center

                ${scrollTop ? "bg-white text-black" : "bg-black text-white"}
              `}
            >
              <span
                className={`
                  transition-all duration-500
                  ${scrollTop ? "text-black active-button" : "text-white"}
                `}
              >
                Service Request
              </span>

              <img
                src={
                  scrollTop
                    ? "/icon/uil_arrow-up.svg"
                    : "/icon/uil_arrow-up.png"
                }
                alt="arrow up"
                className={`
                  w-4 h-4 ml-2 relative z-50
                  transition-all duration-500
                  ${scrollTop ? "invert-0" : "invert"}
                `}
              />
            </Link>
          </div>
        </div>

        {/* Mobile Design */}
        <div className="relative top-8 left-8 w-20 md:hidden z-50">
          <img
            data-aos="fade-up"
            src="/img/menu-burger 1.svg"
            alt="menu"
            onClick={() => setOpenSidbar(true)}
          />

          {/* Mobile Sidebar */}
          <div
            className={`
              fixed top-0 left-0 p-0 h-[90vh] w-[300px]
              bg-[#ffffff]
              z-[9999]
              md:hidden
              rounded-br-[40px]
              transform transition-all duration-500 ease-in-out

              ${
                openSidbar
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0"
              }
            `}
          >
            <div
              className="flex items-center gap-[20px] py-[15px] px-[5px] mb-10"
              data-aos="fade-up"
            >
              <img src="/icon/result 1.png" alt="logo" className="w-[85px]" />

              <p
                className="
                  font-[600]
                  text-[20px]
                  bg-[linear-gradient(270deg,#003EC5,#001E5F)]
                  bg-[length:400%_400%]
                  bg-clip-text
                  text-transparent
                  animate-gradient
                "
              >
                DevMaster
              </p>
            </div>

            <div className="w-full h-[1px] bg-gradient-to-r mt-[-30px] from-[#003EC5] via-[#00329F] to-[#002E92]" />

            {/* Nav Items */}
            <ul className="flex flex-col gap-5 my-[20px] list-none p-0">
              {sidbarMopile.map((item) => {
                const isActive = pathname === item.router;

                return (
                  <li
                    key={item.router}
                    data-aos="fade-left"
                    className="w-[80%] mx-auto"
                  >
                    <Link
                      href={item.router || "/"}
                      onClick={() => setOpenSidbar(false)}
                      className={`
                        border-[.5px]
                        w-full
                        h-[45px]
                        rounded-[10px]
                        px-[20px]
                        text-[16px]
                        font-[400]
                        font-inter
                        no-underline
                        cursor-pointer
                        transition-all duration-300
                        flex items-center gap-4

                        ${
                          isActive
                            ? "justify-center text-white border-transparent bg-gradient-to-r from-[#003EC5] via-[#00329F] to-[#002E92]"
                            : "border-[#003EC5] bg-[linear-gradient(270deg,#003EC5,#001E5F)] bg-[length:400%_400%] bg-clip-text text-transparent animate-gradient hover:text-cyan-300 hover:translate-x-2"
                        }
                      `}
                    >
                      <img
                        src={isActive ? item.iconActive : item.icon}
                        alt={item.title}
                        width="20px"
                        height="20px"
                      />

                      <p>{item.title}</p>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="w-full h-[1px] bg-gradient-to-r my-[30px] from-[#003EC5] via-[#00329F] to-[#002E92]" />

            <div
              data-aos="fade-up"
              className={`
                rounded-[40px]
                p-[1px]
                inline-block
                overflow-hidden
                w-[80%]
                mx-[10%]
                border border-transparent
                bg-[length:300%_300%]
                transition-all duration-500
                bg-[linear-gradient(90deg,#00f2fe,#003cbe,#00f2fe)]
                animate-borderShift
              `}
            >
              <Link
                href="/serverReqst"
                onClick={() => setOpenSidbar(false)}
                className="
                  group
                  border-none
                  rounded-[38px]
                  px-[18px]
                  py-[10px]
                  w-full
                  cursor-pointer
                  no-underline
                  transition-all duration-500
                  flex items-center justify-center
                  bg-[#fff]
                  text-[#003EC5]
                "
              >
                <span
                  className={`
                    transition-all duration-500
                    ${scrollTop ? "text-black active-button" : "text-[#003EC5]"}
                  `}
                >
                  Service Request
                </span>

                <img
                  src={
                    scrollTop
                      ? "/icon/uil_arrow-up.svg"
                      : "/icon/uil_arrow-up.png"
                  }
                  alt="arrow up"
                  className={`
                    w-4 h-4 ml-2 relative z-50
                    transition-all duration-500
                    ${scrollTop ? "invert-0" : "invert"}
                  `}
                />
              </Link>
            </div>
          </div>

          {/* Overlay */}
          <div
            onClick={() => setOpenSidbar(false)}
            className={`
              fixed inset-0
              bg-black/50
              z-[9998]
              md:hidden
              transition-all duration-500

              ${openSidbar ? "opacity-100 visible" : "opacity-0 invisible"}
            `}
          />
        </div>
      </header>
    </>
  );
}
