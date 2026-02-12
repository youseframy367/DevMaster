
import { useNavigate } from "react-router-dom";

export default function SideBar({ setSidebar }) {

  const navigate=useNavigate()


  return (
    <div
      style={{
        position: "absolute",
        width: "70%",
        height: "80vh",
        borderRadius: "0px 0px 24px 0px",
        background: "#fff",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img width="85px" height="85px" src="/imgSmolScren/logo.png" alt="logo" />
        <p
          style={{
            background: "linear-gradient(270deg, #003EC5, #001E5F)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontSize: "20px",
            fontWeight: "600",
          }}
        >
          DevMaster
        </p>
      </div>

      {/* الأزرار */}
      <div
        style={{
          width: "100%",
          display: "flex",
          marginTop: "20px",
          gap: "20px",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* ✅ الزر الصحيح */}
        <button
          onClick={() => navigate("/")}
          style={{
            background: "linear-gradient(270deg, #003EC5, #001E5F)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
            border: "none",
            outline: "none",
            width: "80%",
            padding: "10px",
            borderRadius: "10px",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "400",
            cursor: "pointer",
          }}
        >
          <img src="/imgSmolScren/HomeIcon.png" alt="home" />
          Home
        </button>

        <button
          style={{
            background: "linear-gradient(270deg, #003EC5, #001E5F)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontWeight: "400",
            fontSize: "16px",
            display: "flex",
            alignItems: "center",
            border: "none",
            outline: "none",
            width: "80%",
            gap: "5px",
            padding: "10px",
            cursor: "pointer",
            outline:'none',
            borderRadius:'10px',

              border:" 0,5px solid", 
  borderImage: `linear-gradient(to right, #003EC5, #001E5F, ) 1`
          }}
          onClick={()=>{
            navigate("/about")
          }}
        >
          <img src="/imgSmolScren/png.png" alt="about" />
          About Us
        </button>

        <button
          style={{
            background: "linear-gradient(270deg, #003EC5, #001E5F)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontWeight: "400",
            fontSize: "16px",
            display: "flex",
            alignItems: "center",
            border: "none",
            outline: "none",
            width: "80%",
            gap: "5px",
            padding: "10px",
            cursor: "pointer",
             outline:'none',
            borderRadius:'10px',

              border:" 0,5px solid #003EC5", 
          }}
          onClick={()=>{
            navigate("/Contact")
          }}
        >
          <img src="/imgSmolScren/Vector(2).png" alt="contact" />
          Contact Us
        </button>
      </div>

          <hr
  style={{
    border: "0.2px solid #003EC5",
    background: "linear-gradient(270deg, #003EC5, #001E5F)",
    marginBottom:"0px",
    marginTop:'25px'
  }}
/>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90px",
        }}
      >


        <button

onClick={()=>{
    navigate("/serverReqstM");
}}

          style={{
            background: "linear-gradient(270deg, #003EC5, #001E5F)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontWeight: "500",
            fontSize: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "none",
            outline: "none",
            width: "95%",
            gap: "5px",
            padding: "10px",
            cursor: "pointer",
                outline:'none',
            borderRadius:'40px',

              border:" 0,5px solid", 
  borderImage: `linear-gradient(to right, #003EC5, #001E5F, ) 1`
          }}
        >
          Service Request
          <img src="/imgSmolScren/go.png" alt="go" />
        </button>
      </div>
    </div>
  );
}
