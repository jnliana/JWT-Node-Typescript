import app from "./app";

// Aca corre en el puerto que ya fue definido en app.set('port')
app.listen(app.get("port"));
console.log("Server on port", app.get("port"));
