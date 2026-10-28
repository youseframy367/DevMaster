

export default function ImgWork() {

const images = [
  "/img/imgWorkOne.svg",
  "/img/imgWorkTwo.svg",
  "/img/imgWorkThree.svg",
  "/img/imgWorkFor.svg",
  "/img/imgWorkFife.svg"

  ];

  return (
    <div
      className="
        w-full
        md:h-[300px]
        h-[102px]
        mt-[30px]
        flex
        justify-center
        items-center
        relative
        z-[9]
        overflow-hidden
      "
      style={{
        backgroundImage: `url("/img/frame.png")`,
        backgroundRepeat: "repeat-x",
        backgroundSize: " auto",
        backgroundPosition: "center",
        fontFamily: "'Inter', sans-serif",
      }}
    >

     <div
  className="
    flex
    flex-row
    flex-nowrap
    overflow-x-auto
    gap-5
    w-[95%]
    relative
    z-[9999]
    items-center
    scrollbar-hide
    md:justify-center
  "
>

        {images.map((img, index) => (
          <div
            key={index}
            className="
               shrink-0

              overflow-hidden
              rounded-[18px]
              transition-all
              duration-500
              hover:scale-105
              hover:-translate-y-2
              hover:shadow-[0_0_25px_rgba(34,211,238,0.45)]
              cursor-pointer
            "
          >
            <img
              src={img}
              alt={`work-${index}`}
              className="
                md:w-[222px]
                md:h-[195px]
                w-[114px]
                object-cover
                transition-all
                duration-500
                hover:brightness-110
              "
            />
          </div>
        ))}

      </div>
    </div>
  );
}