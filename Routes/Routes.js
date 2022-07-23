import express from "express";
import { response } from "express";
import { query } from "../index.js";
const router = express.Router();

import {
  getAllReviews,
  getSearchedReview
 } from "../Models/Models.js";

//GET BY SEARCHED QUERY
router.get("/", async function (req, res) {
  const searchField = req.query.title;
  console.log(`${searchField} + line 14`);
  // console.log(`searched query log: ${searchField}`);

  const responseObject = {
    success: true,
    payload: await getSearchedReview(searchField),
  };
  console.log(responseObject);
  res.json(responseObject);
  console.log(`${response} + line 23`);
});

 router.get("/", async function (req, res){
   console.log('hi');
  const responseObject = {
      success: true,
      payload: await getAllReviews(),
  };
  res.json(responseObject);
  console.log(`${response} + line 33`);
});




// router.get("/", async function (req, res) {
//   console.log(`Test received`)
//   const searchQuery = req.query.title;
//   console.log(`searched query log: ${searchQuery}`);
//   // const result = await getSnippets(title);

//   // define the object it'll return
//   const responseObject = {
//     success: true,
//     data: await getSnippets(searchQuery),
//     message: "please heckin work!",
//   };
//   // confirm in the console what the client requested
//   console.log(`router get request worked`);

//   // return the response object (defined above) as JSON
//   res.json(responseObject);
// });

// router.post("/", async function (req, res) {
//   const newSnippet = req.body;
//   const result = createNewSnippet(newSnippet);
//   res.json({ success: true, data: await result });
// });

// router.delete("/:id", async function (req, res) {
//   const id = Number(req.params.id);
//   const result = deleteSnippet(id);
//   res.json({ success: true, data: await result });
// });

export default router;
