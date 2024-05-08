import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NoRewards } from "../../components/NoRewards/NoRewards";
import { QuestionSection } from "../../sections/QuestionSection";
import { SkeletonTable } from "../../components/SkeletonTable/SkeletonTable";
import { Nav } from "../../layout/Nav/Nav";
import { Footer } from "../../layout/Footer/Footer";
import { Button } from "../../ui/Button";
import { getAllOrders } from "../../services/Api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/AnimationDelay.scss"

export function ChangesCode() {
  const [changeCode, setChangeCode] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastePage] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);

        await getAllOrders(currentPage).then((response) => {
          setChangeCode(response.codeData);
          setLastePage(response.lastPage);
          setLoading(false);
        });
      } catch (error) {
        toast.error("Dogodila se greška prilikom dohvaćanja nagrade");
      }
    }
    fetchData();
  }, [currentPage]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedDate = `${day < 10 ? "0" + day : day}.${
      month < 10 ? "0" + month : month
    }.${year}.`;
    return formattedDate;
  };

  const goBack = () => {
    navigate(-1);
  };

  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <>
      <Nav />
      <div className="reward-code_container desktop:flex desktop:flex-col desktop:justify-center desktop:mx-auto">
        <div className="mx-auto px-16p py-12p">
          <div>
            <Button className="flex gap-x-10p" onClick={goBack}>
              <img src="/assets/icons/arrow_back.svg" alt="arrow back" />
              <p className="text-18p font-inter">Natrag</p>
            </Button>
          </div>

          <div>
            <div className="pt-20p">
              <h1 className="text-23p font-bold">
                Zamijenjeni bodovi za nagrade
              </h1>
            </div>
            <div className="pt-10p">
              <p className="text-14p font-inter">
                Sakupljaj bodove unošenjem KODOVA ispod čepa i osvajaj
                vrijedne nagrade
              </p>
            </div>

            {loading ? (
              <div className="pt-20p">
                <SkeletonTable />
              </div>
            ) : (
              ""
            )}

            {changeCode.length > 0 && !loading && (
              <>
                <div className="flex flex-col pt-20p">
                  <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                      <div className="overflow-hidden">
                        <table className="min-w-full font-inter">
                          <thead className="bg-white border-b">
                            <tr>
                              <th
                                scope="col"
                                className="text-14p font-bold text-primary-black px-15p py-12p text-left w-1/4"
                              >
                                DATUM
                              </th>
                              <th
                                scope="col"
                                className="text-14p font-bold text-primary-black px-15p py-12p text-left w-1/2"
                              >
                                NAGRADA
                              </th>
                              <th
                                scope="col"
                                className="text-14p font-bold text-primary-black px-15p py-12p text-left w-1/4"
                              >
                                BODOVI
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {changeCode.map((order, index) => (
                              <tr
                                onClick={() =>
                                  navigate(`/product-delivery/${order.id}`, {
                                    state: { order },
                                  })
                                }
                                className={`cursor-pointer ${
                                  index % 2 === 0
                                    ? "bg-primary-400"
                                    : "bg-white"
                                } border-b animated-row`}
                                key={order.id}
                              >
                                <td className="text-14p text-primary-black font-light px-15p py-12p whitespace-nowrap">
                                  {formatDate(order.created_at)}
                                </td>
                                <td className="text-14p text-primary-black font-light px-15p py-12p">
                                  {order.prize_name}
                                </td>
                                <td className="text-14p text-primary-black font-light px-15p py-12p whitespace-nowrap">
                                  {order.prize_price}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Pagination */}
                <div className="flex justify-center items-center pt-20p">
                  <Button
                    className={`w-10 h-10 bg-primary-black text-white font-bold rounded-full mx-2 ${
                      currentPage === 1 ? "opacity-50 pointer-events-none" : ""
                    }`}
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    {"<"}
                  </Button>
                  <span className="text-lg font-bold mx-2">{currentPage}</span>
                  <Button
                    className={`w-10 h-10 bg-primary-black text-white font-bold rounded-full mx-2 ${
                      lastPage ? "opacity-50 pointer-events-none" : ""
                    }`}
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={lastPage}
                  >
                    {">"}
                  </Button>
                </div>
              </>
            )}
          </div>
          {changeCode.length === 0 && !loading && <NoRewards />}
        </div>
        <QuestionSection />
        <Footer />
      </div>
    </>
  );
}
