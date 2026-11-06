"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function ShowBroject({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // قفل بزر Esc
    const onKey = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  const modal = (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[2147483647] flex items-center justify-center overflow-hidden bg-[rgba(21,21,21,0.6)] backdrop-blur-[10px] animate-[fadeIn_0.3s_ease-out]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex h-[80%] w-[90%] flex-col overflow-hidden rounded-[20px] bg-[#16121E] shadow-[0_0_40px_rgba(0,0,0,0.4)] md:h-[70%] md:w-[60%]"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-[15px] top-[15px] z-[20] cursor-pointer rounded-[8px] bg-black/40 px-[10px] py-[5px] text-[24px] text-white transition-colors hover:bg-black/70"
        >
          ✕
        </button>

        <div className="modal-scroll flex-1 w-full overflow-y-auto bg-white p-0">
          <div className="sticky top-0 z-10 h-[10px] w-full bg-gradient-to-b from-[#131313A3] to-[#FFFFFF80]" />

          {project.imgWebsid ? (
            <img
              src={project.imgWebsid}
              alt={project.title}
              className="m-0 block h-auto w-full"
            />
          ) : (
            <div className="flex h-full min-h-[200px] w-full items-center justify-center bg-[#333] text-[#aaa]">
              لا توجد صورة للموقع
            </div>
          )}
        </div>
      </div>

      <style>{`
        .modal-scroll::-webkit-scrollbar { display: none; }
        .modal-scroll { scrollbar-width: none; -ms-overflow-style: none; }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );

  return createPortal(modal, document.body);
}