import OpenAI from "openai";

function App() {
  require("dotenv").config();

  const openAIClient = new OpenAI({
    apiKey: process.env["VITE_OPENAI_API_KEY"],
  });
  return <></>;
}

export default App;
