import { Link } from "react-router-dom";
import logo from "../assets/logoD.png";
import CartWidget from "../components/CartWidget";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="" style={{ width: "7rem" }} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Nosotros
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  to="/"
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Remeras
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to="/remeras/musica" className="dropdown-item">
                      Música
                    </Link>
                  </li>
                  <li>
                    <Link to="/remeras/series" className="dropdown-item">
                      Series
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="dropdown-divider"></Link>
                  </li>
                  <li>
                    <Link to="/remeras/trasher" className="dropdown-item">
                      Trasher
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>{" "}
            <Link to="/cart">
              <CartWidget />{" "}
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
