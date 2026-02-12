import Header from "../partes/header";
import FooterSmolScren from "../partes/foterSmolScren";
export default function PrivacyM (){
   
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
          flexDirection: "column",
                    paddingTop:"80px",
color:'#fff',
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
        <div style={{marginLeft:"10px",
            width:'85%'
        }}>
            <p style={{
                  background:
              "linear-gradient(270deg, #9795FF, #FFFFFF, #FFFFFF, #BE9FFF)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            width:"100%",
            display:'flex',
            justifyContent:"center",
            alignItems:'center',
            fontSize:"30px",
            fontWeight:"400",
            lineHeight:'75px',
            }}>
                Privacy Policy
            </p>
            <div>
            <p style={{
                fontSize:"12px",
                lineHeight:'30px',
                fontWeight:"400",
                color:'#E2DEDC'

            }}>
                Privacy Policy
            </p>
            <p style={{
                    fontWeight:'400',
                    fontSize:"10px",
                    lineHeight:'20px',
                    color:"#9e9a9aff"

                }}>
                We collect personal information such as name, email, and contact details when you use our services.We implement security measures to safeguard your data against unauthorized access or misuse.You have the right to access, update, or request deletion of your personal information.
            </p>
            </div>
            <div>
                <p style={{
                fontSize:"12px",
                lineHeight:'30px',
                fontWeight:"400",
                color:'#E2DEDC'

            }}>Privacy Policy</p>
                <p style={{
                    fontWeight:'400',
                    fontSize:"10px",
                    lineHeight:'20px',
                    color:"#9e9a9aff"

                }}>
                    Only our authorized team members who need it to support your experience.You can request to edit, download, or delete your information anytime.
                </p>
            </div>
            <div>
                <p style={{
                fontSize:"12px",
                lineHeight:'30px',
                fontWeight:"400",
                color:'#E2DEDC'

            }}>Privacy Policy</p>
                 <p style={{
                    fontWeight:'400',
                    fontSize:"10px",
                    lineHeight:'20px',
                    color:"#9e9a9aff"

                }}>
                    To personalize your experience, understand your needs, and improve our services.We process personal data in accordance with applicable privacy laws and standards.Data is retained only as long as needed for operational or legal purposes.We may use external providers, and they are required to follow strict confidentiality agreements. Users may exercise privacy rights and submit complaints which will be handled professionally.
                </p>
            </div>
            <div>
                <p style={{
                fontSize:"12px",
                lineHeight:'30px',
                fontWeight:"400",
                color:'#E2DEDC'

            }}>Privacy Policy</p>
                <p style={{
                    fontWeight:'400',
                    fontSize:"10px",
                    lineHeight:'20px',
                    color:"#9e9a9aff"

                }}>We believe in transparency, so we clearly explain what data is collected and why.We use secure servers, monitoring systems, and cybersecurity tools to keep your data safe.</p>
            </div>
        </div>
        <FooterSmolScren/>
        </div>
        </>
    )
}