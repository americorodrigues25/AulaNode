const request = require("express");
const app = request();
const port = 3000;

app.get("/teste", (req, res) => {
  res.send(`Você está conectado na porta: ${port}`);
});

app.listen(port, () => {
    console.log('O servidor está disponivel')
});
