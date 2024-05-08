import React, { useState, useEffect, useRef } from "react";
import { Login } from "../Login/Login";
import { Registration } from "../Registration/Registration";
import { usePopup } from "../../services/context/PopupContext"

export function PopUp() {
  const { isPopupOpen, closeLoginPopup } = usePopup();
  const [showRegistration, setShowRegistration] = useState(false);
  const openerRef = useRef(null);
  const prevScrollY = useRef(0);

  useEffect(() => {
    if(isPopupOpen){
      prevScrollY.current = window.scrollY;
      document.body.classList.add("fixed", "inset-0", "top-0", "right-0", "bottom-0", "left-0", "h-full")
      window.scrollTo(0, 0);
    } else {
      document.body.classList.remove("fixed", "inset-0", "top-0", "right-0", "bottom-0", "left-0", "h-full")
    }
  }, [isPopupOpen])

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const referralCode = queryParams.get("referral_code");
    if (referralCode) {
      setShowRegistration(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  const openRegistrationPopup = () => {
    setShowRegistration(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeRegistrationPopup = () => {
    setShowRegistration(false);
    closeLoginPopup();
  }

  return (
    <div>
      {isPopupOpen && (
        <div ref={openerRef} className="fixed overflow-hidden h-full inset-0 flex items-center justify-center bg-black bg-opacity-70 z-99">
          <div>
            {showRegistration ? (
              <Registration onClose={closeRegistrationPopup} />
            ) : (
              <Login onRegisterClick={openRegistrationPopup} onClose={closeLoginPopup} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
