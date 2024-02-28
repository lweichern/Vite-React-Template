import { useState } from "react";
import PromptForm from "../components/PromptForm";

function Home() {
  const [response, setResponse] = useState<string>("");

  return (
    <div className="text-white">
      <nav className=" flex justify-center items-center bg-slate-600 p-4 text-3xl">
        PDF table AI Generator
      </nav>

      <PromptForm setResponse={setResponse} />

      <h3>Result:</h3>
      <article>{response}</article>
      {/* <ul>
        <a href="/about">
          <li>About</li>
        </a>
      </ul> */}
    </div>
  );
}

export default Home;
