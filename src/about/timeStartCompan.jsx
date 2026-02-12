import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img from "./img/image 25(1).jpg";
export const timelineData = {
    title: "Dev Master Journey Through Time",
    events: [
      {
        year: "2021",
        description:
          " In 2021, DevMaster was established in Egypt, marking the beginning of a journey fueled by innovation and determination. From the outset, our company embraced a spirit of creativity, striving to deliver solutions that are not only effective but also distinctive and forward-thinking. This founding year laid the groundwork for a company culture centered on excellence, integrity, and client-focused innovation, ensuring that every initiative we undertake is aligned with our mission to make a meaningful impact in the industry.",
      },
      {
        year: "2022",
        description:
          " In 2022, DevMaster was established in Egypt, marking the beginning of a journey fueled by innovation and determination. From the outset, our company embraced a spirit of creativity, striving to deliver solutions that are not only effective but also distinctive and forward-thinking. This founding year laid the groundwork for a company culture centered on excellence, integrity, and client-focused innovation, ensuring that every initiative we undertake is aligned with our mission to make a meaningful impact in the industry.",
      },
      {
        year: "2023",
        description:
          " In 2023, DevMaster was founded in Egypt, beginning a journey defined by innovation and creativity. From the very start, our mission was to provide distinctive solutions that stand out in the market, reflecting our commitment to excellence and forward-thinking strategies. This foundational year set the tone for a company culture focused on delivering meaningful impact to every client we serve.",
      },
      {
        year: "2024",
        description:
          " In 2024, DevMaster was founded in Egypt, embarking on a journey defined by creativity and innovation. From the very beginning, our mission focused on delivering distinctive solutions that stand out in the market, reflecting our unwavering commitment to quality and forward-thinking strategies. This foundational year established the values and culture that continue to guide our work.",
      },
      {
        year: "2025",
        description:
          "In 2025, DevMaster was established in Egypt, beginning a journey marked by a spirit of innovation and a commitment to providing distinctive and forward-thinking solutions. Throughout this time, we have built a solid foundation focused on high-quality service, strong partnerships, and lasting relationships with our clients, achieving sustainable growth along the way. That year represented a historic turning point in shaping our corporate identity, setting high standards of excellence, and reaffirming our dedication to our clients’ success through an innovative consultative approach. We continue this journey today, striving for growth, innovation, and meaningful impact for every client we serve.",
      },
    ],
  };
export default function TimeStart() {
 
  

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div
        style={{
          width: "90%",
          display: "flex",
          color: "#fff",
          flexDirection: "row",
          marginTop: "-150px",
          zIndex:'2000',
                        fontFamily: "'Inter', sans-serif",

        }}
      >
        {/* القسم الأيسر للنص */}
        <div
          style={{
            width: "60%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <p
            style={{
              width: "100%",
              marginTop: "-30px",
              fontSize: "36px",
              fontWeight: "700",
              color: "#fff",
              display: "flex",
              flexWrap: "nowrap",
            }}
          >
            {timelineData.title}
          </p>

          <div
            style={{
              width: "95%",
              display: "flex",
              gap: "40px",
              marginLeft: "-20px",
            }}
          >
            {/* قائمة السنوات */}
            <ul
              style={{
                listStyle: "none",
                width: "20%",
                marginTop: "-20px",
                height: "400px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                position: "relative",
              }}
            >
              {timelineData.events.map((item, i) => (
                <React.Fragment key={i}>
                  <li
                    onClick={() => setActiveIndex(i)}
                    style={{
                      width: "60px",
                      height: "60px",
                      border: "#003FCA 1.8px solid",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "50%",
                      background:
                        activeIndex === i ? "#003FCA" : "#0A0A23",
                      zIndex: 1,
                      color: "#fff",
                      fontWeight: "bold",
                      cursor: "pointer",
                      transition: "0.3s",
                    }}
                  >
                    {item.year}
                  </li>

                  {i !== timelineData.events.length - 1 && (
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "#003FCA",
                      }}
                    ></span>
                  )}
                </React.Fragment>
              ))}
            </ul>

            {/* الوصف المتحرك */}
            <div style={{ width: "100%", marginTop: "-20px" }}>
              <AnimatePresence mode="wait">
                <motion.p
key={timelineData.events[activeIndex].year}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    fontSize: "18px",
                    fontWeight: "400",
                    lineHeight: "30px",
                  }}
                >
                  {timelineData.events[activeIndex].description}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* القسم الأيمن للصورة */}
        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={img}
            alt="DevMaster journey"
            style={{
              zIndex: "100",
              width: "90%",
              height: "390px",
              borderRadius: "24px",
            }}
          />
        </div>
      </div>
    </>
  );
}
