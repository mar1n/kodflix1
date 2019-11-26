const express = require('express')
const app = express()

const activityList = require('./activity-get')
const port = process.env.PORT || 3001
app.get('/rest/shows', (req, res) => {
   return res.send(activityList);
 });

var server = app.listen(port, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})