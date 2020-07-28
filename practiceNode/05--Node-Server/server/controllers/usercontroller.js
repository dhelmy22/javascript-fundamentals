
let router = require(`express`).Router();
let User = require(`../db`).import(`../models/user`);
const jwt = require('jsonwebtoken');
const bcrypt = require(`bcryptjs`);

// ''''''''''''''''' USER SIGNUP '''''''''''''''''''

router.post('/create', function (req, res) {
    User.create({
        email: req.body.user.email,
        password: bcrypt.hashSync(req.body.user.password, 13)
    })
        .then(
            function createSuccess(user) {
                let token = jwt.sign({ id: user.id, }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 });

                res.json({
                    user: user,
                    message: `User successfully created!`,
                    sessionToken: token
                });
            }
        )
        .catch(err => res.status(500).json({ error: err }))
});

// '''''''' User Signin ''''''''
router.post(`/login`, function (req, res) {
    User.findOne({
        where: {
            email: req.body.user.email
        }
    })
        .then(function loginSuccess(user) {
            if (user) {
                bcrypt.compare(req.body.user.password, user.password, function(err, matches){
                    if(matches){
                        let token = jwt.sign({ id: user.id, }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 });
                        res.status(200).json({
                            user: user,
                            message: `User successfully logged in!`,
                            sessionToken: token
                        })

                    }else{
                        res.status(502).send({error: `Login Failed`})
                    }
                });

            } else {
                res.status(500).json({ error: `User does not exist.` })
            }
        })

        .catch(err => res.status(500).json({ error: `User does not exist.` }))

})



module.exports = router;

// "sessionToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNTk1NDI3MTA5LCJleHAiOjE1OTU1MTM1MDl9.S4PdpM4Kd7NXpiAbu9G-cP2XQ15IyzZNI5EsxHY6WJk"
