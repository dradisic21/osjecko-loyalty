import { useNavigate } from "react-router-dom";
import { usePopup } from "../../services/context/PopupContext"

export function LoginIcon({ userName }) {
  const { openPopup } = usePopup();
  const navigate = useNavigate();

  const handleProfileNavigation = () => {
    navigate("/profile");
  };


  return (
    <div
      className="relative pt-4p "
    >
      <img src="/assets/cep.svg" alt="" className="w-40p h-40p" />
      {userName ? (
      <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-20p font-bold leading-52p cursor-pointer" onClick={handleProfileNavigation}>
        <span>{userName.name && userName.name.charAt(0)}</span>
      </p>
      ) : (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer" onClick={openPopup} >
          <img src="/assets/icons/avatar.svg" alt="icon" />
        </div>
      )}
    </div>
  );
}
