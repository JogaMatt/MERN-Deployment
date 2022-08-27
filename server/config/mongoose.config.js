const mongoose = require('mongoose');
const database = 'cards'
const CONNECTION_URL = 'mongodb+srv://JogaMatt:LilMan315@cluster0.i3421pe.mongodb.net/?retryWrites=true&w=majority'


mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log(`Established a connection to the ${database} database!`))
    .catch(err => console.log(`Something went wrong: ${err}`));
