const express = require('express');
const cors = require('cors');
const app = express();
const localPort = 8000;
require('dotenv').config();

require('./config/mongoose.config');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./routes/card.routes')(app);
require('./routes/pokedex.routes')(app);

const herokuPort = process.env.PORT
console.log(herokuPort)

app.listen(herokuPort || localPort, () => {
    console.log(`We're up and rolling on port ${localPort}!`)
    console.log(`Heroku is connected on ${herokuPort}`)
});