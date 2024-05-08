import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { resetPassword } from "../../services/Api";
import { usePopup } from "../../services/context/PopupContext";
import { Input } from "../../ui/Input";
import { Button } from "../../ui/Button";
import { LoaderSpiner } from "../../components/LoaderSpiner/LoaderSpiner";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showLoading, setShowLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const { openPopup } = usePopup(); 
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const emailParam = urlParams.get("email");
    const codeParam = urlParams.get("code");

    setEmail(emailParam);
    setCode(codeParam);
  }, []);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      setErrors({});
      setShowLoading(true);

      await resetPassword(email, code, newPassword, confirmNewPassword).then(
        (response) => {
          setNewPassword("");
          setConfirmNewPassword("");
          setShowLoading(false);
          toast.success(response.message);
          navigate("/")
          openPopup();
        }
      );
    } catch (error) {
      const backendErrors = error.response.data.errors;
      if(backendErrors){
        setErrors(backendErrors);
        setShowLoading(false);
      }
      if(error.response.data.message) {
        toast.error(error.response.data.message);
        setShowLoading(false);
      }
      
    }
  };

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
          onSubmit={handleResetPassword}
          className="mx-auto bg-white border border-gray-300 rounded-lg shadow-custom p-6 desktop:w-558p"
        >
          <div className="text-center">
            <h1 className="text-20p font-bold">Unesite novu željenu lozinku</h1>
          </div>
          <div className="flex flex-col mx-auto gap-y-16p pt-20p">
            <Input
              label="Nova lozinka"
              type="password"
              name="Nova lozinka"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              autoComplete="off"
              error={errors.password}
            />
            <Input
              label="Ponovi novu lozinku"
              type="password"
              name="Ponovi novu lozinku"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              autoComplete="off"
              error={errors.password}
            />
            <div className="flex">
              <Button
                type="submit"
                className="button w-full max-w-354p h-44p text-16p rounded-8p leading-24p font-semibold font-inter"
                name="Spremi izmjenu"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}
