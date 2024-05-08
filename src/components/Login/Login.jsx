import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/Button";
import { Input } from "../../ui/Input";
import { SocialLogin } from "../SocialLogin/SocialLogin";
import { LoaderSpiner } from "../../components/LoaderSpiner/LoaderSpiner";
import { login } from "../../services/Api";
import { useAuth } from "../../services/context/AuthProvider";
import { getUserData } from "../../services/Api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch } from "react-redux";
import { addUserOrder } from "../../redux/actions/userOrder/userOrderActions";

export function Login({ onClose, onRegisterClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isConfirmEmailPage, setIsConfirmEmailPage] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const { setLoggedInUser } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setIsConfirmEmailPage(window.location.pathname === "/confirm-email");
  }, []);

  useEffect(() => {
    if ((email && errors.email) || (password && errors.password)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: email && errors.email ? "" : prevErrors.email,
        password: password && errors.password ? "" : prevErrors.password,
      }));
    }
  }, [email, password, errors.email, errors.password]);

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      setErrors({});
      setShowLoading(true);
      
      if (!email) {
        setErrors({ email: ["Unesite svoju e-mail adresu"] });
        setShowLoading(false);
        return;
      }
      if (!password) {
        setErrors({ password: ["Unesite svoju lozinku"] });
        setShowLoading(false);
        return;
      }

      await login(email, password).then(async () => {
        const userData = await getUserData();
        setLoggedInUser(userData.user);
        dispatch(addUserOrder({...userData.user}));
        setShowLoading(false);
        onClose();
        toast.success("Uspješno ste se prijavili.");
        navigate("/");
        
      });
    } catch (error) {
      setShowLoading(false);
      const backendErrors = error.response.data.message;
      setErrors(backendErrors);
      toast.error(backendErrors);
    }
  };

  const handleRedirectToForgotPassword = (e) => {
    e.preventDefault();
    navigate("/recover-password");
  };

  const handleRegisterClick = () => {
    onRegisterClick();
  };

  return (
    <>
    {showLoading && (
      <div>
        <LoaderSpiner />
      </div>
    )}
    <div className="mobile:h-652p desktop:h-652p overflow-y-scroll max-w-374p absolute top-86p left-0 right-0 bottom-0 mx-auto bg-white rounded-6p px-8p shadow-custom">
      <div>
        <h1 className="text-23p text-center pt-30p font-bold leading-28p">
          Prijavi se!
        </h1>
      </div>
      <form
        className="flex flex-col mx-auto gap-y-10p pt-12p"
        onSubmit={handleLogin}
      >
        <Input
          type="email"
          label="E-mail"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="off"
          error={errors.email}
        />
        <Input
          type="password"
          label="Lozinka"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="off"
          error={errors.password}
        />

        <div className="flex items-center my-auto gap-x-10p pt-12p">
          <Input
            type="checkbox"
            className="w-30p h-30p border border-borderColor outline-none"
          />
          <p className="font-inter text-12p leading-19px pb-4p">Zapamti me</p>
        </div>
        <div className="pt-10p">
          <Button
            type="submit"
            name="Prijavi se"
            className="button w-full max-w-354p h-44p rounded-8p text-16p leading-24p font-semibold font-inter"
          />
        </div>
      </form>
      <div className="pt-12p flex justify-center">
        <p
          className=" text-14p font-inter cursor-pointer"
          onClick={handleRedirectToForgotPassword}
        >
          Ne sjećaš se lozinke?
        </p>
      </div>

      {!isConfirmEmailPage && (
        <>
          <div className="text-center pt-28p">
            <h3 className="text-23p font-bold leading-28p">
              Što? Nemaš profil?
            </h3>
          </div>
          <div className="pt-12p">
            <Button
              name="Registriraj se"
              className="border-btn w-full max-w-354p h-44p text-16p rounded-8p leading-24p font-semibold font-inter"
              onClick={handleRegisterClick}
            />
          </div>
        </>
      )}

      <div className="pt-44p">
        <div className="w-200p h-2p mx-auto bg-primary-100 relative ">
          <div className="text-center absolute -top-4 left-1/2 transform -translate-x-1/2 w-36p  bg-white text-23p">
            ili
          </div>
        </div>
        <div className="desktop:pb-20p mobile:pb-105p">
          <SocialLogin />
        </div>
      </div>
      <Button
        onClick={onClose}
        className="close-button absolute top-24p right-14p"
      >
        <img src="/assets/icons/hamburger-x.svg" alt="close-button" />
      </Button>
    </div>
    </>
  );
}
