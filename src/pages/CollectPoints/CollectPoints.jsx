import React, { useState } from "react";
import { Button } from "../../ui/Button";
import { Link, useNavigate } from "react-router-dom";
import { Nav } from "../../layout/Nav/Nav";
import { Footer } from "../../layout/Footer/Footer";
import { QuestionSection } from "../../sections/QuestionSection";
import { RewardsSection } from "../../sections/RewardsSection";
import { ThatsAllSection } from "../../sections/ThatsAllSection"
import { ChangePointsPopUp } from "../../components/ChangePointsPopUp/ChangePointsPopUp";
import { SendCode } from "../../components/SendCode/SendCode";
import { useAuth } from "../../services/context/AuthProvider";



export function CollectPoints() {
  const [isRewardOpen, setIsRewardOpen] = useState(false);
  const { loggedInUser } = useAuth();
  const [selectedRewardId, setSelectedRewardId] = useState(null);
  const navigate = useNavigate();

  const openRewardPopUp = (rewardId) => {
    setSelectedRewardId(rewardId);
    setIsRewardOpen(true);
  };

  const closeRewardPopUp = () => {
    setIsRewardOpen(false);
  };
  const goBack = () => {
    navigate(-1);
  };



  return (
    <div className="collect-container mx-auto">
      <Nav/>
      <div className="pt-20p pl-20p">
          <Button className="flex gap-x-10p" onClick={goBack}>
            <img src="/assets/icons/arrow_back.svg" alt="arrow back" />
            <p className="text-18p font-inter">Natrag</p>
          </Button>
        </div>
      <div className="flex justify-center pl-4p pr-4p pt-20p">
        <div className="relative h-322p px-14p bg-white rounded-15p shadow-custom" style={{ width: '100%', maxWidth: '358px' }}>
          <Link to="/points">
            <img
              src="/assets/cep-info.svg"
              alt="info"
              className="absolute top-10p right-10p"
            />
          </Link>
          <div className="flex flex-col justify-center items-center mx-auto">
            <img
              src="/assets/pecat.svg"
              alt="360-osjecko"
              className="relative pt-20p w-146p"
            />
            <div className="flex flex-col pt-20p">
              <p className="text-18p font-semibold text-center">Broj sakupljenih bodova</p>
              <p className="text-18p font-semibold text-center">{loggedInUser.points}</p>
            </div>
            <div className="pt-20p w-full">
            <SendCode />
            </div>
          </div>
        </div>
      </div>
     <RewardsSection id="rewards-section" openRewardPopUp={openRewardPopUp}  enableRewards={loggedInUser} />
      <ThatsAllSection />
      <QuestionSection />
      <Footer />

      {isRewardOpen && <ChangePointsPopUp onClose={closeRewardPopUp} rewardId={selectedRewardId} />}
    </div>
  );
}
