import FooterSmolScren from "../partes/foterSmolScren";
import Header from "../partes/header";
import { useState } from "react";
import LogoAnimation from "../../../partes/animationiLogo";
import { timelineData } from "../../../about/timeStartCompan";

export default function AboutSmoleScren() {
  const [show, setShow] = useState(false);
  const [activeYear, setActiveYear] = useState(null); // السنة المختارة
  const [expanded, setExpanded] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const currentIndex =
    activeYear !== null ? activeYear : timelineData.events.length - 1;

  const balls = [
    { side: "right", top: "70px" },
    { side: "left", top: "500px" },
    { side: "right", top: "800px" },
    { side: "left", top: "1000px" },
    { side: "right", top: "1400px" },
    { side: "right", top: "1700px" },
    { side: "left", top: "2000px" },
    { side: "right", top: "2200px" },
    { side: "left", top: "2500px" },
    { side: "right", top: "2700px" },
    { side: "left", top: "2900px" },
    { side: "right", top: "3300px" },
    { side: "left", top: "3700px" },
  ];

  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          background: "black",
          width: "100%",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {/* الخلفية المتحركة */}
        {balls.map((ball, index) => (
          <div
            key={index}
            style={{
              width: "640px",
              height: "287px",
              borderRadius: "50%",
              position: "absolute",
              [ball.side]: "0",
              background: "#0141C533",
              top: ball.top,
              filter: "blur(40px)",
              opacity: 0.6,
              zIndex: 0,
              pointerEvents: "none",
            }}
          ></div>
        ))}

        <Header />

        {/* الجزء التعريفي */}
        <div
          style={{
            width: "85%",
            marginTop: "100px",
            padding: "20px",
            background: "#15151566",
            borderRadius: "24px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="/imgSmolScren/imgAbout.png"
            style={{ width: "100%", height: "250px", borderRadius: "24px" }}
          />
          <p
            style={{
              backgroundImage:
                "linear-gradient(270deg, #9795FF, #FFFFFF, #FFFFFF, #BE9FFF)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              fontWeight: "700",
              fontSize: "20px",
              marginTop: "15px",
            }}
          >
            Clients Success is Our Focus
          </p>
          <p
            style={{
              fontWeight: "400",
              fontSize: "12px",
              lineHeight: "20px",
              color: "#E2DEDC",
              marginTop: "0px",
            }}
          >
            At our agency, we measure our success by the achievements of our
            clients. From strategic planning and creative solutions to ongoing
            support and performance optimization.{" "}
            <button
              onClick={() => setShow(!show)}
              style={{
                color: "#837c7cff",
                border: "none",
                outline: "none",
                background: "transparent",
                cursor: "pointer",
              }}
            >
              See more...
            </button>
          </p>
          {show && (
            <p
              style={{
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "20px",
                color: "#E2DEDC",
              }}
            >
              we work hand-in-hand to ensure your business not only meets but
              exceeds its goals. Your growth, satisfaction, and long-term
              success are at the heart of everything we do.
            </p>
          )}
          <button
            style={{
              fontWeight: "500",
              fontSize: "12px",
              color: "#131313",
              padding: "14px 20px",
              borderRadius: "50px",
              border: "none",
              outline: "none",
              marginTop: "10px",
            }}
          >
            Request Service Now
          </button>
        </div>

        {/* الخلفية الثانية */}
        <div
          style={{
            backgroundImage: `url('/imgSmolScren/frame.png')`,
            width: "100%",
            height: "100px",
            marginTop: "50px",
          }}
        >
          <img
            src="/imgSmolScren/Work.png"
            style={{ width: "100%", height: "130px", margin: "-10px 0" }}
          />
        </div>

        {/* القسم الثالث */}
        <div
          style={{
            marginTop: "50px",
            marginBottom: "40px",
            backgroundImage: `url('/imgSmolScren/imgWork.png')`,
            width: "85%",
            height: "390px",
            position: "relative",
            borderRadius: "20px 0px 24px 24px",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <img
            src="/imgSmolScren/Frame 11.png"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "150px",
              height: "auto",
            }}
          />
          <div
            style={{
              background: "linear-gradient(90deg, #100F1B33, #100F1B)",
              height: "70px",
              width: "100%",
              position: "absolute",
              bottom: 0,
              left: 0,
              borderRadius: "0px 0px 20px 24px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <p
              style={{
                width: "80%",
                fontWeight: "500",
                color: "#fff",
                fontSize: "14px",
                lineHeight: "20px",
              }}
            >
              In the garden of achievement, diligent effort blossoms dreams into
              reality
            </p>
          </div>
        </div>

        <div>
          <button
            style={{
              color: "#131313",
              fontWeight: "500",
              fontSize: "12px",
              padding: "14px 20px",
              border: "none",
              outline: "none",
              borderRadius: "50px",
              marginBottom: "30px",
            }}
          >
            Cooperate with us now
          </button>
        </div>

        <LogoAnimation
          width="100"
          height="80"
          heightImgAnimwtion="40"
          marginLogo="15"
        ></LogoAnimation>

        {/* الصف الأفقي للسنين */}
        <div
          style={{
            display: "flex",
            overflowX: "auto",
            width: "90%",
            margin: "5%",
            justifyContent: "space-between",
            paddingBottom: "10px",
          }}
        >
          {timelineData.events.map((item, index) => (
            <button
              key={index}
              onClick={() =>
                setActiveYear(activeYear === index ? null : index)
              }
              style={{
                width: "70px",
                height: "29px",
                borderRadius: "6px",
                color: activeYear === index ? "#fff" : "#003EC5",
                border:
                  activeYear === index ? "2px solid #003FCA" : "1px solid #fff",
                background: activeYear === index ? "#003FCA" : "#fff",
                fontWeight: "800",
                fontSize: "12px",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {item.year}
            </button>
          ))}
        </div>

        {/* الوصف أسفل السنة المختارة أو آخر سنة تلقائيًا */}
        {timelineData.events[currentIndex] && (
          <div
            style={{
              marginTop: "20px",
              width: "90%",
              background: "#15151566",
              borderRadius: "24px",
              padding: "15px",
              color: "#E2DEDC",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <img
              src="/imgSmolScren/experins.png"
              width="100%"
              height="auto"
              style={{ borderRadius: "24px" }}
            />
            <p
              style={{
                backgroundImage:
                  "linear-gradient(270deg, #9795FF, #FFFFFF, #FFFFFF, #BE9FFF)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                fontWeight: "700",
                fontSize: "20px",
                lineHeight: "29px",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: "15px",
              }}
            >
              DevMaster Journey Through Time
            </p>

            <p
              onClick={() => setExpanded(!expanded)}
              style={{
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "20px",
                margin: 0,
                color: "#E2DEDC",
                cursor: "pointer",
                overflow: "hidden",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: expanded ? "unset" : 2,
                transition: "0.3s ease",
                marginTop: "0px",
              }}
            >
              {timelineData.events[currentIndex].description}
            </p>

            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: "15px",
              }}
            >
              <button
                style={{
                  fontWeight: "500",
                  fontSize: "11px",
                  color: "#131313",
                  padding: "14px 20px",
                  borderRadius: "50px",
                  border: "none",
                  outline: "none",
                }}
              >
                Request Service Now
              </button>
            </div>
          </div>
        )}
        < div style={{
          width:"100%",
          
        }}>
        <img src="/imgSmolScren/Cotation (2).png" style={{
          marginLeft:'55%',

        }}></img>
        </div>
        <div style={{
          width:"90%",
          background:'#15151566',
          padding:"15px",
          borderRadius:"24px",
          marginTop:'-120px',
          marginBottom:"20px"



        }}>
          <img src="/icon/Group 1597883107.png" width="100%" height="auto" style={{borderRadius:"24px"}}></img>

                  <p
              style={{
                backgroundImage:
                  "linear-gradient(270deg, #9795FF, #FFFFFF, #FFFFFF, #BE9FFF)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                fontWeight: "700",
                fontSize: "20px",
                lineHeight: "29px",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: "15px",
              }}
            >
CEO’S Massges
            </p>
            
   <div
      style={{
        width: "100%",
        margin: "20px auto",
        borderRadius: "16px",
        padding: "15px",
        color: "#E2DEDC",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <p
        onClick={() => setShowIntro(!showIntro)}
        style={{
          fontWeight: "400",
          fontSize: "12px",
          lineHeight: "20px",
          marginTop: "-5px",
          cursor: "pointer",
          overflow: "hidden",
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: showIntro ? "unset" : 2, // سطرين فقط بشكل افتراضي
          transition: "0.3s ease",
        }}
      >
        At DevMaster, our journey is guided by a commitment to innovation,
        excellence, and client success. Every challenge we face is an opportunity
        to deliver creative solutions and meaningful results. Our focus remains
        on building strong relationships, fostering growth, and continuously
        improving our services to exceed expectations. I am proud of what we
        have achieved so far, and I am excited for the opportunities ahead as
        we continue to drive value for our clients.
      </p>
    </div>
   <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: "0px",
              }}
            >
              <button
                style={{
                  fontWeight: "500",
                  fontSize: "11px",
                  color: "#131313",
                  padding: "14px 20px",
                  borderRadius: "50px",
                  border: "none",
                  marginTop:'0px',
                  outline: "none",
                }}
              >
Request Service Now              </button>
            </div>
        </div>
        <FooterSmolScren/>
      </div>
    </>
  );
}
