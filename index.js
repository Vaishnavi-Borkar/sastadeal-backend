const express = require("express");
const { connection } = require("./config/db");

const { userRouter } = require("./routes/user");

require("dotenv").config();

const app = express();
app.use(express.json());
app.use("/users", userRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
  } catch (err) {
    console.log("error");
  }
  console.log(`server is running at port ${process.env.port}`);
});
