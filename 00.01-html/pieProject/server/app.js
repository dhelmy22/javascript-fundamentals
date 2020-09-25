
//  ENV
require('dotenv').config();


// EXPRESS
const express = require(`express`);
const app = express();

// Controllers
const pies = require('./controllers/piecontrollers')
const user = require(`./controllers/usercontroller`)



//  Database
const sequelize = require(`./db`);
sequelize.sync();
app.use(express.json());

// Routes
app.use(require(`./middleware/validate-session`))  
app.use(require(`./middleware/headers`))
app.use(`/auth`, user)
app.use(`/pies`, pies)
// app.get(`/about`, (req, res) => res.send(`I love myself!`))


//  Listening
app.listen(process.env.PORT, () => console.log(`app is listening on ${process.env.PORT}`))

// '''''''''''''''''''''on the .env under the password, we use the same password we use to log into postgres and the name is the name of the database '''''''''''''''''