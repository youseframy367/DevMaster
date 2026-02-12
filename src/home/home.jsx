
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp  } from "react-icons/fa";

export default function Home() {

     const iconStyle = {
    color: "#fff",        // لون الأيقونات
    fontSize: "20px",     // حجم الأيقونات
    margin: "0 10px",     // تباعد بين الأيقونات
    cursor: "pointer",
    transition: "color 0.3s ease",
  };

 const buttonStyle = {
      fontFamily: "'Sora', sans-serif", // تم التغيير للخط Sora
    color: "#020F1F",
    background: "#FFFFFF",
    border: "none",
    borderRadius: "40px",
    padding: "14px 24px",
    display: "flex",
    alignItems: "center",
    fontFamily: "'Roboto', sans-serif",
    fontSize:'18px',
    fontWeight: 400,
    cursor: "pointer",
  };

const imgStyle = {
    width: 16,
    height: 16,
    marginLeft: 8,
    
  };

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


  ];
  return (
    <>
            <div

        style={{
          backgroundImage: "url('/icon/Header.png')", // صح
            backgroundSize: "cover",      // لتغطية كامل العنصر
            position:"absolute",
            top:"0px",
            left:'0px',
          margin: 0,
          width: "100%",
          height: "780px", 
          display:"flex",
          flexDirection:"column" ,
          
        justifyContent:"center"  ,
          alignItems:"center"          // أو أي ارتفاع تحبه
        }}
      >

         <div style={{ display: "flex", alignItems: "center" }}>
      <FaFacebookF
        style={iconStyle}
        onMouseEnter={(e) => (e.target.style.color = hoverColor)}
        onMouseLeave={(e) => (e.target.style.color = "#fff")}
      />
      <FaInstagram
        style={iconStyle}
        onMouseEnter={(e) => (e.target.style.color = hoverColor)}
        onMouseLeave={(e) => (e.target.style.color = "#fff")}
      />
      <FaLinkedinIn
        style={iconStyle}
        onMouseEnter={(e) => (e.target.style.color = hoverColor)}
        onMouseLeave={(e) => (e.target.style.color = "#fff")}
      />
      <FaWhatsapp 
        style={iconStyle}
        onMouseEnter={(e) => (e.target.style.color = hoverColor)}
        onMouseLeave={(e) => (e.target.style.color = "#fff")}
      />
    </div>
 <h1
  style={{
    fontWeight: 400,
    fontSize: "clamp(40px, 8vw, 105px)",
    textAlign: "center",
    margin: "0 auto",
    background: "linear-gradient(270deg, #9795FF, #FFFFFF, #FFFFFF, #BE9FFF)",
    WebkitBackgroundClip: "text",
    color: "transparent",
    backgroundSize: "400% 400%", // مهم للتحريك
    animation: "gradientMove 10s ease infinite",
    lineHeight:'110px'
  }}
>
  Create amazing work with DevMaster Company
</h1>

<style jsx>{`
  @keyframes gradientMove {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`}</style>

<p style={{
  fontWeight:'400',
      fontFamily: "'Inter', sans-serif", 
      color:"#fff",
      letterSpacing:'0px'

}}>We help you build modern, easy-to-use websites and applications for businesses and individuals, with clean design and future support.</p>


<button style={buttonStyle}>
        Free Consultation
          <img src="/icon/uil_arrow-up (1).png" alt="arrow up" style={imgStyle} />
        </button>
      <div style={{ 
  width: "200px", 
  height: "200px", 
  position: "relative", // حاوية للتراكب
  marginBottom:'-50px'
}}>
  {/* الصورة في المنتصف */}
  <div style={{
    width: "150px",
    height: "150px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)", // توسيط كامل
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }}>
    <img src="/icon/Group (5).png" alt="center"  />
  </div>

  {/* نص دائري حول الصورة */}
  <svg width="40-" height="400" style={{ position: "absolute", left: 0  }}>
  <defs>
    <path
      id="circlePath"
      d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0"
    />
  </defs>

  <text
    fill="#ffffff"
    fontSize="14"
    fontFamily="Inter"
    fontWeight="400"
  >
    <textPath
      href="#circlePath"
      startOffset="0"
      textLength="572"   // الطول المحيط للدائرة (تقريبًا 2 * π * 75)
      lengthAdjust="spacingAndGlyphs"
    >
      scroll down for work together • scroll down for work together • scroll down for work together
    </textPath>
  </text>
</svg>

</div>

      </div>

























      
      <div
      style={{
        minHeight: "4000px",
        background: "black",
        width: "100%",
        position: "absolute",
        top: "780px",
        paddingTop:"100px",
        paddingLeft:"70px",
              

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
            zIndex:'1000',
            top: ball.top,
            filter: "blur(40px)",
            opacity: 0.6,
          }}
        ></div>
      ))}

    

 <div style={{
        width:'100%',
        height:'238px',
       
   

      }}> 
   <div style={{
        width:"87%",
        height:"250px",
        border:"solid 3px blue",
        borderRadius:'46px 46px 46px 0px',
        borderLeft: "none",
transform: "translateX(28px)",

      }}></div>



        <div style={{
          display:'flex',
          justifyContent:"space-between",
          width:"95%",
                      zIndex:100,

transform: "translateY(-300px)",
          gap:'0px',
        }}>
         <div style={{ backgroundColor: "black", width: "80%",height:"260px",display:'flex',flexDirection:"column",justifyContent:"space-between"}}>
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
  >
    DevMaster Can Help Develop
    <br />
    your Company for the Future
  </p>

  <p style={{
    fontWeight:"400",
    color:"#fff",
    width:"400px",
    lineHeight:"28px",
              fontFamily: "'Inter', sans-serif",

  }}>
  IT work includes web design, UI design, UX, branding, and Shopify development.
