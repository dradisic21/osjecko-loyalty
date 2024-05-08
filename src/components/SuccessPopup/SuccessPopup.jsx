import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/Button";

export function SuccessPopup() {
  const navigate = useNavigate();

  const handleNavigateClick = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="overflow-hidden">
      <div className="popup-backdrop fixed inset-0 bg-primary-black bg-opacity-75">
        <div className="w-390p absolute top-86p left-0 right-0 mx-auto bg-white rounded-6p  shadow-custom">
          <div className="pt-112p text-center">
            <h1 className="text-35p font-bold leading-42p">
              Uspješna zamjena bodova za nagrade!
            </h1>
          </div>
          <div className="flex justify-center pt-20p">
            <img src="assets/pecat_1.svg" alt="cep logo" />
          </div>
          <div className="text-center pt-28p">
            <h3 className="text-18p font-bold leading-20p">
              To je sve za sada i nastavi <br /> sudjelovati u sakupljanju
              bodova.
            </h3>
          </div>
          <div className="flex justify-center mx-auto pt-60p">
            <Button
              onClick={handleNavigateClick}
              name="Natrag na naslovnicu"
              className="button w-40p h-44p rounded-8p text-16p leading-24p font-semibold font-inter"
            />
          </div>
          <div className="w-full pt-82p">
            <img src="/assets/val.svg" alt="val" />
          </div>
        </div>
      </div>
    </div>
  );
}
