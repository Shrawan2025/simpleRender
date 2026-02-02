const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API is running 🚀" });
});

app.get("/api/hello", (req, res) => {
  res.json({ hello: "Hello from Render!" });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
