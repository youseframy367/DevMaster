import React from "react";
import { ImVideoCamera } from "react-icons/im";
import  { useState } from "react";
import Footer from "../partes/fotter";
export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent successfully!");
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
  ];

  const buttonWrapperStyle = {
    position: "relative",
    borderRadius: "40px",
    padding: "2px",
    width: "115px",
    display: "inline-block",
    marginTop: "20px",
  };

  return (
    <div
      style={{
        background: "black",
        width: "100%",
        minHeight: "100vh",
        position: "relative",
        top: "0px",
        paddingTop: "120px",
        color: "#FFF",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "'Inter', sans-serif",
        overflow: "hidden",
      }}
    >
      {/* الخلفية المتوهجة */}
      {balls.map((ball, index) => (
        <div
          key={index}
          style={{
            width: "640px",
            height: "287px",
            borderRadius: "50%",
            background: "#504CFF33",
            position: "absolute",
            [ball.side]: "-10%",
            zIndex: 0,
            top: ball.top,
            filter: "blur(40px)",
            opacity: 0.6,
          }}
        ></div>
      ))}
<div style={{
    display:'flex',
    width:"90%",
    justifyContent:"space-between",
    marginBottom:'40px'

}}>   
   
        {/* النصوص */}
        <div style={{ display:"flex",flexDirection:"column", gap:"10px",marginTop:'-30px'}}
                data-aos="fade-up"

        
        >
          <div>
            <p
              style={{
                fontSize: "42px",
                fontWeight: "400",
                lineHeight: "75px",
                background:
                  "linear-gradient(270deg, #9795FF, #FFFFFF, #FFFFFF, #BE9FFF)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Apply for The Job Now
            </p>

            <p
              style={{
                fontWeight: "400",
                lineHeight: "28px",
                marginTop: "-30px",
                color: "#DDD",
              }}
            >
              Apply for the job now and attach your CV
            </p>
          </div>
        

          <div style={{ marginTop: "40px" }}>
            <p style={{ fontSize: "18px", fontWeight: "500" }}>
              Contact us for more information
            </p>
            <p
              style={{
                fontWeight: "400",
                lineHeight: "28px",
                color: "#ccc",
                marginTop: "10px",
                width:"400px"
              }}
            >
              Do not hesitate to contact us to inquire about our company's
              services in the field of information technology. We will be happy
              to provide assistance and meet your needs efficiently and
              professionally.
            </p>
            </div>

            <ul
              style={{
                listStyle: "none",
                marginTop: "20px",
                padding: 0,
                lineHeight: "32px",
              }}
            >
              <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <img
                  src="/imgTwo/call.png"
                  alt="phone"
                  style={{ width: "24px", height: "24px" }}
                />
                <a href="tel:+201055395693" style={{ textDecoration:'none',color:'#fff'}}>Contact Us Now</a>
              </li>

              <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <img
                  src="/imgTwo/email.png"
                  alt="email"
                  style={{ width: "24px", height: "24px" }}
                />
                <a
                  href="mailto:teamdevmaster930@gmail.com"
                  style={{
                    color: "#FFF",
                    textDecoration: "none",
                    transition: "0.3s",
                  }}
                >
Send Email Now                </a>
              </li>

              <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <img
                  src="/imgTwo/site.png"
                  alt="location"
                  style={{ width: "24px", height: "24px" }}
                />
<a
  href="https://www.google.com/maps?q=المملكة+العربية+السعودية,+جدة,+حي+اللؤلؤ"
  target="_blank"
  rel="noopener noreferrer"
  style={{ color: "#FFF", textDecoration: "none" }}
>
Saudi Arabia, Jeddah, Al-Loulou District</a>
              </li>
            </ul>

            <ul style={{
                listStyle:'none',
                lineHeight:'30px',
                marginLeft:"-30px"

            }}>
                <li> Contact us now</li>
                <li> Follow us on social media platforms</li>
                <li>






 
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
      fontSize: "20px",
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
      fontSize: "20px",
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
      fontSize: "20px",
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
      fontSize: "20px",
    }}
  >
    <i className="fa-brands fa-linkedin-in"></i>
  </a>
</div>





                    </li>
                
            </ul>
          </div>
          




          <div
      style={{
        width: "40%",
        marginTop: "60px",
        display:"flex",
        flexDirection:'column',
        justifyContent:'center',
        border:"solid 1px #01C5FF",
        
    
        backdropFilter: "blur(30px)",
        WebkitBackdropFilter: "blur(30px)",
        borderRadius: "24px",
        padding: "20px",
        zIndex: 1,
        fontFamily: "'Inter', sans-serif",
      }}
              data-aos="fade-up"

    >
    

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width:'95%',

        }}
      >
        <label>Name</label>
        {/* Name */}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
          style={{
            padding: "14px 18px",
            borderRadius: "10px",
            border: "1px solid #504CFF66",
            background: "rgba(0,0,0,0.3)",
            color: "#fff",
            outline: "none",
            fontSize: "14px",
          }}
        />
<label>Email</label>
        {/* Email */}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="E-mail"
          required
          style={{
            padding: "14px 18px",
            borderRadius: "10px",
            border: "1px solid #504CFF66",
            background: "rgba(0,0,0,0.3)",
            color: "#fff",
            outline: "none",
            fontSize: "14px",
          }}
        />
        <label>Mobile Number</label>

        {/* Mobile */}
        <input
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          placeholder="Mobile Number"
          required
          style={{
            padding: "14px 18px",
            borderRadius: "10px",
            border: "1px solid #504CFF66",
            background: "rgba(0,0,0,0.3)",
            color: "#fff",
            outline: "none",
            fontSize: "14px",
          }}
        />
<label>Your Message</label>
        {/* Message */}
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          rows={2}
          style={{
            padding: "14px 18px",
            borderRadius: "10px",
            border: "1px solid #504CFF66",
            background: "rgba(0,0,0,0.3)",
            color: "#fff",
            outline: "none",
            fontSize: "14px",
          }}
        />

        {/* Submit button */}
        <div
          className="gradient-btn"
          style={{
            borderRadius: "40px",
            padding: "2px",
            width: "120px",
            margin: "0 auto",
          }}
        >
          <button
            type="submit"
            style={{
              padding: "14px 24px",
              display:"flex",
              alignItems:"center",
              gap:"10px",
              borderRadius: "40px",
              width: "100%",
              background: "black",
              color: "#fff",
              fontSize: "16px",
              fontWeight: "500",
              border: "none",
              outline: "none",
              cursor: "pointer",
            }}
          >
            Send <img src="/icon/uil_arrow-up(2).png"></img>
          </button>
        </div>
      </form>

      <style>{`
        .gradient-btn {
          background: linear-gradient(90deg, #00f2fe, #003cbe, #00f2fe);
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>

      
           </div>
           <div style={{
            width:'100%',

           }}
                           data-aos="fade-up"

>

           
           <Footer top={false}/>
           </div>

        </div>
        

    )}