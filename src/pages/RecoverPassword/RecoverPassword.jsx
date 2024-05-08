import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { resetPasswordInit } from "../../services/Api";
import { Input } from "../../ui/Input";
import { Button } from "../../ui/Button";
import { LoaderSpiner } from "../../components/LoaderSpiner/LoaderSpiner";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function RecoverPassword() {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [showLoading, setShowLoading] = useState(false);
  const navigate = useNavigate();

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      setErrors({});
      setShowLoading(true);

      await resetPasswordInit(email).then((response) => {
        setShowLoading(false);
        toast.success(response.data.message);
      });
    } catch (error) {
      setShowLoading(false);
      const backendErrors = error.response.data.message;
      setErrors(backendErrors);
      toast.error(backendErrors);
    }
  };

  const goToHomePage = (e) => {
    e.preventDefault();
    navigate("/")
}

  return (
    <>
    {showLoading && (
      <div>
        <LoaderSpiner />
      </div>
    )}
    <div className="flex flex-col h-screen pt-100p ">
      <div className="px-8p">
        <form
          onSubmit={handleForgotPassword}
          className="mx-auto bg-white border border-gray-300 rounded-lg shadow-custom p-6 desktop:w-558p"
        >
          <div className="text-center">
            <h1 className="text-20p font-bold">
              Unesite e-mail s kojim ste registrirani kako biste mogli obnoviti
              lozinku.
            </h1>
          </div>
          <div className="pt-20p">
            <Input
              type="email"
              label="E-mail"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={errors.email}
            />
            <div className="flex justify-center pt-20p">
              <Button
                className="button w-full max-w-354p h-44p text-16p rounded-8p leading-24p font-semibold font-inter"
                name="Nastavi"
              />
            </div>
          </div>
        </form>
        <div className="flex justify-center pt-40p">
          <Button name="Naslovna" className="button w-100p h-44p text-16p rounded-8p leading-24p font-semibold font-inter mt-20p" onClick={goToHomePage} />
        </div>
        
      </div>
    </div>
    </>
  );
}
