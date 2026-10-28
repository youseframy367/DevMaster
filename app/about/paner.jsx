"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AboutBaner() {

  const [hover, setHover] = useState(false);
  const [show, setShow] = useState(true);

  const router = useRouter();

  return (
    <section className="w-full  text-white pt-[80px]">

      {/* ================= DESKTOP ================= */}
      <div className="hidden lg:flex items-center justify-between  md:mt-[40px]">

        <div
          className="lg:w-[40%] w-full ml-[5%] flex flex-col gap-[35px]"
          data-aos="fade-up"
        >

          <p
            className="
              text-[clamp(40px,8vw,64px)]
              font-medium
              leading-[100%]
              bg-clip-text
              text-transparent
                bg-[linear-gradient(270deg,#9795FF,#FFFFFF,#FFFFFF,#BE9FFF)]
               bg-[length:400%_400%]

          bg-clip-text
          text-transparent
          animate-gradient
              font-inter
            "
          
          >
            Clients Success <br /> is Our Focus
          </p>

          <p
            className="
              text-[18px]
              leading-[28px]
              text-[#E2DEDC]
              max-w-[650px]
            "
          >
            At our agency, we measure our success by the achievements of our
            clients. From strategic planning and creative solutions to ongoing
            support and performance optimization, we work hand-in-hand to ensure
            your business not only meets but exceeds its goals. Your growth,
            satisfaction, and long-term success are at the heart of everything
            we do.
          </p>

          <button
            onClick={() => router.push("/serverReqst")}
            className="
              w-[231px]
              py-[14px]
              rounded-full
              bg-white
              text-black
              text-[18px]
              font-medium
              transition-all
              duration-300
              hover:bg-[#E0E0E0]
              hover:scale-105
              shadow-[0_0_15px_rgba(34,211,238,0.25)]
              hover:shadow-[0_0_30px_rgba(34,211,238,0.7)]
            "
          >
            Request Service Now
          </button>
        </div>

        {/* ===== الصورة ===== */}
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="
            relative
            w-[35%]
            h-[488px]
            mr-[5%]
            rounded-b-[24px]
            bg-cover
            bg-center
            transition-all
            duration-500
            cursor-pointer
          "
          style={{
            backgroundImage: "url('/imgSmolScren/imgAbout.png')",
            transform: hover ? "scale(1.05)" : "scale(1)",
            filter: hover ? "brightness(1.15)" : "brightness(1)",
          }}
        >

          {/* overlay */}
          <div
            className="
              absolute
              inset-0
              rounded-b-[24px]
              transition-all
              duration-500
            "
            style={{
              background: hover
                ? "rgba(0,0,0,0.4)"
                : "rgba(0,0,0,0)",
            }}
          />

          {/* النص */}
          <p
            className="
              absolute
              bottom-0
              w-full
              h-[90px]
              flex
              items-center
              justify-center
              text-center
              bg-[rgba(16,15,27,0.2)]
              text-white
              text-[18px]
              font-medium
              z-[2]
            "
          >
            Technical Consultation With Dev Sparks
          </p>

          {/* الإطار */}
          <div
            className="
              absolute
              top-[40px]
              left-[30px]
              w-full
              h-[480px]
              border-2
              border-[#003EC5]
              rounded-[24px]
              transition-all
              duration-500
              
            "
            style={{
              transform: hover
                ? "translateY(-10px)"
                : "translateY(0)",
            }}
          />
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="lg:hidden flex justify-center px-[15px]">

        <div
          className="
            w-full
            mt-[20px]
            p-[20px]
            bg-[#15151566]
            rounded-[24px]
            flex
            flex-col
            items-center
          "
        >

          {/* الصورة */}
          <img
            src="/imgSmolScren/imgAbout.png"
            className="
              w-full
              h-[250px]
              object-cover
              rounded-[24px]
            "
            alt="about"
          />

          {/* العنوان */}
          <p
            className="
              text-[20px]
              font-bold
              mt-[15px]
              text-center
              bg-clip-text
              text-transparent
            "
            style={{
              backgroundImage:
                "linear-gradient(270deg,#9795FF,#FFFFFF,#FFFFFF,#BE9FFF)",
            }}
          >
            Clients Success is Our Focus
          </p>

          {/* الوصف */}
          <p
            className="
              text-[12px]
              leading-[20px]
              text-[#E2DEDC]
              mt-[10px]
              text-center
            "
          >
            At our agency, we measure our success by the achievements of our
            clients. From strategic planning and creative solutions to ongoing
            support and performance optimization.

            <button
              onClick={() => setShow(!show)}
              className="
                ml-[5px]
                text-[#837c7c]
                bg-transparent
                border-none
                cursor-pointer
              "
            >
              {show ? "See less..." : "See more..."}
            </button>
          </p>

          {/* النص الإضافي */}
          {show && (
            <p
              className="
                text-[12px]
                leading-[20px]
                text-[#E2DEDC]
                mt-[10px]
                text-center
              "
            >
              we work hand-in-hand to ensure your business not only meets but
              exceeds its goals. Your growth, satisfaction, and long-term
              success are at the heart of everything we do.
            </p>
          )}

          {/* الزر */}
          <button
            onClick={() => router.push("/serverReqst")}
            className="
              mt-[15px]
              px-[20px]
              py-[14px]
              rounded-full
              bg-white
              text-[#131313]
              text-[12px]
              font-medium
              transition-all
              duration-300
              hover:scale-105
            "
          >
            Request Service Now
          </button>
        </div>
      </div>

    </section>
  );
}