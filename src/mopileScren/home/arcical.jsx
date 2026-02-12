import { artical } from "../../home/articles";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Artical() {
  const [showArtical,setShwoArtical]=useState(false)
  const [numArtical, setNumArtical] = useState(1);
  const keys = Object.keys(artical); // ['artical1', 'artical2', ...]

  const current = artical[keys[numArtical - 1]];

  const handleNext = () => {
    if (numArtical < keys.length) setNumArtical(numArtical + 1);
  };

  const handleBack = () => {
    if (numArtical > 1) setNumArtical(numArtical - 1);
  };

  const cardStyle = {
    width: "90%",
    color: "#fff",
    fontFamily: "'Inter', sans-serif",
    textAlign: "left",
    marginBottom: "20px",
    borderRadius: "24px",
    padding:"10px",
    backgroundColor:'rgba(21, 21, 21, 0.4)',
    boxShadow:" 0 0 20px rgba(255, 255, 255, 0.4)"


  };
const dateStyle ={color:"#969696",fontSize:'14px',fontWeight:'400' }
  const titleStyle = { fontWeight: 600, fontSize: "16px", margin: "5px 0" };
  const descStyle = { fontWeight: 400, fontSize: "10px", lineHeight: "22px", color: "#fff" };

  return (
    <>
      {showArtical&& (
     <div
       style={{
         position: "fixed",
         top: 0,
         left: 0,
         width: "100%",
         height: "100%",
         backgroundColor: "#fff", // خلفية شفافة داكنة
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
           setShwoArtical(false)
       }}>
           <IoIosArrowBack size={30} ></IoIosArrowBack>
       </button>
   
       {/* الصورة */}
       <img
src={current.img} alt={current.title}         
         style={{
           display: "block",
           width: "100%",
           height: "auto",
           margin: 0,
           padding: 0,
         }}
       />
       <p style={{
        width:'100%',
        display:'flex',
        justifyContent:"center",
        alignItems:'center',
        color:"#01002B",
        fontSize:'20px',
        fontWeight:"800",

       }}>{current.title}</p>

       <p style={{
        margin:"10px",
        fontWeight:'400',
        fontSize:"10px",
        lineHeight:'20px',
        color:"#0A0C1480",
        width:"90%"

       }}>
        {current.artical}
       </p>
     </div>
   )}
       
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <p style={{
          backgroundImage: "linear-gradient(270deg, #9795FF, #FFFFFF, #FFFFFF, #BE9FFF)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          fontSize: "20px",
          fontWeight: "500",
          lineHeight: "30px",
        }}>
          Find out the latest articles
        </p>
        <p style={{
          fontWeight: "400",
          fontSize: "10px",
          lineHeight: "15px",
          color: "#fff",
          width: "80%",
          marginLeft: "10%",
          marginTop: "0px",
        }}>
          Explore our latest articles and new content we publish regularly so you stay updated with everything new.
        </p>
      </div>

      <div style={{ width: "100%", display:'flex', flexDirection:"column", justifyContent:"center", alignItems:'center' }}>
        <div style={cardStyle} onClick={()=>{
          setShwoArtical(true)
        }}>
          <img src={current.img} alt={current.title} style={{ width: "100%", height: "auto", borderRadius: "24px", marginBottom: "15px" }} />
          <div style={{ margin:'5px' }}>
            <div style={{
                width:"100%",
                display:"flex",
                justifyContent:"space-between",
                alignItems:'center'
            }}>
            <p style={titleStyle}>{current.title}</p>
            <p style={dateStyle}>{current.date}</p>
            </div>
            <p style={descStyle}>{current.artical}</p>

            <button style={{
                border:'none',
                outline:"none",
                background:'transparent',
                color:'#fff'
            }}>
                See more
            </button>
          </div>
        </div>

      

        <div style={{ display: "flex", gap: "20px", alignItems: "center", justifyContent: "center", marginTop: "20px" }}>
          <div onClick={handleBack} style={{
            color: "#fff",
            backgroundColor: "#003EC5",
            width: "45px",
            height: "45px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: numArtical === 1 ? "not-allowed" : "pointer",
            opacity: numArtical === 1 ? 0.5 : 1,
          }}>
            <IoIosArrowBack size={22} />
          </div>

          <div onClick={handleNext} style={{
            color: "#fff",
            backgroundColor: "#003EC5",
            width: "45px",
            height: "45px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: numArtical === keys.length ? "not-allowed" : "pointer",
            opacity: numArtical === keys.length ? 0.5 : 1,
          }}>
            <IoIosArrowForward size={22} />
          </div>
        </div>
      </div>
    </>
  );
}
