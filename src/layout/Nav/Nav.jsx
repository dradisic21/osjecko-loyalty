import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../services/context/AuthProvider";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { LoginIcon } from "../../components/LoginIcon/LoginIcon";
import { getUserData } from "../../services/Api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Hamburger from "hamburger-react";
import "../../styles/Nav.scss";

export function Nav() {
  const [isOpen, setOpen] = useState(false);
  const { loggedInUser, setLoggedInUser } = useAuth();
  const { pathname } = useLocation();
 const navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      try {
        await getUserData().then((response) => {
          setLoggedInUser(response.user);
        });
      } catch (error) {
        localStorage.removeItem("userToken");
        setLoggedInUser(false);
        if(error.response && error.response.data.message !== "Unauthenticated." ){
          toast.error(error.response.data.message);
          navigate("/");
        }
    
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);
  
  if (pathname === "/email-confirmation" || pathname === "/check-email") {
    return null;
  }

  const closeSidebar = () => {
    setOpen(false);
  };

  return (
    <div className="nav-container w-full h-64p pt-24p flex items-center">
      <nav className="flex justify-between mx-16p w-full">
        <Link to="/">
          <img src="/assets/logo.svg" alt="logo" className="cursor-pointer" />
        </Link>
        <div className="flex gap-x-16p">
          <LoginIcon userName={loggedInUser} />
          <Hamburger
            className="fixed"
            size={24}
            toggled={isOpen}
            toggle={setOpen}
          />
          {isOpen && <Sidebar closeSidebar={closeSidebar} />}
        </div>
      </nav>
    </div>
  );
}
