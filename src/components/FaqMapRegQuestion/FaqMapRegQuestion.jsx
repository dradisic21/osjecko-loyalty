import React, { useState } from "react";
import { faqReg } from "../../services/Faq";

export function FaqMapRegQuestion() {
  const [dropdownStates, setDropdownStates] = useState({
    dropdown1: false,
    dropdown2: false,
    dropdown3: false,
  });

  const toggleDropdown = (dropdownId) => {
    setDropdownStates((prevState) => ({
      ...Object.keys(prevState).reduce((acc, key) => {
        acc[key] = key === dropdownId ? !prevState[key] : false;
        return acc;
      }, {}),
    }));
  };

  return (
    <div>
      <div className="bg-white px-16p  pb-12p">
        <div className="pt-12p">
          <h1 className="flex h-full items-center my-auto text-23p font-inter mb-8p">
            Registracija
          </h1>
          <div className="report-line h-2p"></div>
        </div>
        {faqReg.map((faq) => (
          <div
            key={faq.id}
            className="border-b-2 border-solid border-primary-300"
          >
            <div
              className="pt-12p flex justify-between cursor-pointer"
              onClick={() => toggleDropdown(`dropdown${faq.id}`)}
            >
              <p
                className={`text-18p font-semibold font-inter pb-8p ${
                  dropdownStates[`dropdown${faq.id}`] ? "text-primary-200" : ""
                }`}
              >
                {faq.question}
              </p>
              {dropdownStates[`dropdown${faq.id}`] ? (
                <img
                  src="/assets/icons/arrow_dropdown-up.svg"
                  alt="arrow up"
                  className="dropdown-arrow transform transition-transform rotate-0"
                />
              ) : (
                <img src="/assets/icons/arrow_dropdown.svg" alt="arrow down" />
              )}
            </div>
            <div
              className={`dropdown-content ${
                dropdownStates[`dropdown${faq.id}`]
                  ? "h-full transition-max-height ease-out duration-1000"
                  : "max-h-0 overflow-hidden"
              }`}
            >
              <div className="flex justify-between items-center  px-16p">
                <p className="text-14p font-inter">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
