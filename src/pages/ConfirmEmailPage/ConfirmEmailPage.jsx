import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "../../ui/Button";
import { LoaderSpiner } from "../../components/LoaderSpiner/LoaderSpiner";
import { confirmEmail } from "../../services/Api";
import { usePopup } from "../../services/context/PopupContext";
import { PopUp } from "../../components/Popup/PopUp";
import "../../styles/ConfirmEmailPage.scss";

export function ConfirmEmailPage() {
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState("");
  const [success, setSuccess] = useState("");
  const { openPopup } = usePopup();

  let [searchParams, _] = useSearchParams();
  const queryParam = searchParams.get("token")
 
  useEffect(() => {
    setLoading(true)
    confirmEmail(queryParam).then((res) => {
      setSuccess("Uspješno ste aktivirali svoj račun!");
      setLoading(false)
    })
    .catch((error) => { 
      setErrors("Greška prilikom potvrde računa");
      setLoading(false)
     })
   
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  

  return (
    <div className="confirm-main flex flex-col justify-center items-center">
      {loading ? (
        <div className="loader">
          <LoaderSpiner />
        </div>
      ) : (
        <>
          <div>
            <img src="/assets/pecat.svg" alt="pecat" className="w-200p" />
          </div>
          {errors ? (
            <div className="pt-20p text-center text-red-500">
              <h1 className="text-34p font-bold">{errors}</h1>
            </div>
          ) : (
            <>
              <div className="pt-20p text-center">
                <h1 className="text-34p font-bold">{success}</h1>
              </div>
              <div className="pt-40p">
                <Button
                  className="button w-141p h-44p rounded-6p font-inter font-semibold cursor-pointer"
                  type="button"
                  name="Prijavi se"
                  onClick={openPopup}
                />
              </div>
              <PopUp />
            </>
          )}
        </>
      )}
    </div>
  );
}
