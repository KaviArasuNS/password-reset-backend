require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users.js");
const authRoutes = require("./routes/auth.js");
const passwordResetRoutes = require("./routes/passwordReset.js");

// database connection
connection();

//middlewares
app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  res.send("Server Is Running, Catch It If You Can");
});

//routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/password-reset", passwordResetRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
