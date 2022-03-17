import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemDetail from "./components/ItemDetail";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  const comprar = () => {
    alert("COMPRASTE");
  };

  return (
    <div>
      <NavBar />
      {/* <ItemListContainer /> */}
      <ItemDetailContainer />
    </div>
  );
}

export default App;
