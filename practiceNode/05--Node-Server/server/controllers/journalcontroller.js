

let express = require(`express`);
let router = express.Router();
let validateSession = require(`../middleware/validate-session`);
let Journal = require(`../db`).import(`../models/journal`);

// router.get('about', ()=> {
//     res.send(`im going crazy right now`);
// })

router.get('/practice', validateSession, function (req, res) {
    res.send(`hey. this is a paractice response`);
})

// '''''''''''''''''' Journal Create ''''''''''''''''''''''''''''''

router.post(`/create`, validateSession, (req, res) => {

    const journalEntry = {
        title: req.body.journal.title,
        date: req.body.journal.date,
        entry: req.body.journal.entry,
        owner: req.user.id
    }
    Journal.create(journalEntry)
        .then(journal => res.status(200).json(journal))
        .catch(err => res.status(500).json({ error: err }))
})

// '''''''''''''''' Get All Entries '''''''''''''''''''''''

router.get(`/`, (req, res) => {

    Journal.findAll()
        .then(journals => res.status(200).json(journals))
        .catch(err => res.status(500).json({ error: err }))

});

// '''''''''''''''''' Get Entries By User '''''''''''''''''''''

router.get(`/mine`, validateSession, (req, res) => {

    let userid = req.user.id
    Journal.findAll({
        where: { owner: userid }
    })
        .then(journals => res.status(200).json(journals))
        .catch(err => res.status(500).json({ error: err }))
});

// '''''''''''''''''''' Get Entries By Title ''''''''''''''''''''''

router.get(`/:title`, function (req, res) {

    let title = req.params.title;

    Journal.findAll({
        where: { title: title }
    })
        .then(journals => res.status(200).json(journals))
        .catch(err => res.status(500).json({ error: err }))
});

// '''''''''''''''''''''' Update ''''''''''''''''''''''''''''''''''''

router.put(`/update/:entryId`, validateSession, function (req, res) {

    const updateJournalEntry = {
        title: req.body.journal.title,
        date: req.body.journal.date,
        entry: req.body.journal.entry,
    };
    const query = { where: { id: req.params.entryId, owner: req.user.id } };

    Journal.update(updateJournalEntry, query)

        .then(journals => res.status(200).json(journals))
        .catch(err => res.status(500).json({ error: err }))
});

// ''''''''''''''''''''Deleting An Entry'''''''''''''''''''''''''''''''''

router.delete(`/delete/:entryId`, validateSession, function (req, res) {

    const query = { where: { id: req.params.entryId, owner: req.user.id } };

    Journal.destroy(query)

        .then(journals => res.status(200).json(journals))
        .catch(err => res.status(500).json({ error: err }))

});




module.exports = router