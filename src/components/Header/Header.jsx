import { useState } from "react";
import { Link } from "react-scroll";

import Logo from "../../assets/logus.png";
import Bars from "../../assets/icons/bars.png";

import "./Header.css";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="header">
      <img src={Logo} alt="" className="logo blur-logo" />
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              activeClass="active"
              to="Home"
              span={"true"}
              smooth={true}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="Professors"
              span={"true"}
              smooth={true}
            >
              Entrenadoras
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="Clases"
              span={"true"}
              smooth={true}
            >
              Clases
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="Reasons"
              span={"true"}
              smooth={true}
            >
              Por que elegirnos
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="Consultas"
              span={"true"}
              smooth={true}
            >
              Consultas
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
