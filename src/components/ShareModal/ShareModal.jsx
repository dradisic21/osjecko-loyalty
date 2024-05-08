import React from "react";
import { useRef } from "react";
import { Button } from "../../ui/Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function ShareModal({ modalVisible, shareData, handleClose }) {
  const referralLinkRef = useRef(null);

  const handleShareFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${shareData.url}`,
      "_blank"
    );
  };

  const handleShareTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${shareData.url}&text=${shareData.title}`,
      "_blank"
    );
  };

  const handleShareInstagram = () => {
    window.open(
      `https://www.instagram.com/share?url=${shareData.url}&title=${shareData.title}`,
      "_blank"
    );
  };

  const handleShareTikTok = () => {
    window.open(
      `https://www.tiktok.com/share?url=${shareData.url}&title=${shareData.title}`,
      "_blank"
    );
  };

  const copyToClipboard = () => {
    const textToCopy = referralLinkRef.current.innerText;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        toast.success("Kod je uspješno kopiran u međuspremnik!");
      })
      .catch((error) => {
        console.error("Greška prilikom kopiranja koda:", error);
      });
  };

  return (
    <>
      <div
        className={`absolute top-304p z-50 h-300p bg-white shadow-md transform ${
          modalVisible ? "translate-y-0" : "translate-y-[-200%]"
        } transition duration-400 ease-in-out desktop:w-558p mobile:w-360p`}
      >
        <div className="flex justify-between p-4">
          <h3 className="font-bold text-sm text-gray-600 uppercase">
            Podijeli kod sa
          </h3>
          <Button className="close-button" onClick={() => handleClose(false)}>
            <img src="/assets/icons/cancel.svg" alt="" />
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-4 p-4">
          <div>
            <Button
              name="Facebook"
              onClick={handleShareFacebook}
              className="w-full h-10 bg-blue-500 text-white font-semibold rounded-md"
            />
          </div>
          <div>
            <Button
              name="Twitter"
              onClick={handleShareTwitter}
              className="w-full h-10 bg-blue-400 text-white font-semibold rounded-md"
            />
          </div>
          <div>
            <Button
              name="Instagram"
              onClick={handleShareInstagram}
              className="w-full h-10 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-md"
            />
          </div>
          <div>
            <Button
              name="Tiktok"
              onClick={handleShareTikTok}
              className="w-full h-10 bg-black text-white font-semibold rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mx-auto gap-y-10p p-4">
          <div className="w-full flex justify-center items-center border border-inputColor h-44p text-center">
            <p ref={referralLinkRef} className=" text-center px-6p font-inter">
              {shareData.url}
            </p>
          </div>
          <Button
            name="Copy Link"
            className="button w-200p h-44p rounded-6p font-inter font-semibold cursor-pointer"
            onClick={copyToClipboard}
          />
        </div>
      </div>
    </>
  );
}
