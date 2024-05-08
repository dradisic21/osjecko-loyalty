import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/Button";
import "../../styles/Summary.scss";

export function Summary({ order }) {
  const navigate = useNavigate();

  const handleReportClick = () => {
    navigate("/report");
  };
  
  return (
    <div className="summary-main flex flex-col justify-center mx-auto">
      <div className="text-center pt-20p">
        <h1 className="text-28p font-bold leading-34p">Sažetak</h1>
      </div>
      <div className="flex flex-col px-16p gap-y-8p pt-8p">
        <div className="flex text-left justify-between">
          <p className="text-18p leading 26p font-inter">Tvoja nagrada</p>
          <p className="text-18p leading 26p font-semibold font-inter">
            {order.prize_name}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-18p leading 26p font-inter">Dostava</p>
          <p className="text-18p leading 26p font-semibold font-inter">
            {order.parcel_locker.name}
          </p>
        </div>
      </div>
      <div className="flex justify-center mx-auto py-20p">
        <Button
          className="button w-180p h-44p rounded-8p text-16p leading-24p font-semibold font-inter"
          name="Prijavi problem"
          onClick={handleReportClick}
        />
      </div>
    </div>
  );
}
