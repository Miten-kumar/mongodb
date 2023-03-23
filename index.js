const express = require("express");
const port = 3000;

require("./Mongodb");
const schema = require("./Scema");
const app = express();
app.use(express.json());

app.get("/list/:key", async (req, res) => {
  let data = await schema.find({
    $or: [
      { username: { $regex: req.params.key } },
      { password: { $regex: req.params.key } },
      { email: { $regex: req.params.key } },
      { role: { $regex: req.params.key } },
    ],
  });
  res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
