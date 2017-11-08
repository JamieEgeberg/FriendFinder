const express = require('express');
const app = express();
const PORT = 3000;
const register = require("./facade/FriendFacade");
import { Constants, Location, Permissions } from 'expo';


app.get('/', function (req, res) {
  res.send('Friend Finder Demo!')
})

app.post('/api/friends/register/:distance', function (req, res) {
  let pos=Location.getCurrentPositionAsync({});
  register("Mister Me", [pos.coords.latitude, pos.coords.longitude], 90, function (err, docs) {
    if (err) {
      return console.log("ERROR", err)
    }
    console.log("DOCS", JSON.stringify(docs, null, "  "));
  });

})

app.listen(PORT, function () {
  console.log(`Friend Finder App listening on port ${PORT}`);
})