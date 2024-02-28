import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" bg-red-400 text-2xl text-white">
        PDF Table AI Generator
      </div>
    </>
  );
}

export default App;
