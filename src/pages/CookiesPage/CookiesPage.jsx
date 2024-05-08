import { QuestionSection } from "../../sections/QuestionSection";
import { Nav } from "../../layout/Nav/Nav";
import { Footer } from "../../layout/Footer/Footer";

export function CookiesPage() {
  return (
    <div className="cookies-container">
      <Nav />
      <div className="w-full flex flex-col justify-center mx-auto px-16p desktop:w-558p">
        <div className="py-20p">
          <h1 className="text-35p leading-42p font-bold">Kolačići (cookies)</h1>
        </div>
        <div className="flex flex-col gap-y-20p text-18p font-inter leading-25p pt-8p">
          <p>
            Kolačići su tekstualne datoteke koje se nalaze na Vašem računalu
            kako bi se prikupile standardne internetske informacije i
            informacije o ponašanju posjetitelja.
          </p>
          <p>
            Ove se informacije koriste za praćenje korištenja web stranice i za
            sastavljanje statističkih izvještaja o aktivnostima web stranice.
            Postavke svojeg preglednika možete podesiti tako da ne spremate
            kolačiće. Ipak u određenim slučajevima neke od funkcionalnosti naše
            web stranice zahtijevaju kolačiće i možda neće funkcionirati,
            odlučite li ih ne prihvatiti.
          </p>
          <p>
            Korištenjem ove web stranice, pristajete na obradu Vaših podataka.
          </p>
        </div>
        <div className="text-14p font-inter leading-20p pt-20p">
          <h4 className="text-primary-200 font-bold">Postavke kolačića</h4>
        </div>
      </div>
      <div className="pt-10p">
        <QuestionSection />
        <Footer />
      </div>
    </div>
  );
}
