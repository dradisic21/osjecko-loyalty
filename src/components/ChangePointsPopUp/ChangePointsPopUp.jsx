import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/Button";
import { Loader } from "../Loader/Loader";
import { getAllRewards } from "../../services/Api";
import { addReward } from "../../redux/actions/reward/rewardActions";
import { useDispatch } from "react-redux";
import { usePopup } from "../../services/context/PopupContext";

export function ChangePointsPopUp({ onClose, rewardId, isLoggedIn }) {
  const [rewardData, setRewardData] = useState({});
  const [loading, setLoading] = useState(true);
  const { openPopup } = usePopup();
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    const fetchRewardData = async () => {
      try {
        setLoading(true);
        await getAllRewards(rewardId).then(() => {
          setRewardData(rewardId);
          setLoading(false);
        });
      } catch (error) {
        console.error("Greška prilikom dohvaćanja podataka o nagradi:", error);
      }
    };

    fetchRewardData();
  }, [rewardId]);

  const handleSelectReward = () => {
    dispatch(addReward(rewardId.id))
    onClose();
    navigate(`/change-points`);
  };

  return (
    <div className="overflow-hidden fixed inset-0 bg-primary-black bg-opacity-75 z-99">
      {loading ? (
        <Loader />
      ) : (
        <div className="mobile:max-w-390p  absolute top-86p left-0 right-0 mx-auto bg-white rounded-6p pb-32p shadow-custom z-999 desktop:w-390p tablet:w-390p">
          <div className="flex justify-center mx-auto h-304p">
            <img
              src={rewardData.image}
              alt="Nagrada"
              className="object-fit max-w-full h-full"
            />
          </div>
          <div>
            <img src="/assets/reward-wave.svg" alt="wave" className="w-390p" />
          </div>

          <div className="flex flex-col px-15p pt-12p">
            <h1 className="text-23p font-bold leading-27p">
              {rewardData.title}
            </h1>
            <p className="text-14p font-inter pt-12p">
              {rewardData.description}
            </p>
          </div>
          <div className="flex items-center justify-center mx-auto px-15p pt-20p">
            {isLoggedIn ? (
              rewardData.price > isLoggedIn.points ? (
                <Button
                  disabled
                  name="Nemate dovoljno bodova"
                  className="disabled-btn w-354p h-44p rounded-8p text-16p leading-24p font-semibold font-inter"
                />
              ) : (
                <Button
                  onClick={handleSelectReward}
                  name={`Zamijeni za ${rewardData.price} bodova`}
                  className="button w-354p h-44p rounded-8p text-16p leading-24p font-semibold font-inter"
                />
              )
            ) : (
              <Button
                className="button w-36 h-12 rounded-6p font-semibold font-inter cursor-pointer"
                type="button"
                name="Prijavi se"
                onClick={() => {
                  onClose();
                  openPopup();
                  scrollToTop();
                }}
              />
            )}
          </div>
          <Button
            onClick={onClose}
            className="close-button absolute top-24p right-14p z-50"
          >
            <img src="/assets/icons/cancel.svg" alt="close-button" />
          </Button>
        </div>
      )}
    </div>
  );
}
