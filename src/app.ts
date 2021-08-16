import express from "express";
import morgan from "morgan"; // See http request in console
import cors from "cors";
import passport from "passport";
import passportMiddleware from "./middlewares/passport";

import authRoutes from "./routes/auth.routes";
import privateRoutes from "./routes/private.routes";

// Initializations
const app = express();

// Setting
/* if env has a port use it, otherwise use by default 5000 */
app.set("port", process.env.PORT || 5000);

// Middlewares
// Initialize morgan in Dev
app.use(morgan("dev"));
app.use(cors());
app.use(passport.initialize());
passport.use(passportMiddleware);

// Understand data in json format
app.use(express.urlencoded({ extended: false }));
// Understand data in json format sent by client
app.use(express.json());

// Routes
app.get("/", (req, res, next) => {
  res.send(`The server is running at http://localhost:${app.get("port")}`);
});

app.use("/api/user", authRoutes);
app.use("/api/products", privateRoutes);

export default app;
