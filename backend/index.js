const express = require("express");
const { default: OpenAI } = require("openai");
const app = express();
const cors = require("cors");

require("dotenv").config();

const port = 8080;

const openai = new OpenAI();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/prompt", async (req, res) => {
  const { prompt } = req.body;

  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: prompt }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
  console.log("prompt: ", prompt);

  return res.json({ result: completion.choices[0].message.content });
});

app.listen(port, () => {
  console.log("Listening to port " + port);
});
