import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LockerMapLocations } from "../../components/LockerMapLocations/LockerMapLocations";
import { QuestionSection } from "../../sections/QuestionSection";
import { Nav } from "../../layout/Nav/Nav";
import { Footer } from "../../layout/Footer/Footer";
import { Button } from "../../ui/Button";
import { RewardTable } from "../../components/RewardTable/RewardTable";
import { LoaderSpiner } from "../../components/LoaderSpiner/LoaderSpiner";
import { getOneReward, sendOrder, getUserData } from "../../services/Api";
import { useSelector, useDispatch } from "react-redux";
import { removeLocker } from "../../redux/actions/locker/lockerActions";
import { removeReward } from "../../redux/actions/reward/rewardActions";
import { removeUserOrder, addUserOrder } from "../../redux/actions/userOrder/userOrderActions";
import { useAuth } from "../../services/context/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function ChangePointForReward() {
  const [reward, setReward] = useState({});
  const [loading, setLoading] = useState(true);
  const { setLoggedInUser, loggedInUser } = useAuth();
  const [showLoading, setShowLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const currentLocker = useSelector((state) => state.lockerReducer.locker);
  const getState = useSelector((state) => state.userOrderReducer.userOrder);
  const currentReward = useSelector((state) => state.rewardReducer.reward);

 useEffect(() => {
  if (!loggedInUser || loggedInUser.points < reward.price) {
    navigate("/"); 
    toast.error("Nemate dovoljno bodova za ovu nagradu.");
    
  }
}, [loggedInUser, reward]);

  useEffect(() => {
    async function fetchReward() {
      try {
        setLoading(true);

        await getOneReward(currentReward).then((response) => {
          setReward(response);
          setLoading(false);
        });
      } catch (error) {
        toast.error("Dogodila se greška prilikom dohvaćanja nagrade");
      }
    }

    fetchReward();
  }, []);
  

  const handleExchangePointsForReward = async () => {
    try {
      setShowLoading(true);

      await sendOrder({
        name: getState.name,
        surname: getState.surname,
        city: getState.city,
        zip: getState.zip,
        address: getState.address,
        phone: getState.phone,
        save_address: getState.save_address,
        prize_id: reward.id,
        parcel_locker: currentLocker.code,
      }).then(async() => {
        navigate("/success-change");
        setShowLoading(false);
        dispatch(removeReward());
        dispatch(removeLocker());
        dispatch(removeUserOrder());
  
          try {
            await getUserData().then((response) => {
              setLoggedInUser(response.user);
              dispatch(addUserOrder({...response.user}));
            });
          } catch (error) {
            setLoggedInUser(false);
            console.error("Molimo Vas ponovno se prijavite!");
          }
   

      });
    } catch (error) {
      setShowLoading(false);
      const backendErrors = error.response.data.message;
      toast.error(backendErrors);
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  const handleChangeData = () => {
    navigate("/send-order");
  };

  return (
    <>
      {showLoading && (
        <div>
          <LoaderSpiner />
        </div>
      )}
      <Nav />
      <div className="desktop:flex flex-col justify-center mx-auto">
        <div className="mx-auto px-16p py-12p">
          <div>
            <Button className="flex gap-x-10p" onClick={goBack}>
              <img src="/assets/icons/arrow_back.svg" alt="arrow back" />
              <p className="text-18p font-inter">Natrag</p>
            </Button>
          </div>

          <RewardTable reward={reward} loading={loading} />

          <div className="pt-12p">
            <h1 className="text-23p font-bold">Pojedinosti isporuke</h1>
          </div>
          <div className="pt-10p">
            <p className="text-14p font-inter leading-17p">
              Pošalji osvojenu nagradu sebi ili nekom drugom
            </p>
          </div>
          <div className="pt-12p">
            <p className="text-14p font-bold font-inter leading-20p">
              Označi paketomat na koji želiš dostaviti nagradu
            </p>
          </div>
          <div className="pt-8p">
            <LockerMapLocations />
          </div>
          <div className="flex flex-col gap-y-10p pt-20p max-w-700p">
            <div className=" border-b border-solid border-primary-black ">
              <div className="flex flex-col">
                <div className="text-18p font-inter pb-10p font-semibold">
                  Podatci o naručitelju:
                </div>
                <div
                  className="flex justify-between cursor-pointer"
                  onClick={handleChangeData}
                >
                  <div className="flex items-center pb-4p">
                    <img src="/assets/icons/avatar.svg" alt="location" />
                    <p className="text-18p font-inter pl-8p">
                    {getState?.name || getState?.surname ? `${getState.name} ${getState.surname}` : 'Unesi svoje podatke'}
                    </p>
                  </div>
                  <img
                    src="/assets/icons/arrow_forward.svg"
                    alt="arrow forward"
                  />
                </div>
              </div>
            </div>
            <div className=" border-b border-solid border-primary-black ">
              <div className="flex flex-col">
                <div className="text-18p font-inter pb-10p font-semibold">
                  Podatci o paketomatu:
                </div>
                <div className="flex justify-between cursor-pointer">
                  <div className="flex items-center pb-4p">
                    <img src="/assets/icons/location.svg" alt="location" />
                    <p className="text-18p font-inter pl-8p">
                      {currentLocker?.name}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pb-20p">
          <Button
            name="Zamijeni svoje bodove za nagrade"
            className="button w-354p h-44p rounded-8p text-16p leading-24p font-semibold font-inter"
            onClick={handleExchangePointsForReward}
          />
        </div>
      </div>
      <QuestionSection />
      <Footer />
    </>
  );
}
