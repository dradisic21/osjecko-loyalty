import React, { useEffect, useState } from "react";
import "../../styles/LoaderSpiner.scss";

export function LoaderSpiner() {
const [showDot1, setShowDot1] = useState(false);
  const [showDot2, setShowDot2] = useState(false);
  const [showDot3, setShowDot3] = useState(false);

  useEffect(() => {
    const dotTimer1 = setTimeout(() => setShowDot1(true), 300);
    const dotTimer2 = setTimeout(() => setShowDot2(true), 400);
    const dotTimer3 = setTimeout(() => setShowDot3(true), 500);
    const resetTimer = setTimeout(() => {
      setShowDot1(false);
      setShowDot2(false);
      setShowDot3(false);
    }, 600);

    return () => {
      clearTimeout(dotTimer1);
      clearTimeout(dotTimer2);
      clearTimeout(dotTimer3);
      clearTimeout(resetTimer);
    };
  }, [showDot1, showDot2, showDot3]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-70 z-9999">
      <div
        className="flex justify-center items-center desktop:h-598p mobile:h-400p"
        style={{ width: "100%", maxWidth: "360px" }}
      >
        <div className="relative">
          <img
            src="/assets/cep.svg"
            alt="loader"
            className="animate-spin-slow w-180p h-180p"
          />
          <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-28p font-inter font-bold">
            Obrada
          </p>
          <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-28p font-inter font-bold">
             {showDot1 && <span className="text-55p rounded-full">.</span>}
            {showDot2 && <span className="text-55p rounded-full">.</span>}
            {showDot3 && <span className="text-55p rounded-full">.</span>}
          </div>
        </div>
      </div>
    </div>
  );
}
