const bodyParser = require('body-parser');
const cors = require('cors');
const tableCreationRouter = require('./router/tableCreationRouter.js');
const express = require('express');

const app = express();
const port = 3001;


app.use(bodyParser.json());
app.use(cors());

app.use('/TableCreation', tableCreationRouter);

app.get('/',(req, res) => {
    res.json({"message": "DB3 Application WORKING"});
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })





