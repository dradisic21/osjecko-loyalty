import React, { useEffect } from "react";
import { Button } from "../../ui/Button";
import { Input } from "../../ui/Input";
import { useState } from "react";

export function DateIntroduction({ onClose }) {
  const [errors, setErrors] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState({
    day: "",
    month: "",
    year: "",
  });

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (value < 0) {
      return;
    }
    // Postavljanje maksimalnih unosa vrijednosti u input za dan, mjesec i godinu
    if (name === "day" && value.length > 2) {
      return;
    } else if (name === "month" && value.length > 2) {
      return;
    } else if (name === "year" && value.length > 4) {
      return;
    }

    // Postavljanje maksimalnih vrijednosti za dan, mjesec i godinu
    if (name === "day" && value > 31) {
      return;
    }
    if (name === "month" && value > 12) {
      return;
    }

   

    setDateOfBirth((prev) => ({ ...prev, [name]: value }));
  };

  const calculateAge = () => {
    const { day, month, year } = dateOfBirth;
    if (!day || !month || !year) {
      return -1;
    }
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      return age - 1;
    }
    return age;
  };

  const handleConfirm = () => {
    const age = calculateAge();
    if (age < 18) {
      setErrors("Morate imati minimalno 18 godina za pristup stranici.");
    } else if (age > 150) {
      setErrors("Unesite ispravne godine!")
    } else {
      
      const dateOfBirthString = JSON.stringify(dateOfBirth);
      localStorage.setItem("dateOfBirth", dateOfBirthString);
      onClose();
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden h-full bg-primary-black bg-opacity-75 z-99">
      <div className="w-full max-w-374p absolute top-286p left-0 right-0 mx-auto bg-white rounded-15p px-8p pb-32p shadow-custom z-999">
        <div>
          <div className="pt-44p px-34p text-center">
            <h1 className="text-23p font-bold leading-28p">
              Molimo unesite svoj datum rođenja
            </h1>
          </div>
          <div className="flex gap-x-12p pt-16p">
            <Input
              label="DD"
              type="number"
              inputMode="numeric"
              className="w-75p h-60p border border-borderColor outline-none"
              name="day"
              value={dateOfBirth.day}
              onChange={handleInputChange}
            />
            <Input
              label="MM"
              type="number"
              inputMode="numeric"
              className="w-75p h-60p border border-borderColor outline-none"
              name="month"
              value={dateOfBirth.month}
              onChange={handleInputChange}
            />
            <Input
              label="YYYY"
              type="number"
              inputMode="numeric"
              className="w-150p h-60p border border-borderColor outline-none"
              name="year"
              value={dateOfBirth.year}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex justify-center pt-16p">
            <p className="text-red-500 text-12p leading-16p">{errors}</p>
          </div>
          <div className="flex justify-center mx-auto pt-16p">
            <Button
              type="button"
              name="Potvrdi"
              className="button w-324p h-44p rounded-8p text-16p leading-24p font-semibold font-inter"
              onClick={handleConfirm}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
