import { jops } from "../../home/jobes";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
export default function JobsSmallScreen() {
  const navigate=useNavigate()
  const [numJobs, setNumJobs] = useState(1);
  const keys = Object.keys(jops); // ['jobOne', 'jobTwo', ...]
  const current = jops[keys[numJobs - 1]];

  const handleNext = () => {
    if (numJobs < keys.length) setNumJobs(numJobs + 1);
  };

  const handleBack = () => {
    if (numJobs > 1) setNumJobs(numJobs - 1);
  };

  return (
    <>
      {/* العنوان */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          textAlign: "center",
        }}
      >
        <p
          style={{
            backgroundImage:
              "linear-gradient(270deg, #9795FF, #FFFFFF, #FFFFFF, #BE9FFF)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontSize: "20px",
            fontWeight: "500",
            lineHeight: "30px",
          }}
        >
          Jobs Available Now
        </p>

        <p
          style={{
            fontWeight: "400",
            fontSize: "10px",
            lineHeight: "15px",
            color: "#fff",
            width: "80%",
            marginLeft: "10%",
            marginTop: "0px",
          }}
        >
          We are looking for new talents to join our team in various fields, with continuous growth and development opportunities.
        </p>
      </div>

      {/* عرض الوظيفة الحالية */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <div
        onClick={()=>{
          navigate("/detailsJop",{ state: current })
        }}
          style={{
            width: "90%",
            borderRadius: "24px",
            backgroundColor: "rgba(21, 21, 21, 0.4)",
            color: "#fff",
            padding: "15px",
            boxShadow: "0 0 1px rgba(255, 246, 246, 1)",
          }}
        >
          <h3 style={{ marginBottom: "10px", fontSize: "16px" }}>{current.name}</h3>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p style={{ fontSize: "14px", fontWeight: "400", color: "#E2E2E2", display: "flex", alignItems: "center", gap: "5px" }}>
              <img src="/icon/MapPinLine.png" alt="location" />
              {current.site}
            </p>
            <p style={{ fontSize: "14px", fontWeight: "400", color: "#E2E2E2", display: "flex", alignItems: "center", gap: "5px" }}>
              <img src="/icon/Briefcase.png" alt="job type" />
              {current.time}
            </p>
            <p style={{ fontSize: "14px", fontWeight: "400", color: "#E2E2E2", display: "flex", gap: "5px", alignItems: "center" }}>
              <img src="/icon/ClipboardText.png" alt="vacancy" />
              Vacancy {current.count}
            </p>
          </div>

          <hr
            style={{
              width: "90%",
              margin: "0 auto",
              height: "1px",
              backgroundColor: "rgba(251, 251, 255, 0.7)",
              border: "none",
              marginTop: "7px",
            }}
          />

          <div
            style={{
              width: "90%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "20px",
              height: "40px",
            }}
          >
            <p style={{ fontWeight: 600, fontSize: "14px" }}>
              Deadline : <span style={{ color: "#6E7485" }}>{current.Deadline}</span>
            </p>

            <button
              style={{
                background: "transparent",
                border: "none",
                outline: "none",
              }}
            >
              <img src="/icon/Button.png" alt="apply" />
            </button>
          </div>

         
        </div>
      </div>

      {/* أزرار التنقل */}
    {/* أزرار التنقل */}
<div
  style={{
    display: "flex",
    gap: "20px",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20px",
    marginBottom: "40px",
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
      cursor: numJobs === 1 ? "not-allowed" : "pointer",
      opacity: numJobs === 1 ? 0.5 : 1,
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
      cursor: numJobs === keys.length ? "not-allowed" : "pointer",
      opacity: numJobs === keys.length ? 0.5 : 1,
    }}
  >
    <IoIosArrowForward size={22} />
  </div>
</div>
    </>
  );
}
