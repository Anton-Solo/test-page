import "./advanatages.scss";

export const Advantages = () => {
  return (
    <section className="advantages">
      <div className="container">
        <div className="advantages__wrap">
          <div className="advantages__block">
            <div className="advantages__block-item">
              <h3 className="advantages__title">
                Qualified <span>traders</span> and liquidty
                <span> solutions</span>
              </h3>
              <span className="advantages__txt">
                Trade easily and efficiently between 12 stablecoins, including
                USDT, TrueUSD, Dai, Eurs and Gemini Dollar.
              </span>
            </div>
            <div className="advantages__block-item">
              <h3 className="advantages__title spec">
                The best <span>payments solutions</span>
              </h3>
              <span className="advantages__txt">
                For all stablecoin payments, from point-of-sale transactions to
                website solutions. If you use stablecoins in your business,
                Stablehouse is for you.
              </span>
            </div>
          </div>
          <div className="advantages__block">
            <div className="advantages__block-item">
              <h3 className="advantages__title">
                Settlement/OTC API and <span>integration</span>
              </h3>
              <span className="advantages__txt">
                Integrate OTC operations and settlements using our efficient
                API.
              </span>
            </div>
            <div className="advantages__block-item">
              <h3 className="advantages__title">
                <span>Treasury</span> and <span>returns</span> for stablecoin
                stores
              </h3>
              <span className="advantages__txt">
                Automate your stablecoin store with instant payments and
                on-the-fly conversion between different stablecoins.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
