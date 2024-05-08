import React, { useState, useEffect } from "react";
import { Nav } from "../../layout/Nav/Nav";
import { HomeSection } from "../../sections/HomeSection";
import { PointsSection } from "../../sections/PointsSection";
import { DescriptionSection } from "../../sections/DescriptionSection";
import { ParticipationSteps } from "../../sections/ParticipationSteps";
import { RewardsSection } from "../../sections/RewardsSection";
import { QuestionSection } from "../../sections/QuestionSection";
import { Footer } from "../../layout/Footer/Footer";
import { DateIntroduction } from "../../components/DateIntroduction/DateIntroduction";
import { PopUp } from "../../components/Popup/PopUp";
import { useAuth } from "../../services/context/AuthProvider";
import { usePopup } from "../../services/context/PopupContext";


export function HomePage() {
  const [showDateIntroduction, setShowDateIntroduction] = useState(false);
  const { loggedInUser } = useAuth();
  const { openPopup } = usePopup(); 

  useEffect(() => {
    const storedDateOfBirth = localStorage.getItem("dateOfBirth");
    if (!storedDateOfBirth && !loggedInUser) {
      setShowDateIntroduction(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedInUser]);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const referralCode = queryParams.get("referral_code");
    if (referralCode) {
      openPopup(); 
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const closeDateIntroduction = () => {
    setShowDateIntroduction(false);
  };

  return (
    <div className="home-container w-full h-full mobile:max-w-390p">
      <div id="naslovna">
        <Nav />
        <HomeSection />
      </div>
     
      {loggedInUser && <PointsSection />}

      <DescriptionSection />

      <div id="sudjelovanje">
        <ParticipationSteps />
      </div>

      <div id="nagrade">
        <RewardsSection enableRewards={loggedInUser} />
      </div>

      <QuestionSection />
      <Footer />

      {showDateIntroduction && (
        <DateIntroduction onClose={closeDateIntroduction} />
      )}

      <PopUp />
    </div>
  );
}
