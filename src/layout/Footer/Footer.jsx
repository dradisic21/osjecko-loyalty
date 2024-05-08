import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Line } from "../../ui/Line";
import { SocialNetwork } from "../../components/SocialNetwork/SocialNetwork";
import "../../styles/Footer.scss";

export function Footer() {
  return (
    <div className="footer-main w-full">
      <div className="w-80p mx-auto pt-57p">
        <Line className="line h-2p" />
      </div>
      <div className="py-24p">
        <SocialNetwork />
      </div>
      <div className="w-80p mx-auto">
        <Line className="line h-2p" />
      </div>
      <div className="flex justify-center mx-auto pt-24p pb-30p">
        <img src="/assets/pecat-footer.svg" alt="pecat" />
      </div>
      <div className="w-160p mx-auto">
        <Line className="line h-2p" />
      </div>
      <div className="flex justify-center py-24p">
        <ul className="flex flex-col gap-y-20p text-center text-18p text-white font-inter">
          <HashLink smooth to="/#naslovna">
            Naslovnica
          </HashLink>
          <HashLink smooth to="/#sudjelovanje">
            Kako sudjelovati?
          </HashLink>
          <HashLink smooth to="/#nagrade">
            Dostupne nagrade
          </HashLink>
          <Link to="/faq" >
              Česta pitanja
            </Link>
        </ul>
      </div>
      <div className="w-160p mx-auto">
        <Line className="line h-2p" />
      </div>
      <div className="flex justify-center py-24p">
        <ul className="flex flex-col gap-y-20p text-center text-18p text-white font-inter">
          <li>
            <Link to="/privacy-policy">Pravila privatnosti</Link>
          </li>
          <li>
            <Link to="/cookies">Postavke kolačića</Link>
          </li>
        </ul>
      </div>
      <div className="w-160p mx-auto">
        <Line className="line h-2p" />
      </div>
      <div className="text-center py-8p text-white">
        <Link
          to="https://www.pivovara.hr"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.pivovara.hr
        </Link>
      </div>
      <div className="w-160p mx-auto">
        <Line className="line h-2p" />
      </div>
      <div className="text-center text-white mx-auto pt-12p pb-105p">
        <p className="text-18p font-bold">© Prvo Hrvatsko Pivo 1664.</p>
      </div>
    </div>
  );
}
