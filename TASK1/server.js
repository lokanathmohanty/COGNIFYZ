// 1. Importing Required Modules
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3001;

// Set EJS as the view engine
app.set("view engine", "ejs");

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Routes
app.get("/", (req, res) => {
  res.render("index", { message: "" });
});

// Form Submission Route
app.post("/submit", (req, res) => {
  const { name, email, message } = req.body;
 
  // Here you would typically save the data to a database
  console.log("Form submission:", { name, email, message });
  res.render("index", {
    message: "Thank you for your submission!",
    submittedData: { name, email, message },
  });
});

// 5. Server Start
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
