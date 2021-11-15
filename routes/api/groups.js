const express = require("express");
const router = express.Router();
const Group = require('../../models/Group');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const validateGroupInput = require('../../validation/groups/groups')
const Group = require('../../models/Group')

router.get('/', (req,res) => {
    Group.find()
        .then(groups => res.json(groups))
        .catch(res.status(404).json({nogroupsfound: "No groups found"}))
})

router.get('/:id', (req, res) => {
    Group.findOne({ id })
        .then(group => res.json(group))
        .catch(res.status(404).json({ nogroupfound: "No group found with that id" }))
})

router.get('/create', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validateGroupInput(req.body);

    if (!isValid){
        return res.status(400).json(errors);
    }

    const newGroup = new Group({
        name: req.body.name,
        owner: req.body.owner_id,
        users: [req.body.owner_id]
    }) 

    newGroup.save()
        .then(group => res.json(group))
})


module.exports = router;