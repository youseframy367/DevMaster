
import FooterSmolScren from "../partes/foterSmolScren";
import Header from "../partes/header";
export default function FreeConselution() {
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
              <label>Mobile Number</label>
              <input
                type="tel"
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
        zIndex:99999,
          background: "transparent", /* بدل أي لون */

      }}>
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
      </div>


    </>
  );
}
