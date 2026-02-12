import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

export default function CartHover() {
  const [numCart, SetNumCart] = useState(1);
  const [hover2, setHover2] = useState(false);
  const [direction, setDirection] = useState(0); // 1: Next, -1: Back

  const handleNext = () => {
    if (numCart < 4) {
      setDirection(1);
      SetNumCart(numCart + 1);
    }
  };

  const handleBack = () => {
    if (numCart > 1) {
      setDirection(-1);
      SetNumCart(numCart - 1);
    }
  };

  const cardStyle = {
    width: "80%",
    borderRadius: "31px",
    padding: "15px",
    display: "flex",
    flexDirection: "column",
                justifyContent:"space-between",
    height: "480px",
    minHeight: "450px",
    backgroundColor: "#003EC5",
    backdropFilter: "blur(15px)",
    WebkitBackdropFilter: "blur(15px)",
    boxShadow: "0 0 20px rgba(255, 255, 255, 0.4)",
    transition: "all 0.3s ease-in-out",
  };

  const cardAnimation = {
    initial: (dir) => ({
      opacity: 0,
      x: dir > 0 ? -300 : 300, // الكارد الجديد يدخل من الاتجاه المعاكس
    }),
    animate: { opacity: 1, x: 0 },
    exit: (dir) => ({
      opacity: 0,
      x: dir > 0 ? 300 : -300, // الكارد الحالي يخرج حسب الاتجاه
    }),
    transition: { duration: 0.5, ease: "easeInOut" },
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {numCart === 1 && (
          <motion.div
            key="card-1"
            custom={direction}
            variants={cardAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            style={cardStyle}
            onMouseEnter={() => setHover2(true)}
            onMouseLeave={() => setHover2(false)}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
 <div style={{
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
                padding:"10px",
                borderRadius:'50%',
                  background: "rgba(255, 255, 255, 0.2)", // 20% شفافية
  backdropFilter: "blur(20px)",           // بلور 20px
  WebkitBackdropFilter: "blur(20px)",    // دعم Safari
              }}>

              <img width="30px" height="30px" src="/imgSmolScren/web.png" />
              </div>
              <p style={{ fontWeight: "400", fontSize: "27px", color: "#fff" }}>Website Dev</p>
            </div>
            <p style={{ fontSize: "14px", lineHeight: "25px", color: "#fff", margin: "-5px 5px" ,width:"80%"}}>
              help you to build website company that is modern, user friendly, good SEO, and Clean design
            </p>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
              }}
            >
              <img style={{ width: "260px", height: "auto", margin: "5%" }} src="/imgTwo/web.png" />
              <button
                style={{
                  background: "transparent",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  marginBottom:"10px",
                  color: "#fff",
                  fontWeight: "400",
                  fontFamily: "'Inter', sans-serif",
                  textDecoration: "underline",
                  border: "none",
                  outline: "none",
                }}
              >
                Start with us
                <img src="/icon/uil_arrow-up(1).png" />
              </button>
            </div>
          </motion.div>
        )}

        {numCart === 2 && (
          <motion.div
            key="card-2"
            custom={direction}
            variants={cardAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            style={cardStyle}
            onMouseEnter={() => setHover2(true)}
            onMouseLeave={() => setHover2(false)}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{
                 display:"flex",
  justifyContent:"center",
  alignItems:"center",
                padding:"10px",
                borderRadius:'50%',
                  background: "rgba(255, 255, 255, 0.2)", // 20% شفافية
  backdropFilter: "blur(20px)",           // بلور 20px
  WebkitBackdropFilter: "blur(20px)",    // دعم Safari
              }}>
              <img width="30px" height="30px" src="/imgSmolScren/uiux.png" />
              </div>
              <p style={{ fontWeight: "400", fontSize: "27px", color: "#fff" }}>UI/UX Design</p>
            </div>
            <p style={{ fontSize: "14px", lineHeight: "25px", color: "#fff", margin: "5px" }}>
              help you to build website company that is modern, user friendly, and clean design
            </p>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
              }}
            >
              <img style={{ width: "140px", height: "auto", margin: "4%" }} src="/imgTwo/uiux.png" />
              <button
                style={{
                  background: "transparent",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  color: "#fff",
                  fontWeight: "400",
                  fontFamily: "'Inter', sans-serif",
                  textDecoration: "underline",
                  border: "none",
                  outline: "none",
                }}
              >
                Start with us
                <img src="/icon/uil_arrow-up(1).png" />
              </button>
            </div>
          </motion.div>
        )}

        {numCart === 3 && (
          <motion.div
            key="card-3"
            custom={direction}
            variants={cardAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            style={cardStyle}
            onMouseEnter={() => setHover2(true)}
            onMouseLeave={() => setHover2(false)}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{
                 display:"flex",
  justifyContent:"center",
  alignItems:"center",
                padding:"10px",
                borderRadius:'50%',
                  background: "rgba(255, 255, 255, 0.2)", // 20% شفافية
  backdropFilter: "blur(20px)",           // بلور 20px
  WebkitBackdropFilter: "blur(20px)",    // دعم Safari
              }}>
              <img width="25px" height="27px" src="/imgSmolScren/brand.png" />
              </div>
              
              <p style={{ fontWeight: "400", fontSize: "27px", color: "#fff" }}>Branding</p>
            </div>
            <p style={{ fontSize: "14px", lineHeight: "25px", color: "#fff", margin: "-5px 5px", width:"80%" }}>
              We build a strong brand identity that leaves a lasting impression on your customers
            </p>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
              }}
            >
              <img style={{ width: "200px", height: "auto", margin: "4%" }} src="/imgTwo/jj.png" />
              <button
                style={{
                  background: "transparent",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  marginBottom:'10px',
                  color: "#fff",
                  fontWeight: "400",
                  fontFamily: "'Inter', sans-serif",
                  textDecoration: "underline",
                  border: "none",
                  outline: "none",
                }}
              >
                Start with us
                <img src="/icon/uil_arrow-up(1).png" />
              </button>
            </div>
          </motion.div>
        )}

        {numCart === 4 && (
          <motion.div
            key="card-4"
            custom={direction}
            variants={cardAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            style={cardStyle}
            onMouseEnter={() => setHover2(true)}
            onMouseLeave={() => setHover2(false)}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                   <div style={{
                 display:"flex",
  justifyContent:"center",
  alignItems:"center",
                padding:"10px",
                borderRadius:'50%',
                  background: "rgba(255, 255, 255, 0.2)", // 20% شفافية
  backdropFilter: "blur(20px)",           // بلور 20px
  WebkitBackdropFilter: "blur(20px)",    // دعم Safari
              }}>
             
              <img width="30px" height="30px" src="/imgSmolScren/pranding.png" />
             
             </div>
             
              <p style={{ fontWeight: "400", fontSize: "27px", color: "#fff" }}>Shopify</p>
            </div>
            <p style={{ fontSize: "14px", lineHeight: "25px", color: "#fff", margin: "-5px 5px",width:"80%" }}>
              We create e-commerce stores on Shopify, Salla, and Zid easily and with high professionalism.
            </p>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
              }}
            >
              <img style={{ width: "180px", height:"auto", margin: "4%" }} src="/imgTwo/poer.png" />
              <button
                style={{
                  background: "transparent",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  marginBottom:"10px",
                  color: "#fff",
                  fontWeight: "400",
                  fontFamily: "'Inter', sans-serif",
                  textDecoration: "underline",
                  border: "none",
                  outline: "none",
                }}
              >
                Start with us
                <img src="/icon/uil_arrow-up(1).png" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation buttons */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20px",
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
            cursor: numCart === 1 ? "not-allowed" : "pointer",
            opacity: numCart === 1 ? 0.5 : 1,
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
            cursor: numCart === 4 ? "not-allowed" : "pointer",
            opacity: numCart === 4 ? 0.5 : 1,
          }}
        >
          <IoIosArrowForward size={22} />
        </div>
      </div>
    </>
  );
}
