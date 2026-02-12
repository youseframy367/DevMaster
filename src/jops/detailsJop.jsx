import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../partes/fotter";
export default function DetalesJop() {
  const navigate=useNavigate()
  const location = useLocation();

    const itemData = location.state || {};

  const balls = [
    { side: "right", top: "100px" },
    { side: "left", top: "400px" },
    { side: "right", top: "700px" },
  ];
  const buttonWrapperStyle = {
    position: "relative",
    borderRadius: "40px",
    padding: "2px",
    width: "150px",
    display: "inline-block",
    margin:"5% 8%"
  };

  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          background: "black",
          width: "100%",
          paddingTop: "100px",
          display:'flex',
          flexDirection:"column",
          position: "relative",
          overflow: "hidden",
          color:'#fff'
        }}
      >
        {balls.map((ball, index) => (
          <div
            key={index}
            style={{
              width: "640px",
              height: "287px",
              borderRadius: "50%",
              background: "#504CFF33",
              position: "absolute",
              [ball.side]: "-10%",
              zIndex: 0,
              top: ball.top,
              filter: "blur(40px)",
              opacity: 0.6,
            }}
          ></div>
        ))}
        <div style={{
            width:"80%",
    marginLeft: "8%", 
            }}>
      <p style={{ 
        fontSize:"42px",
        fontWeight:'400',
        lineHeight:'75px',
   background: "linear-gradient(270deg, #9795FF, #FFFFFF, #FFFFFF, #BE9FFF)",
    WebkitBackgroundClip: "text",
    color: "transparent",
      }}>
        {itemData.name}</p>


                     <div style={{
                display:"flex",
                justifyContent:'space-between',
                color:"#fff",
                width:"35%",
                marginTop:'-40px'
              }}>
                <p  style={{
                  display:"flex",
                  alignItems:"center",
                  gap:"5px",
                  fontSize:"14px",
                  fontWeight:"400"
                }}>
<img src="/icon/MapPinLine.png">
</img>{itemData.site}

                </p>
                <p style={{
                  display:"flex",
                  alignItems:"center",
                  gap:"5px",
                   fontSize:"14px",
                  fontWeight:"400"
                }}>
                  <img src="/icon/Briefcase.png">
                  </img>{itemData.time}

                  </p>
                  <p style={{
                  display:"flex",
                  alignItems:"center",
                  gap:"5px",
                   fontSize:"14px",
                  fontWeight:"400"
                }}>
                    <img src="/icon/ClipboardText.png">
                    </img>{itemData.count}  Vacancy
                  </p>



                </div>

                <p>Job Duties and Responsibilities</p>
               <ul style={{
                lineHeight:'28px',
                fontWeight:'400',
                margin:'0px -30px'
               }}>
  {itemData.detales && Object.values(itemData.detales).map((detail, idx) => (
    <li key={idx} style={{color:"#fff"}}>{detail}</li>
  ))}
</ul>
<p>Job Duties</p>

              <ul style={{
                lineHeight:'28px',
                fontWeight:'400',
                margin:'0px -30px'
               }}>
  {itemData.JobDuties && Object.values(itemData.JobDuties).map((duty, idx) => (
    <li key={idx} style={{ color: "#fff" }}>{duty}</li>
  ))}
</ul>

        </div>

         <div className="gradient-btn" style={buttonWrapperStyle}>
          <button
          onClick={()=>{
            navigate("/ApplyTheJop")
          }}
            style={{
              padding: "14px 24px",
              borderRadius: "40px",
              width:"150px",
              background: "black",
              color: "#fff",
              display: "flex",
              fontSize:"16px",
              alignItems: "center",
              gap: "5px",
              fontWeight: "500",
              border: "none",
              outline: "none",
            }}
          >
                Apply Now <img src="/icon/uil_arrow-up(2).png"></img>
          </button>
        </div>

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
      
      <Footer/>
    </div>
    </>
  );
}
