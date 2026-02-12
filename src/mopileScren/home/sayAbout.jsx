import { testimonials } from "../../home/sayAboutUs";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function SayAbout() {
  const [numSay, setNumSay] = useState(1);
  const current = testimonials[numSay - 1];

  const handleNext = () => {
    if (numSay < testimonials.length) setNumSay(numSay + 1);
  };

  const handleBack = () => {
    if (numSay > 1) setNumSay(numSay - 1);
  };

  return (
    <>
      {/* العنوان */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          textAlign: "center",
        }}
      >

<img src="/imgSmolScren/cotation.png"style={{
    width:'60%',
    position:'relative',
    left:'35%',
    marginBottom:'-240px'
}}></img>


        <p
          style={{
            backgroundImage:
              "linear-gradient(270deg, #9795FF, #FFFFFF, #FFFFFF, #BE9FFF)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontSize: "20px",
            fontWeight: "500",
            lineHeight: "30px",
            marginTop:"15px"
          }}
        >
          What they say about us
        </p>

        <p
          style={{
            fontWeight: "400",
            fontSize: "10px",
            lineHeight: "15px",
            color: "#fff",
            width: "80%",
            marginLeft: "10%",
            marginTop: "0px",
          }}
        >
Our clients’ feedback reflects the quality of our services and the professionalism of our team in every project.Our clients’ feedback reflects the quality of our services and the professionalism of our team in every project.        </p>
      </div>

      {/* بطاقة الشهادة */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",

        }}
      >
        <div
          style={{
            width: "90%",
            height:'250px',
            overflow:'hidden',
   
                borderRadius: "24px",
backgroundColor: "rgba(21, 21, 21, 0.1)",
backdropFilter: "blur(5px)",
WebkitBackdropFilter: "blur(5px)",

                        color: "#fff",
            padding: "20px",
            textAlign: "center",
                                  boxShadow: "0 0 1px rgba(255, 246, 246, 1)",

            
          }}
        >
            <div style={{
                width:'93%',
                display:'flex',
                flexDirection:"row",
                justifyContent:'space-between',
                alignItems:"center"
            

            }}>
                <div style={{display:"flex",gap:'10px',alignItems:"center",}}>
          <img
            src={current.avatar}
            alt={current.name}
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              objectFit: "cover",
              marginBottom: "15px",
            }}
          />
          <div style={{
            display:'flex',
            flexDirection:"column",
            alignItems:"start",
            marginTop:'0px'
          }}>
          <p style={{ fontSize: "16px", fontWeight: 500,lineHeight:'28px',marginTop:"0px" }}>
            {current.name}
          </p>
     <p style={{ fontSize: "12px", color: "#fff",fontWeight:"400" ,marginTop:"-5px",}}>
            {current.role}
          </p>
          </div>

          </div>
                                <img src="/imgTwo/dubelCotation.png" width="40px" height="40px" alt="icon" />

                  </div>

          <p style={{ fontSize: "14px", color: "#E2E2E2", lineHeight: "28px" ,fontWeight:'400',fontFamily: "'Cairo', sans-serif",direction:'rtl' ,height:"160px",  textOverflow: "ellipsis", }}>
            {current.text}
          </p>
        </div>
      </div>

      {/* أزرار التنقل */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20px",
          marginBottom: "40px",
        }}
      >
        <div
          onClick={handleBack}
          style={{
            color: "#fff",
            backgroundColor: "#003EC5",
            width: "45px",
            height: "45px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: numSay === 1 ? "not-allowed" : "pointer",
            opacity: numSay === 1 ? 0.5 : 1,
          }}
        >
          <IoIosArrowBack size={22} />
        </div>

        <div
          onClick={handleNext}
          style={{
            color: "#fff",
            backgroundColor: "#003EC5",
            width: "45px",
            height: "45px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: numSay === testimonials.length ? "not-allowed" : "pointer",
            opacity: numSay === testimonials.length ? 0.5 : 1,
          }}
        >
          <IoIosArrowForward size={22} />
        </div>
      </div>
    </>
  );
}
