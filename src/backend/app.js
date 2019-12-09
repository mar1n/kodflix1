const express = require('express')
const app = express()
const path = require('path');
//const activityList = require('./activity-get')
const port = process.env.PORT || 3001;
const db = require('./db')



// db.connect
// app.get('/rest/activity', (req, res) => {
//    return res.send(activityList);
// });

// app.use(express.static(path.join(__dirname, '../../build')));

// app.get('*', function (req, res) {
//    res.sendFile(path.join(__dirname, '../../build', './public/index.html'));
// });

// var server = app.listen(port, function () {
//    var host = server.address().address
//    var port = server.address().port
//    console.log("Example app listening at http://%s:%s", host, port)
// })

db.connect().then(dbo => {
   app.get('/rest/activity', (req, res) => {
      dbo.collection('sport').find({}).toArray((err, results) => {
          if (err) throw err;
          res.send(results);
      });
  });
  // Serve any static files
  app.use(express.static(path.join(__dirname, '../../build')));
  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
      res.sendFile(path.join(__dirname, '../../build', 'index.html'));
  });

  app.listen(port, () => console.log(`Listening on port ${port}`));
});