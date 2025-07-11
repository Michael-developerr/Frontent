const fs = require("fs");
const jsonServer = require("json-server");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, "db.json"));

server.use(jsonServer.defaults());

// Имитация задержки
server.use(async (req, res, next) => {
  await new Promise((r) => setTimeout(r, 800));
  next();
});

// Авторизация
server.use((req, res, next) => {
  if (!req.headers.authorization && req.path !== "/login") {
    return res.status(403).json({ message: "Auth Error" });
  }
  next();
});

// Логин
server.post("/login", jsonServer.bodyParser, (req, res) => {
  const { username, password } = req.body;
  const db = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "db.json"), "utf-8")
  );
  
  const user = db.users?.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    return res.json(user);
  }

  return res.status(403).json({ message: "AUTH ERROR" });
});

// Основной API
server.use(router);

server.listen(8000, () => {
  console.log("Server is running on port 8000");
});

