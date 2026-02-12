
import { useNavigate } from "react-router-dom";
import Pirivacy from "../pages/PrivacyPolicy";
import { nav } from "framer-motion/m";

export default function Footer( {top=true}) {
  const navigate=useNavigate()
  return (
    <footer
      style={{
        width: "100%",
        overflow:"hidden",
        backgroundColor: "black",
        position: "relative",
        height: top ?  "630px":"400px",
        color: "#fff",
        display: "flex",
        border:"#003ACA  solid",
borderWidth: "1px 0px 1px 0px",
position:"relative",
zIndex:9999,
margin:'0px',
     
        overflow: "hidden", // مهم حتى لا يتسرب التوهج خارج الفوتر
      }}
    >
      {/* التوهج الأزرق */}
      <div
        style={{
          position: "absolute",
          right: "0%",
          width: "300px",
          top:'30%',
          height: "300px" ,
          overflow:"hidden",
          background: "rgba(0, 63, 203, 0.6)", // أزرق شفاف
          borderRadius: "50%",
          filter: "blur(150px)", // يعطي تأثير الإشعاع
          zIndex: 0,
        }}
      ></div>


          <div
        style={{
          position: "absolute",
          bottom: "-10%",
          left:"0%",
          width: "400px",
          height: "300px",
          background: "rgba(0, 63, 203, 0.6)", // أزرق شفاف
          borderRadius: "50%",
          filter: "blur(150px)", // يعطي تأثير الإشعاع
          zIndex: 0,
        }}
      ></div>

      <div style={{
        display:'flex',
        flexDirection:'column',
        width:"100%"
      }}>
        { top &&(

  <div style={{
  display:'flex',
      justifyContent:"space-between",
      alignItems:'center',
  height:'135px',
  position:"relative",
  
  top:'0px',
  background:"#1A1A1A66",
  padding:'40px 60px',
  borderBottom:'1px solid #003ACA'

  }}>
    <div >
      <p style={{
        fontSize:'68px',
        fontWeight:'400',
            backgroundImage:
        "linear-gradient(270deg, #9795FF, #FFFFFF, #FFFFFF, #BE9FFF)",
      WebkitBackgroundClip: "text",
      color: "transparent",
      
      lineHeight:'75px',
      marginTop:'-10px'
      
      }}>Let’s work with Us</p>

      <p style={{
        fontWeight:'400',
        lineHeight:"28px",
        marginTop:'-40px',
      }}>
        DevMaster  is one of the largest companies in Egypt, providing website <br/> development, mobile application development, and branding services.
  </p>

      </div>

<button
onClick={()=>{
  navigate("/serverReqst")
}}

style={{
  padding:'14px 24px',
  borderRadius:"40px",
  color:"#16121E",
  fontSize:"16px",
  fontWeight:"500",
  border:'none',
  outline:"none",
  zIndex:'1000'
}}>Service Request</button>

  </div>
        )}

  <div style={{
    display:"flex",
flexDirection: "row-reverse",
justifyContent:'space-around',
    alignItems:'center',
    width:"100%",
    position:"relative",
    top:"115px",
    zIndex:9999,
    position:'relative'
  }}>
<div style={{
  marginTop:'-40px',
}}>
  <p style={{
    fontWeight:"500",

  }}>Business Features</p>
  <p style={{
    fontWeight:'400'
  }}>Modern & User-Friendly Designs</p>
  <p style={{
    fontWeight:'400',
  }}>Fast & Reliable Performance</p>
  <p style={{
    fontWidth:"400"
  }}>Full Support & Maintenance</p>
  
  
    <p style={{
    fontWeight:'400'
  }}>Innovative & Customizable Features</p>
  <p style={{
    fontWeight:'400',
  }}>Secure & Safe Systems</p>

  </div>



  <div style={{
    marginTop:"-30px"
  }}>
    <p style={{
      fontWeight:"500"
    }}>Services</p>
    <p style={{
      fontWeight:'400'
    }}>Web Developmen</p>
    <p style={{
      fontWeight:'400'
    }}>Search Engine Optimization (SEO)</p>
    <p style={{
      fontWeight:'400',
    }}>Social Media Management</p>
    <p style={{
      fontWeight:'400'
    }}>Mobile App</p>
    
    
    <p style={{
      fontWeight:'400',
    }}>E-commerce (Shopify, Salla, Zid)</p>
   
    </div>
    <div style={{
      marginTop:'-30px'
    }}>

           <p style={{
            fontWeight:'600',
            fontSize:'20px',
            display:'flex',
            alignItems:'center',
           }}> <img src="../icon/result 1.png" alt="Logo" style={{ height: "50px" }} /> DevMaster </p>
           <p style={{
            fontWeight:'400',
            lineHeight:'24px'
           }}>Companies that can help you in developing your <br/> company for the future</p>

    </div>





  </div>
  
<div style={{
  display:'flex',
  alignItems:"center",
  width:'100%',
  justifyContent:'space-around',
  flexDirection:'row-reverse',
  position:"absolute",
  height:"80px",
  bottom:"0px",

}}>


  
<div
  style={{
    display: "flex",
    gap: "10px",
    zIndex: 1,
    width:"15%"
  }}
>
  {/* Facebook */}
  <a
  href="https://www.facebook.com/share/1GK7wnD318/"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: "white",
      textDecoration: "none",
      fontSize: "24px",
    }}
  >
    <i className="fa-brands fa-facebook-f"></i>
  </a>

  {/* WhatsApp */}
  <a
  href="https://wa.me/201055395693" 
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: "white",
      textDecoration: "none",
      fontSize: "24px",
    }}
  >
    <i className="fa-brands fa-whatsapp"></i>
  </a>

  {/* Instagram */}
  <a
  href="https://www.instagram.com/hvshim10?igsh=c3o2aTA5eGM3ejF6" 
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: "white",
      textDecoration: "none",
      fontSize: "24px",
    }}
  >
    <i className="fa-brands fa-instagram"></i>
  </a>

  {/* LinkedIn */}
  <a
  href="www.linkedin.com/in/dev-master-78005b393" 
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: "white",
      textDecoration: "none",
      fontSize: "24px",
    }}
  >
    <i className="fa-brands fa-linkedin-in"></i>
  </a>
</div>

<ul style={{
  listStyle:"none",
  display:"flex",
  width:"30%",
  justifyContent:"space-between"
}}>
<li onClick={()=>{
  navigate("/Pravic")
}}>Cookie Policy</li>
<li onClick={()=>{
  navigate("/Pravic")
}}>Terms of Service</li>
<li onClick={()=>{
  navigate("/pravic")
}}>Privacy Policy</li>


</ul>
<p>© 2025 DevMaster . All rights reserved.</p>

  </div>


</div>

   
    </footer>
  );
}
