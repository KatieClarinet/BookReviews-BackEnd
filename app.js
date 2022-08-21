import express from "express";
import cors from "cors";
const app = express();
const PORT = process.env.PGPORT || 3000;
import router from "./Routes/Routes.js";

app.use(express.json());
 app.use(cors())

// app.get('/products/:id', function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for all origins!'})
// })

// test route
app.get("/", function (req, res) {
  res.json({
    success: true,
    message: "Test route up and running!",
  });
});

app.use("/books", router);

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});