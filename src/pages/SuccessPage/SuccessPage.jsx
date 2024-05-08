import { useNavigate } from "react-router-dom";
import { Nav } from "../../layout/Nav/Nav";
import { Button } from "../../ui/Button";
import "../../styles/SuccessPage.scss"

export function SuccessPage() {
  const navigate = useNavigate();

  const handleNavigateClick = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div>
      <Nav />
      <div className="success-main mx-auto bg-white mt-10p desktop:h-screen">
        <div className="pt-60p desktop:pt-80p text-center">
          <h1 className="max-w-390p mx-auto text-35p font-bold leading-42p">
            Uspješna zamjena bodova za nagrade!
          </h1>
        </div>
        <div className="flex justify-center pt-24p desktop:pt-80p">
          <img src="assets/pecat_1.svg" alt="cep logo" />
        </div>
        <div className="text-center pt-28p desktop:pt-60p">
          <h3 className="text-18p font-bold leading-20p">
            To je sve za sada i nastavi <br /> sudjelovati u sakupljanju bodova.
          </h3>
        </div>
        <div className="flex justify-center mx-auto pt-60p desktop:pt-90p">
          <Button
            onClick={handleNavigateClick}
            name="Natrag na naslovnicu"
            className="button w-354p h-44p rounded-8p text-16p leading-24p font-semibold font-inter z-999"
          />
        </div>
        <div className="fixed bottom-0 left-0 w-full flex justify-center">
          <img src="/assets/val2.svg" alt="val" className="w-full desktop:hidden tablet:hidden"/>
        </div>
        
      </div>
    </div>
  );
}
