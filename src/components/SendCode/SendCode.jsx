import React, { useState } from "react";
import { InputPoints } from "../../ui/InputPoints";
import { Button } from "../../ui/Button";
import { LoaderSpiner } from "../../components/LoaderSpiner/LoaderSpiner";
import { sendCode } from "../../services/Api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function SendCode() {
  const [enteredCode, setEnteredCode] = useState("");
  const [showLoading, setShowLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const isCodeValid = enteredCode.length === 7;



  const handleCodeChange = (event) => {
    const inputValue = event.target.value;

    setEnteredCode(inputValue);
  };

  const handleSendCode = async (e) => {
    e.preventDefault();
    try {
      setErrors({});
      setShowLoading(true);

      await sendCode(enteredCode).then(() => {
        toast.success("Uspješno ste poslali kod!");
        setEnteredCode("");
        setShowLoading(false);
      });
    } catch (error) {
      const backendErrors = error.response.data.message;
      setErrors(backendErrors);
      setShowLoading(false);
      toast.error(backendErrors);
      console.error("Greška pri slanju koda:", error);
    }
  };

  return (
    <>
    {showLoading && (
      <div>
        <LoaderSpiner />
      </div>
    )}
    <div className="relative flex flex-col gap-y-10p" style={{ width: '100%', maxWidth: '330px' }}>
      <InputPoints
        type="text"
        className="relative"
        value={enteredCode}
        onChange={handleCodeChange}
      />
      {/* <Link to="/cam-scan">
        <img
          src="/assets/icons/scan-cam.svg"
          alt="scan-camera"
          className="absolute top-6p right-10p"
        />
      </Link> */}

      {isCodeValid ? (
        <Button
          type="button"
          name="Potvrdi"
          className="button w-full max-w-330p h-44p rounded-8p text-16p leading-24p font-semibold font-inter"
          onClick={handleSendCode}
        />
      ) : (
        <Button
          type="button"
          name="Potvrdi"
          className="disabled-btn w-full max-w-330p h-44p rounded-8p text-16p leading-24p font-semibold font-inter"
          disabled
        />
      )}
    </div>
    </>
  );
}
