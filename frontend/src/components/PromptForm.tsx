import axios from "axios";
import React, { useState } from "react";
import { useMutation } from "react-query";

function PromptForm({
  setResponse,
}: {
  setResponse: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [prompt, setPrompt] = useState("");

  const mutation = useMutation({
    mutationFn: () => {
      return axios.post("http://localhost:8080/prompt", { prompt });
    },
  });

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      mutation.mutate();
    } catch (error) {
      console.error("Error submitting url: ", error);
    }
  };
  mutation.isLoading && setResponse("Loading data...");
  mutation.isError && setResponse("Error: " + mutation.error);
  mutation.isSuccess && setResponse(mutation.data.data.result);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="" className="text-white">
          Prompt:
        </label>
        <br />
        <textarea
          rows={5}
          name="prompt"
          onChange={(e) => setPrompt(e.target.value)}
          className="bg-transparent p-2 rounded border-2 outline-none border-white text-slate-200 w-1/2"
        />
        <br />
        <input
          type="submit"
          value="Generate"
          className="p-2 rounded text-2xl bg-slate-500 cursor-pointer hover:brightness-95"
        />
      </form>
    </div>
  );
}

export default PromptForm;
