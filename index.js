const express = require("express");
const productRouter = require("./productRouter");
const vistaRouter = require("./vistaRouter");

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));

app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/api", productRouter);
app.use("/productos", vistaRouter);

const server = app.listen(PORT, () =>
  console.log(
    `El servidor esta corriendo en el puerto: ${server.address().port}`
  )
);

server.on("error", (err) => console.log(`Error de servidor: ${err}`));
