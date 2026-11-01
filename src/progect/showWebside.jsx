import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useState } from "react";

export default function ShowBroject({ project, onClose }) {
  if (!project) return null;


  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden"; 
    return () => {
      document.body.style.overflow = originalStyle; 
    };
  }, []);

  const modal = (
    <div
      style={{
        backgroundColor: "rgba(21, 21, 21, 0.6)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999999999, 
        animation: "fadeIn 0.3s ease-out",
        overflow: "hidden",
      }}
      onClick={onClose}
    >
      <div
        className="modal-content"
        style={{
          width: "60%",
          height: "70%",
          backgroundColor: "#16121E",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 0 40px rgba(0,0,0,0.4)",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()} // يمنع غلق المودال عند الضغط جوّاه
      >
       
  <button
  onClick={onClose}
  style={{
    position: "absolute",
background: "transparent",
    top: "15px",
    right: "15px", 
    border: "none",
    color: "#fff",
    fontSize: "24px",
    cursor: "pointer",
    zIndex: 999999, 
    padding: "5px 10px",
    borderRadius: "8px",
    transition: "background 0.2s",
  }}

>
  ✕
</button>


        <div
          className="modal-scroll"
          style={{
            flex: 1,
            width: "100%",
            overflowY: "auto",
            backgroundColor: "#ffffffff",
            padding:"0px"
          }}

      
         >

              <div
        style={{
          position: "sticky",
          top: 0,
          height: "10px",
          width:"100%", 
background: "linear-gradient(to bottom, #131313A3, #FFFFFF80)",
          transition: "width 0.1s ease-out",
          zIndex: 10,
        }}
      />

          {project.imgWebsid ? (
            <img
              src={project.imgWebsid}
              alt={project.title}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                margin:"0px",
              }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#333",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#aaa",
              }}
            >
              لا توجد صورة للموقع
            </div>
          )}
        </div>
      </div>

      <style>
        {`
  /* Chrome, Safari, Opera */
  .modal-scroll::-webkit-scrollbar {
    display: none;
  }

  /* Firefox */
  .modal-scroll {
    scrollbar-width: none;
  }

  /* IE, Edge */
  .modal-scroll {
    -ms-overflow-style: none;
  }
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }

          @media (max-width: 768px) {
            .modal-content {
              width: 90% !important;
              height: 80% !important;
            }
          }
        `}
      </style>
    </div>
  );

  return createPortal(modal, document.body);
}
