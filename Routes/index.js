import express from "express";
const router = express.Router();

//GET ALL
router.get("/", async function (req, res, next) {
  res.render("index", { title: "books" });
});


export default router;