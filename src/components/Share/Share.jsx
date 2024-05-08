import React, { useState } from "react";
import { ShareModal } from "../ShareModal/ShareModal";
import { Button } from "../../ui/Button";

export function Share({ label, text, referralCode }) {
    const [showModal, setShowModal] = useState(false); 
  
    const customLink = `https://www.loyalty-test.dritos.hr/?referral_code=${referralCode}`;
    let url = customLink;
    const shareDetails = { text, url };
  
    const handleSharing = async () => {
      if (navigator.share) {
        try {
          await navigator
            .share(shareDetails)
            .then(() =>
              console.log("Uspješno ste podijelili Vaš referal kod!")
            );
        } catch (error) {
          console.log(`Došlo je do pogreške u dijeljenju koda: ${error}`);
        }
      } else {
        setShowModal(true); 
      }
    };
  
    return (
      <>
      <div className="w-390p px-10p">
        <Button className="button w-full max-w-354p h-44p rounded-8p text-16p leading-24p font-semibold font-inter" onClick={handleSharing}>
            <span className="sharer-button-text">{label}</span>
        </Button>
      </div>
       
  
        {showModal && (
          <ShareModal
            handleClose={setShowModal} 
            shareData={shareDetails}
            modalVisible={showModal}
          />
        )}
      </>
    );
  }