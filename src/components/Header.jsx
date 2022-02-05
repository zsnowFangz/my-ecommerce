import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Logo from "../assets/images/Logo-2.png";

const mainNav = [
  {
    display: "Homepage",
    path: "/",
  },
  {
    display: "Product",
    path: "/catalog",
  },
  {
    display: "Accessories",
    path: "/accessories",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const { pathname } = useLocation();
  const activeNav = mainNav.findIndex((e) => e.path === pathname);
  const headerRef = React.useRef(null);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  const menuLeft = React.useRef(null);
  const menuToggle = () => menuLeft.current.classList.toggle('active');
  return (
    <div className="header" ref={headerRef}>
      <div className="container">
        <div className="header__logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="header__menu">
          <div className="header__menu__mobile-toggle" onClick={menuToggle}>
            <i className="bx bx-menu-alt-right"></i>
          </div>
          <div className="header__menu__left" ref={menuLeft}>
            <div className="header__menu__left__close" onClick={menuToggle}>
              <i className="bx bxs-chevron-left"></i>
            </div>
            {mainNav.map((item, index) => (
              <div
                key={index}
                className={`header__menu__item header__menu__left__item ${
                  index === activeNav ? "active" : null
                }`}
                onClick={menuToggle}
              >
                <Link to={item.path}>{item.display}</Link>
              </div>
            ))}
          </div>
          <div className=" header__menu__right">
            <div className="header__menu__item header__menu__right__item">
              <i className="bx bx-search-alt"></i>
            </div>
            <div className="header__menu__item header__menu__right__item">
              <Link to="/cart">
                <i className="bx bx-cart-alt"></i>
              </Link>
            </div>
            <div className="header__menu__item header__menu__right__item">
              <i className="bx bx-user"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
