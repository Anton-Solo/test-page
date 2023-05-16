import { TradingBox } from "./TradingBox";
import "./trading.scss";

export const Trading = () => {
  return (
    <section className="trading">
      <div className="container">
        <div className="trading-api">
          <h3 className="trading-title">
            A <span>powerful API</span> , easy to use user interface
          </h3>
          <span className="trading-txt">
            Our API allows all members to interact with Stablehouse’s platform,
            from effecting transfers to deposits, withdrawals, creation and
            redemption and reporting.
          </span>
        </div>

        <TradingBox />
      </div>
    </section>
  );
};
