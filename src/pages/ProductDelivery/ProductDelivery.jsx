import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Nav } from "../../layout/Nav/Nav";
import { OrderTable } from "../../components/OrderTable/OrderTable";
import { Tracking } from "../../components/Tracking/Tracking";
import { Summary } from "../../components/Summary/Summary";
import { QuestionSection } from "../../sections/QuestionSection";
import { Footer } from "../../layout/Footer/Footer";

export function ProductDelivery() {
  const navigate = useNavigate();
  const location = useLocation();
  const order = location.state.order;

  const goBack = () => {
    navigate(-1);
  };

  const translateStatus = (status) => {
    switch (status) {
      case "processing":
        return "U obradi";
      case "sent":
        return "Poslano";
      case "arrived":
        return "Isporučeno";
      default:
        return "Nepoznato"; 
    }
  };
  
  return (
    <>
    <Nav />
    <div className="bg-white mt-20p">
      <div className="mobile:w-390p desktop:w-700p mx-auto">
        <div className="flex pt-20p items-center justify-center">
          <img
            src="/assets/icons/delivery-back.svg"
            alt="back button"
            className="pl-16p cursor-pointer"
            onClick={goBack}
          />
          <h2 className="text-primary-200 font-bold text-28p leading-34p text-center flex-grow pr-36p">
          {translateStatus(order.status)}

          </h2>
        </div>
        <div className=" flex flex-col justify-between items-center ">
          <img src={order.prize_image} alt="order" className="object-fit py-0 px-16p desktop:max-w-full  mobile:w-full"/>
          <img src="/assets/reward-wave.svg" alt="val" className="w-full" />
        </div>
        <div className="px-16p">
          <OrderTable order={order} />
        </div>
        <div className="px-16p">
          <div className="pt-20p pb-12p">
            <h2 className="text-23p font-bold leading-28p">Dostava</h2>
          </div>
          <Tracking order={order}/>
        </div>
        <Summary order={order}/>
      </div>
      <QuestionSection />
      <Footer />
    </div>
    </>
  );
}
