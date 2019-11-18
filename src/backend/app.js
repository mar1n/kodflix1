const express = require('express')
const app = express()

const activityList = require('./activity-get')

app.get('/rest/shows', (req, res) => {
   return res.send(activityList);
 });

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})