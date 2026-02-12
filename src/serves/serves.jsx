import { useState } from "react";
import imgOne from "./imge/image 11.png";
import { useNavigate } from "react-router-dom";
import Footer from "../partes/fotter";

export default function Serves(){
const navigate = useNavigate(); // ملاحظة: لاحظ الأقواس ()
 const [hover, setHover] = useState(false);
  const [hover2 ,setHover2]=useState(false);
  const [hover3 ,setHover3]=useState(false);
  const [hover4, setHover4]=useState(false)

   const balls = [
    { side: "right", top: "100px" },
    { side: "left", top: "400px" },
    { side: "right", top: "700px" },
    { side: "left", top: "900px" },
     { side: "right", top: "1100px" },
    { side: "left", top: "1300px" },
    { side: "right", top: "1500px" },

   


  ];



    return(
        <>
   <div
  style={{
    minHeight: "160vh",
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
                                   
 
            }}>
                <div style={{
                    width:"50%",
                    padding:'4%',
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
                        More than one integrated service provided by the Dev Sparks for a complete digital transformation
                    </p>
                    <p style={{
                        fontSize:'18px',
                        fontWeight:'400',
                        lineHeight:"30px"
                    }}
                    
                      data-aos="fade-up"

                    >
More than one integrated service provided by Dev Sparks for a complete digital transformation Dev Sparks offers a range of integrated services designed to guide your business through a full digital transformation. From strategy development and creative solutions to implementation and optimization, our comprehensive approach ensures seamless and measurable results for every client.                    </p>
                    <button
                      data-aos="fade-up"

                    
                    onClick={()=>{
                      navigate("/serverReqst")
                    }}
                    
                    style={{
                        padding:'14px 20px',
                        borderRadius:"50px",
                        border:"none",
                        outline:"none",
                        color:'#131313',
                        background:'#fff',
                        fontSize:"18px",
                        width:'230px',
                        marginTop:"20px"
                    }}>
                        Request Service Now
                    </button>
                </div>

                <div style={{
                    width:"50%",
                    position:'relative',
                    zIndex:999

                }}
                  data-aos="fade-up"

                >
                          {/* ===== الصورة ===== */}
                            <div
                              onMouseEnter={() => setHover(true)}
                              onMouseLeave={() => setHover(false)}
                              style={{
                                width: "93%",
                                height: "488px",
                                margin: "40px",
                                zIndex:'100',
                                backgroundImage: `url(${imgOne})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                borderRadius: "0px 0px 24px 24px",
                                transition: "all 0.4s ease",
                                transform: hover ? "scale(1.05)" : "scale(1)",
                                filter: hover ? "brightness(1.15)" : "brightness(1)",
                                cursor: "pointer",
                                position: "relative",
                                zIndex:9999
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
Technical Consultation With Dev Sparks                              </p>
                    
                       
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
height:'260px',
position:'relative',
zIndex:0
}}

>

</div>
<div style={{
  border: "3px solid blue",
  borderRadius:"46px 0px 0px 46px",
    marginLeft:"-3%",
  width:"88%",
  borderRight:"none",
  borderBottom:"none",
  marginTop:"-3px",
  height:"370px",

}}


></div>











    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        padding: "100px 0",
        marginTop:'-480px'
      }}
    >
      <div
        style={{
          width: "95%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
<div style={{
    width:"100%",
    paddingLeft:"90px"
}}>

<p style={{
         backgroundImage:
        "linear-gradient(270deg, #9795FF, #FFFFFF, #FFFFFF, #BE9FFF)",
      WebkitBackgroundClip: "text",
      color: "transparent",
      fontSize:"68px",
      fontWeight:'400',
      lineHeight:'75px'
}}

  data-aos="fade-up"

>
    Let’s work together with our us
</p>
<p style={{
    lineHeight:"28px",
    fontWeight:'400',
    marginTop:'-15px'
}}
  data-aos="fade-up"


>

We help you build a modern, easy-to-use website and mobile application for your company with a clean design.

</p>





    </div>




    
        
<div
  style={{
    display: 'flex',
    flexDirection: 'row',
    flexDirection:'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop:'-30px',
 marginLeft:'-20px',
    height: '500px',
    zIndex:'200',
    gap:'20px',
  }}

    data-aos="fade-up"

>
  <div
    style={{
      backgroundColor: hover3 ? "#003EC5" : "rgba(21, 21, 21, 0.6)", // يتغير على Hover
           backdropFilter: 'blur(30px)',
        WebkitBackdropFilter: 'blur(30px)',
      width: '40%',
      height: '350px',
      color: '#fff',
      display: 'flex',
       position: 'relative',
  top: '0px',
  left: '0px',
    
      borderRadius: '24px',
      overflow:'hidden'
    }}
       onMouseEnter={() => setHover3(true)}
      onMouseLeave={() => setHover3(false)}
  onClick={()=>{
    navigate("/serverReqst")
  }}
  
  >
    <div style={{
      width:"65%",
      margin:"20px"
    }}>
      <img src="/icon/Frame 1597883653.png"></img>
      <p style={{
        fontSize:"32px",
        fontWeight:'400',
              fontFamily: "'Inter', sans-serif",


      }}>UI/UX Design</p>

      <p style={{
        width:"230px",
        lineHeight:"28px"
      }}>
help you to build website company that is modern, user friendly, and Clean design      </p>

<button style={{
    background: 'transparent',
    cursor:'pointer',
    display:"flex",
    alignItems:'center',
    color:'#fff',
    fontWeight:'400',
                  fontFamily: "'Inter', sans-serif",

    textDecoration: "underline",
    border:"none",
  outline:"none",
      marginLeft:"0px",

}}>
Start with us
<img src="/icon/uil_arrow-up(1).png"></img>

  </button>



    </div>
    <img
      src="/imgTwo/uiux.png"
      alt="icon"
      style={{
        width: '200px',
        height: '338px',
        objectFit: 'contain',
        transform: "translate(20px ,70px)",
      }}
    />
  </div>

   <div
      style={{
        width: "50%",
        height: "350px",
        backgroundColor: hover2 ? "#003EC5" : "rgba(21, 21, 21, 0.6)", // يتغير على Hover
           backdropFilter: 'blur(30px)',
        WebkitBackdropFilter: 'blur(30px)',
        borderRadius: "24px",
        display: "flex",
        overflow: "hidden",
        transition: "background 0.3s ease", // يجعل التغيير سلس
      }}
      onMouseEnter={() => setHover2(true)}
      onMouseLeave={() => setHover2(false)}

        onClick={()=>{
    navigate("/serverReqst")
  }}
  
    >

    <div style={{
      width:"65%",
      margin:"20px 20px 40px 20px"
    }}>
      <img src="/icon/Frame 1597883653(1).png"></img>
      <p style={{
        fontSize:"32px",
        fontWeight:'400',
              fontFamily: "'Inter', sans-serif",
              color:"#fff"


      }}>Website Dev</p>

      <p style={{
        width:"230px",
        lineHeight:"28px",
        color:"#FFF",
        lineHeight:'28px',
                          fontFamily: "'Inter', sans-serif",
                          marginTop:'-10px'

      }}>
help you to build website company that is modern, user friendly, good CEO, and Clean design     </p>

<button style={{
    background: 'transparent',
    cursor:'pointer',
    display:"flex",
    alignItems:'center',
    color:'#fff',
    fontWeight:'400',
                  fontFamily: "'Inter', sans-serif",
textDecoration: "underline",
    marginTop:'-10px',
    border:"none",
  outline:"none",
      marginLeft:"0px",

}}>
Start with us
<img src="/icon/uil_arrow-up(1).png"></img>

  </button>



    </div>


<img style={{
  width:'462px',
  height:'238px',
          transform: "translate(60px ,110px)",

}} src="/imgTwo/web.png"></img>

</div>




</div>























































<div
  style={{
    display: 'flex',
    flexDirection: 'row',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
   transform:"translateY(-20px)",
 marginLeft:'-30px',
    height: '300px',
    zIndex:'200',
    gap:'20px',
  }}

    data-aos="fade-up"

>
    <div
      style={{
        backgroundColor: hover ? "#003EC5" : "rgba(21, 21, 21, 0.6)", // يتغير على Hover
        backdropFilter: 'blur(30px)',
        WebkitBackdropFilter: 'blur(30px)',
        width: '40%',
        height: '350px',
        color: '#fff',
        display: 'flex',
        position: 'relative',
        top: '0px',
        left: '0px',
        borderRadius: '24px',
        overflow: 'hidden',
        transition: "background 0.3s ease", // يجعل التغيير سلس
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
        onClick={()=>{
    navigate("/serverReqst")
  }}
  
    >

    <div style={{
      width:"65%",
      margin:"20px"
    }}>
      <img src="/icon/Frame 1597883653(3).png"></img>
      <p style={{
        fontSize:"32px",
        fontWeight:'400',
              fontFamily: "'Inter', sans-serif",


      }}>Branding</p>

      <p style={{
        width:"230px",
        lineHeight:"28px",
          marginTop:'-10px'
      }}>
help you to build website company that is modern, user friendly, good CEO, and Clean design      </p>

<button style={{
    background: 'transparent',
    cursor:'pointer',
    display:"flex",
    alignItems:'center',
    color:'#fff',
    fontWeight:'400',
                  fontFamily: "'Inter', sans-serif",
marginTop:'-10px',
    textDecoration: "underline",
    border:"none",
  outline:"none",
    marginLeft:"0px",

}}>
Start with us
<img src="/icon/uil_arrow-up(1).png"></img>

  </button>



    </div>
    <img
      src="/imgTwo/jj.png"
      alt="icon"
      style={{
        background: 'transparent',

        width: '406px',
        height: '406px',
        objectFit: 'contain',
        transform: "translate(-100px ,120px)",
      }}
    />
  </div>

<div style={{
  width:"50%",
        height: '350px',
      backgroundColor: hover4 ? "#003EC5" : "rgba(21, 21, 21, 0.6)", // يتغير على Hover
    backdropFilter: 'blur(30px)',
    WebkitBackdropFilter: 'blur(30px)', // لدعم Safari      
        borderRadius:'24px',
        display:"flex",
overflow: 'hidden'

}}

     onMouseEnter={() => setHover4(true)}
      onMouseLeave={() => setHover4(false)}

        onClick={()=>{
    navigate("/serverReqst")
  }}
  


>


    <div style={{
      width:"65%",
      margin:"20px 20px 40px 20px",
    
    }}>
      <img src="/icon/Frame 1597883653(2).png"></img>
      <p style={{
        fontSize:"32px",
        fontWeight:'400',
              fontFamily: "'Inter', sans-serif",
              color:"#fff"


      }}>Shopify</p>

      <p style={{
        width:"230px",
        lineHeight:"28px",
        color:"#FFF",
        lineHeight:'28px',
                          fontFamily: "'Inter', sans-serif",
                          marginTop:'-10px'

      }}>
help you to build website company that is modern, user friendly, good CEO, and Clean design</p>
<button style={{
    background: 'transparent',
    cursor:'pointer',
    display:"flex",
    alignItems:'center',
    color:'#fff',
    fontWeight:'400',
                  fontFamily: "'Inter', sans-serif",
textDecoration: "underline",
    marginTop:'-10px',
    marginLeft:"0px",
    border:"none",
  outline:"none"
}}>
Start with us
<img src="/icon/uil_arrow-up(1).png"></img>

  </button>



    </div>


<img style={{
  width:'462px',
  height:'238px',
          transform: "translate(20px ,110px)",

}} src="/imgTwo/poer.png"></img>

</div>




</div>



  </div>
    </div>


 <div style={{
      width:"100%",
      zIndex:999,
    background: "black" // الخلفية السوداء
        }}
  data-aos="fade-up"

    >
    <Footer/>
    </div>





    </div>
   
    </>
  );
}
