import { QuestionSection } from "../../sections/QuestionSection";
import { Nav } from "../../layout/Nav/Nav";
import { Footer } from "../../layout/Footer/Footer";


export function PrivacyPolicy() {
  return (
    <div className="privacy-container">
      <Nav />
      <div className="desktop:w-558p flex flex-col justify-center mx-auto px-16p">
        <div className="pt-20p">
          <h1 className="text-35p leading-42p font-bold">
            Pravila privatnosti
          </h1>
        </div>
        <div className="pt-8p">
          <p className="font-inter text-18p leading-25p font-semibold">
            Zaštita privatnosti naših posjetitelja nam je jedan od prioriteta.
            Pozivamo vas stoga, na pregled uvjeta privatnosti koje dostavljamo u
            nastavku.
          </p>
        </div>
        <div className="pt-20p">
          <h3 className="text-23p leading-28p font-bold">
            Podaci o pregledavanju
          </h3>
        </div>
        <div className="flex flex-col gap-y-20p text-18p font-inter leading-25p pt-8p">
          <p>
            Tijekom uporabe, informacijsko komunikacijski sustavi i softverski
            postupci za upravljanje web stranicom preuzimaju neke osobne podatke
            čiji je prijenos osnova u korištenju Internet komunikacijskih
            protokola.
          </p>
          <p>
            Riječ je o podacima koji nisu povezani s određenim pojedincima, ali
            bi po svojoj prirodi putem obrade i povezivanja s podacima trećih
            strana mogli omogućiti identifikaciju korisnika odnosno informaciju
            o njemu.
          </p>
          <p>
            Ova kategorija podataka uključuje IP adresu ili nazive domena
            računala korištena od strane korisnika koji se povezuju s web
            stranicom, URI (Uniform Resource Identifier) adrese traženih
            resursa, vrijeme zahtjeva, metoda korištena za podnošenje zahtjeva
            na server, veličinu datoteke dobivene kao odgovor, numerički kôd
            koji označava status odgovora poslužitelja (uspješan, pogreška itd.)
            te ostale parametre koji se odnose na operacijski sustav i
            korisnike.
          </p>
          <p>
            Navedeni se podaci upotrebljavaju samo za dobivanje anonimnih
            statističkih skupova podataka na web stranici i za provjeru
            ispravnog funkcioniranja, a brišu se odmah nakon izvršene obrade.
          </p>
        </div>
        <div className="pt-20p">
          <h3 className="text-23p leading-28p font-bold">
            Koje informacije prikupljamo o Vama?
          </h3>
        </div>
        <div className="flex flex-col gap-y-20p text-18p font-inter leading-25p pt-8p">
          <p>Pivovara.hr može o Vama prikupljati sljedeće podatke:</p>
          <p>
            – Kontaktni podaci: ime, titula, adresa, kontakt broj, e-mail adresa,
            datum i godinu rođenja.
          </p>
          <p>
            – Vaši interesi vezani za korištenje naše internetske stranice:
            način na koji koristite našu stranicu, koja grupa artikala / usluga
            je u sferi vašeg interesa.
          </p>
          <p>
            – Fotografije i video snimke: poslovne prezentacije i domjenke
            možemo popratiti fotografiranjem ili snimanjem video materijala koje
            kasnije objavljujemo na internetskim stranicama Pivovara.hr i
            društvenim mrežama.
          </p>
          <p>
            – Informacije o kupcu: zatražene ponude, podaci o kupnji artikala.
          </p>
          <p>
            – Povratne informacije o Vašem mišljenju za provođenje istraživanja
            u svrhu unapređenja naših proizvoda kroz razne oblike anketiranja na
            koja ćete dati pristanak rješavanjem danih anketnih upitnika
          </p>
          <p>
            – Prikupljamo Vaše svojevoljno podijeljene fotografije sa
            Pivovara.hr koje ćemo koristiti u svrhu provođenja nagradnih
            natječaja u sklopu kojih se mogu provoditi darivanja za one
            najkreativnije koje ćemo odabrati. Za sve podijeljene fotografije s
            našom web stranicom ili na društvenim mrežama Pivovare (Osječko pivo
            i Prvo Hrvatsko pivo), dajete potpunu suglasnost da ih možemo
            koristiti na našoj web stranici i društvenim mrežama u svrhu
            transparentnosti i pravednog provođenja darivanja i slično.
          </p>
          <p>
            – Prikupljamo osobne podatke o Vama kada se pretplatite na
            newsletter, loyalty program, preuzimate ili uploadate materijale ili
            pošaljete e-mail.
          </p>
          <p>
            Podaci o korištenju web stranice prikupljaju se pomoću kolačića.
          </p>
        </div>
        <div className="pt-20p">
          <h3 className="text-23p leading-28p font-bold">
            Kako ćemo koristiti informacije o Vama?
          </h3>
        </div>
        <div className="flex flex-col gap-y-20p text-18p font-inter leading-25p pt-8p">
          <p>
            Prikupljane informacije ćemo koristiti za slanje newslettera,
            pozivnica na događaje, kako bismo vas e-mailom obavijestili o
            proizvodima i uslugama za koje mislimo da bi vam mogli biti od
            interesa.
          </p>
          <p>
            Također prikupljamo statističke podatke o posjećenosti, kako bi
            optimizirali naše web stranice. Vaše osobne podatke nećemo
            obrađivati na bilo koji način koji nije opisan u ovim pravilima
            privatnosti. Obradit ćemo podatke na adekvatan i relevantan način i
            ograničiti na ono što je potrebno uzevši u obzir svrhu za koju se
            podaci koriste. Prilikom obrade koristimo najbolje dostupne tehničke
            opcije zaštite i kriptiranja podataka.
          </p>
          <p>Vaši osobni podaci bit će obrađeni samo za navedenu svrhu.</p>
        </div>
        <div className="pt-20p">
          <h3 className="text-23p leading-28p font-bold">Marketing</h3>
        </div>
        <div className="flex flex-col gap-y-20p text-18p font-inter leading-25p pt-8p">
          <p>
            Kako bismo Vas informirali o svim novitetima, akcijama ili drugim
            marketinškim aktivnostima bit ćemo slobodni povremeno Vam poslati
            informacije o našim proizvodima i uslugama.
          </p>
          <p>
            Ukoliko ste dali privolu za primanje marketinških materijala, možete
            je povući u bilo kojem trenutku.
          </p>
        </div>
        <div className="pt-20p">
          <h3 className="text-23p leading-28p font-bold">
            Pristup vašim informacijama, izmjenama i drugim pravima
          </h3>
        </div>
        <div className="flex flex-col gap-y-20p text-18p font-inter leading-25p pt-8p">
          <p>
            Na našim stranicama također koristimo i poveznice prema trećim
            stranama, uglavnom društvenim mrežama, i prije pristupanja
            stranicama preko poveznica, molimo Vas da provjerite njihova pravila
            privatnosti. Pivovara ne može biti ni na koji način odgovorana za
            postupanje trećih strana Vašim podacima.
          </p>
          <p>
            Imate pravo zatražiti kopiju podataka koje pohranjujemo o Vama.
            Ukoliko želite kopiju vaših osobnih podataka molimo vas kontakt
            putem e-maila na marketing@pivovara.hr.
          </p>
          <p>
            Želimo biti sigurni da su Vaši osobni podaci ispravni i ažurni.
            Stoga u bilo kojem trenutku možete zatražiti ispravak ili uklanjanje
            netočnih informacija. Također, možete zatražiti da obrišemo sve Vaše
            osobne podatke koje pohranjujemo.
          </p>
        </div>
        <div className="pt-20p">
          <h3 className="text-23p leading-28p font-bold">
            Pristup vašim informacijama, izmjenama i drugim pravima
          </h3>
        </div>
        <div className="flex flex-col gap-y-20p text-18p font-inter leading-25p pt-8p">
          <p>
            Opća uredba o zaštiti podataka (GDPR), regulativa je Europske unije
            koja štiti vaše osobne podatke i zahtijeva da se prikupljaju u
            skladu sa zakonom pod strogim uvjetima, za opravdanu svrhu. Osobe
            ili organizacije koje prikupljaju i upravljaju vašim osobnim
            podacima moraju ih zaštititi od zloupotrebe te moraju poštivati
            određena prava vlasnika podataka koja su zajamčena zakonom EU.
          </p>
          <p>
            Shvaćajući ozbiljnost Uredbe, Pivovara.hr jamči svojim
            posjetiteljima i klijentima sva prava temeljena na GDPR uredbi, i
            to: pravo na pristup, pravo na ispravak, pravo na zaborav, pravo na
            ograničenje obrade, pravo na prenosivost, pravo na prigovor, pravo
            na ne podlijeganje automatiziranoj obradi osobnih podataka, pravo na
            podnošenje pritužbi te pravo na naknadu štete.
          </p>
          <p>
            Ukoliko koristite bilo koje od ovih prava, provjerit ćemo osnovanost
            vašeg prava i na eventualni upit odgovoriti bez odlaganja, a
            najkasnije u roku od trideset dana. U složenim slučajevima, ili u
            slučaju zaprimanja većeg broja zahtjeva, ovo razdoblje može se
            produžiti za dodatnih šezdeset dana, o čemu ćemo vas obavijestiti.
          </p>
        </div>
        <div className="pt-20p">
          <p className="text-18p font-inter leading-25p">S poštovanjem,</p>
          <p className="text-18p font-inter font-semibold leading-25p">
            Prvo hrvatsko pivo 1664 d.o.o.
          </p>
        </div>
      </div>
      <div className="pt-30p">
        <QuestionSection />
        <Footer />
      </div>
    </div>
  );
}
