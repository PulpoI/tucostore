import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./components/Error404";
import CartContextProvider from "./components/context/CartContext";
import Cart from "./components/Cart";
import FormBuyer from "./components/FormBuyer";
import Home from "./views/Home";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />

          {/* <Route exact path="/:categoria" element={<ItemListContainer />} /> */}
          <Route
            exact
            path="remeras/:categoria"
            element={
              <ItemListContainer
                producto={`https://pulpoi.github.io/tucostore/src/utils/bd-tuco-remeras.json`}
              />
            }
          />
          <Route
            exact
            path="hoodies/:categoria"
            element={
              <ItemListContainer producto="https://pulpoi.github.io/tucostore/src/utils/bd-tuco-hoodies.json" />
            }
          />
          <Route
            exact
            path="stickers/:categoria"
            element={
              <ItemListContainer producto="https://pulpoi.github.io/tucostore/src/utils/bd-tuco-stickers.json" />
            }
          />

          <Route
            exact
            path="remera/:itemId"
            element={
              <ItemDetailContainer product="https://pulpoi.github.io/tucostore/src/utils/bd-tuco-remeras.json" />
            }
          />
          <Route
            exact
            path="hoodie/:itemId"
            element={
              <ItemDetailContainer product="https://pulpoi.github.io/tucostore/src/utils/bd-tuco-hoodies.json" />
            }
          />
          <Route
            exact
            path="sticker/:itemId"
            element={
              <ItemDetailContainer
                product="https://pulpoi.github.io/tucostore/src/utils/bd-tuco-stickers.json"
                displayNone="d-none"
              />
            }
          />
          <Route exact path="cart" element={<Cart />} />
          <Route exact path="checkout" element={<FormBuyer />}></Route>
          <Route exact path="*" element={<Error404 />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
