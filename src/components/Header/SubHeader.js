import { Btn } from "../../ui/Btn/Btn";

export const SubHeader = () => {
  return (
    <div className="header__sub">
      <div className="container">
        <div className="header__sub-wrap">
          <h1 className="header__sub-title">
            A peer-to-peer stablecoin <span>clearinghouse</span> for the new
            economy
          </h1>
          <p className="header__sub-txt">
            We are bringing real solutions to the payments world by leveraging
            public blockchains.
          </p>
          <Btn className="header__sub-btn" title="JOIN NOW" />
        </div>
      </div>
    </div>
  );
};