</p>
</div>

<div style={{
  width:'20%',
  display:"flex",
paddingLeft:"40px"}}>
<button style={{
  padding:'14px 24px',
  fontWeight:'500',
      fontFamily: "'Inter', sans-serif", // ✅ أضف هذا السطر
      display:"flex",
      alignItems:'center',
      borderRadius:'40px',
      alignItems:'start',
      position:"absolute",
transform: "translate(-40px, 20px)",


}}>
Know More
    <img src="/icon/uil_arrow-up (2).png" alt="center"  />

</button>
</div>

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
        transform: "translateX(-20px)",

      marginTop:'15px'

      }}></div>

      <div>


<div style={{
  width:"100%",
  height:"226px",
  marginTop:'-390px',
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
  >We help you build a modern, easy-to-use website and mobile <br/> application for your company with a clean design.</p>

<button style={{
  display:"flex",
  alignItems:'center',
  padding:"14px 24px",
  borderRadius:'40px'
}}>Get Started 

      <img src="/icon/uil_arrow-up (2).png" alt="center"  />

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
    width: '90%',
    marginTop:'30px',
 marginLeft:'-150px',
    height: '500px',
    zIndex:'200',
    gap:'20px',
  }}
>
  <div
    style={{
   backgroundColor: 'rgba(21, 21, 21, 0.6)', // شفاف شوية
    backdropFilter: 'blur(30px)',
    WebkitBackdropFilter: 'blur(30px)', // لدعم Safari      
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
        help you to build website company that is modern, user friendly, and Clean design
      </p>

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
      marginLeft:"-15px",

}}>
Start with us
<img src="/icon/uil_arrow-up(1).png"></img>

  </button>



    </div>
    <img
      src="/icon/Group 1597883113.png"
      alt="icon"
      style={{
        width: '200px',
        height: '338px',
        objectFit: 'contain',
        transform: "translate(20px ,70px)",
      }}
    />
  </div>

<div style={{
  width:"50%",
        height: '350px',
        background:"#003EC5",
        borderRadius:'24px',
        display:"flex",
overflow: 'hidden'

}}>


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
help you to build website company that is modern, user friendly, good CEO, and Clean design      </p>

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
      marginLeft:"-15px",

}}>
Start with us
<img src="/icon/uil_arrow-up(1).png"></img>

  </button>



    </div>


<img style={{
  width:'462px',
  height:'238px',
          transform: "translate(20px ,110px)",

}} src="/icon/Group 1597883019.png"></img>

</div>




</div>























































<div
  style={{
    display: 'flex',
    flexDirection: 'row',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
   transform:"translateY(-120px)",
 marginLeft:'-150px',
    height: '500px',
    zIndex:'200',
    gap:'20px',
  }}
