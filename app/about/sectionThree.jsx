export default function YourBesnis() {
  return (
    <>
      {/* Desktop */}
      <div className="hidden mt-[-280px] ml-[20px] md:flex w-full text-white">
        <div className="w-1/2 flex justify-center items-center">
          <img
            src="/img/yourBessnes.png"
            alt="Vision"
            className="w-[550px] h-[600px]"
          />
        </div>

        <div className="w-1/2 my-auto">
          <p className="text-[36px] font-medium leading-[48px]
                text-transparent
                bg-[linear-gradient(270deg,#9795FF,#FFFFFF,#FFFFFF,#BE9FFF)]
               bg-[length:400%_400%]
          bg-clip-text
          text-transparent
          animate-gradient
          ">
            Our Vision for Better Result
            <br />
            for Your Success
          </p>

          <div className="mt-6">
            <p className="text-[22px] font-normal">Vision we have</p>

            <p className="w-[70%] text-[18px] font-normal mt-2">
              Our vision is to be the cornerstone of client success by
              providing innovative and sustainable consulting solutions.
            </p>
          </div>

          <div className="mt-8">
            <p className="text-[22px] font-normal">The path we took</p>

            <p className="w-[70%] text-[18px] font-normal mt-2">
              Our mission is to guide businesses in realizing their full
              potential through customized strategies and high-quality
              services. Committed to building strong partnerships, we empower
              growth and create a positive impact in every facet of our
              consulting journey.
            </p>

            <button
              className="
                mt-[30px]
                px-6
                py-[14px]
                text-[18px]
                font-normal
                text-[#131313]
                bg-white
                rounded-full
                transition-all
              duration-300
              hover:bg-[#E0E0E0]
              hover:scale-105
              shadow-[0_0_15px_rgba(34,211,238,0.25)]
              hover:shadow-[0_0_30px_rgba(34,211,238,0.7)]

              "
            >
              Cooperate with us now
            </button>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex flex-col items-center text-white">
        <div
          className="
            mt-[50px]
            mb-[40px]
            w-[85%]
            h-[390px]
            relative
            bg-cover
            bg-center
            rounded-[20px_0px_24px_24px]
          "
          style={{
            backgroundImage: "url('/imgSmolScren/imgWork.png')",
          }}
        >
          <img
            src="/imgSmolScren/Frame 11.png"
            alt=""
            className="
              absolute
              top-0
              right-0
              w-[150px]
              h-auto
            "
          />

          <div
            className="
              absolute
              bottom-0
              left-0
              w-full
              h-[70px]
              flex
              justify-center
              items-center
              text-center
              rounded-[0px_0px_20px_24px]
            "
            style={{
              background:
                "linear-gradient(90deg, #100F1B33 0%, #100F1B 100%)",
            }}
          >
            <p
              className="
                w-[80%]
                text-[14px]
                leading-[20px]
                font-medium
                text-white
              "
            >
              In the garden of achievement, diligent effort blossoms dreams
              into reality
            </p>
          </div>
        </div>

        <button
          className="
            mb-[30px]
            px-[20px]
            py-[14px]
            text-[12px]
            font-medium
            text-[#131313]
            bg-white
            rounded-full
          "
        >
          Cooperate with us now
        </button>
      </div>
    </>
  );
}