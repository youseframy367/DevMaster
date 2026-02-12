
import Articles from "../home/articles";
import Footer from "../partes/fotter";

export default function ArticlsAll(){


   const balls = [
    { side: "right", top: "100px" },
    { side: "left", top: "400px" },
    { side: "right", top: "700px" },
    
    { side: "left", top: "900px" },
    { side: "right", top: "1100px" },
  { side: "left", top: "1300px" },
    { side: "right", top: "1500px" },
    
    { side: "left", top: "1700px" },
    { side: "right", top: "1900px" },


  ];



    return(
        <>
   <div
  style={{
    position:"relative",
  minHeight: "100vh",
      background: "black",
    width: "100%",
    paddingTop: "350px",
    paddingBottom:"0px",
    display: "flex",
    flexDirection: "column",
    justifyContent:'center',
    overflow:'hidden',
    margin:"0px",
  }}
>

      {balls.map((ball, index) => (
        <div
          key={index}
          style={{
            width: "640px",
            height: "287px",
            borderRadius: "50%",
            background:"#504CFF33",
            position: "absolute",
              [ball.side]: "-10%",
            zIndex:'1000',
            top: ball.top,
            filter: "blur(40px)",
            opacity: 0.6,
          }}
        ></div>
      ))}

    <div style={{height:"auto",paddingBottom:'50px',width:"100%",
        display:"flex",alignItems:'center',flexDirection:"column",justifyContent:"center"
    }}
    
    
    >
      <Articles numper={6} showBotton={false} gap="30" width="90"/>
      </div>

      


      <div style={{
        width:"100%",
        marginBottom:'0px',

      }}
      
        data-aos="fade-up"

      >
      <Footer/>
</div>
</div>

      </>
      )}