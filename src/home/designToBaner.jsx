import Broject from "./project";
import ApoutUs from "./sayAboutUs";
import Articles from "./articles";
import Jops from "./jobes";
import Footer from "../partes/fotter";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import LogoAnimation from "../partes/animationiLogo";
import { useState } from "react";
export default function Design(){
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);
  const [hover2 ,setHover2]=useState(false);
  const [hover3 ,setHover3]=useState(false);
  const [hover4, setHover4]=useState(false)
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



    return(
    <>
        
      <div
      style={{
        height: "auto",
        background: "black",
        width: "100%",
        position: "absolute",
        marginLeft:'0px',
        top: "780px",
        left:'0px',
        paddingTop:"370px",
              
        overflow: "hidden",
        display:"flex",
        flexDirection:"column",
        alignItems:'center',
        justifyContent:'center'


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
                  pointerEvents: "none", // مهم
          }}
        ></div>
      ))}

    



 <div style={{
        width:'90%',
        marginLeft:"5%"
   

      }}> 

      <div style={{
        width:"10%",
        height:'180px',
        border:"solid 3px blue",
        marginLeft:"88%",
        borderLeft:"none",
        marginTop:"-180px",
        borderTop:"none",
        borderRadius:'0px 45px 45px 0px'
      }}
      >

      </div>
   <div style={{
        width:"80%",
        
        marginLeft:'10%',
        border:"solid 3px blue",
        marginTop:"-3px",
        borderRadius:'0px',
        borderLeft: "none",
        borderRight:"none",
        borderTop:"none"
      }}
      
      ></div>



        <div style={{
          display:'flex',
          flexDirection:"column",
          width:"95%",
          height:"250px",
                      zIndex:100,

transform: "translateY(-280px)",
          gap:'0px',
        }}>
         <div style={{ width: "100%",height:"260px",display:'flex',flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
  <p
    style={{
      fontSize: "68px",
      fontWeight: "400",
      fontFamily: "'Inter', sans-serif",
     
      lineHeight: "75px",
      margin: 0,
      backgroundImage:
        "linear-gradient(270deg, #9795FF, #FFFFFF, #FFFFFF, #BE9FFF)",
      WebkitBackgroundClip: "text",
      color: "transparent",
      display: "flex",
    }}
    data-aos="fade-up"
  >
    DevMaster Can Help Develop
    <br />
    your Company for the Future
  </p>

  <button 
  onClick={()=>{
    navigate("/serverReqst")
  }}
  
  style={{
  padding:'14px 24px',
  fontWeight:'500',
  fontSize:"16px",
  colro:'#16121E',
      fontFamily: "'Inter', sans-serif", // ✅ أضف هذا السطر
      display:"flex",
      alignItems:'center',
      borderRadius:'40px',
      alignItems:'start',
      border:"none",
      outline:"none",
      gap:"5px",

}}
data-aos="fade-up"

>
Know More
        <img src="/icon/uil_arrow-up (1).png" alt="arrow up"  />

</button>
</div>

  <p style={{
    fontWeight:"400",
    color:"#fff",
    width:"1000px",
    lineHeight:"28px",
              fontFamily: "'Inter', sans-serif",

  }}
  
  data-aos="fade-up"
  >
We provide everything your business needs to grow: advertising campaigns, professional designs, website and mobile <br/> app development, and full marketing services to ensure your success.</p>





</div>

        </div>
        <div style={{


   width:'100%',
        height:'238px',
        marginTop:"0px",


        }}>

 <div style={{
        width:"60%",
        height:"400px",
        
        border:"solid 3px blue",
        borderRadius:'46px 0px 0px 46px',
        borderRight:'none',
       borderBottom:'none',
       marginLeft:'4%',

      marginTop:'-253px'

      }}
      
      ></div>

      <div>


<div style={{
  width:"100%",
  height:"226px",
  marginTop:'-390px',
  marginLeft:'8%',
  display:'flex',
  flexDirection:"column",
  justifyContent:'space-around'
}}>

<p    style={{
      fontSize: "68px",
      fontWeight: "400",
      fontFamily: "'Inter', sans-serif",
     
      lineHeight: "75px",
      marginTop: "30px",
      backgroundImage:
        "linear-gradient(270deg, #9795FF, #FFFFFF, #FFFFFF, #BE9FFF)",
      WebkitBackgroundClip: "text",
      color: "transparent",
      display: "flex",
    }}
data-aos="fade-up"
>
  Let’s work together
  
  <br/>
   with our us
</p>

<div style={{
  width:'85%',
  display:"flex",
  justifyContent:'space-between',
  alignItems:'center',
  marginTop:"-50px",
}}>
  <p  style={{
    fontWeight:"400",
    color:"#fff",
    width:"600px",
    lineHeight:"28px",
          fontFamily: "'Inter', sans-serif",

  }}

  data-aos="fade-up"
  >We are here to support you every step of the way toward your <br/> digital project’s success.</p>

<button
onClick={()=>{
    navigate("/services")
}}


style={{
  display:"flex",
  alignItems:'center',
  padding:"14px 24px",
  borderRadius:'40px',
  color:"#16121E",
  fontSize:"16px",
  fontWeight:"500",
  border:'none',
  outline:'none',
  zIndex:9999,
  gap:"5px"
}}
data-aos="fade-up"
>Get Started 

        <img src="/icon/uil_arrow-up (1).png" alt="arrow up"  />

</button>
</div>
</div>

</div>
    </div>  




{//التانى
}



        
<div
  style={{
    display: 'flex',
    flexDirection: 'row',
    flexDirection:'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    marginTop:'-230px',
 marginLeft:'2%',
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
      <img src="/imgTwo/Frame(4).png"></img>
      <p style={{
        fontSize:"32px",
        fontWeight:'400',
              fontFamily: "'Inter', sans-serif",


      }}>UI/UX Design</p>

      <p style={{
        width:"230px",
        lineHeight:"28px"
      }}>
We create amazing digital experiences that make your users enjoy every moment on your app or website      </p>

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
We design modern, user-friendly websites that help your business grow and shine     </p>

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
          transform: "translate(60px ,100px)",

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
    width: '95%',
    marginTop:'-130px',
 marginLeft:'2%',
    height: '500px',
    zIndex:'200',
    gap:'20px'
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
We build a strong brand identity that leaves a lasting impression on your customers      </p>

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
        width:"310px",
        lineHeight:"28px",
        color:"#FFF",
        lineHeight:'28px',
                          fontFamily: "'Inter', sans-serif",
                          marginTop:'-10px'

      }}>
We create e-commerce stores on Shopify, Salla, and Zid easily and with high professionalism, boosting your sales opportunities and growing your business.</p>
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


<div
  style={{
    width: "58px",                  // عرض العنصر 40% من العنصر الأب
    marginTop: "-100px",           // تحريك العنصر للأعلى بمقدار 300px
   borderTop: "none",
marginLeft:'45%',
borderLeft: "none",
borderRight: "3px solid blue",
borderBottom: "3px solid blue",
            // إزالة الحد الأيسر
    borderRadius: "0px 0px 46px 0px", // تدوير الزاوية السفلية اليمنى فقط
    height: "50px"                // ارتفاع العنصر 150px
  }}
>
 

</div>




















<div style={{
  marginTop:"40px",
  width:"100%",
  display:'flex',
  justifyContent:'center',
  alignItems:"center",
}}
        data-aos="fade-up"

>

<LogoAnimation/>
</div>




      {/* Borders العلوية */}
      <div
        style={{
          width: "65%",
          minWidth: "500px",
          height: "200px",
          maxHeight: "250px",
          marginTop: "-163px",
          marginLeft: "-23%",
          borderTop: "3px solid blue",
          borderLeft: "3px solid blue",
          borderBottom: "3px solid blue",
          borderRight: "none",
          borderRadius: "46px 0 0 46px",
        }}

      ></div>

      <div
        style={{
          width: "40%",
          height: "180px",
          border: "3px solid blue",
          marginLeft: "53%",
          marginTop: "-3px",
          borderLeft: "none",
          borderBottom: "none",
          borderRadius: "0px 46px 46px 0px",
        }}
      ></div>

<div style={{
  width:'100',
  paddingLeft:'3%',
  display:"flex",
  flexDirection:'column',
  justifyContent:"center",
  alignItems:"center",
  zIndex:9999
}}

data-aos="fade-up"
>

<Broject/>
</div>
<div style={{
  width:'100%',
  display:'flex',
  zIndex:999,
    flexDirection:'column',
  alignItems:"center",
  justifyContent:"center",
}}
data-aos="fade-up"
>


<ApoutUs/>
</div>


            <div style={{
border: "3px solid blue",
width:"4%",
borderLeft:'none',
marginLeft:"92%",
marginTop:"-150px",
borderRadius:"0px 46px 46px 0px",
height:'200px',
zIndex:0
}}

>

</div>
<div style={{
  border: "3px solid blue",
  borderRadius:"46px 0px 0px 46px",
  width:"91%",
  marginLeft:"-3%",
  borderRight:"none",
  borderBottom:"none",
  marginTop:"-3px",
  height:"300px",

}}

></div>

 
<div style={{
  width:'100%',
  display:"flex",
  flexDirection:"column",
  width:'100%',
  justifyContent:"center",
  alignItems:"center",
  paddingLeft:'2%',
  zIndex:99

}}
data-aos="fade-up"

>

<Articles/>

</div>


        
                    <div style={{
border: "3px solid blue",
width:"5%",
borderLeft:'none',
marginLeft:"92%",
marginTop:"-200px",
borderRadius:"0px 46px 46px 0px",
height:'260px',
zIndex:0
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
  height:"300px",

}}


></div>
        

    

<div style={{
  width:'100%',
  display:'flex',
  flexDirection:'column',
  justifyContent:"center",
  alignItems:'center'
}}
data-aos="fade-up"

>

<Jops/>
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
    )
}