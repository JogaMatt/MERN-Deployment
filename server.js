const express = require('express');
const cors = require('cors');
const app = express();
const localPort = 8000;
require('dotenv').config();
const path = require('path')

require('./server/config/mongoose.config');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// USE ROUTES
require('./server/routes/card.routes')(app);
require('./server/routes/pokedex.routes')(app);

// Server static assets if in production
if(process.env.NODE_ENV === 'production'){
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

const herokuPort = process.env.PORT
console.log(herokuPort)

app.listen(herokuPort || localPort, () => {
    console.log(`We're up and rolling on port ${localPort}!`)
    console.log(`Heroku is connected on ${herokuPort}`)
});