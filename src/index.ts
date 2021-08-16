import app from "./app";
import "./database";

// Uses the port define in app.set('port')
app.listen(app.get("port"));
console.log("Server on port", app.get("port"));
