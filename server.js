const express = require("express");
const app = express();

const PORT = 3001;

let data = ["John Doe", "Jane Smith", "Alice Johnson"];

app.use(express.json());

app.get("/dashboard", (req, res) => {
  res.send(`
    <body style="font-family: Arial, sans-serif; text-align: center; margin-top: 50px;background-color: #f4f4f4; color: #1f1f1f; padding: 20px;">

    <p>Dashboard</p>
     <a href="/" style="text-decoration: none; color: #007bff; font-size: 20px;">Home</a>
    </body>
    `);
});

app.get("/", (req, res) => {
  res.send(`
    <body style="font-family: Arial, sans-serif; text-align: center; margin-top: 50px;background-color: #f4f4f4; color: #1f1f1f; padding: 20px;">
     <p>${JSON.stringify(data)}</p>
     <a href="/dashboard" style="text-decoration: none; color: #007bff; font-size: 20px;">Go to Dashboard</a>
    </body>
    <script>console.log("Welcome to the Home Page!");</script>
    `);
});

app.get("/api/data", (req, res) => {
  res.send(data);
});

app.post("/api/data", (req, res) => {
  const newEntry = req.body;
  console.log(newEntry);
  data.push(newEntry.name);
  return res.sendStatus(201);
});

// CRUD - Create, Read, Update, Delete

app.delete("/api/data", (req, res) => {
  data.pop();
  console.log("Deleted last entry");
  return res.sendStatus(203);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
