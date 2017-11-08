const express = require('express');
const app = express();
const PORT = 3000;
const register = require("./facade/FriendFacade");
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Friend Finder Demo!');
})

app.post('/api/friends/register/:distance', function (req, res) {
  console.log("er vi her?");
  let coords = req.body.loc.coordinates;
  console.log("eller her?");
  console.log(coords);
  if (coords.length = 2) {
    register(req.body.userName, [coords[0], coords[1]], req.params.distance, function (err, docs) {
      if (err) {
        res.status(400).send(err);
      }

      console.log("DOCS", JSON.stringify(docs, null, "  "));
      res.send(JSON.stringify(docs, null, "  "));
    });
  } else {
    res.status(400).send("we done goofed");
  }

})

app.listen(PORT, function () {
  console.log(`Friend Finder App listening on port ${PORT}`);
})