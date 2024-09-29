import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import Tile from "./Tile.jsx";

function App() {
  const [count, setCount] = useState(0);

  return <Tile />;
}

export default App;
