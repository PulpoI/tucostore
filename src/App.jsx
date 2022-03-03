import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  const comprar = () => {
    alert("COMPRASTE");
  };

  return (
    <div>
      <NavBar />
      <ItemListContainer comprar={comprar} />
    </div>
  );
}

export default App;
