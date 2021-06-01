import express from "express";
import cors from "cors";

const app = express();
const corsMiddleware = cors();

app.get("/data", corsMiddleware, (_, res) => {
  res.send({ data: [1, 2, 3, 4] });
});

app.get("/err", (_, res) => {
  res.status(500).send({ error: true, msg: "This was unexpected...?" });
});

app.get("/err-cors", corsMiddleware, (_, res) => {
  res.status(500).send({ error: true, msg: "This was unexpected...?" });
});

app.listen(4000, () => {
  console.log("Listening at http://localhost:4000");
});
