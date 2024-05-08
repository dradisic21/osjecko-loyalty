import { useAuth } from "../services/context/AuthProvider";
import "../styles/PointsSection.scss";

export function PointsSection() {
  const { loggedInUser } = useAuth();

  return (
    <div className="points-section-container flex flex-col items-center w-full px-15p mx-auto pt-30p">
      <div className="text-center max-w-360p pb-20p">
        <h1 className="text-35p leading-42p font-bold text-primary-black">
          Tvoji sakupljeni bodovi
        </h1>
      </div>

      <div className="relative flex flex-col justify-center items-center max-w-260p rounded-56p mx-auto ">
        <div className="relative">
          <img src="/assets/cep.svg" alt=""  />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <p className="text-28p font-bold leading-35p">
            {loggedInUser.points}
          </p>
        </div>
      </div>
      <div className="pt-20p pb-20p">
        <p className="text-18p font-inter leading-35p text-center">
          Beeraj OSKARA i svi smo na dobitku!
        </p>
      </div>
    </div>
  );
}
