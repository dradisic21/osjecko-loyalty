import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/Button";
import { Nav } from "../../layout/Nav/Nav";
import { Footer } from "../../layout/Footer/Footer";
import { Share } from "../../components/Share/Share";
import { useAuth } from "../../services/context/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function SharePage() {
  const referralCodeRef = useRef(null);
  const { loggedInUser } = useAuth();
  const navigate = useNavigate();

  const copyToClipboard = () => {
    const textToCopy = referralCodeRef.current.innerText;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        toast.success("Kod je uspješno kopiran u međuspremnik!");
      })
      .catch((error) => {
        console.error("Greška prilikom kopiranja koda:", error);
      });
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Nav />
      <div className="relative">
        <div className="desktop:w-700p mx-auto">
          <div className="pt-20p pl-20p">
            <Button className="flex gap-x-10p" onClick={goBack}>
              <img src="/assets/icons/arrow_back.svg" alt="arrow back" />
              <p className="text-18p font-inter">Natrag</p>
            </Button>
          </div>
          <div className="flex justify-center mx-auto pt-30p ">
            <img src="/assets/pecat.svg" alt="" />
          </div>
          <div className="text-center pt-38p px-15p">
            <h1 className="text-34p font-bold">
              Pozovi prijatelje i osvoji dodatne bodove
            </h1>
          </div>
          <div className="pt-12p px-15p">
            <ul className="flex flex-col gap-y-12p list-image-[url(/public/assets/icons/list-circle.svg)] pl-15p text-18p leading-26p font-inter">
              <li>Podijeli kod sa svojim prijateljima</li>
              <li>
                Kada prihvate poziv i obave prvu zamjenu bodova, odnosno izvrše
                prvu narudžbu nagrade, Osječko Loyalty nagrađuje svakog s po 10
                dodatnih bodova
              </li>
            </ul>
          </div>
          <div className="flex justify-center mx-auto pt-30p gap-x-8p">
            <img src="/assets/icons/awards.svg" alt="awards" />
            <h4 className="text-14p font-bold">10 bonus bodova</h4>
          </div>
          <div className="flex flex-col justify-center items-center mx-auto gap-y-8p pt-28p">
            <p className="text-14p font-inter">Tvoj kod preporuke</p>
            <h4 ref={referralCodeRef} className="text-18p font-bold">
              {loggedInUser.referral_code}
            </h4>
            <p
              className="text-14p font-inter text-primary-200 cursor-pointer"
              onClick={copyToClipboard}
            >
              Kopiraj kod
            </p>
          </div>
          <div className="w-345p flex justify-center mx-auto text-center text-14p pt-20p">
            <p className="px-16p font-inter">
              Preporukom možeš zaraditi najviše 200 bodova godišnje
            </p>
          </div>
          <div className="flex justify-center pt-20p pb-30p">
            <Share
              label="Podijeli kod s prijateljima"
              title="Prijavi se u Osječko loyalty web aplikaciju, iskoristi ovaj kod preporuke prijatelja kako bi on/ona osvojio/la 20 bonus bodova nakon što unesete prvi kod sa čepa!"
              text={`Prijavi se u Osječko loyalty web aplikaciju, iskoristi kod preporuke prijatelja: ${loggedInUser.referral_code} kako bi oboje dobili po 10 bodova nakon što obaviš svoju prvu zamjenu bodova, odnosno narudžbu nagrade.`}
              referralCode={loggedInUser.referral_code}
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
