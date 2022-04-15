import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemDetail from "./components/ItemDetail";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nosotros from "./components/Nosotros";
import Error404 from "./components/Error404";
import Inicio from "./components/Inicio";
import ItemList from "./components/ItemList";
import CartContextProvider from "./components/context/CartContext";
import Cart from "./components/Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import FirebaseComponent from "./components/FirebaseComponent";
import FormBuyer from "./components/FormBuyer";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route exact path="/remeras/" element={<ItemListContainer />} />
          <Route
            exact
            path="/remeras/:categoria"
            element={<ItemListContainer />}
          />
          <Route exact path="/nosotros" element={<Nosotros />} />
          <Route
            exact
            path="/detail/:itemId"
            element={<ItemDetailContainer />}
          />
          <Route exact path="cart" element={<Cart />} />
          <Route exact path="checkout" element={<FormBuyer />}></Route>
          <Route exact path="*" element={<Error404 />} />
          <Route path="/firebase" element={<FirebaseComponent />}></Route>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
