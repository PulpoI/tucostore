import { Link } from "react-router-dom";
import logo from "../assets/logoD.png";
import CartWidget from "../components/CartWidget";
import "./NavBar.css";

import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="https://tucoremeras.com.ar/">
          {" "}
          <img src={logo} alt="" style={{ width: "7rem" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/" className="nav-link active" aria-current="page">
              Home
            </Link>
            <Link
              to="/remeras/tuco"
              className="nav-link active"
              aria-current="page"
            >
              Exclusivos
            </Link>

            <NavDropdownMenu
              href="#"
              className=" active"
              title="Remeras"
              id="collasible-nav-dropdown nav-link"
              aria-current="page"
            >
              <DropdownSubmenu href="#" title="Música">
                <NavDropdown.Item href="#">
                  <Link
                    className="pt-2 pb-2 subMenu"
                    to="/remeras/musica-argentina"
                  >
                    <p>Música Argentina</p>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#">
                  <Link className="pt-2 pb-2 subMenu" to="/remeras/la renga">
                    <p>La Renga</p>
                  </Link>
                </NavDropdown.Item>
              </DropdownSubmenu>
              <DropdownSubmenu href="#" title="Series/TV/Películas">
                <NavDropdown.Item href="#">
                  <Link
                    className="pt-2 pb-2 subMenu"
                    to="/remeras/los-simpsons"
                  >
                    <p>Los Simpsons</p>
                  </Link>
                </NavDropdown.Item>
              </DropdownSubmenu>
              <DropdownSubmenu href="#" title="Deporte">
                <NavDropdown.Item href="#">
                  <Link
                    className="pt-2 pb-2 subMenu"
                    to="/remeras/diego maradona"
                  >
                    <p>Maradona</p>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#">
                  <Link
                    className="pt-2 pb-2 subMenu"
                    to="/remeras/futbol-argentino"
                  >
                    <p>Futbol Argentino</p>
                  </Link>
                </NavDropdown.Item>
              </DropdownSubmenu>
              <DropdownSubmenu href="#" title="Otros">
                <NavDropdown.Item href="#">
                  <Link className="pt-2 pb-2 subMenu" to="/remeras/trasher">
                    <p>Thrasher</p>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#">
                  <Link className="pt-2 pb-2 subMenu" to="/remeras/nasa">
                    <p>Nasa</p>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#">
                  <Link className="pt-2 pb-2 subMenu" to="/remeras/meme">
                    <p>Memes</p>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#">
                  <Link className="pt-2 pb-2 subMenu" to="/remeras/tendencia">
                    <p>Tendencia</p>
                  </Link>
                </NavDropdown.Item>
              </DropdownSubmenu>
            </NavDropdownMenu>
          </Nav>
        </Navbar.Collapse>
        <Link className="m-3" to="/cart">
          <CartWidget />{" "}
        </Link>
      </Navbar>

      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a href="https://tucoremeras.com.ar/" className="navbar-brand">
            <img src={logo} alt="" style={{ width: "7rem" }} />
          </a>
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
                    <Link to="/remeras/meme" className="dropdown-item">
                      Memes
                    </Link>
                  </li>
                  <li>
                    <span className="hover-button dropdown-item">
                      <span className="hover-button--off">Musica</span>
                      <div className="hover-button--on">
                        <li>
                          <Link to="/remeras/musica-argentina">
                            Música Argentina
                          </Link>
                        </li>
                        <li>
                          <Link to="/remeras/la renga">La Renga</Link>
                        </li>
                      </div>
                    </span>
                  </li>
                  <li>
                    <span className="hover-button dropdown-item">
                      <span className="hover-button--off">Deporte</span>
                      <div className="hover-button--on">
                        <li>
                          <Link to="/remeras/diego maradona">
                            Diego Maradona
                          </Link>
                        </li>
                        <li>
                          <Link to="/remeras/futbol-argentino">
                            Futbol Argentino
                          </Link>
                        </li>
                      </div>
                    </span>
                  </li>

                  <li>
                    <Link to="/" className="dropdown-divider"></Link>
                  </li>
                  <li>
                    <Link to="/remeras/trasher" className="dropdown-item">
                      Trasher
                    </Link>
                  </li>
                  <li>
                    <Link to="/remeras/nasa" className="dropdown-item">
                      Nasa
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
      </nav> */}
    </div>
  );
};

export default NavBar;
