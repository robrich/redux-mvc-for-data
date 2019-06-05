process.env.rootPath = __dirname;
const bodyParser = require('body-parser');
const express = require('express');

const port = process.env.PORT || 3030;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/api', (req, res) => {
  if (req.body.fail) {
    res.status(500).json({success:false, ...req.body});
  } else {
    res.json({success:true, ...req.body});
  }
});

app.listen(port, function (err) {
  if (err) {
    throw err;
  }
  console.log(`listening on port ${port}`);
});
