import React from "react";
import { useNavigate } from "react-router-dom";
import { QuestionSection } from "../../sections/QuestionSection";
import { ReportDropdown } from "../../components/ReportDropdown/ReportDropdown";
import { Nav } from "../../layout/Nav/Nav";
import { Footer } from "../../layout/Footer/Footer";
import { Button } from "../../ui/Button";
import "../../styles/Report.scss";


export function Report() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="report-container">
      <Nav />
      <div className="mx-auto py-12p">
        <div className="px-16p pb-20p">
          <Button className="flex gap-x-10p" onClick={goBack}>
            <img src="/assets/icons/arrow_back.svg" alt="arrow back" />
            <p className="text-18p font-inter">Natrag</p>
          </Button>
        </div>
        <div>
          <ReportDropdown />
        </div>
      </div>
      <QuestionSection />
      <Footer />
    </div>
  );
}
