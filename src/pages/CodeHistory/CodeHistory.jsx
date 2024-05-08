import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NoCodes } from "../../components/NoCodes/NoCodes";
import { QuestionSection } from "../../sections/QuestionSection";
import { SkeletonTable } from "../../components/SkeletonTable/SkeletonTable";
import { Nav } from "../../layout/Nav/Nav";
import { Footer } from "../../layout/Footer/Footer";
import { Button } from "../../ui/Button";
import { getAllCode } from "../../services/Api";
import "../../styles/AnimationDelay.scss"

export function CodeHistory() {
  const [codeHistory, setCodeHistory] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastePage] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        await getAllCode(currentPage).then((response) => {
          setCodeHistory(response.codeData);
          setLastePage(response.lastPage === null);
          setLoading(false);
        });
      } catch (error) {
        console.error("Greška pri dohvaćanju kodova:", error);
      }
    };

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
    <div>
      <Nav />
      <div className="reward-code_container desktop:flex desktop:flex-col desktop:justify-center desktop:mx-auto">
        <div className="mx-auto px-16p py-12p">
          <div>
            <Button className="flex gap-x-10p" onClick={goBack}>
              <img src="/assets/icons/arrow_back.svg" alt="arrow back" />
              <p className="text-18p font-inter">Natrag</p>
            </Button>
          </div>
          <div className="pt-20p">
            <h1 className="text-23p font-bold">Uneseni kodovi</h1>
          </div>
          <div className="pt-10p">
            <p className="text-14p font-inter">
              Sakupljaj bodove unošenjem KODOVA ispod čepa i osvajaj vrijedne
              nagrade
            </p>
          </div>

          {loading ? <div className="pt-20p"><SkeletonTable /></div> : ""}

          {codeHistory.length > 0 && !loading && (
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
                              className="text-14p font-bold text-primary-black px-15p py-12p text-left"
                            >
                              DATUM
                            </th>
                            <th
                              scope="col"
                              className="text-14p font-bold text-primary-black px-15p py-12p text-left"
                            >
                              KOD
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {codeHistory.map((code, index) => (
                            <tr
                              className={`${
                                index % 2 === 0 ? "bg-primary-400" : "bg-white"
                              } border-b animated-row`}
                              key={code.id}
                            >
                              <td className="text-14p text-primary-black font-light px-15p py-12p whitespace-nowrap">
                                {formatDate(code.created_at)}
                              </td>
                              <td className="text-14p text-primary-black font-light px-15p py-12p whitespace-nowrap">
                                {code.code}
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

          {codeHistory.length === 0 && !loading && <NoCodes />}
        </div>
      </div>
      <QuestionSection />
      <Footer />
    </div>
  );
}
