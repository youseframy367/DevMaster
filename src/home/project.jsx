import ShowBroject from "../progect/showWebside";
import { useState } from "react";



// بيانات المشاريع
 export const projects = [
    {
      title: "Cafee Street",
      description:
        "The Cafee Street website is professionally designed for a great user experience.",
      image: "/icon/2.png",
      imgWebsid:"/icon/Rectangle42129.png"
    },
    {
      title: "Chakra",
      description:
        "The Chakra dashboard is professionally designed to display data easily and effectively.",
      image: "/icon/3.png",
      imgWebsid:"/icon/Component4.png"
    },
    {
      title: "Drops Water Tracke",
      description:
        "The Drops Water Tracker app is designed to help you track your daily water intake easily and effectively.",
      image: "/icon/4.png",
      imgWebsid:"/icon/Rectangle42131.png",
    },
    {
      title: "Smart Lap",
      description:
        "The Smart Lap website is professionally designed to provide a smooth and effective user experience.",
      image: "/icon/1.png",
      imgWebsid:"/icon/Rectangle42120.png"
    },
  ];





export default function Broject({showButton=true}) {

  

    const [selectedProject, setSelectedProject] = useState(null);
  

  // ستايل مشترك لكل project card
  const cardStyle = {
    width: "99%",
    color: "#fff",
    fontFamily: "'Inter', sans-serif",
  };

  const titleStyle = {
    fontWeight: 500,
    fontSize: "32px",
    margin: "0px",
  };

  const descStyle = {
    fontWeight: 400,
    marginTop: "5px",
    lineHeight:'28px',
  };

  return (
    <>

      {/* عنوان المشاريع */}
      <div style={{ width: "90%", marginTop: "-210px", display:'flex',justifyContent:"space-between",alignItems:'end' }}>
        <div style={{
          display:"flex",

          flexDirection:"column"
        }}>
        <p
          style={{
            fontSize: "68px",
            fontWeight: 400,
            backgroundImage:
              "linear-gradient(270deg, #9795FF, #FFFFFF, #FFFFFF, #BE9FFF)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontFamily: "'Roboto', sans-serif",
          }}
        >
          Our Product
        </p>

     
          <p style={{ fontWeight: 400, lineHeight: "28px", color: "#fff" ,marginTop:"-60px" }}>
           We offer high-quality products that meet your needs and help you <br/> achieve your goals easily and effectively.
          </p>
</div>
          {showButton &&(
          <button
            style={{
              display: "flex",
              alignItems: "center",
              padding: "14px 24px",
              borderRadius: "40px",
              fontSize:"16px",
              fontWeight:"500",
              color:'#16121E',
              border:"none",
              outline:'none',
              gap:"5px"
            }}
          >
            Get Started
        <img src="/icon/uil_arrow-up (1).png" alt="arrow up"  />
          </button>
          )}
        </div>

      {/* Grid المشاريع */}
      <div
        style={{
          marginTop: "20px",
          width: "90%",
          zIndex: 1000,
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
        }}
      >
        {projects.map((proj, index) => (
          <div key={index} style={cardStyle}
                     onClick={() => setSelectedProject(proj)} // 👈 عند النقر
          >
            <img src={proj.image} width="100%" style={{marginBottom:'15px'}} alt={proj.title} />
            <p style={titleStyle}>{proj.title}</p>
            <p style={descStyle}>{proj.description}</p>
          </div>
        ))}
      </div>

          {/* عرض تفاصيل المشروع عند النقر */}
      {selectedProject && (
        <ShowBroject
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}