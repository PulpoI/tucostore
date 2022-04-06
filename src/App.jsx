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

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/remeras/" element={<ItemListContainer />} />
          <Route path="/remeras/:categoria" element={<ItemListContainer />} />
          <Route path="/nosotros" element={<Nosotros />}></Route>
          <Route
            path="/detail/:itemId"
            element={<ItemDetailContainer />}
          ></Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
