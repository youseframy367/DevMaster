import React, { useState } from "react";
import Footer from "../partes/fotter";

export default function ApplyTheJop() {



      const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    residence: "",
    experience: "",
    age: "",
    specialization: "",
    education: "",
    salary: "",
    notice: "",
    cv: null,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your application has been submitted successfully!");
  };

  const balls = [
    { side: "right", top: "100px" },
    { side: "left", top: "400px" },
    { side: "right", top: "700px" },
  ];

  const buttonWrapperStyle = {
    position: "relative",
    borderRadius: "40px",
    padding: "2px",
    width: "150px",
    display: "inline-block",
    margin: "5% 8%",
  };

  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          background: "black",
          width: "100%",
          paddingTop: "80px",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
          color: "#fff",
        }}
      >
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
            width:"85%",
            marginLeft:'7%',
            marginBottom:'40px'
        }}>

 <p style={{ 
        fontSize:"42px",
        fontWeight:'400',
        lineHeight:'75px',
   background: "linear-gradient(270deg, #9795FF, #FFFFFF, #FFFFFF, #BE9FFF)",
    WebkitBackgroundClip: "text",
    color: "transparent",
      }}
      
              data-aos="fade-up"

      >
        
        Apply for The Job Now
        
        </p>
        <p style={{
            fontWeight:"400",
            lineHeight:"28px",
            marginTop:"-30px"

        }}
        
                data-aos="fade-up"

        >

            Apply for the job now and attach your CV
        </p>


  {/* Form Container */}
        <form

                data-aos="fade-up"

          style={{
        

            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            zIndex: 1,
          }}
        >
          {/* Text Inputs */}
          {[
            { label: "Name", name: "name", type: "text" },
            { label: "E-mail", name: "email", type: "email" },
            { label: "Mobile Number", name: "mobile", type: "text" },
            { label: "Residence", name: "residence", type: "text" },
            { label: "Years of Experience", name: "experience", type: "numbr" },
            { label: "Age", name: "age", type: "numbr" },
            { label: "Specialization", name: "specialization", type: "text" },
            { label: "Education", name: "education", type: "text" },
            { label: "Expected Salary", name: "salary", type: "text" },
            { label: "Notice Period", name: "notice", type: "text" },
          ].map((field) => (
            <div key={field.name} style={{ display: "flex", flexDirection: "column" ,gap:"15px" }}>
                <label htmlFor={field.name}>{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.label}
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
            </div>
          ))}

          {/* File upload */}
          <div style={{ gridColumn: "1 / 3" }}>
            <label style={{ fontSize: "14px", color: "#ccc" }}>
              CV (PDF or DOC)
            </label>
            <input
              type="file"
              name="cv"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              required
              style={{
                width: "97%",
                padding: "14px 18px",
                borderRadius: "10px",
                border: "1px solid #504CFF66",
                background: "rgba(0,0,0,0.3)",
                color: "#fff",
                outline: "none",
                fontSize: "14px",
                marginTop: "8px",
              }}
            />
          </div>

          {/* Message */}
          <div style={{ gridColumn: "1 / 3" }}>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows={4}
              style={{
                width: "97%",
                padding: "14px 18px",
                borderRadius: "10px",
                border: "1px solid #504CFF66",
                background: "rgba(0,0,0,0.3)",
                color: "#fff",
                outline: "none",
                fontSize: "14px",
              }}
            />
          </div>

          {/* Submit Button */}
          <div
            className="gradient-btn"
            style={{
              gridColumn: "1 / 3",
              borderRadius: "40px",
              padding: "2px",
              width:"129px",
              margin: "0 ",
            }}
          >

            <button
              type="submit"
              style={{
                padding: "14px 24px",
                borderRadius: "40px",
                background: "black",
                color: "#fff",
                display:"flex",
                alignItems:"center",
                gap:"10px",
           
                fontSize: "16px",
                fontWeight: "500",
                border: "none",
                outline: "none",
              }}
            >
              Submit <img src="/icon/uil_arrow-up(2).png"></img>
            </button>

                                  </div>

        </form>

      </div>
  

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
        <div style={{
          width:"100%",

        }}
                data-aos="fade-up"

        
        >

        <Footer top={false} />
        </div>
      </div>
    </>
  )
}
