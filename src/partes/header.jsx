import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import"./header.css"

export default function Header() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = ["Home", "About", "Services", "Products", "News", "Jobs", "Contact Us"];
  const routes = {
    Home: "/",
    About: "/about",
    Services: "/services",
    Products: "/products",
    News: "/news",
    Jobs: "/JobsAll",
    "Contact Us": "/Contact",
  };

  // تحديث العنصر النشط حسب الصفحة
  useEffect(() => {
    const currentIndex = navItems.findIndex(item => routes[item] === location.pathname);
    if (currentIndex !== -1) setActiveIndex(currentIndex);
  }, [location.pathname]);

  const headerStyle = {
    width: "100%",
    height: "79px",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 8888,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "0 40px",
    background: "linear-gradient(90deg, #01002B4D, #01002B4D)",
    fontFamily: "'Roboto', sans-serif",
    color: "#fff",
  };

  const ulStyle = {
    display: "flex",
    gap: "30px",
    listStyle: "none",
    padding: 0,
    margin: 0,
  };

  const liStyle = {
    cursor: "pointer",
    fontWeight: 400,
    fontSize: "16px",
    padding: "4px 8px",
    position: "relative",
  };
const isServerRequest = location.pathname === "/serverReqst";

const buttonWrapperStyle = {
  borderRadius: "40px",
  padding: "1px",
  display: "inline-block",
  overflow: "hidden",

  // 🔹 في أي صفحة تانية: الخلفية متدرجة
  // 🔹 في /serverReqst: الخلفية شفافة
  background: isServerRequest
    ? "transparent"
    : "linear-gradient(90deg, #00f2fe, #003cbe, #00f2fe)",

  // 🔹 الحدود
  border: "1px solid transparent",
  borderRadius: "40px",

  // 🔹 الأنيميشن للخلفية في الصفحات العادية فقط
  animation: !isServerRequest ? "borderShift 3s ease infinite" : "none",
  backgroundSize: "200% 200%",
  backgroundSize: "300% 300%",
backgroundPosition: "0% 50%",

};

const buttonStyle = {
  border: "none",
  borderRadius: "38px",
  padding: "8px 16px",
  cursor: "pointer",
  color: "white",

  // 🔹 في /serverReqst الزرار عليه التدرج والانيميشن
  // 🔹 في أي صفحة تانية الزرار ثابت (أسود)
  background: isServerRequest
    ? "linear-gradient(90deg, #00f2fe, #003cbe, #00f2fe)"
    : "black",

  backgroundSize: "200% 200%",
  animation: isServerRequest ? "gradientShift 3s ease infinite" : "none",

  backgroundSize: "300% 300%",
backgroundPosition: "0% 50%",

};



  return (
    <div style={headerStyle}>
      {/* Logo */}
      <img src="/icon/result 1.png" alt="Logo" style={{ height: "50px" }} />

      {/* Navigation Menu */}
      <ul style={ulStyle}>
        {navItems.map((item, index) => (
         <li
  key={index}
  style={liStyle}
  onClick={() => navigate(routes[item] || "/")}
  className={index === activeIndex ? "active-nav" : ""}
>
  {item}
</li>

        ))}
      </ul>

      {/* Service Request Button */}
      <div style={buttonWrapperStyle}>
        <button style={buttonStyle} onClick={() => navigate("/serverReqst")}>
          Service Request
          <img src="/icon/uil_arrow-up.png" alt="arrow up" style={{ width: 16, height: 16, marginLeft: 8 }} />
        </button>
      </div>

      {/* CSS Animations */}
      <style>{`
        /* نص النشط في القوائم */
        .nav-gradient {
          background: linear-gradient(90deg, #00f2fe, #003cbe, #00f2fe);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientText 3s ease infinite;
          font-weight: 500;
        }

        @keyframes gradientText {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
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

@keyframes borderShift {
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
  );
}
