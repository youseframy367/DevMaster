"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import "./baner.css"
export default function ShowProject({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [project]);

  if (!project) return null;

  return createPortal(
    <>
      <div
        onClick={onClose}
        className="
          fixed inset-0 z-[9999999999]
          flex items-center justify-center
          bg-[rgba(21,21,21,0.6)]
          backdrop-blur-[10px]
          animate-[fadeIn_.3s_ease-out]
        "
      >
        {/* Modal */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="
            relative
            w-[90%] md:w-[60%]
            h-[80%] md:h-[70%]
            rounded-[20px]
            overflow-hidden
            bg-[#16121E]
            shadow-[0_0_40px_rgba(0,0,0,0.4)]
            flex flex-col
          "
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="
              absolute top-[15px] right-[15px]
              z-50
              text-white text-[24px]
              px-[10px] py-[5px]
              rounded-[8px]
              transition-all duration-200
              hover:bg-white/10
            "
          >
            ✕
          </button>

          {/* Scroll Area */}
          <div
            className="
              flex-1 w-full
              overflow-y-auto
              bg-white
              scrollbar-hide
            "
          >
            {/* Top Blur Line */}
            <div
              className="
                sticky top-0 z-10
                h-[10px] w-full
                bg-[linear-gradient(to_bottom,#131313A3,#FFFFFF80)]
              "
            />

            {project.imgWebsid ? (
              <img
                src={project.imgWebsid}
                alt={project.title}
                className="w-full h-auto block"
              />
            ) : (
              <div
                className="
                  w-full h-full
                  flex items-center justify-center
                  bg-[#333]
                  text-[#aaa]
                "
              >
                لا توجد صورة للموقع
              </div>
            )}
          </div>
        </div>
      </div>

 
    </>,
    document.body
  );
}