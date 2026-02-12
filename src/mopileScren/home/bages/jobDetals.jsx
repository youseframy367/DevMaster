import Header from "../partes/header";
import { useLocation, useNavigate } from "react-router-dom";
import FooterSmolScren from "../partes/foterSmolScren";
export default function JopsDetals() {
  const navigate = useNavigate();
  const location = useLocation();

  const itemData = location.state || {};
  console.log("بيانات الوظيفة:", itemData);

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

  const buttonWrapperStyle = {
    position: "relative",
    borderRadius: "40px",
    padding: "2px",
    width: "80%",
    display: "inline-block",
  };

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
                    paddingTop:"100px",

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

        <p
          style={{
            background:
              "linear-gradient(270deg, #9795FF, #FFFFFF, #FFFFFF, #BE9FFF)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontSize: "30px",
            fontWeight: "400",
            lineHeight: "45px",
            width:"100%",
            display:'flex',
            justifyContent:"center",
            alignItems:"center"
          }}
        >
        Seals
        </p>

        {/* معلومات الوظيفة */}
        <div
          style={{
            display: "flex",
            justifyItems:"center",
            alignItems:"center",
            justifyContent: "space-around",
            color: "#fff",
            width: "100%",
            marginTop: "-20px",
          }}
        >
          <p
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              fontSize: "14px",
              fontWeight: "400",
            }}
          >
            <img src="/icon/MapPinLine.png" alt="map" />
            {itemData.site}
          </p>

          <p
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              fontSize: "14px",
              fontWeight: "400",
            }}
          >
            <img src="/icon/Briefcase.png" alt="briefcase" />
            {itemData.time}
          </p>

          <p
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              fontSize: "14px",
              fontWeight: "400",
            }}
          >
            <img src="/icon/ClipboardText.png" alt="clipboard" />
            {itemData.count} Vacancy
          </p>
        </div>

        {/* تفاصيل الوظيفة */}
        <p style={{ color: "#fff", margin: "10px 3px" }}>
          Job Duties and Responsibilities
        </p>
        <ul
          style={{
            lineHeight: "28px",
            fontWeight: "400",
            margin: "0px",
          }}
        >
          {itemData.detales &&
            Object.values(itemData.detales).map((detail, idx) => (
              <li key={idx} style={{ color: "#8b8383ff" }}>
                {detail}
              </li>
            ))}
        </ul>

        <p style={{ color: "#fff", margin:"10px 3px" }}>Job Duties</p>
        <ul
          style={{
      lineHeight: "28px",
            fontWeight: "400",
            margin: "0px",
          }}
        >
          {itemData.JobDuties &&
            Object.values(itemData.JobDuties).map((duty, idx) => (
              <li key={idx} style={{ color: "#8b8383ff" }}>
                {duty}
              </li>
            ))}
        </ul>
<div style={{
    width:"100%",
    display:'flex',
    justifyContent:'center',
    alignItems:"center",
    marginTop:'10px',
    marginBottom:"20px",
}}>
      {/* زر التقديم */}
      <div className="gradient-btn" style={buttonWrapperStyle}>
        <button
          onClick={() => {
            navigate("/ApplyTheJop");
          }}
          style={{
            padding: "14px 24px",
            borderRadius: "40px",
            width: "100%",
            background: "black",
            color: "#fff",
            display: "flex",
            justifyContent:"center",
            fontSize: "16px",
            alignItems: "center",
            gap: "5px",
            fontWeight: "500",
            border: "none",
            outline: "none",
          }}
        >
          Apply Now <img src="/icon/uil_arrow-up(2).png" alt="arrow" />
        </button>
      </div>
</div>
      {/* أنيميشن الخلفية */}
      <style>{`
        .gradient-btn {
          background: linear-gradient(90deg, #00f2fe, #003cbe, #00f2fe);
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
            <FooterSmolScren/>

            </div>
      
    </>
  );
}
