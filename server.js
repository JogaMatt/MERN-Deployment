const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

require('./server/config/mongoose.config');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./server/routes/card.routes')(app);
require('./server/routes/pokedex.routes')(app);

app.listen(port, () => console.log(`We're up and rolling on port ${port}!`));