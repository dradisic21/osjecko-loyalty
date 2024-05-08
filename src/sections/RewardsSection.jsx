import React, { useState, useEffect } from "react";
import { getAllRewards } from "../services/Api";
import { useAuth } from "../services/context/AuthProvider";
import { ChangePointsPopUp } from "../components/ChangePointsPopUp/ChangePointsPopUp";

export function RewardsSection({ enableRewards, openLoginPopup }) {
  const [rewards, setRewards] = useState([]);
  const { loggedInUser } = useAuth();
  const [isRewardOpen, setIsRewardOpen] = useState(false);
  const [selectedRewardId, setSelectedRewardId] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        await getAllRewards().then((response) => {
          setRewards(response);
        });
      } catch (error) {
        console.log("Dogodila se greška prilikom dohvaćanja nagrada:", error);
      }
    }
    fetchData();
  }, [enableRewards]);

  const openRewardPopUp = (rewardId) => {
    setSelectedRewardId(rewards.find((reward) => reward.id === rewardId));
    setIsRewardOpen(true);
  };

  const closeRewardPopUp = () => {
    setIsRewardOpen(false);
  };

  return (
    <div className="mobile:w-full max-w-360p mx-auto desktop:w-full">
      <div className="text-center pt-32p">
        <h1 className="text-28p leading-34p font-bold text-primary-black">
          Dostupne nagrade
        </h1>
      </div>
      <div className="flex flex-wrap justify-center py-32p gap-20p">
        {rewards.map((reward) => (
          <div
            className={`relative shadow-custom flex flex-col items-center bg-white cursor-pointer mobile:w-170p desktop:w-374p`}
            key={reward.id}
            onClick={() => {
              openRewardPopUp(reward.id);
            }}
          >
            <h1 className="desktop:text-28p py-20p px-5p mobile:text-center text-14p font-bold pt-8p">
              {reward.title}
            </h1>
            <img
              className="object-fit py-0 px-16p desktop:w-full mobile:w-full pb-20p"
              src={reward.image}
              alt="rewards"
            />
            <div className="mobile:absolute bottom-18p left-1/2 transform -translate-x-1/2 w-130p h-34p flex justify-center items-center bg-primary-black border border-borderInput rounded-56p z-20 desktop:w-183p desktop:h-48p desktop:bottom-40p">
              <p className="mobile:text-white font-inter font-12p">
                {reward.price} <span>bodova</span>
              </p>
            </div>
            <div className="absolute bottom-0 w-full">
              <img
                src="/assets/reward-wave.svg"
                alt="wave"
                className="w-full"
              />
            </div>
          </div>
        ))}
      </div>
      {isRewardOpen && (
        <ChangePointsPopUp
          onClose={closeRewardPopUp}
          rewardId={selectedRewardId}
          isLoggedIn={loggedInUser}
          openLogin={openLoginPopup}
        />
      )}
    </div>
  );
}
