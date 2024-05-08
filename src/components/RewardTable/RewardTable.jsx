import React from "react";
import { Loader } from "../Loader/Loader";

export function RewardTable({ reward, loading }) {

  return (
    <div className="">
      <div className="pt-12p">
        <h1 className="text-23p font-bold">Tvoja nagrada</h1>
      </div>

      {/* table */}
      <div className="flex flex-col pt-20p">
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="mobile:w-360p desktop:w-700p tablet:w-700p font-inter">
                <thead className="bg-white border-b">
                  <tr className="text-primary-black">
                    <th
                      scope="col"
                      className="text-14p font-bold px-15p py-12p text-left"
                    >
                      NAGRADA
                    </th>
                    <th
                      scope="col"
                      className="text-14p font-bold px-15p py-12p"
                    >
                      BODOVI
                    </th>
                  </tr>
                </thead>
                <tbody>
                {loading ? (
                    <tr>
                      <td colSpan="2" className="text-center">
                        <Loader />
                      </td>
                    </tr>
                  ) : (
                    <tr className="bg-primary-400 border-b">
                      <td className="text-14p text-primary-black font-light px-15p py-12p whitespace-nowrap col-span-2">
                        {reward.title}
                      </td>
                      <td className="text-14p text-primary-black font-light px-15p py-12p whitespace-nowrap text-center">
                        {reward.price}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}