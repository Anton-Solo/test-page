import { useState } from "react";
import { Logo } from "../../images/svg/logo";
import { HeaderInfo } from "./HeaderInfo";
import { SubHeader } from "./SubHeader";
import "./header.scss";

const menu = [
  {
    id: 1,
    label: "Home",
  },
  {
    id: 2,
    label: "About",
  },
  {
    id: 2,
    label: "Products",
  },
  {
    id: 3,
    label: "Use Cases",
  },
  {
    id: 4,
    label: "Pricing",
  },
  {
    id: 5,
    label: "Resources",
  },
];

export const Header = () => {
  const [openHamburger, changeOpenHamburger] = useState(false);

  return (
    <header className="header">
      <div className="header-wrap">
        <div className="container">
          <div className="header-logo">
            <Logo />
          </div>
          <nav className="header-nav">
            <ul className="header-menu">
              {menu.map(({ id, label }) => (
                <li
                  key={id}
                  className={`header-menu__item ${id === 1 ? "active" : ""}`}
                >
                  <a href="#">{label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <button
            onClick={() => changeOpenHamburger(!openHamburger)}
            className={`hamburger hamburger--collapse${
              openHamburger ? " is-active" : ""
            }`}
            type="button"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
          {openHamburger ? (
            <ul className="header__mobile">
              {menu.map(({ id, label }) => (
                <li
                  key={id}
                  className={`header-menu__item ${id === 1 ? "active" : ""}`}
                >
                  <a href="#">{label}</a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
      <SubHeader />
      <HeaderInfo />
    </header>
  );
};
