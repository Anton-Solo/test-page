import { Quate } from "../../images/svg/quate";
import "./comment.scss";

export const Comment = () => {
  return (
    <section className="comment">
      <div className="container">
        <div className="comment-wrap">
          <p className="comment-main">
            <Quate />
            <span>
              Solis Group serves as a liquidity nexus that gives stablecoin
              issuers, holders and exchanges certainty over access and liquidity
            </span>
          </p>
          <span className="comment-txt">Lennon Burnett, Solis Group CEO</span>
        </div>
      </div>
    </section>
  );
};
