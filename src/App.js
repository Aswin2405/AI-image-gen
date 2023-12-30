import './App.css';
import { Configuration, OpenAIApi } from "openai"
import { useState } from 'react';
function App() {
  const[prompt,setPrompt] = useState("");
  const[result,setResult] = useState("");

  const configuration = new Configuration({
    apiKey: "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", //c
  });

  const openai = new OpenAIApi(configuration);
  const generateImage = async () =>{
    const res = await openai.createImage({
      prompt:prompt,
      n:1,
      size:"1024x1024"
  })
  setResult(res.data.data[0].url)
  }

  return (
    <div className="App">
      <input placeholder="Type something..." onChange={(e)=>setPrompt(e.target.value)} />
      <button onClick={generateImage}>Generate Image</button>
      <h1>{result}</h1>
      <image src={result} alt="result" />
    </div>
  );
}

export default App;
