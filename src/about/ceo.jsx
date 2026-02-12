import img from "/icon/logo.png"; // ← صحح المسار وغيّر “ ” إلى "
import imgOne from "/icon/Group 1597883107.png";

export default function CeoMaseg() {
  return (
    <>
      <div
        style={{
          width: "90%",
          minHeight: "400px",
          display: "flex",
                  fontFamily: "'Inter', sans-serif",

          color: "#fff",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "12px",
            gap:"40px",
            marginTop:"-130px",
            position:"relative",
            zIndex:0
        }}
      >

                <img width="40%"height="420" style={{zIndex:0,position:"relative"}} src={imgOne}></img>

        <div style={{  padding: "20px", borderRadius: "10px",width:"40%" }}>
          <p style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "10px" ,fontWidth:"500" }}>
            CEO's Message
          </p>
          <p style={{ fontSize:'18px',fontWeight:'400', lineHeight: "30px" }}>
 At DevMaster, our journey is guided by a commitment to innovation, excellence, and client success. Every challenge we face is an opportunity to deliver creative solutions and meaningful results. Our focus remains on building strong relationships, fostering growth, and continuously improving our services to exceed expectations. I am proud of what we have achieved so far, and I am excited for the opportunities ahead as we continue to drive value for our clients.          </p>
          <p style={{
            lineHeight:"32px",
            fontSize:"18px",
            fontWeight:"400"
          }}> 
            CEO's Message <br/>CEO of Company DevMaster 
          </p>
        </div>
      </div>
      <img style={{marginLeft:"60%",marginTop:'-500px',width:"740px",height:"530px"}} src={img}></img>
    </>
  );
}
