import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../../ui/Input";
import { Button } from "../../ui/Button";
import { Nav } from "../../layout/Nav/Nav";
import { LoaderSpiner } from "../../components/LoaderSpiner/LoaderSpiner";
import { QuestionSection } from "../../sections/QuestionSection";
import { useAuth } from "../../services/context/AuthProvider";
import { updateDetails, getUserData } from "../../services/Api"; 
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export function PersonalInformation() {
  const { loggedInUser, setLoggedInUser } = useAuth();
  const [editUser, setEditUser] = useState({ ...loggedInUser })
  const [errors, setErrors] = useState({});
  const [showLoading, setShowLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setEditUser({ ...loggedInUser });
  }, [loggedInUser]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditUser((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setErrors({});
      setShowLoading(true);

      await updateDetails(
        editUser.name,
        editUser.surname,
        editUser.city,
        editUser.zip,
        editUser.address,
        editUser.phone,
        editUser.newsletter
      ).then(async (response) => {
        const userData = await getUserData();
        setLoggedInUser(userData.user);
        setShowLoading(false);
        scrollToTop();
        toast.success(response.message);
      });
      
    } catch (error) {
      setShowLoading(false);
      const backendErrors = error.response.data.errors;
      setErrors(backendErrors);
      scrollToTop();
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
    {showLoading && (
      <div>
        <LoaderSpiner />
      </div>
    )}
    <div>
      <Nav />
      <div className=" w-390p flex flex-col justify-center mx-auto">
        <div className="pt-30p px-15p">
        <div>
          <Button className="flex gap-x-10p" onClick={goBack}>
            <img src="/assets/icons/arrow_back.svg" alt="arrow back" />
            <p className="text-18p font-inter">Natrag</p>
          </Button>
        </div>
          <h1 className="text-23p font-bold leading-27p pt-10p">Osobni podatci</h1>
          <p className="text-14p font-inter leading-17p pt-8p">
            Redovito ažuriraj svoje podatke kako bismo te mogli kontaktirati u
            slučaju osvajanja nagrade
          </p>
        </div>
        <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-y-16p pt-20p ">
          <Input
            type="text"
            label="Ime"
            name="name"
            value={editUser.name || ''}
            onChange={handleInputChange}
            error={errors.name}
          />
          <Input
            type="text"
            label="Prezime"
            name="surname"
            value={editUser.surname || ''}
            onChange={handleInputChange}
            error={errors.surname}
          />
          <Input
            type="text"
            label="Država"
            defaultValue="Hrvatska"
            disabled={true}
          />
          <Input
            type="text"
            label="Grad"
            name="city"
            value={editUser.city || ''}
            onChange={handleInputChange}
            error={errors.city}
          />
          <Input
            type="number"
            label="Poštanski broj"
            name="zip"
            value={editUser.zip || ''}
            onChange={handleInputChange}
            error={errors.zip}
          />
          <Input
            type="text"
            label="Adresa i kućni broj"
            name="address"
            value={editUser.address || ''}
            onChange={handleInputChange}
            error={errors.address}
          />
          <Input
            type="text"
            label="E-mail"
            name="email"
            defaultValue={loggedInUser.email || ''}
            disabled={true}
          />
          <Input
            type="text"
            label="Datum rođenja"
            name="date_of_birth"
            defaultValue={loggedInUser.date_of_birth || ''}
            disabled={true}
          />
          <Input
            type="tel"
            label="Broj mobilnog telefona"
            name="phone"
            value={editUser.phone || ''}
            onChange={handleInputChange}
            error={errors.phone}
          />
        </div>
        <div className="flex w-full pt-12p">
          <Input type="checkbox" className="w-30p h-30p"  />
          <p className="text-14p font-inter leading-17p">
            Prijavljujem se za dodatne pogodnosti i primanje informativnih i
            promotivnih poruka i sadržaja od drugih vaših povezanih društava u
            okviru Prvo Hrvatsko Pivo d.o.o. za raznovrsne atraktivne brandove
            čiji je popis dostupan na web stranici www.pivovara.hr, kao i
            kreiranje i informiranje o prilagođenim individualiziranim
            prilikama, akcijama ili ponudama vaših i brandova povezanih
            društava, a iz specifičnog profila koji je nastao uz primjenu
            napredne tehnologije i automatizirane obrade mojih podataka.
          </p>
        </div>
        <div className="flex justify-center mx-auto pt-20p">
          <Button
            type="submit"
            name="Osvježi podatke"
            className="button w-full max-w-354p h-44p rounded-8p text-16p leading-24p font-semibold font-inter"
          />
        </div>
        </form>
        <div className="flex w-full pt-40p pb-30p px-26p gap-x-4p">
          <img
            src="/assets/icons/lock.svg"
            alt="lock"
            className="w-20p h-20p"
          />
          <div className="flex flex-col gap-y-12p">
            <h4 className="text-14p font-bold leading-17p">
              Zašto ne mogu promijeniti neka polja?
            </h4>
            <p className="text-14p font-inter leading-17p">
              Ako želiš promijeniti e-mail uz koji je povezan tvoj korisnički
              račun ili zbog promjene državljanstva želiš sudjelovati u
              nagradnim igrama dostupnima u drugoj zemlji, javi se korisničkoj
              službi.
            </p>
          </div>
        </div>
      </div>
      <QuestionSection />
    </div>
    </>
  );
}
