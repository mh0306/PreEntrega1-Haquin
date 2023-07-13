import { Header } from "./Components/Header/Header";
import './App.css'
import ItemList from "./Components/ItemListContainer/ItemListContainer";

function App() {

  return (
    <div>
      <Header/>
      <ItemList saludo={"Welcome to the store"}/>
    </div>
  )
}

export default App;
