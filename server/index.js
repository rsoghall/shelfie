const express = require('express');
const bodyParser = require('body-parser');
const ctrl = require('./controller')
require('dotenv').config()

const app = express()
app.use(bodyParser.json())





const PORT = 4000
app.listen(PORT, () => console.log(`Server is listening on ` + PORT))