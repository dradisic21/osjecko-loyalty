import { FaqMapQuestion } from "../../components/FaqMapQuestion/FaqMapQuestion";
// import { FaqMapRegQuestion } from "../../components/FaqMapRegQuestion/FaqMapRegQuestion";
import { QuestionSection } from "../../sections/QuestionSection";
import { Footer } from "../../layout/Footer/Footer";
import { Nav } from "../../layout/Nav/Nav";

export function Faq() {
  return (
    <div>
      <Nav />
      <div className="desktop:w-558p mx-auto pb-20p">
        <div className="px-18p pt-20p ">
          <h1 className="text-35p font-bold leading-42p">Česta pitanja?</h1>
        </div>
        <div>
          <FaqMapQuestion />
          <div className="bg-gray-300 h-14p"></div>
          {/* <FaqMapRegQuestion /> */}
        </div>
      </div>
      <QuestionSection />
      <Footer />
    </div>
  );
}
