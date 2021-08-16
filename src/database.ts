import mongoose, { ConnectOptions } from "mongoose"; // este es un modulo de conexion mongoose
import config from "./config/config";

// Config option to avoid error with mongoose
const dbOptions: ConnectOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
};

// Connection with the DB
mongoose.connect(config.DB.URI, dbOptions);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection stablished");
});

connection.on("error", (err) => {
  console.log("Error", err);
  process.exit(0);
});
