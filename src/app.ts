import express from "express";
import morgan from "morgan"; // ver peticiones en consola get, post...
import cors from "cors";

//initializations
const app = express();

//setting
/* Use si esta disponible el puerto especificado en las variables de entorno, 
si no esta, use el 5000 */
app.set("port", process.env.PORT || 5000);

//middlewares
app.use(morgan("dev")); // inicializa morgan dev
app.use(cors());

// entender datos en formato JSON
app.use(express.urlencoded({ extended: false }));
// modulo json para entender los datos ne formato json que lleguen
app.use(express.json());

//routes
app.get("/", (req, res, next) => {
  res.send(`The server is running at http://localhost:${app.get("port")}`);
});

export default app;
