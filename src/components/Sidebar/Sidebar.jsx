import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Line } from "../../ui/Line";
import { motion } from "framer-motion";
import { menuSlide } from "../../ui/Anime/anime";
import { useAuth } from "../../services/context/AuthProvider";

export function Sidebar({ closeSidebar }) {
  const { loggedInUser } = useAuth();

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="fixed top-0 left-0 w-full h-full bg-white z-9999 overflow-y-auto"
    >
      <div className="flex flex-col justify-center items-center w-11/12 md:w-3/4 lg:w-2/5 xl:w-1/4 mx-auto md:mt-0 bg-white pt-80p">
        <div className="logo-container">
          <img src="/assets/logo-sidebar.svg" alt="Logo" />
        </div>
        <div className="w-80p mx-auto pt-30p">
          <Line className="line h-2p" />
        </div>
        <ul className="flex flex-col justify-center items-center gap-y-30p pt-20p text-inter text-23p font-semibold">
          <li className="">
            <Link to="/" onClick={closeSidebar}>
              Naslovnica
            </Link>
          </li>
          <li className="">
            <HashLink smooth to="/#sudjelovanje" onClick={closeSidebar}>
              Kako sudjelovati?
            </HashLink>
          </li>

          {loggedInUser && (
            <>
              <li className="">
                <Link to="/profile" onClick={closeSidebar}>
                  Profil korisnika
                </Link>
              </li>
            </>
          )}
          {loggedInUser ? (
            <Link to="/collect-points" onClick={closeSidebar}>
              Dostupne nagrade
            </Link>
          ) : (
            <HashLink smooth to="/#nagrade" onClick={closeSidebar}>
              Dostupne nagrade
            </HashLink>
          )}
          <li className="">
            <Link to="/faq" onClick={closeSidebar}>
              Česta pitanja
            </Link>
          </li>
        </ul>
        <div className="w-160p pt-30p">
          <Line className="line h-2p" />
        </div>
        <div className="my-34p">
          <img src="/assets/pecat_1.svg" alt="pečat" />
        </div>
      </div>
      <div className="absolute top-30p right-30p cursor-pointer">
        <img
          src="/assets/icons/sidebar-close.svg"
          alt="close button"
          onClick={closeSidebar}
        />
      </div>
    </motion.div>
  );
}
