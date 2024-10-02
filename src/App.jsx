import { useState } from "react";
import "./index.css";
import Tile from "./Tile.jsx";

function App() {
  const [count, setCount] = useState(0);

  return <Tile />;
}

export default App;
