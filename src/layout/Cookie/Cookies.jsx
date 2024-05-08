import React, { useState, useEffect } from "react";
import { Button } from "../../ui/Button";

export function Cookies() {
  const [accepted, setAccepted] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [initialCheck, setInitialCheck] = useState(false);
  
  useEffect(() => {
    const cookies = document.cookie.split(';').map(cookie => cookie.trim());
    if (cookies.includes("cookieAccepted=true")) {
      setAccepted(true);
    } else if (cookies.includes("cookieRejected=true")) {
      setRejected(true);
    }
    setInitialCheck(true);
  }, []);



  const handleAccept = () => {
    setAccepted(true);
    document.cookie = "cookieAccepted=true; max-age=2592000";
  };

  const handleReject = () => {
    setRejected(true);
    document.cookie = "cookieRejected=true; max-age=2592000";
  };

  if (initialCheck && (accepted || rejected)) {
    return null; 
  }

  return (
    <div style={{ display: initialCheck && (accepted || rejected) ? 'none' : 'block' }}>
      <div className="overflow-hidden fixed inset-0 bg-primary-black bg-opacity-75 z-99">
      <div className="fixed bottom-0 left-0 right-0 flex flex-col justify-center bg-white mx-15p mb-10p px-6 rounded-15p z-99">
        <div className="flex flex-col justify-center items-center text-center mx-auto gap-y-8p">
          <img src="/assets/icons/cookie.svg" alt="" className="w-40p pt-20p" />
          <h1 className="text-23p font-bold">Kolačići</h1>
          <p className="text-primary-black text-18p leading-25p">
            Ova web stranica koristi kolačiće tako da vam možemo pružiti
            najbolje moguće korisničko iskustvo. Podaci o kolačićima pohranjuju
            se u vašem pregledniku i obavljaju funkcije poput prepoznavanja kod
            povratka na našu web stranicu i pomaže našem timu da shvati koji su
            dijelovi web stranice vama najzanimljiviji i najkorisniji.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center mx-auto gap-y-8p pb-30p">
          <Button
            onClick={handleReject}
            name="Odbij kolačiće"
            className="border-btn w-173p h-44p text-16p rounded-8p leading-24p text-primary-black font-semibold font-inter"
          />
          <Button
            onClick={handleAccept}
            name="Prihvati kolačiće"
            className="button w-190p h-44p rounded-8p text-16p leading-24p text-primary-black font-semibold font-inter"
          />
        </div>
      </div>
      </div>
    </div>
  );
}
