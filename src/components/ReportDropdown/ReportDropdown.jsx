import React, { useState } from "react";
import { Button } from "../../ui/Button";
import { Textarea } from "../../ui/Textarea";

export function ReportDropdown() {
    const [checkboxChecked, setCheckboxChecked] = useState(false);
    const [textareaValue, setTextareaValue] = useState("");
    const [dropdownStates, setDropdownStates] = useState({
        dropdown1: false,
        dropdown2: false,
        dropdown3: false
      });

      const toggleDropdown = (dropdownId) => {
        setDropdownStates(prevState => ({
            ...Object.keys(prevState).reduce((acc, key) => {
                acc[key] = key === dropdownId ? !prevState[key] : false;
                return acc;
            }, {})
        }));
    };

    const handleCheckboxChange = () => {
        setCheckboxChecked(!checkboxChecked);
    };

    const handleTextareaChange = (event) => {
        setTextareaValue(event.target.value);
    };

    return(
        <div className="bg-white px-16p pb-12p desktop:w-700p flex flex-col justify-center mx-auto">
          <div className=" pt-12p">
            <h1 className="flex h-full items-center my-auto text-23p font-inter mb-8p">
              Prijavi problem
            </h1>
            <div className="report-line h-2p "></div>
          </div>

        {/* prvi dropdown */}
          <div className="border-b-2 border-solid border-primary-300">
            <div
              className="pt-12p flex justify-between cursor-pointer"
              onClick={() => toggleDropdown('dropdown1')}
            >
              <p className={`text-18p font-semibold font-inter pb-8p ${dropdownStates.dropdown1 ? 'text-primary-200' : ''}`}>
                Narudžba je imala
                <br /> problem s dostavom
              </p>
              {dropdownStates.dropdown1 ? (
                <img
                  src="/assets/icons/arrow_dropdown-up.svg"
                  alt="arrow up"
                  className="dropdown-arrow transform transition-transform rotate-0"
                />
              ) : (
                <img
                  src="/assets/icons/arrow_dropdown.svg"
                  alt="arrow down"
                  
                />
              )}
            </div>
            <div
              className={`dropdown-content ${
                dropdownStates.dropdown1
                  ? "max-h-96 transition-max-height ease-out duration-1000"
                  : "max-h-0 overflow-hidden"
              }`}
            >
              
              <div className="flex justify-between items-center h-44p bg-primary-400 px-16p">
                <p className="text-14p font-inter">Narudžba nikad nije stigla</p>
                <div className="pb-4p">
                    <input type="checkbox" onChange={handleCheckboxChange}/>
                </div>
              </div>

              <div className="flex justify-center mx-auto py-8p">
                {checkboxChecked ? (
                    <Button className="button w-full max-w-354p h-44p rounded-8p text-16p leading-24p font-semibold font-inter" name="Pošalji"/>
                ) : (
                    <Button
                        type="button"
                        name="Pošalji"
                        className="disabled-btn w-full max-w-354p h-44p rounded-8p text-16p leading-24p font-semibold font-inter"
                        disabled
                    />
                )}
              </div>
            </div>
          </div>

        {/* drugi dropdown */}
          <div className="border-b-2 border-solid border-primary-300">
            <div
              className="pt-12p flex justify-between cursor-pointer"
              onClick={() => toggleDropdown('dropdown2')}
            >
              <p className={`text-18p font-semibold font-inter pb-8p ${dropdownStates.dropdown2 ? 'text-primary-200' : ''}`}>
              Narudžbi su nedostajali
                <br /> neki proizvodi
              </p>
              {dropdownStates.dropdown2 ? (
                <img
                  src="/assets/icons/arrow_dropdown-up.svg"
                  alt="arrow up"
                  className="dropdown-arrow transform transition-transform rotate-0"
                />
              ) : (
                <img
                  src="/assets/icons/arrow_dropdown.svg"
                  alt="arrow down"
                  
                />
              )}
            </div>
            <div
              className={`dropdown-content ${
                dropdownStates.dropdown2
                  ? "max-h-96 transition-max-height ease-out duration-1000"
                  : "max-h-0 overflow-hidden "
              }`}
            >
              
              <div className="flex justify-between items-center h-44p bg-primary-400 px-16p">
                <p className="text-14p font-inter">U narudžbi su nedostajali proizvodi</p>
                <div className="pb-4p">
                    <input type="checkbox" onChange={handleCheckboxChange}/>
                </div>
              </div>
              <div className="flex justify-between items-center h-44p bg-primary-400 px-16p mt-8p">
                <p className="text-14p font-inter">Proizvodi su bili različiti</p>
                <div className="pb-4p">
                    <input type="checkbox" />
                </div>
              </div>

              <div className="flex justify-center mx-auto py-8p">
              {checkboxChecked ? (
                    <Button className="button w-full max-w-354p h-44p rounded-8p text-16p leading-24p font-semibold font-inter" name="Pošalji"/>
                ) : (
                    <Button
                        type="button"
                        name="Pošalji"
                        className="disabled-btn w-full max-w-354p h-44p rounded-8p text-16p leading-24p font-semibold font-inter"
                        disabled
                    />
                )}
              </div>

            </div>
          </div>
          
          {/* treci dropdown */}
          <div className="border-b-2 border-solid border-primary-300 ">
            <div
              className="pt-12p flex justify-between cursor-pointer"
              onClick={() => toggleDropdown('dropdown3')}
            >
              <p className={`text-18p font-semibold font-inter pb-8p ${dropdownStates.dropdown3 ? 'text-primary-200' : ''}`}>
              Nešto drugo?
              </p>
              {dropdownStates.dropdown3 ? (
                <img
                  src="/assets/icons/arrow_dropdown-up.svg"
                  alt="arrow up"
                  className="dropdown-arrow transform transition-transform rotate-0"
                />
              ) : (
                <img
                  src="/assets/icons/arrow_dropdown.svg"
                  alt="arrow down"
                  
                />
              )}
            </div>
            <div
              className={`dropdown-content ${
                dropdownStates.dropdown3
                  ? "max-h-96 transition-max-height ease-out duration-1000"
                  : "max-h-0 overflow-hidden"
              }`}
            >
                <div className="">
                    <Textarea 
                        onChange={handleTextareaChange}
                        value={textareaValue}
                    />
                </div>
              
                <div className="flex justify-center mx-auto py-8p">
              {textareaValue !== "" ? (
                    <Button className="button w-full max-w-354p h-44p rounded-8p text-16p leading-24p font-semibold font-inter" name="Pošalji"/>
                ) : (
                    <Button
                        type="button"
                        name="Pošalji"
                        className="disabled-btn w-full max-w-354p h-44p rounded-8p text-16p leading-24p font-semibold font-inter"
                        disabled
                    />
                )}
              </div>
            </div>
          </div>
        
        </div>
    )
}