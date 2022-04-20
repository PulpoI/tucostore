// import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

// import React from "react";
// import { Link, NavLink } from "react-router-dom";
// import CartWidget from "./CartWidget";

// const NavBar = () => {
//   return (
//     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//       <Container>
//         <Navbar.Brand>
//           {" "}
//           <NavLink exact="true" to="/">
//             Tuco Store
//           </NavLink>
//         </Navbar.Brand>

//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="me-auto">
//             <NavDropdown title="Remeras" id="collasible-nav-dropdown">
//               <NavDropdown.Item>
//                 <NavLink exact="true" to="/remeras/memes">
//                   Memes{" "}
//                 </NavLink>
//               </NavDropdown.Item>
//               <NavDropdown.Item>
//                 <Link to="/remeras/series">Series</Link>
//               </NavDropdown.Item>
//               <NavDropdown.Item>
//                 <NavLink exact="true" to="/remeras/musica">
//                   Musica
//                 </NavLink>
//               </NavDropdown.Item>
//               <NavDropdown.Item>
//                 <NavLink exact="true" to="/remeras/trasher">
//                   Trasher
//                 </NavLink>
//               </NavDropdown.Item>
//             </NavDropdown>

//             <NavDropdown title="Otros" id="collasible-nav-dropdown">
//               <NavDropdown.Item>
//                 <NavLink exact="true" to="/firebase">
//                   Nosotros
//                 </NavLink>
//               </NavDropdown.Item>
//               <NavDropdown.Item>Otros productos</NavDropdown.Item>
//               <NavDropdown.Item>Trae tu prenda</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item>Contactanos</NavDropdown.Item>
//             </NavDropdown>
//           </Nav>

//           <Nav>
//             <Link to="/cart">
//               <CartWidget />
//             </Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default NavBar;

import { Link } from "react-router-dom";

import CartWidget from "../components/CartWidget";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Navbar
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
            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar Diseño"
                aria-label="Search"
              />
              <button className="btn btn-outline" type="submit">
                Buscar
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