>
  <div
    style={{
   backgroundColor: 'rgba(21, 21, 21, 0.6)', // شفاف شوية
    backdropFilter: 'blur(30px)',
    WebkitBackdropFilter: 'blur(30px)', // لدعم Safari      
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
help you to build website company that is modern, user friendly, good CEO, and Clean design
      </p>

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
    marginLeft:"-15px",

}}>
Start with us
<img src="/icon/uil_arrow-up(1).png"></img>

  </button>



    </div>
    <img
      src="/icon/Group 1597883112.png"
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
         backgroundColor: 'rgba(21, 21, 21, 0.6)', // شفاف شوية
    backdropFilter: 'blur(30px)',
    WebkitBackdropFilter: 'blur(30px)', // لدعم Safari      
        borderRadius:'24px',
        display:"flex",
overflow: 'hidden'

}}>


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
    marginLeft:"-15px",
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

}} src="/icon/Shopify logo.png"></img>

</div>




</div>


<div
  style={{
    width: "30px",                  // عرض العنصر 40% من العنصر الأب
    marginTop: "-300px",           // تحريك العنصر للأعلى بمقدار 300px
   borderTop: "none",
       transform: "translateX(200px)",// تحريك العنصر لليسار بمقدار 40px

borderLeft: "none",
borderRight: "3px solid blue",
borderBottom: "3px solid blue",
            // إزالة الحد الأيسر
    borderRadius: "0px 0px 46px 0px", // تدوير الزاوية السفلية اليمنى فقط
    height: "150px"                // ارتفاع العنصر 150px
  }}
>
 

</div>



<div style={{ width: '100vw', height: '180px', position: 'relative', overflow: 'hidden', backgroundImage: "url('/icon/Group 1597883021.png')",
    backgroundSize: 'cover',      // لتغطية المساحة بالكامل
    backgroundPosition: 'center',  // لضبط الصورة في الوسط
    backgroundRepeat: 'no-repeat', // لمنع التكرار
    transform:" translate(-70px,0px)" ,
    zIndex:'200'

     }}>
  











  {/* المحتوى المتحرك داخل الشريط */}











  <div
    style={{
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '40px',
      color: '#fff',
      fontSize: '22px',
      fontWeight: 'bold',
      whiteSpace: 'nowrap',
      animation: 'marquee 15s linear infinite',
    }}
  >
    {[...Array(2)].map((_, i) => (
      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
        <img src="/icon/Logo(1).png" alt="logo" style={{ height: '60px' }} />
        <p>Google</p>
        <p>Microsoft</p>
        <p>Shopify</p>
        <p>Meta</p>
        <img src="/icon/Logo(1).png" alt="logo" style={{ height: '60px' }} />
      </div>
    ))}
  </div>

  <style jsx>{`
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  `}</style>
</div>

<div  style={{
   width: "65vw",              // نسبة من عرض الشاشة
  minWidth: "500px",          // أقصى عرض
  height: "23vh",             // نسبة من ارتفاع الشاشة
  maxHeight: "250px",         // أقصى ارتفاع
  marginTop: "-183px",         // تحريك نسبي بالنسبة للشاشة
  marginLeft: "-35vw",        // تحريك نسبي
  borderTop: "3px solid blue",
  borderLeft: "3px solid blue",
  borderBottom: "3px solid blue",
  borderRight: "none",
  borderRadius: "46px 0 0 46px",  //                // ارتفاع العنصر 150px
  }}>

</div>

<div style={{
  width:"40%",
  height:'150px',
    border: "3px solid blue",
    marginLeft:"40%",
    marginTop:'-3px',
    borderLeft:'none',
    borderBottom:'none',
    borderRadius:"0px 46px 46px 0px"

}}>

</div>







{// الجزئه الخاصه بالمشاريع 
}









<div style={{
  width:"95%",
  marginTop:'-210px'
}}>
  <p style={{
    fontSize:'68px',
    fontWeight:"400",
       backgroundImage:
        "linear-gradient(270deg, #9795FF, #FFFFFF, #FFFFFF, #BE9FFF)",
      WebkitBackgroundClip: "text",
      color: "transparent",
          fontFamily: "'Roboto', sans-serif",

  }}>Our Product</p>

  <div style={{
    marginTop:'-70px',
    display:'flex',
    justifyContent:'space-between',
    width:"90%",
    alignItems:"center"
  }}>
    <p style={{
      fontWeight:'400',
      lineHeight:'28px',
      color:"#fff"
    }}>help you to build website company that is modern, user friendly,<br/> good CEO, and Clean design</p>

