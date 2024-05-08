import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../../ui/Input";
import { Button } from "../../ui/Button";
import { QuestionSection } from "../../sections/QuestionSection";
import { updatePassword } from "../../services/Api";
import { LoaderSpiner } from "../../components/LoaderSpiner/LoaderSpiner";
import { useAuth } from "../../services/context/AuthProvider";
import { usePopup } from "../../services/context/PopupContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Nav } from "../../layout/Nav/Nav";
import { Footer } from "../../layout/Footer/Footer";

export function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showLoading, setShowLoading] = useState(false);
  const { setLoggedInUser } = useAuth();
  const { openPopup } = usePopup(); 
  const navigate = useNavigate();

  const handleSaveChange = async (e) => {
    e.preventDefault();
    try {
      setErrors({});
      setShowLoading(true);

      await updatePassword(oldPassword, newPassword, confirmNewPassword).then(
        (response) => {
          localStorage.removeItem("userToken");
          setLoggedInUser(false);
          setShowLoading(false);
          navigate("/")
          toast.success(response.message); 
          openPopup(); 
        }
      );
    } catch (error) {
      const backendErrors = error.response.data.errors;
      if(backendErrors){
        setErrors(backendErrors);
        setShowLoading(false);
      }
      if(error.response.data.message) {
        toast.error(error.response.data.message);
        setShowLoading(false);
      }
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
    <div >
      <Nav />
      <div className="change-password mx-auto desktop:w-700p">
        <div className="pt-20p px-15p">
          <div>
            <Button className="flex gap-x-10p" onClick={goBack}>
              <img src="/assets/icons/arrow_back.svg" alt="arrow back" />
              <p className="text-18p font-inter">Natrag</p>
            </Button>
          </div>
          <h2 className="text-23p font-bold">Promijeni lozinku</h2>
        </div>
        <form
          className="flex flex-col gap-y-16p pt-20p"
          onSubmit={handleSaveChange}
         >
          <Input
            label="Trenutna lozinka"
            type="password"
            name="oldPassword"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            autoComplete="off"
            error={errors.old_password}
          />
          <Input
            label="Nova lozinka"
            type="password"
            name="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            autoComplete="off"
            error={errors.new_password}
          />
          <Input
            label="Ponovi novu lozinku"
            type="password"
            name="confirmNewPassword"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            autoComplete="off"
            error={errors.new_password}
          />
          <div className="pt-8p pb-30p pl-16p ">
            <p className="text-14p leading-17p font-inter">
              Lozinka mora sadržavati barem 8 znakova. Možeš koristiti slova,
              brojeve i simbole.
            </p>
          </div>
          <div className="flex justify-center pb-20p px-12p">
            <Button
              type="submit"
              name="Spremi izmjenu"
              className="button h-44p w-full max-w-390p rounded-8p text-16p leading-24p font-semibold font-inter desktop:w-330p"
            />
          </div>
        </form>
      </div>
      <QuestionSection />
      <Footer />
    </div>
    </>
  );
}
