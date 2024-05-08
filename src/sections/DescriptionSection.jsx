import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Button } from "../ui/Button";
import { useAuth } from "../services/context/AuthProvider";
import "../styles/DescriptionSection.scss";

export function DescriptionSection() {
  const { loggedInUser } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/collect-points");
  };

  return (
    <div className="main w-full bg-white">
      <div className="mx-auto py-30p desktop:w-1180p ">
        <div className="text-center">
          <h2 className="mobile:text-32p leading-42p font-bold text-primary-black desktop:text-55p">
            O nagradama i sakupljanju bodova
          </h2>
        </div>
        <div className="text-center pt-16p px-6p">
          <p className="text-18p text-center leading-6 text-primary-50 font-inter font-normal">
            Za naše najvjernije potrošače pripremili smo vrlo zanimljive
            nagrade. Ispod čepova Osječkog piva i Osječkog Crnog radlera nalaze
            se kodovi. Svaki kod je jedan bod više do nagrada. Najuporniji
            dobivaju najviše. <br />
            Beeraj s razlogom!
          </p>
        </div>
        <div className="flex justify-center pt-32p">
          {loggedInUser ? (
            <Button
              className="button w-162p h-44p rounded-6p font-inter font-semibold cursor-pointer"
              type="button"
              onClick={handleClick}
              name="Vidi nagrade"
            />
          ) : (
            <HashLink
              smooth
              to="/#nagrade"
              className="button w-162p h-44p rounded-6p font-inter font-semibold flex justify-center items-center cursor-pointer"
            >
              Vidi nagrade
            </HashLink>
          )}
        </div>
      </div>
    </div>
  );
}
