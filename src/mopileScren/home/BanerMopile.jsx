import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import "../../home/baner.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "./partes/header";

export default function BanerHome() {
  const [Sidbar ,setSidBar]=useState(false)
  const navigate = useNavigate();


  const iconStyle = {
    color: "#fff",
    fontSize: "20px",
    margin: "0 10px",
    cursor: "pointer",
    transition: "color 0.3s ease",
  };

  const imgStyle = {
    width: 16,
    height: 16,
    marginLeft: 8,
  };

  const buttonStyle = {
    fontFamily: "'Sora', sans-serif",
    color: "#020F1F",
    background: "#FFFFFF",
    border: "none",
    borderRadius: "40px",
    padding: "14px 24px",
    display: "flex",
    alignItems: "center",
    fontSize: "14px",
    fontWeight: 400,
    cursor: "pointer",
  };

  return (
    <div
      style={{
        backgroundImage: "url('/icon/Header.png')",
        backgroundSize: "cover",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "690px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Header/>
 

      {/* أيقونات التواصل */}
      <div style={{ display: "flex", alignItems: "center", marginTop: "70px" }}>
<a
  href="https://www.facebook.com/share/1GK7wnD318/"
  target="_blank"
    rel="noopener noreferrer">

  <FaFacebookF style={iconStyle} />
  </a>
        <a 
  href="https://www.instagram.com/hvshim10?igsh=c3o2aTA5eGM3ejF6" 
  target="_blank" 
  rel="noopener noreferrer"
>
        <FaInstagram style={iconStyle} />
        </a>

               <a 
  href="www.linkedin.com/in/dev-master-78005b393" 
  target="_blank" 
  rel="noopener noreferrer"
>
        <FaLinkedinIn style={iconStyle} />
        </a>

        <a 
  href="https://wa.me/201055395693" 
  target="_blank" 
  rel="noopener noreferrer"
>
        <FaWhatsapp style={iconStyle} />
        </a>
      </div>

      {/* العنوان */}
      <h1
        style={{
          fontWeight: 400,
          fontSize: "26px",
          textAlign: "center",
          margin: "20px 0",
          background: "linear-gradient(270deg, #9795FF, #FFFFFF, #FFFFFF, #BE9FFF)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          animation: "gradientMove 10s ease infinite",
          lineHeight: "42px",
        }}
      >
        Create amazing work with <br/> DevMaster Company
      </h1>

      <style jsx>{`
        @keyframes gradientMove {
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

      <p
        style={{
          fontWeight: 400,
          fontFamily: "'Inter', sans-serif",
          color: "#fff",
          textAlign: "center",
          marginBottom: "20px",
          fontSize:'12px',
          lineHeight:'21px',
          width:"80%"
        }}
      >
        We help you build modern, easy-to-use websites and applications for
        businesses and individuals, with clean design and future support.
      </p>

      <button style={buttonStyle}
         onClick={()=>{
                  navigate("/consultation"); // بينقلك لصفحة Design

        }}
      
      >
        Free Consultation
        <img src="/icon/uil_arrow-up (1).png" alt="arrow up" style={imgStyle} />
      </button>

    <div
  style={{
    width: "150px",
    height: "150px",
    position: "relative",
    marginTop: "50px",
  }}
>
  {/* الصورة في المنتصف */}
  <div
    style={{
      width: "100px", // حجم الصورة
      height: "100px",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <img src="/icon/Group (5).png" alt="center"  />
  </div>

  {/* النص الدائري */}
  <svg
    width="150"
    height="150"
    viewBox="0 0 200 200"
    
    style={{ position: "absolute", top: 0, left: 0 ,fontSize:"16.12px" ,display:"grid",gap:"10,8px"}}
  >
    <defs>
      <path
        id="circlePath"
        d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0"
      />
    </defs>

    <text
      fill="#ffffff"
      fontSize="16,12px"
        letterSpacing="2px" // مسافة الأحرف
      fontFamily="Inter"
      fontWeight="400"
      style={{
        transformOrigin: "100px 100px", // مركز الدائرة
        animation: "rotateText 20s linear infinite",
      }}
    >
      <textPath href="#circlePath" lengthAdjust="spacingAndGlyphs">
        {("scroll down for work together • ").repeat(20)}
      </textPath>
    </text>

    <style>
      {`
        @keyframes rotateText {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}
    </style>
  </svg>
</div>
</div>
  )}