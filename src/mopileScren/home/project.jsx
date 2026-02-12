import { projects } from "../../home/project";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
export default function Broject() {
    const [ShowBroject,setProgect]=useState(false)
  const [numproject, setNumBrogect] = useState(1);
  const handleNext = () => {
    if (numproject < 4) setNumBrogect(numproject + 1);
  };

  const handleBack = () => {
    if (numproject > 1) setNumBrogect(numproject - 1);
  };

  // 🎨 أنماط التصميم
  const cardStyle = {
    width: "90%",
    color: "#fff",
    fontFamily: "'Inter', sans-serif",
    textAlign: "left",
    marginBottom: "20px",
    border:"solid 2px #ccc",
    borderRadius:'24px',
    height:"300px"
  };

  const titleStyle = {
    fontWeight: 500,
    fontSize: "27px",
    margin: "5px 0",

  };

  const descStyle = {
    fontWeight: 400,
    fontSize: "10px",
    lineHeight: "22px",
    color: "#fff",
  };

  return (
    <>
   {ShowBroject && (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(243, 238, 238, 0.9)", // خلفية شفافة داكنة
      zIndex: 9999,
      overflowY: "auto", // السماح بالتمرير العمودي
      scrollbarWidth: "none", // إخفاء الشريط في فايرفوكس
      msOverflowStyle: "none", // إخفاء الشريط في إنترنت إكسبلورر
    }}
  >
    <style>
      {`
        /* لإخفاء الشريط الجانبي في كروم وسفاري */
        div::-webkit-scrollbar {
          display: none;
        }
      `}
    </style>
    <button style={{
        border:"none",
        outline:'none',
        position:"fixed",
        top:'15px',
        left:'15px',
        width:'40px',
        height:'40px',
        display:'flex',
        justifyContent:'center',
    background: "transparent", // ✅ صح
        alignItems:'center',
        borderRadius:'50%'
    }} onClick={()=>{
        setProgect(false)
    }}>
        <IoIosArrowBack size={30} ></IoIosArrowBack>
    </button>

    {/* الصورة */}
    <img
      src={projects[numproject - 1].imgWebsid}
      alt="Website preview"
      style={{
        display: "block",
        width: "100%",
        height: "auto",
        margin: 0,
        padding: 0,
      }}
    />
  </div>
)}
    
      {/* العنوان */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          textAlign: "center",
        }}
      >
        <p
          style={{
            backgroundImage:
              "linear-gradient(270deg, #9795FF, #FFFFFF, #FFFFFF, #BE9FFF)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontSize: "20px",
            fontWeight: "500",
            lineHeight: "30px",
          }}
        >
          Our Product
        </p>

        <p
          style={{
            fontWeight: "400",
            fontSize: "10px",
            lineHeight: "15px",
            color: "#fff",
            width: "80%",
            marginLeft: "10%",
            marginTop: "0px",
          }}
        >
          We offer high-quality products that meet your needs and help you
          achieve your goals easily and effectively.
        </p>
      </div>

      {/* عرض المشاريع */}
        {/* عرض المشروع الحالي فقط */}
      <div style={{ width: "100%", display:'flex',flexDirection:"column",justifyContent:"center",alignItems:'center'}}>
        <div style={cardStyle} onClick={()=>{
            setProgect(true)
        }}>
          <img
            src={projects[numproject - 1].image}
            width="100%"
            height="180px"
            style={{ marginBottom: "15px", borderRadius: "10px" }}
            alt={projects[numproject - 1].title}
          />
          <div style={{
            margin:'5px 10px'
          }}>
          <p style={titleStyle}>{projects[numproject - 1].title}</p>
          <p style={descStyle}>{projects[numproject - 1].description}</p>
       
       </div>
        </div>


  {/* Navigation buttons */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <div
          onClick={handleBack}
          style={{
            color: "#fff",
            backgroundColor: "#003EC5",
            width: "45px",
            height: "45px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: numproject === 1 ? "not-allowed" : "pointer",
            opacity: numproject === 1 ? 0.5 : 1,
          }}
        >
          <IoIosArrowBack size={22} />
        </div>

        <div
          onClick={handleNext}
          style={{
            color: "#fff",
            backgroundColor: "#003EC5",
            width: "45px",
            height: "45px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: numproject === 4 ? "not-allowed" : "pointer",
            opacity: numproject === 4 ? 0.5 : 1,
          }}
        >
          <IoIosArrowForward size={22} />
        </div>
    </div>



      </div>
    </>
  );
}
