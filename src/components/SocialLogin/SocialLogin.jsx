import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { googleLogin, getUserData } from "../../services/Api";
import { useAuth } from "../../services/context/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "../../ui/Button";
import { useDispatch } from "react-redux";
import { addUserOrder } from "../../redux/actions/userOrder/userOrderActions";
import { LoaderSpiner } from "../../components/LoaderSpiner/LoaderSpiner";
import {usePopup} from "../../services/context/PopupContext";

export function SocialLogin() {
  const [errors, setErrors] = useState(null);
  const [showLoading, setShowLoading] = useState(false);
  const { setLoggedInUser } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { closeLoginPopup } = usePopup();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => handleGoogleLogin(codeResponse.code),
    flow: "auth-code"
  });

  const handleGoogleLogin = async (codeResponse) => {
    try {
      setErrors({});
      setShowLoading(true);

      await googleLogin(codeResponse).then(async (response) => {
        localStorage.setItem("userToken", response.token);
        const userData = await getUserData();
        setLoggedInUser(userData.user);
        dispatch(addUserOrder({ ...userData.user }));
        setShowLoading(false);
        closeLoginPopup();
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

  return (
    <>
      {showLoading && (
        <div>
          <LoaderSpiner />
        </div>
      )}
      <div className="flex flex-col justify-center items-center mx-auto gap-20p pt-30p">
        {/* <Button
        className="w-345p h-54p bg-fButton text-white font-helvetica text-20p font-bold leading-24p rounded-10p flex justify-center items-center mx-auto"
        name="Nastavi sa Facebook računom"
        // onClick={handleFacebookLogin}
      >
        <img
          src="../../../assets/icons/facebook-b.png"
          alt="icon"
          className="pr-16p"
        />
      </Button> */}

        <Button
          className="w-345p h-54p shadow-custom-md font-roboto text-20p font-medium leading-24p text-primary-150 rounded-10p flex justify-center items-center mx-auto"
          name="Nastavi s Google računom"
          onClick={() => login()}
        >
          <img
            src="../../../assets/icons/google-b.png"
            alt="icon"
            className="pr-16p"
          />
        </Button>
      </div>
    </>
  );
}
