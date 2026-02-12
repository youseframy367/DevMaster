import { div } from "framer-motion/m";
import Footer from "../partes/fotter";
export default function Pirivacy(){
    const balls = [
    { side: "right", top: "100px" },
    { side: "left", top: "400px" },
    { side: "right", top: "700px" },
   
   
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
        position: "absolute",
        top: "0px",
        paddingTop: "20px",
        color: "#FFF",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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
            background: "#504CFF33",
            position: "absolute",
            [ball.side]: "-10%",
            zIndex: "1000",
            top: ball.top,
            filter: "blur(40px)",
            opacity: 0.6,
          }}
        ></div>
      ))}
        <div style={{
            padding:'100px'
        }}
                        data-aos="fade-up"

        >
        
        <p style={{
                fontSize: "42px",
            fontWeight: "400",
            fontFamily: "'Inter', sans-serif",
            marginTop: "-10px",
            marginBottom: "10px",
            backgroundImage:
              "linear-gradient(270deg, #9795FF, #FFFFFF, #FFFFFF, #BE9FFF)",
            WebkitBackgroundClip: "text",
      color: "transparent",


        }}>Privacy Policy</p>
        <div>
        <p style={{
            fontWeight:'400',
            lineHeight:'30px',
                        color: "#E2DEDC",

        }}>Privacy Policy</p>

        <p style={{
            lineHeight:'28px',
            fontWeight:"400",
            width:'80%',
            color:"#504d4dff"
        }}>We collect personal information such as name, email, and contact details when you use our services.Collected information is used to provide services, improve user experience, and communicate important updates.We implement security measures to safeguard your data against unauthorized access or misuse.You have the right to access, update, or request deletion of your personal information.</p>
        </div>
        

        <div>
            <p style={{
            fontWeight:'400',
            lineHeight:'30px',
                        color: "#E2DEDC",

        }}
                        

        >
                Privacy Policy
            </p>
            <p  style={{
            lineHeight:'28px',
            fontWeight:"400",
            width:'80%',
                        color:"#504d4dff"

        }}>
                Only our authorized team members who need it to support your experience.You can request to edit, download, or delete your information anytime.
            </p>
            </div>
            <div>
                <p  style={{
            fontWeight:'400',
            lineHeight:'30px',
                        color: "#E2DEDC",

        }}>
                Privacy Policy

                </p>
                <p style={{
            lineHeight:'28px',
            fontWeight:"400",
            width:'80%',
                       color:"#504d4dff"
 
        }}>

                    To personalize your experience, understand your needs, and improve our services.We process personal data in accordance with applicable privacy laws and standards.Data is retained only as long as needed for operational or legal purposes.We may use external providers, and they are required to follow strict confidentiality agreements. Users may exercise privacy rights and submit complaints which will be handled professionally.
                </p>
            </div>
            <div>
                <p  style={{
            fontWeight:'400',
            lineHeight:'30px',
                        color: "#E2DEDC",

        }}>Privacy Policy</p>
                <p style={{
            lineHeight:'28px',
            fontWeight:"400",
            width:'80%',
                        color:"#504d4dff"

        }}>We believe in transparency, so we clearly explain what data is collected and why.We use secure servers, monitoring systems, and cybersecurity tools to keep your data safe.</p>
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
       
    )
}