<button style={{
  display:"flex",
  alignItems:'center',
  padding:"14px 24px",
  borderRadius:'40px'
}}>Get Started 

      <img src="/icon/uil_arrow-up (2).png" alt="center"  />

</button>
</div>
</div>





<div style={{
  marginTop:"20px",
  width:'90%',
  marginLeft:'-50px',
zIndex:"1000",
  display: "grid",
gridTemplateColumns: "repeat(2, 1fr)",
  gap: "20px"  // اختياري: مسافة بين الأعمدة والصفوف
}}>
  <div  style={{
    width:"90%"
  }}>
    <img src="/icon/Frame 1597883656.png" width="100%"></img>
    <p style={{
      fontWeight:'500',
      fontSize:"32px",
      color:"#fff",
                        fontFamily: "'Inter', sans-serif",
                        margin:"0px"

    }}>MStore</p>
    <p style={{
      fontWeight:'400',
      color:"#fff",
                              fontFamily: "'Inter', sans-serif",

    }}> Mangcoding is a biggest company in United Arab Emirates, who provides the services in Development Website, Shopify and Wordpress</p>
  </div>


 <div  style={{
    width:"90%"
  }}>
    <img src="/icon/Frame 1597883656.png" width="100%"></img>
    <p style={{
      fontWeight:'500',
      fontSize:"32px",
      color:"#fff",
                        fontFamily: "'Inter', sans-serif",
                        margin:"0px"

    }}>MStore</p>
    <p style={{
      fontWeight:'400',
      color:"#fff",
                              fontFamily: "'Inter', sans-serif",

    }}> Mangcoding is a biggest company in United Arab Emirates, who provides the services in Development Website, Shopify and Wordpress</p>
  </div>

 <div  style={{
    width:"90%"
  }}>
    <img src="/icon/Frame 1597883656.png" width="100%"></img>
    <p style={{
      fontWeight:'500',
      fontSize:"32px",
      color:"#fff",
                        fontFamily: "'Inter', sans-serif",
                        margin:"0px"

    }}>MStore</p>
    <p style={{
      fontWeight:'400',
      color:"#fff",
                              fontFamily: "'Inter', sans-serif",

    }}> Mangcoding is a biggest company in United Arab Emirates, who provides the services in Development Website, Shopify and Wordpress</p>
  </div>


 <div  style={{
    width:"90%"
  }}>
    <img src="/icon/Frame 1597883656.png" width="100%"></img>
    <p style={{
      fontWeight:'500',
      fontSize:"32px",
      color:"#fff",
                        fontFamily: "'Inter', sans-serif",
                        margin:"0px"

    }}>MStore</p>
    <p style={{
      fontWeight:'400',
      color:"#fff",
                              fontFamily: "'Inter', sans-serif",

    }}> Mangcoding is a biggest company in United Arab Emirates, who provides the services in Development Website, Shopify and Wordpress</p>
  </div>


</div>







<div style={{
border: "3px solid blue",
width:"4%",
borderLeft:'none',
marginLeft:"80%",
marginTop:"-280px",
borderRadius:"0px 46px 46px 0px",
height:'300px'
}}>

</div>
<div style={{
  border: "3px solid blue",
  borderRadius:"46px 0px 0px 46px",

  width:"90%",
  marginLeft:"-11%",
  borderRight:"none",
  borderBottom:"none",
  marginTop:"-3px",
  height:"300px",

}}>

</div>

<img src="/icon/“.png" style={{
  marginLeft:"35%",
  marginTop:"-150px"

}}></img>
<div style={{
  marginTop:"-650px",
  width:"90%",
  zIndex:'1000'
}}>
  <p style={{
    fontSize:"68px",
    fontWeight:"400",
      backgroundImage:
        "linear-gradient(270deg, #9795FF, #FFFFFF, #FFFFFF, #BE9FFF)",
      WebkitBackgroundClip: "text",
      color: "transparent",
      margin:"0px",
                        fontFamily: "'Inter', sans-serif",
  }}>
    What they say about us
  </p>
  <p style={{
    color:"#fff",
    fontWeight:"400",
                        fontFamily: "'Inter', sans-serif",


  }}>
    Work in the IT field includes Web Design, UI/UX Design,<br/>Branding and Shopify Development
  </p>
