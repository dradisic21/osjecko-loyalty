import { Link, useNavigate } from "react-router-dom";
import { profileItem } from "../../services/profile";
import { useAuth } from "../../services/context/AuthProvider";
import { logout } from "../../services/Api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Nav } from "../../layout/Nav/Nav";
import "../../styles/ProfilePage.scss";


export function ProfilePage() {
  const { loggedInUser, setLoggedInUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await logout().then(() => {
        localStorage.removeItem("userToken");
        setLoggedInUser(false);
        toast.success("Uspješno ste se odjavili");
        navigate("/");
      });
    } catch (error) {
      console.error("Greška pri odjavi:", error);
      toast.error("Došlo je do greške prilikom odjave!");
    }
  };

  return (
    <>
      <Nav />
      <div className="profile-page_container h-screen desktop:flex flex-col items-center pt-100p mobile:pt-30p">
        <div className="relative flex items-center gap-x-12p pt-30p pl-14p">
          <div className="relative w-124p h-124p">
            <img src="/assets/cep.svg" alt="Čep" className="relative" />
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-44p font-bold leading-52p flex">
              <span>
                {loggedInUser.name && loggedInUser.name.charAt(0).toUpperCase()}
              </span>
              <span>
                {loggedInUser.surname &&
                  loggedInUser.surname.charAt(0).toUpperCase()}
              </span>
            </p>
          </div>
          <div className="w-224p">
            <h3 className="text-23p font-bold leading-28p">
              Pozdrav {loggedInUser.name}
            </h3>
            <p className="text-12p leading-14p font-inter">
                Sakupljaj bodove unošenjem KODOVA ispod čepa i osvajaj vrijedne nagrade
            </p>
          </div>
        </div>
        <div className="flex flex-wrap flex-col pt-30p pl-30p gap-y-24p">
          {profileItem.map((item) => (
            <Link to={item.path} className="flex gap-x-16p " key={item.id}>
              <img src={item.icon} alt="link icons" />
              <p className="text-16p font-semibold font-inter leading-24p">
                {item.title}
              </p>
            </Link>
          ))}
          <div
            className="flex gap-x-16p pl-1p cursor-pointer"
            onClick={handleLogout}
          >
            <img src="/assets/icons/logout.svg" alt="logout" />
            <p className="text-16p font-semibold font-inter leading-24p">
              Odjavi me
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
