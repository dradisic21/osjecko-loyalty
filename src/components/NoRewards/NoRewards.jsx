export function NoRewards() {
    return (
      <div className="desktop:flex desktop:flex-col desktop:justify-center desktop:mx-auto">
        <div className="mx-auto px-16p py-12p">
          <div className="pt-20p">
            <h1 className="text-28p font-bold leading-24p text-center">
            Još nema zamijenjenih bodova
            </h1>
          </div>
        </div>
        <div>
          <div className="w-374p flex flex-col justify-center items-center mx-auto py-30p">
            <img src="assets/pecat_1.svg" alt="cep logo" />
            <p className="text-18p leading-22p font-bold text-center pt-28p">
              To je sve za sada i nastavi
              <br /> sudjelovati u sakupljanju bodova
            </p>
          </div>
        </div>
      </div>
    );
  }
  