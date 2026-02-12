   import FooterSmolScren from "../partes/foterSmolScren";
   import Header from "../partes/header";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function ContactUs(){
    const iconStyle = {
    color: "#fff",
    fontSize: "20px",
    margin: "0 10px",
    cursor: "pointer",
    transition: "color 0.3s ease",
  };


     const buttonWrapperStyle = {
       position: "relative",
       borderRadius: "40px",
       padding: "2px",
       width: "80%",
       display: "inline-block",
       margin: "20px 10% 20px",
       
       
     };
   
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
   
     return (
       <>
         <div
           style={{
             minHeight: "100vh",
             background: "black",
             width: "100%",
             position: "relative",
             overflow: "hidden",
             display: "flex",
             flexDirection:"column",
             alignItems: "center",
             justifyContent: "center",
             fontFamily: "'Inter', sans-serif",
           }}
         >
           {/* الخلفية المتحركة */}
           {balls.map((ball, index) => (
             <div
               key={index}
               style={{
                 width: "640px",
                 height: "287px",
                 borderRadius: "50%",
                 position: "absolute",
                 [ball.side]: "0",
                 background: "#0141C533",
                 top: ball.top,
                 filter: "blur(40px)",
                 opacity: 0.6,
                 zIndex: 0,
                 pointerEvents: "none",
               }}
             ></div>
           ))}
   
           <Header/>
   
           {/* الفورم */}
           <div
             style={{
               width: "90%",
               border: "solid 1px #01C5FF",
               borderRadius: "20px",
               backdropFilter: "blur(10px)",
               zIndex: 1,
               marginTop:"120px",
               marginBottom:'20px'
             }}
           >
             <form>
               {/* الاسم */}
               <div
                 style={{
                   display: "flex",
                   flexDirection: "column",
                   color: "#fff",
                   width: "90%",
                   margin: "5%",
                   gap: "10px",
                 }}
               >
                 <label>Name</label>
                 <input
                   type="text"
                   required
                   placeholder="Enter name"
                   style={{
                     padding: "10px",
                     fontSize: "14px",
                     lineHeight: "24px",
                     fontWeight: "400",
                     color: "#817d7dff",
                     background: "transparent",
                     border: "solid 1px #979494ff",
                     borderRadius: "12px",
                     outline: "none",
                   }}
                 />
               </div>
   
               {/* رقم الموبايل */}
               <div
                 style={{
                   display: "flex",
                   flexDirection: "column",
                   color: "#fff",
                   width: "90%",
                   margin: "5%",
                   gap: "10px",
                 }}
               >
                 <label>E-mail</label>
                 <input
                   type="email"
                   required
                   placeholder="Enter your email"
                   style={{
                     padding: "10px",
                     fontSize: "14px",
                     lineHeight: "24px",
                     fontWeight: "400",
                     color: "#817d7dff",
                     background: "transparent",
                     border: "solid 1px #979494ff",
                     borderRadius: "12px",
                     outline: "none",
                   }}
                 />
               </div>

                <div
                 style={{
                   display: "flex",
                   flexDirection: "column",
                   color: "#fff",
                   width: "90%",
                   margin: "5%",
                   gap: "10px",
                 }}
               >
                       <label>Mobile Number</label>
                 <input
                   type="nump"
                   required
                   placeholder="Enter Phone Number"
                   style={{
                     padding: "10px",
                     fontSize: "14px",
                     lineHeight: "24px",
                     fontWeight: "400",
                     color: "#817d7dff",
                     background: "transparent",
                     border: "solid 1px #979494ff",
                     borderRadius: "12px",
                     outline: "none",
                   }}
                 />
               </div>
   
               {/* الرسالة */}
               <div
                 style={{
                   display: "flex",
                   flexDirection: "column",
                   color: "#fff",
                   width: "90%",
                   margin: "5%",
                   gap: "10px",
                 }}
               >
                 <label>Your Message</label>
                 <textarea
                   rows={10}
                   required
                   placeholder="Enter your message"
                   style={{
                     padding: "10px",
                     fontSize: "14px",
                     lineHeight: "24px",
                     fontWeight: "400",
                     color: "#817d7dff",
                     background: "transparent",
                     border: "solid 1px #979494ff",
                     borderRadius: "12px",
                     outline: "none",
                     resize: "none",
                   }}
                 ></textarea>
               </div>
             
   
                <div className="gradient-btn" style={buttonWrapperStyle}>
   
                   <button style={{
                    padding:"14px 24px",
                    width:"100%",
                    display:'flex',
                    alignItems:"center",
                    justifyContent:'center',
                    borderRadius:"40px",
                     background:"black",
                     color:"#fff",
                     display:"flex",
                     alignItems:"center",
                     fontSize:'16px',
                     gap:"10px",
                     fontWeight:'500',
                     border:"none",
                     outline:"none",
   
   
                   }}>send <img src="/icon/uil_arrow-up(2).png"></img></button>
                   </div>
           
             </form>
           </div>
           <div style={{
            width:"80%",
            color:"#fff",
            display:"flex",
            flexDirection:'column',
            alignItems:"center",
            justifyContent:'center',
            textAlign:'center'
           }}>
            <p style={{
                     
          fontWeight: 400,
          fontSize: "26px",
          textAlign: "center",
          margin: "10px 0",
          background: "linear-gradient(270deg, #9795FF, #FFFFFF, #FFFFFF, #BE9FFF)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          animation: "gradientMove 10s ease infinite",
          lineHeight: "42px",
        
            }}>
                Contact us for more information
            </p>
            <p style={{
                fontWeight:'400',
                fontSize:'10px',
                color:'#b6b3b3ff',
                lineHeight:'15px',
                marginTop:'0px'
            }}>
                Do not hesitate to contact us to inquire about our company's services in the field of information technology, and we will be happy to provide assistance and meet your needs efficiently and professionally
            </p>
           </div>









    <ul
              style={{
                listStyle: "none",
                marginTop: "20px",
                marginLeft:"-25px",
                padding: 0,
                lineHeight: "32px",
                display:'flex',
                flexDirection:'column',
                gap:'10px'
              }}
            >
              <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <img
                  src="/imgTwo/call.png"
                  alt="phone"
                  style={{ width: "42px", height: "42px" }}
                />
                <a href="tel:+201055395693" style={{ textDecoration:'none',color:'#fff',fontSize:"16px",fontWeight:"500"}}>Contact Us Now</a>
              </li>

              <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <img
                  src="/imgTwo/email.png"
                  alt="email"
                  style={{ width: "42px", height: "42px" }}
                />
                <a
                  href="mailto:teamdevmaster930@gmail.com"
                  style={{
                    color: "#FFF",
                    textDecoration: "none",
                    transition: "0.3s",
                    fontSize:'16px',
                    lineHeight:"24px",
                    fontWeight:'500'
                  }}
                >
Send Email Now                </a>
              </li>

              <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <img
                  src="/imgTwo/site.png"
                  alt="location"
                  style={{ width: "42px", height: "42px" }}
                />
<a
  href="https://www.google.com/maps?q=المملكة+العربية+السعودية,+جدة,+حي+اللؤلؤ"
  target="_blank"
  rel="noopener noreferrer"
  style={{ color: "#FFF", textDecoration: "none",fontWeight:"500",lineHeight:'24px',fontSize:'16px' }}
>
Saudi Arabia, Jeddah, Al-Loulou District</a>
              </li>
            </ul>



<div style={{
    width:'100%',
    height:'200px',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
}}>
<p style={{
  color:'#fff',
  lineHeight:'24px',
  fontSize:"19px",
  marginBottom:'5px'
}}>Contact us now</p>
<p style={{
    color:"#948f8fff",
    fontSize:'12px',
    lineHeight:'24px',
    fontWeight:'500',
    marginTop:"0px"
}}>Follow us on social media platforms</p>
  {/* أيقونات التواصل */}
      <div style={{ display: "flex", alignItems: "center", }}>
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

    </div>



<FooterSmolScren/>

           </div>
           
        {/* أنيميشن الزر */}
        <style jsx>{`
          .gradient-btn {
            background: linear-gradient(90deg, #00f2fe, #003cbe, #00f2fe);
            background-size: 200% 200%;
            animation: gradientShift 3s ease infinite;
          }

          @keyframes gradientShift {
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
           </>
    )
}