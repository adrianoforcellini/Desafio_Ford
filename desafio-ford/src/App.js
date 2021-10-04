import "./App.css";
import Select from "./Components/select";
import findRoute from "./utills/desafio";
import { useState } from "react";

function App() {
  const [origin, setOrigin] = useState("Aracaju");
  const [destiny, setDestiny] = useState("Aracaju");
  const [route, setRoute] = useState();

  const changeOrigin = (e) => {
    setOrigin(e.target.value);
  };
  const changeDestiny = (e) => {
    setDestiny(e.target.value);
  };

  const find = () => {
    const rout = findRoute(origin, destiny);
    setRoute(rout);
  };
  return (
    <div className="App">
      <header className="App-header">
        Selecione a origem
        <Select name="origem" change={(e) => changeOrigin(e)} />
        Selecione o destino
        <Select name="destino" change={(e) => changeDestiny(e)} />
        <br></br>
        <button type="button" onClick={find}>
          ENCONTRE A ROTA
        </button>
        <br></br>
        <textarea style={{width: "50vw", textAlign: "center"}} value={route} />
      </header>
    </div>
  );
}

export default App;
