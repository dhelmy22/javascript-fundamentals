

require('dotenv').config();
let express = require(`express`);
let app = express();

let sequelize = require(`./db`);

let journal = require(`./controllers/journalcontroller`);

let user = require(`./controllers/usercontroller`);

sequelize.sync();

app.use(express.json());

app.use(`/user`, user);

// app.use(require('./middleware/validate-session'));   //this is the problem
app.use(`/journal`, journal);





// app.use(`/test`, function(req, res){
//     res.send(`this is a message from the server endpoint`)
// })

app.listen(3000, function () {
    console.log(`app is listening on port 3000`);
})
