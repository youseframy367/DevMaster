import imgOne from "./img/83754dcac89291940c3dfc22f02dc21ced67e583.png";
import { useState } from "react";
import LogoAnimation from "../partes/animationiLogo";
import TimeStart from "./timeStartCompan";
import ImgWork from "./imgWork";
import imgBointDecor from "./img/Frame 47(1).png"
import CeoMaseg from "./ceo";
import Footer from "../partes/fotter";
import YourBesnis from "./newBesnis";
import { useNavigate, useLocation } from "react-router-dom";
export default function About() {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
   const balls = [
    { side: "right", top: "100px" },
    { side: "left", top: "400px" },
    { side: "right", top: "700px" },
    { side: "left", top: "1000px" },
    { side: "right", top: "1300px" },
    { side: "right", top: "1200px" },
    { side: "left", top: "1400px" },
    { side: "right", top: "1600px" },
    { side: "left", top: "1800px" },
    { side: "right", top: "2000px" },
    { side: "right", top: "2200px" },
    { side: "left", top: "2400px" },
    { side: "right", top: "2600px" },
    { side: "left", top: "2800px" },
    { side: "right", top: "3000px" },
    { side: "right", top: "3200px" },
    { side: "left", top: "3400px" },
    { side: "right", top: "3600px" },
    { side: "left", top: "3800px" },
    { side: "right", top: "4000px" },
       { side: "left", top: "4200px" },
    { side: "right", top: "4400px" },
    { side: "right", top: "4600px" },
    { side: "left", top: "4800px" },
    { side: "right", top: "5000px" },
    { side: "left", top: "5200px" },
    { side: "right", top: "5400px" },


  ];


  return (
      <>
        
      <div
      style={{
        Height: "auto",
        background: "black",
        width: "100%",
        position: "absolute",
        top: "0px",
              
        overflow: "hidden",
        display:"flex",
        flexDirection:"column",
        alignItems:'center',


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
            top: ball.top,
            filter: "blur(40px)",
            opacity: 0.6,
          }}
        ></div>
      ))}

    <div
      style={{
        width: "100%",
        paddingLeft: "5%",
        minHeight: "200px",
        background: "black",
        color: "#fff",
        paddingTop: "80px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* ===== النص ===== */}
        <div style={{ width: "40%", margin: "5%" }}>
          <p
            style={{
              fontSize: "64px",
              fontWeight: "500",
              fontFamily: "'Inter', sans-serif",
              backgroundImage:
                "linear-gradient(270deg, #9795FF, #FFFFFF, #FFFFFF, #BE9FFF)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
            data-aos="fade-up"

          >
            Clients Success <br /> is Our Focus
          </p>

          <p
            style={{
              fontSize: "18px",
              fontWeight: "400",
              lineHeight: "28px",
              marginTop: "-12px",
            }}
            data-aos="fade-up"

          >
             At our agency, we measure our success by the achievements of our clients. From strategic planning and creative solutions to ongoing support and performance optimization, we work hand-in-hand to ensure your business not only meets but exceeds its goals. Your growth, satisfaction, and long-term success are at the heart of everything we do.
          </p>

          <button
    data-aos="fade-up"

          onClick={() => navigate("/serverReqst")}
      
            style={{
              fontWeight: "400",
              fontSize: "18px",
              padding: "14px 20px",
              borderRadius: "50px",
              border: "none",
              outline: "none",
              background: "#fff",
              marginTop: "30px",
              marginBottom:"20px",
              cursor: "pointer",
              transition: "0.3s",
              display:"flex",
              zIndex:9999,
              position:'relative'
            }}
            onMouseEnter={(e) => (e.target.style.background = "#E0E0E0")}
            onMouseLeave={(e) => (e.target.style.background = "#fff")}
          >
            Request Service Now
          </button>
        </div>

        {/* ===== الصورة ===== */}
        <div
        data-aos="fade-up"

          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            width: "35%",
            height: "488px",
            margin: "40px",
            backgroundImage: `url(${imgOne})`,
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
          {/* overlay شفاف يظهر بالهوفر */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: hover ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0)",
              transition: "background 0.4s ease",
              borderRadius: "0px 0px 24px 24px",
            }}
          ></div>

          {/* النص فوق الصورة */}
          <p
            style={{
              position: "absolute",
              bottom: "0",
              width: "100%",
              height:"50px",
              paddingTop:"25px",
              marginBottom:"-15px",
              textAlign: "center",
              background: "rgba(16,15,27,0.2)",
              padding: "16px 0",
              color: "#fff",
              fontWeight: "500",
              fontSize: "18px",
              zIndex: 2,
            }}
          >
            Technical Consultation With Dev Sparks
          </p>

          {/* الإطار الداخلي */}
          <div
            style={{
              width: "100%",
              height: "480px",
              border: "2px solid #003EC5",
              borderRadius: "24px",
              position: "absolute",
              top: "40px",
              left: "30px",
              zIndex: 0,
              transition: "0.4s ease",
              transform: hover ? "translateY(-10px)" : "translateY(0)",
            }}
          ></div>
        </div>
      </div>
<div style={{
  width:"100%",
  position:'relative',
  zIndex:9999

}}
  data-aos="fade-up"

>

    <ImgWork/>

</div>

                        <div style={{
border: "3px solid blue",
width:"5%",
borderLeft:'none',
marginLeft:"91%",
marginTop:"-200px",
borderRadius:"0px 46px 46px 0px",
height:'260px',
position:'relative',

zIndex:0,
}}


>

</div>
<div style={{
  border: "3px solid blue",
  borderRadius:"46px 0px 0px 46px",
    marginLeft:"0%",
  width:"92%",
  borderRight:"none",
  borderBottom:"none",
  marginTop:"-3px",
  height:"370px",

}}


></div>

<div style={{
  width:"100%",
  zIndex:999
  
  
}}
  data-aos="fade-up"

>

<YourBesnis/>

</div>




<div
  style={{
    width: "10%",                  // عرض العنصر 40% من العنصر الأب
   borderTop: "none",
   marginLeft:'60%',

borderLeft: "none",
borderRight: "none",
borderBottom: "3px solid blue",
            // إزالة الحد الأيسر
    borderRadius: "0px 0px 46px 0px", // تدوير الزاوية السفلية اليمنى فقط
    height: "50px"                // ارتفاع العنصر 150px
  }}

>
 

</div>
<div style={{
    width:"60%",
    marginTop:"-3px",
    height:'200px',
    marginLeft:"3%",
border: "3px solid blue",
    borderRadius: "46px 0px 0px 46px", // تدوير الزاوية السفلية اليمنى فقط

    borderRight:'none'

}}


>

</div>





<div style={{
    marginTop:'-160px',
    width:'100%',
    paddingRight:'10%',
    display:'flex',
    justifyContent:"center",
    alignItems:"center"
}}
  data-aos="fade-up"

>
<LogoAnimation/>
</div>

<div
  style={{
    width:"35%",
    marginLeft:"60%",
    height: "60px",       // صحّحت الحرف
    zIndex: 100,          // رقم بدل string
    border: "3px solid blue",
    marginTop: "37px",
    borderBottom: "none",
    borderLeft:"none",
    borderRadius:"0px 45px 0px 0px"
  }}


>
  {/* محتوى هنا */}
</div>




<div style={{
    border: "3px solid blue",
    width:"10%",
    marginLeft:'85%',
    marginTop:"-60px",
    height:"220px",
    borderTop:"none",
    borderLeft:"none",
    borderBottom:"none",


        borderRadius: "0px 45px 46px 0px", // تدوير الزاوية السفلية اليمنى فقط


}}


>

</div>

<img src={imgBointDecor} style={{

    transform: "translateY(-180px)", 
       marginLeft:"57%"
}}


  data-aos="fade-up"

></img>

 </div>
 <div style={{
  width:"100%",
  zIndex:9999,
  display:"flex",
  justifyContent:"center"
 }}
 
   data-aos="fade-up"

 >

<TimeStart/>
</div>

<div style={{
  width:"50px",
  height:"200px",
  marginTop:"-120px",
      border: "3px solid blue",
      marginLeft:'90%',
      borderLeft:"none",
      borderRadius:'0px 45px 45px 0px'

}}


>

</div >
<div style={{
  width:"88%",
  borderBottom: "3px solid blue",
  marginTop:"-3px"
}}

>

</div>
<div style={{
  width:"50px",
  height:"150px",
  marginLeft:'-90%',
  marginTop:"-3px",
  borderRadius:'45px 0px 0px 45px',
        border: "3px solid blue",
        borderRight:'none',
        borderBottom:"none",

}}


>

</div>

<div style={{
  width:"100%",
  zIndex:99,
  display:'flex',
  flexDirection:"column",
  justifyContent:"center",
  alignItems:'center'
}}

  data-aos="fade-up"


>

<CeoMaseg/>

</div>
<div style={{
  width:"100%",

}}
  data-aos="fade-up"

>

<Footer/>


</div>


    </div>

    </>
  );
}
