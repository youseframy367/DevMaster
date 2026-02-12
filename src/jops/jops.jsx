import Jops from "../home/jobes";
import Footer from "../partes/fotter";

export default function JopsAll() {
  const balls = [
    { side: "right", top: "100px" },
    { side: "left", top: "400px" },
    { side: "right", top: "700px" },
  ];

  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          background: "black",
          width: "100%",
          display:'flex',
          flexDirection:"column",
          alignItems:'center',
          position: "relative",
          overflow: "hidden",
          paddingTop:"327px"
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

        <div
          style={{

            width: "100%",
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            zIndex: 1,
                justifyContent:'center',
                minHeight:"300px",
          }}
        >
          <Jops numper={9} showbutton={false} />
        </div>
<div style={{
  width:"100%"
}}
        data-aos="fade-up"

>
      <Footer />
      </div>

            </div>

    </>
  );
}
