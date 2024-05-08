import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "../../ui/Button";
import { Input } from "../../ui/Input";
import { DateInput } from "../../ui/DateInput";
import { registers } from "../../services/Api";
import { LoaderSpiner } from "../../components/LoaderSpiner/LoaderSpiner";
import { usePopup } from "../../services/context/PopupContext";

export function Registration({ onClose }) {
  const { openPopup } = usePopup();
  const [errors, setErrors] = useState({});
  const [showLoading, setShowLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [userData, setUserData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    password_confirmation: "",
    city: "",
    zip: "",
    address: "",
    date_of_birth: "",
    phone: "",
    newsletter: false,
    terms: false,
  });

  const registrationFormRef = useRef(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const referralCode = params.get("referral_code");

    if (referralCode) {
      setUserData(prevState => ({
        ...prevState,
        invited_by: referralCode
      }));
    }
  }, [location.search]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const scrollToTop = () => {
    registrationFormRef.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleRedirectAfterRegistration = () => {
    navigate("/check-email");
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setErrors({});
      setShowLoading(true);

      const dataToSend = { ...userData };

      if (!userData.invited_by || userData.invited_by.trim() === "") {
        delete dataToSend.invited_by;
      }

      await registers(dataToSend).then(() => {
        handleRedirectAfterRegistration(); 
      });
    } catch (error) {
      setShowLoading(false);
      const backendErrors = error.response.data.errors;
      setErrors(backendErrors);
      scrollToTop();
      console.error("Greška prilikom registracije:", error);
    }
  };

  const handleLoginClick = () => {
    onClose();
    openPopup();
    scrollToTop();
  };

  return (
    <>
    {showLoading && (
      <div>
        <LoaderSpiner />
      </div>
    )}
    <form
      ref={registrationFormRef}
      className="overflow-y-scroll h-full w-full max-w-374p absolute top-86p left-0 right-0 mx-auto bg-white rounded-6p px-10p shadow-custom z-999 pb-90p"
      onSubmit={handleSubmit}
    >
      <div className="pt-30p">
        <h1 className="text-23p text-center font-bold leading-28p">
          Registriraj se!
        </h1>
      </div>
      <div className="pt-14p px-10p">
        <p className="text-14p leading-17p font-inter">
          Pridruži se Osječkom i osvajaj nagrade! Registracija je brza i
          jednostavna.
        </p>
      </div>
      <div className="flex flex-col gap-y-18p pt-12p">
        <Input
          label="Ime"
          type="text"
          value={userData.name}
          name="name"
          onChange={handleInputChange}
          error={errors.name}
        />
        <Input
          label="Prezime"
          type="text"
          value={userData.surname}
          name="surname"
          onChange={handleInputChange}
          autoComplete="on"
          error={errors.surname}
        />
        <Input
          type="text"
          label="Država"
          defaultValue="Hrvatska"
          disabled={true}
        />
        <Input
          label="Grad"
          type="text"
          value={userData.city}
          name="city"
          onChange={handleInputChange}
          autoComplete="on"
          error={errors.city}
        />
        <Input
          label="Poštanski broj"
          type="number"
          value={userData.zip}
          name="zip"
          onChange={handleInputChange}
          autoComplete="on"
          error={errors.zip}
        />
        <Input
          label="Adresa i kućni broj"
          type="text"
          value={userData.address}
          name="address"
          onChange={handleInputChange}
          autoComplete="on"
          error={errors.address}
        />
        <DateInput
          label="Datum rođenja"
          value={userData.date_of_birth}
          name="date_of_birth"
          onChange={(date) =>
            setUserData((prevState) => ({
              ...prevState,
              date_of_birth: date,
            }))
          }
          autoComplete="on"
          error={errors.date_of_birth}
        />
        <Input
          label="Broj mobilnog telefona"
          type="tel"
          value={userData.phone}
          name="phone"
          onChange={handleInputChange}
          autoComplete="on"
          error={errors.phone}
        />
      </div>
      <div className="pt-24p pl-10p">
        <h3 className="text-18p leading-20p font-bold">Podatci za pristup</h3>
      </div>
      <div className="flex flex-col gap-y-18p pt-12p">
        <Input
          label="E-mail"
          type="email"
          value={userData.email}
          name="email"
          onChange={handleInputChange}
          autoComplete="on"
          error={errors.email}
        />
        <Input
          label="Kreiraj lozinku"
          type="password"
          value={userData.password}
          name="password"
          onChange={handleInputChange}
          autoComplete="on"
          error={errors.password}
        />
        <Input
          label="Ponovi lozinku"
          type="password"
          value={userData.password_confirmation}
          name="password_confirmation"
          onChange={handleInputChange}
          autoComplete="on"
          error={errors.password}
        />
      </div>
      <div className="pt-16p pl-10p">
        <p className="text-14p leading-17p font-inter">
          Lozinka mora sadržavati barem 8 znakova. Možeš koristiti slova,
          brojeve i simbole.
        </p>
      </div>
      <div className="pt-24p pl-10p w-345p">
        <h2 className="text-18p font-bold leading-22p">
          Kod preporuke prijatelja (Opcionalno)
        </h2>
      </div>
      <div className="pt-12p">
        <Input
          label="Kod preporuke"
          type="text"
          value={userData.invited_by}
          name="invited_by"
          onChange={handleInputChange}
          maxLength={6}
          autoComplete="on"
          error={errors.invited_by}
        />
      </div>
      <div className="flex flex-col pt-30p">
        <div className="flex items-start w-full">
          <Input
            type="checkbox"
            name="terms"
            checked={userData.terms}
            onChange={handleInputChange}
          />
          <div>   
            <p className="text-14p font-inter leading-17p">
              Suglasan/a sam i prihvaćam{" "}
              <span className="font-bold text-primary-200">
                Uvjete korištenja i Pravila privatnosti
              </span>
              &nbsp;te korištenje mojih osobnih podataka za potrebe provođenja i
              informiranja o nagradnoj igri, odnosno za potrebe realizacije
              nagrade ako budem dobitnik/ca.
            </p>
            <p className="text-errorMessage font-bold text-12p leading-16p pt-5p">{errors.terms}</p>
          </div>
        </div>
        <div className="flex w-full pt-12p">
          <Input
            type="checkbox"
            checked={userData.newsletter}
            onChange={handleInputChange}
            name="newsletter"
          />
          <p className="text-14p font-inter leading-17p">
            Prijavljujem se za dodatne pogodnosti i primanje informativnih i
            promotivnih poruka i sadržaja od drugih vaših povezanih društava u
            okviru{" "}
            <span className="font-bold text-primary-200">
              Prvog Hrvatskog Piva 1664 d.o.o.
            </span>
            &nbsp;za raznovrsne atraktivne brandove čiji je popis dostupan na
            web stranici{" "}
            <span className="font-bold text-primary-200">www.pivovara.hr</span>
            &nbsp;, kao i kreiranje i informiranje o prilagođenim
            individualiziranim prilikama, akcijama ili ponudama vaših i brandova
            povezanih društava, a iz specifičnog profila koji je nastao uz
            primjenu napredne tehnologije i automatizirane obrade mojih
            podataka.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-y-12p pt-24p pb-20p">
        <Button
          type="submit"
          name="Registriraj se"
          className="button w-full max-w-354p h-44p rounded-8p text-16p leading-24p font-semibold font-inter"
        />

        <Button
          name="Već imam korisnički račun"
          className="border-btn w-full max-w-354p h-44p text-16p rounded-8p leading-24p font-semibold font-inter"
          onClick={handleLoginClick}
        />
      </div>
      <Button
        onClick={onClose}
        className="close-button absolute top-24p right-14p"
      >
        <img src="/assets/icons/hamburger-x.svg" alt="close-button" />
      </Button>
    </form>
    </>
  );
}
