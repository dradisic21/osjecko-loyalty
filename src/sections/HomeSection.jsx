import { Button } from "../ui/Button";
import { SendCode } from "../components/SendCode/SendCode";
import { useAuth } from "../services/context/AuthProvider";
import { usePopup } from "../services/context/PopupContext";
import "../styles/HomeSection.scss"

export function HomeSection() {
  const { loggedInUser } = useAuth();
  const { openPopup } = usePopup();

  return (
    <div className="home-container mx-auto flex justify-center">
      <div className="grid grid-cols-1 desktop:grid-cols-2">
        <div className=" text-left">
          <div className="text-center pt-36p desktop:text-left desktop:pt-200p">
            <h1 className="text-34p leading-10 font-bold text-primary-black desktop:text-55p desktop:leading-62p">
              Beeraj OSKARA i<br /> svi smo na dobitku!
            </h1>
          </div>
          <div className="text-center py-12p desktop:text-left">
            <p className="text-xl leading-6p text-primary-50 font-inter px-16p desktop:text-18p">
            Sakupljaj bodove unošenjem KODOVA ispod čepa i osvajaj vrijedne nagrade
            </p>
          </div>
          <div className="mobile:flex justify-center pt-42 desktop:justify-start w-full max-w-358p">
            {loggedInUser ? (
              <SendCode />
            ) : (
              <Button
                className="button w-36 h-12 rounded-6p font-semibold font-inter cursor-pointer"
                type="button"
                name="Unesi kod"
                onClick={openPopup}
              />
            )}
          </div>
        </div>

        <div className="flex justify-center items-end pt-20p desktop: pt-100p">
          <img
            src="../../assets/oskar.svg"
            alt="Oscar"
            className="desktop:w-458p"
          />
        </div>
      </div>
    </div>
  );
}
