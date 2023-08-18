import express from "express";

const app = express();

app.use(express.json());

app.get("/:paramento/banana", function (req, res) {
  console.log(req.query);
  console.log(req.params);
  console.log(req.body);
  console.log("rota");

  res.json({ teste: 1 });
});

app.listen(3000, function () {
  console.log("Servidor rodando na porta 3000. Acesse http://localhost:3000");
});
