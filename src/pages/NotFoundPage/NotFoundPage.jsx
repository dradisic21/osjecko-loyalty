import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/Button";

export function NotFoundPage() {
  const navigate = useNavigate();

  const handleNavigateClick = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="px-10p">
        <div className="flex justify-center pb-20p">
          <img src="/assets/pecat_1.svg" alt="cep logo" />
        </div>
        <h1 className="text-20p text-center font-bold pb-20p desktop:text-32p">
          Ups! Ta se stranica ne može pronaći.
        </h1>
        <p className="text-center">
          Čini se da ništa nije pronađeno na ovoj lokaciji. Pokušajte
          ponovno ili kliknite na gumb
          "Natrag na naslovnicu".
        </p>
      </div>
      <div className="flex justify-center mx-auto pt-60p">
        <Button
          onClick={handleNavigateClick}
          name="Natrag na naslovnicu"
          className="button w-354p h-44p rounded-8p text-16p leading-24p font-semibold font-inter z-999"
        />
      </div>
    </div>
  );
}
