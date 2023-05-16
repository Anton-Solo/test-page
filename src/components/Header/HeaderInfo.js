import { Btn } from "../../ui/Btn/Btn";

export const HeaderInfo = () => {
  return (
    <div className="container">
      <div className="header__info">
        <div className="header__info-img"></div>
        <div className="header__info-block">
          <div className="block-item">
            <div className="block-item__main">
              <div className="block-item__main--entity">
                <span>1 tril</span>
                <span>Market cap potential</span>
              </div>
              <div className="block-item__main--entity">
                <span>3.65 mil</span>
                <span>Deposited to platform</span>
              </div>
              <div className="block-item__main--entity">
                <span>12</span>
                <span>Stablecoins</span>
              </div>
            </div>
            <div className="block-item__txt">
              <span className="txt-first">
                Solis group is a new venture created with investments from and
                collaboration with XBTO International, XBTO Ventures and Phil
                Potter, formerly of bitfinex. Stablehouse is intended to launch
                a first-of-its-kind clearing house for stablecoins that seeks to
                promote the next phase of the market’s development.
              </span>
              <span>
                The API-enabled, centralized platform addresses the key issues
                of inconsistent liquidity, stability and accessibility which are
                currently preventing the stablecoin market from reaching
                critical mass.
              </span>
              <Btn className="block-item__btn" title="Contact sales" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
