import { Container, Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";

import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          {" "}
          <Link to="/">Tuco Store</Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Remeras" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link to="remeras/memes">Memes </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="remeras/series">Series</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="remeras/musica">Musica</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="remeras/trasher">Trasher</Link>
              </NavDropdown.Item>
            </NavDropdown>

            <NavLink></NavLink>
            <NavDropdown title="Otros" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <Link to="/firebase">Nosotros</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Otros productos
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Trae tu prenda
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Contactanos
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav>
            <Link to="/cart">
              <CartWidget />
            </Link>
            {/* <Nav.Link href="#deets">Login</Nav.Link> */}
            {/* <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Button from "@mui/material/Button";
// import MenuItem from "@mui/material/MenuItem";
// import CartWidget from "./CartWidget";

// const pages = ["Memes", "Series", "Nosotros"];

// const NavBar = () => {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };
//   return (
//     <AppBar position="sticky">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
//           >
//             TUCO STORE
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: "bottom",
//                 horizontal: "left",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "left",
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: "block", md: "none" },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
//           >
//             LOGO
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: "white", display: "block" }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>

//           <CartWidget />
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };
// export default NavBar;
