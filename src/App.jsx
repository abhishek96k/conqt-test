import "./App.css";
import Header from "./components/Header";
import Item from "./components/Item";
import Navbar from "./components/Navbar";
import Supplier from "./components/Supplier";

function App() {
  return (
    <div className="">
      <div className="nav">
        <Navbar />
      </div>
      <div>
        <Header />
        <div>
          <Item />
          <Supplier />
        </div>
      </div>
    </div>
  );
}

export default App;