</div>
<div style={{
  marginTop:"20px",
  width:'84%',
  height:'500px',
  marginLeft:'-100px',
zIndex:"1000",
  display: "grid",
padding:"20px",
gridTemplateColumns: "repeat(3, 1fr)",
  gap: "20px" , // اختياري: مسافة بين الأعمدة والصفوف
                          fontFamily: "'Inter', sans-serif",

}}>  
<div style={{
  height:'33%',
  borderRadius:'24px',
  backgroundColor: 'rgba(21, 21, 21, 0.6)', // شفاف شوية
    backdropFilter: 'blur(30px)',
    WebkitBackdropFilter: 'blur(30px)', // لدعم Safari     
    height:"248px" 
}}>
  <div style={{
    margin:"10px",
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
  }}>
    <div style={{
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      gap:"10px"
    }}>
      <img src="/icon/501f8c77c3ce2d5e3280f39cae87f9413a9584f2.jpg" style={{
        width:"48px",
        height:"48px",
        borderRadius:"50%",
      }}></img>
      <div style={{
        lineHeight:".5"
      }}>
        <p style={{
          color:"#fff",
          fontWeight:'500',

        }}>Nugraha</p>
        <p style={{
          fontSize:"12px",
          fontWeight:"400",
          color:'#fff'
        }}>Fonder of Mangcoding</p>
        </div>
    </div>
           <img
  src="/icon/“(1).png"
  alt="icon"
/>


  </div>
  <p style={{
    margin:"10px",
    color:"#fff",
    fontWeight:"400",
  }}>

    Mangcoding is a biggest company in United Arab Emirates, who provides the services in Development Website, Shopify and Mobile Application
  </p>
</div>

<div style={{
  height:'33%',
  borderRadius:'24px',

  backgroundColor: 'rgba(21, 21, 21, 0.6)', // شفاف شوية
    backdropFilter: 'blur(30px)',
    WebkitBackdropFilter: 'blur(30px)', // لدعم Safari     
    height:"248px" 
}}>
  <div style={{
    margin:"10px",
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
  }}>
    <div style={{
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      gap:"10px"
    }}>
      <img src="/icon/501f8c77c3ce2d5e3280f39cae87f9413a9584f2.jpg" style={{
        width:"48px",
        height:"48px",
        borderRadius:"50%",
      }}></img>
      <div style={{
        lineHeight:".5"
      }}>
        <p style={{
          color:"#fff",
          fontWeight:'500',

        }}>Nugraha</p>
        <p style={{
          fontSize:"12px",
          fontWeight:"400",
          color:'#fff'
        }}>Fonder of Mangcoding</p>
        </div>
    </div>
           <img
  src="/icon/“(1).png"
  alt="icon"
/>


  </div>
  <p style={{
    margin:"10px",
    color:"#fff",
    fontWeight:"400",
  }}>

    Mangcoding is a biggest company in United Arab Emirates, who provides the services in Development Website, Shopify and Mobile Application
  </p>
</div>

<div style={{
  height:'33%',
  borderRadius:'24px',

  backgroundColor: 'rgba(21, 21, 21, 0.6)', // شفاف شوية
    backdropFilter: 'blur(30px)',
    WebkitBackdropFilter: 'blur(30px)', // لدعم Safari     
    height:"248px" 
}}>
  <div style={{
    margin:"10px",
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
  }}>
    <div style={{
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      gap:"10px"
    }}>
      <img src="/icon/501f8c77c3ce2d5e3280f39cae87f9413a9584f2.jpg" style={{
        width:"48px",
        height:"48px",
        borderRadius:"50%",
      }}></img>
      <div style={{
        lineHeight:".5"
      }}>
        <p style={{
          color:"#fff",
          fontWeight:'500',

        }}>Nugraha</p>
        <p style={{
          fontSize:"12px",
          fontWeight:"400",
          color:'#fff'
        }}>Fonder of Mangcoding</p>
        </div>
    </div>
           <img
  src="/icon/“(1).png"
  alt="icon"
