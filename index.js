const express = require('express');

const app = express();
const port = 3000;

const StateCtrl = require('./controllers/Statecontroller')
const list = require('./controllers/Statecontroller')

app.get("/", StateCtrl.list)

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
})  