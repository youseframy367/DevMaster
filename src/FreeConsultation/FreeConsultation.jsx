
// استاره

import { number } from "prop-types";
import Footer from "../partes/fotter";
export default function Consultation(){





   const balls = [
    { side: "right", top: "100px" },
    { side: "left", top: "400px" },
    { side: "right", top: "700px" },
   
  
   ]




  const buttonWrapperStyle = {
    position: "relative",
    borderRadius: "40px",
    padding: "2px",
    width:"115px",
    display: "inline-block",
                      marginTop:"20px"

  };
    return(
        <div style={{
            background:"black",
            width:"100%",
            minHeight:"100vh",
            position:'absolute',
            top:"0px",
            paddingTop:"150px",
            color:"#FFF",
            display:'flex',
             flexDirection:"column",
            alignItems :"center"   ,
                           fontFamily: "'Inter', sans-serif",

        }}>


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


            <div style={{
                width:'80%'
            }}
                            data-aos="fade-up"

            
            >
            <p style={{
                fontSize:"42px",
                fontWeight:'400',
      fontFamily: "'Inter', sans-serif",
                marginTop:'-10px',
                marginBottom:'10px',
     backgroundImage: "linear-gradient(270deg, #9795FF, #FFFFFF, #FFFFFF, #BE9FFF)",
          WebkitBackgroundClip: "text",
          color: "transparent",
            }}>Free Consultation</p>

            <p style={{fontWeight:'400'}}>Start your free consultation now and learn more about creating your website or your own digital marketing strategy</p>

            </div>

            <div style={{
                marginTop:"10px",
                width:"80%",
                padding:'20px',
                display:'flex',
                flexDirection:"column",
                gap:'10px',
                border:"solid 1px #01C5FF",
                borderRadius:"20px",
                marginBottom:"40px"

            }}
                            data-aos="fade-up"

            >
                < div style={{
                    display:"flex",
                    width:"100%",
                    justifyContent:"space-between"

                }}>
                    <div style={{
                        display:"flex",
                        flexDirection:"column",
                        gap:"10px",
                        width:'100%'

                    }}>
                    <label htmlFor="name" style={{fontWeight:"500"}}>Name</label>
                    <input type="text" name="" placeholder="Enter name" id="name" style={{

                        background:"transparent",
                        padding:"10px",
                        border:"solid 1px #F6F6F680",
                        width:"90%",
                        color:"#fff",
                        borderRadius:'12px'
                    }}/>
                    </div>
                    <div style={{
                        display:"flex",
                        flexDirection:"column",
                        gap:"10px",
                        width:'100%'

                    }}>
                        <label htmlFor="Mobile Number" style={{fontWeight:'500'}}>Mobile Number</label>
                        <input type="text" name="numpr" placeholder="Enter phone numper"style={{

                        background:"transparent",
                        padding:"10px",
                        border:"solid 1px #F6F6F680",
                        width:"90%",
                        color:"#fff",
                        borderRadius:'12px'
                    }}></input>
                </div>
                                    </div>


                   <div style={{
                        display:"flex",
                        flexDirection:"column",
                        gap:"10px",
                        width:'95%'

                    }}>                  

                <label htmlFor="maseg" style={{fontWeight:"500"}}>Your Message</label>
                <textarea id="maseg" placeholder="Enter Message Content" rows={15}  style={{
color:"#fff",
borderRadius:"12px",
 background:"transparent",
                        padding:"10px",
                        border:"solid 1px #F6F6F680",
                        width:"100%"


                }}></textarea>
                </div>
      <div className="gradient-btn" style={buttonWrapperStyle}>

                <button style={{
                 padding:"14px 24px",
                 width:"115px",
                 borderRadius:"40px",
                  background:"black",
                  color:"#fff",
                  display:"flex",
                  alignItems:"center",
                  fontSize:'16px',
                  gap:"5px",
                  fontWeight:'500',
                  border:"none",
                  outline:"none",


                }}>send <img src="/icon/uil_arrow-up(2).png"></img></button>
                </div>
            </div>
              {/* CSS Animations */}
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
      <div style={{
        width:"100%",

      }}
      
                      data-aos="fade-up"

      >
      <Footer top={false}/>
      </div>
        </div>
    )
}