/>


  </div>
  <p style={{
    margin:"10px",
    color:"#fff",
    fontWeight:"400",
  }}>

    Mangcoding is a biggest company in United Arab Emirates, who provides the services in Development Website, Shopify and Mobile Application
  </p>
</div>


<div style={{
  height:'33%',
  borderRadius:'24px',

  backgroundColor: 'rgba(21, 21, 21, 0.6)', // شفاف شوية
    backdropFilter: 'blur(30px)',
    WebkitBackdropFilter: 'blur(30px)', // لدعم Safari     
    height:"248px" 
}}>
  <div style={{
    margin:"10px",
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
  }}>
    <div style={{
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      gap:"10px"
    }}>
      <img src="/icon/501f8c77c3ce2d5e3280f39cae87f9413a9584f2.jpg" style={{
        width:"48px",
        height:"48px",
        borderRadius:"50%",
      }}></img>
      <div style={{
        lineHeight:".5"
      }}>
        <p style={{
          color:"#fff",
          fontWeight:'500',

        }}>Nugraha</p>
        <p style={{
          fontSize:"12px",
          fontWeight:"400",
          color:'#fff'
        }}>Fonder of Mangcoding</p>
        </div>
    </div>
           <img
  src="/icon/“(1).png"
  alt="icon"
/>


  </div>
  <p style={{
    margin:"10px",
    color:"#fff",
    fontWeight:"400",
  }}>

    Mangcoding is a biggest company in United Arab Emirates, who provides the services in Development Website, Shopify and Mobile Application
  </p>
</div>



<div style={{
  height:'33%',
  borderRadius:'24px',

  backgroundColor: 'rgba(21, 21, 21, 0.6)', // شفاف شوية
    backdropFilter: 'blur(30px)',
    WebkitBackdropFilter: 'blur(30px)', // لدعم Safari     
    height:"248px" 
}}>
  <div style={{
    margin:"10px",
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
  }}>
    <div style={{
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      gap:"10px"
    }}>
      <img src="/icon/501f8c77c3ce2d5e3280f39cae87f9413a9584f2.jpg" style={{
        width:"48px",
        height:"48px",
        borderRadius:"50%",
      }}></img>
      <div style={{
        lineHeight:".5"
      }}>
        <p style={{
          color:"#fff",
          fontWeight:'500',

        }}>Nugraha</p>
        <p style={{
          fontSize:"12px",
          fontWeight:"400",
          color:'#fff'
        }}>Fonder of Mangcoding</p>
        </div>
    </div>
           <img
  src="/icon/“(1).png"
  alt="icon"
/>


  </div>
  <p style={{
    margin:"10px",
    color:"#fff",
    fontWeight:"400",
  }}>

    Mangcoding is a biggest company in United Arab Emirates, who provides the services in Development Website, Shopify and Mobile Application
  </p>
</div>

<div style={{
  height:'33%',
  borderRadius:'24px',

  backgroundColor: 'rgba(21, 21, 21, 0.6)', // شفاف شوية
    backdropFilter: 'blur(30px)',
    WebkitBackdropFilter: 'blur(30px)', // لدعم Safari     
    height:"248px" 
}}>
  <div style={{
    margin:"10px",
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
  }}>
    <div style={{
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      gap:"10px"
    }}>
      <img src="/icon/501f8c77c3ce2d5e3280f39cae87f9413a9584f2.jpg" style={{
        width:"48px",
        height:"48px",
        borderRadius:"50%",
      }}></img>
      <div style={{
        lineHeight:".5"
      }}>
        <p style={{
          color:"#fff",
          fontWeight:'500',

        }}>Nugraha</p>
        <p style={{
          fontSize:"12px",
          fontWeight:"400",
          color:'#fff'
        }}>Fonder of Mangcoding</p>
        </div>
    </div>
           <img
  src="/icon/“(1).png"
  alt="icon"
/>


  </div>
  <p style={{
    margin:"10px",
    color:"#fff",
    fontWeight:"400",
  }}>

    Mangcoding is a biggest company in United Arab Emirates, who provides the services in Development Website, Shopify and Mobile Application
  </p>
</div>


</div>

</div>
</>
)}
