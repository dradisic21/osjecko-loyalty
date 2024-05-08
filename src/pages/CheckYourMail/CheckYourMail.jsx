import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/Button";

export function CheckYourMail() {
    const navigate = useNavigate();

    const goToHomePage = (e) => {
        e.preventDefault();
        navigate("/")
    }

    return(
        <div className='flex flex-col justify-center items-center h-screen'>
            <img src="/assets/pecat_1.svg" alt="cep" />
            <h1 className='text-center text-34p font-bold'>Provjerite svoj e-mail</h1>
            <p className='text-center text-20p font-inter pt-40p desktop:w-554p'>Molimo provjerite svoj e-mail kako biste potvrdili svoj račun. </p>
            <p className='text-center text-20p font-inter desktop:w-554p'>Poslali smo vam link za verifikaciju. Ako niste primili e-mail, provjerite svoj spam folder.</p>

            <Button name="Naslovna" className="button w-100p h-44p text-16p rounded-8p leading-24p font-semibold font-inter mt-20p" onClick={goToHomePage} />
        </div>
    );
}
