import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "./imge/Img.png";
import Broject from "../home/project";
import Footer from "../partes/fotter";

export default function BrojectGet(){
const navigate = useNavigate(); // ملاحظة: لاحظ الأقواس ()
  const [hover, setHover] = useState(false);


   const balls = [
    { side: "right", top: "100px" },
    { side: "left", top: "400px" },
    { side: "right", top: "700px" },
    { side: "left", top: "1000px" },
    { side: "right", top: "1300px" },
    { side: "right", top: "1200px" },
    { side: "left", top: "1400px" },
   


  ];



    return(
        <>
   <div
  style={{
    minHeight: "150vh",
    background: "black",
    width: "100%",
    paddingTop: "130px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  }}
>

      {balls.map((ball, index) => (
        <div
          key={index}
          style={{
            width: "640px",
            height: "287px",
            borderRadius: "50%",
            background:"#504CFF33",
            position: "absolute",
              [ball.side]: "-10%",
            zIndex:'1000',
            top: ball.top,
            filter: "blur(40px)",
            opacity: 0.6,
          }}
        ></div>
      ))}

            <div style={{
                                   display:"flex",
                                   width:"90%"
                                   
 
            }}
              
            >
                <div style={{
                    width:"50%",
                    padding:'1%',
                    display:'flex',
                    flexDirection:'column',
                position:"relative",
                zIndex:"1000",
                color:"#fff"

                }}>
                    <p style={{
                        fontSize:"32px",
                        fontWeight:'500',
                        lineHeight:'40px'
                    }}
                      data-aos="fade-up"

                    
                    >
More than 60 innovative solutions and 30 registered trademarks with the latest global technologies.                    </p>
                    <p style={{
                        fontSize:'18px',
                        fontWeight:'400',
                        lineHeight:"30px"
                    }}
                      data-aos="fade-up"

                    >
We are committed to your success. Our technology consulting firm offers tailored strategies to ensure business excellence through precise solutions and strategic expertise to achieve sustainable                     </p>
                 
                </div>

                <div style={{
                    width:"50%",
                    position:'relative',
                    zIndex:999,

                }}
                
                  data-aos="fade-up"

                >
                          {/* ===== الصورة ===== */}
                            <div
                              onMouseEnter={() => setHover(true)}
                              onMouseLeave={() => setHover(false)}
                              style={{
                                height: "276px",
                                width: "588px",
                                marginRight: "40px",
                                marginTop:'40px',
                                zIndex:'100',
                                backgroundImage: `url(${img})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                borderRadius: "0px 0px 24px 24px",
                                transition: "all 0.4s ease",
                                transform: hover ? "scale(1.05)" : "scale(1)",
                                filter: hover ? "brightness(1.15)" : "brightness(1)",
                                cursor: "pointer",
                                position: "relative",
                              }}
                            >
                         
                    
                          
                                        </div>

                       
                            </div>
                          </div>





                        <div style={{
border: "3px solid blue",
width:"5%",
borderLeft:'none',
marginLeft:"90%",
marginTop:"-200px",
borderRadius:"0px 46px 46px 0px",
height:'260px'
}}

>

</div>
<div style={{
  border: "3px solid blue",
  borderRadius:"46px 0px 0px 46px",
    marginLeft:"-3%",
  width:"90%",
  borderRight:"none",
  borderBottom:"none",
  marginTop:"-3px",
  height:"370px",

}}


></div>



<div style={{
  width:"100%",
  marginTop:"-200px",
  paddingBottom:'40px',
  display:'flex',
  flexDirection:"column",
  alignItems:"center",
  
}}

  data-aos="fade-up"

>



<Broject showButton={false}/>

</div>



   
   <div style={{
    width:'100%',

    
    
   }}
   
     data-aos="fade-up"

   
   >
   <Footer/>
   </div>
   </div>
   </>
   )}