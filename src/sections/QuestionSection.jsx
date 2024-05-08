import { Line } from "../ui/Line";
import "../styles/QuestionSection.scss";

export function QuestionSection() {
  const handleCallClickMobile = () => {
    window.location.href = "tel:+38531514720";
  };

  return (
    <div className="question-container ">
      <div className="desktop:w-558p mx-auto py-20p">
        <div className="w-80p mx-auto">
          <Line className="line h-2p" />
        </div>

        <div className="text-center pt-20p">
          <h2 className="text-28p leading-34p font-bold text-primary-black">
            Imaš pitanja?
          </h2>
        </div>
        <div className="text-center pt-16p">
          <p className="text-18p text-center px-16p leading-6 text-primary-50 font-inter font-normal">
            Ako te zanima nešto vezano uz loyalty program, pravila
            sudjelovanja, ne možeš pronaći kod na ambalaži, aplikacija ti ne
            radi dobro ili imaš kakvo pitanje - javi nam se!
          </p>
        </div>
        <div className="pt-8p text-center">
          <p
            onClick={handleCallClickMobile}
            className="text-14p text-tel font-bold font-inter cursor-pointer"
          >
            +385 31 514 720
          </p>
        </div>
        <div className="pt-12p text-center">
          <a
            href="mailto:info@pivovara.hr?subject=Mail from Loyalty Web Site"
            className="text-14p text-tel font-bold font-inter cursor-pointer"
          >
            info@pivovara.hr
          </a>
        </div>
      </div>
    </div>
  );
}
