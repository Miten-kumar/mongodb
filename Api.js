const express = require("express");
const app = express();
const dbconnect = require("./Mongodb");
const mongodb=require("mongodb")

const port = 5000;
app.use(express.json());
app.get("/", async (req, res) => {
  let Data = await dbconnect();
  Data = await Data.find().toArray();
  res.send(Data);
});
app.post("/", async (req, res) => {
  let Data = await dbconnect();
  let result =await Data.insertOne(req.body);
  // console.log(req.body);
  res.send(result);
});
app.put('/:xyz', async (req, res) => {
  console.log(res.body);
  let Data = await dbconnect();
  let result =await Data.updateOne({username:req.params.xyz},{$set:req.body});
console.log(result);

  res.send({result:"update"})
})
app.delete('/:id',async (req, res) => {
 
  let Data = await dbconnect();
  let result =await Data.deleteOne({ _id:new mongodb.ObjectId( req.params.id)}); 
  res.send(result)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})