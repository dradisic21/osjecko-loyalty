import { Link, useNavigate } from "react-router-dom";
import { QuestionSection } from "../../sections/QuestionSection";
import { Nav } from "../../layout/Nav/Nav";
import { Footer } from "../../layout/Footer/Footer";
import { Button } from "../../ui/Button";


export function PointsPage() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <Nav />
      <div className="points-container desktop:w-700p desktop:flex desktop:flex-col desktop:justify-center desktop:mx-auto">
        <div className="px-16p py-12p">
          <div>
            <Button className="flex gap-x-10p" onClick={goBack}>
              <img src="/assets/icons/arrow_back.svg" alt="arrow back" />
              <p className="text-18p font-inter">Natrag</p>
            </Button>
          </div>
          <div className="pt-20p">
            <h1 className="text-23p font-bold">Bodovi</h1>
          </div>
          <div className="pt-10p">
            <p className="text-14p font-inter">
              Bodovi istječu 12 mjeseci nakon što su osvojeni
            </p>
          </div>
          <div className="flex flex-col gap-y-10p pt-20p">
            <div className=" border-b border-solid border-primary-black">
              <Link to="/history" className="flex justify-between ">
                <p className="font-inter pb-2p">Povijest kodova</p>
                <img
                  src="/assets/icons/arrow_forward.svg"
                  alt="arrow forward"
                />
              </Link>
            </div>
            <div className="border-b border-solid border-primary-black">
              <Link to="/changes-code" className="flex justify-between">
                <p className="font-inter pb-2p">Zamijenjeni bodovi</p>
                <img
                  src="/assets/icons/arrow_forward.svg"
                  alt="arrow forward"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <QuestionSection />
      <Footer />
    </div>
  );
}