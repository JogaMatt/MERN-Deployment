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

app.listen(process.env.PORT || localPort, () => console.log(`We're up and rolling on port ${localPort}!`));