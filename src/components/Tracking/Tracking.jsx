import React from "react";
import { LockerOrderLocations } from "../LockerOrderLocation/LockerOrderLocation";

export function Tracking({ order }) {
  return (
    <div className="pb-20p">
      <div className="flex">
        {/* tracking linija */}
        <div className="flex flex-col flex-start items-start gap-y-4p pt-6p">
          <div className="w-3 h-3 bg-black rounded-full mr-2 bg-gradient-to-r from-yellow-300 to-yellow-700"></div>
          <div className="flex flex-col pl-5p gap-y-4p">
            <div className="w-0.5 bg-black h-20p mr-2 bg-primary-300"></div>
            <div className="w-0.5 bg-black h-20p mr-2 bg-primary-300"></div>
            <div className="w-0.5 bg-black h-20p mr-2 bg-trackingGreen"></div>
          </div>
          <div className="w-3 h-3 bg-black rounded-full mr-2 bg-trackingGreen"></div>
        </div>

        {/* tracking adresa */}
        <div className="flex flex-col gap-y-62p text-18p leading-26p font-inter">
          <p>Vukovarska 312, 31000 Osijek</p>
          <p>
            {order.parcel_locker.name}, {order.parcel_locker.city}
            <br />
            {order.parcel_locker.address}
          </p>
        </div>
      </div>

      <LockerOrderLocations order={order} />
    </div>
  );
}
