import SideBar from "./partes/sidbar";

import CartHover from "./sectionHoverCart";
import LogoAnimation from "../../partes/animationiLogo";
import Broject from "./project";
import Artical from "./arcical";
import JopsSmoleScren from "./jops";
import SayAbout from "./sayAbout";
import FooterSmolScren from "./partes/foterSmolScren";
import { useState } from "react";
export default function DesinToBaner(){
  const [sidbar,setSidBar]=useState(false)
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



    return(
    <>
        
      <div
      style={{
        minHeight:'100vh',
        background: "black",
        width: "100%",
        position: "absolute",
        marginLeft:'0px',
        top: "690px",
        left:'0px',
              paddingTop:"10px",
        overflow: "hidden",
        display:"flex",
        flexDirection:"column",
        alignItems:'center',
        justifyContent:'center',
                  fontFamily: "'Inter', sans-serif",



      }}
    >
      {balls.map((ball, index) => (
        <div
          key={index}
          style={{
            width: "640px",
            height: "287px",
            borderRadius: "50%",
                        position: "absolute",
              [ball.side]: "0",

            background:"#504CFF33",
            top: ball.top,
            filter: "blur(40px)",
            opacity: 0.6,
            zIndex:0,
                  pointerEvents: "none", // مهم
          }}
        ></div>
      ))}
   
            <div style={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
                width:"100%",
                margin:"0px",
                          fontFamily: "'Inter', sans-serif",

            }}
              data-aos="fade-up"

            >





            <p style={{
         backgroundImage:
        "linear-gradient(270deg, #9795FF, #FFFFFF, #FFFFFF, #BE9FFF)",
      WebkitBackgroundClip: "text",
      color: "transparent",
      fontSize:"20px",
      fontWeight:'500',
      lineHeight:'30px',
      marginBottom :'0px',
                fontFamily: "'Inter', sans-serif",

}}

>

                Services
            </p>
            <p style={{
                fontWeight:'400',
                fontSize:'10px',
                lineHeight:'15px',
                color:'#fff',
                width:'80%',
                marginTop:"0px",
                                textAlign:'center',

      
            }}
              data-aos="fade-up"

            
            >

We provide everything your business needs to grow: advertising campaigns, professional designs, website and mobile app development, and full marketing services to ensure your success.


            </p>


            </div>
            <div style={{
              width:"100%",
              marginTop:'20px',
              display:"flex",
              flexDirection:'column',
              justifyContent:"center",
              alignItems:'center',
                        fontFamily: "'Inter', sans-serif",

            }}
              data-aos="fade-up"

            >
            <CartHover/>
            </div>
            <div style={{
              width:"100%",
              margin:"20px 0px",

              
            }}
              data-aos="fade-up"

            >

            <LogoAnimation width="100" height="80" heightImgAnimwtion="40" marginLogo="15"></LogoAnimation>
            </div>
            <div style={{          fontFamily: "'Inter', sans-serif",
}}
  data-aos="fade-up"

>
              <Broject/>
            </div>
            <div style={{          fontFamily: "'Inter', sans-serif",
}}
  data-aos="fade-up"

>

              <Artical/>
            </div>
            <div style={{          fontFamily: "'Inter', sans-serif",
}}
  data-aos="fade-up"

>

              <JopsSmoleScren/>
            </div>
            <div style={{          fontFamily: "'Inter', sans-serif",marginTop:"10px"
}}
  data-aos="fade-up"

>

              <SayAbout/>
            </div>
            <div>
              <FooterSmolScren/>
            </div>

        </div>
        
        
        
        
        </>
    )
}