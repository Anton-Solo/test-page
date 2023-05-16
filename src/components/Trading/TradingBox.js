import { Btn } from "../../ui/Btn/Btn";

export const TradingBox = () => {
  return (
    <div className="trading-box">
      <div className="trading-box__bg"></div>
      <div className="trading-box__main">
        <div className="trading-box__main--item">
          <p>On-Exchange Trading</p>
          <span>Instant</span>
          <span>Passive Inventory earns fees</span>
        </div>
        <div className="trading-box__main--item">
          <p>On-Chain Swaps</p>
          <span>Low Counterparty risk</span>
          <span>Direct transfers</span>
        </div>
        <div className="trading-box__main--item spec">
          <p>Time Settlement Swaps</p>
          <span>LBTC / Lightning and other sidechain swaps</span>
        </div>
        <div className="trading-box__main--item">
          <Btn className="trading-box__btn" title="Join now" />
        </div>
      </div>
    </div>
  );
};
