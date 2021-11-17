const express = require("express");
const router = express.Router();
const Group = require("../../models/Group");
const User = require("../../models/User");
const passport = require("passport");
const validateCreateInput = require("../../validation/groups/create");
const validateAddUserInput = require("../../validation/groups/add_user");

router.get("/", (req, res) => {
  Group.find()
    .then(groups => res.json(groups))
    .catch(() => res.status(404).json({ nogroupsfound: "No groups found" }));
});

router.get("/:id", (req, res) => {
  Group.findOne({ _id: req.params.id })
    .then(group => res.json(group))
    .catch(() =>
      res.status(404).json({ nogroupfound: "No group found with that id" })
    );
});

router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { errors, isValid } = validateCreateInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const user = await User.findOne({ _id: req.body.owner_id }).then(
      user => user
    );
    const newGroup = new Group({
      name: req.body.name,
      owner: { _id: user.id, username: user.username, avatar: user.avatar },
      users: [{ _id: user.id, username: user.username, avatar: user.avatar }],
    });

    newGroup.save().then(group => res.json(group));
  }
);

router.patch("/add_user", async (req, res) => {
  const { errors, isValid } = validateAddUserInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  let user = await User.findOne({ _id: req.body.user_id }).then(user => user);

  let group = await Group.findOne({ _id: req.body.group_id }).then(
    group => group
  );
  group.users.push({
    _id: user.id,
    username: user.username,
    avatar: user.avatar,
  });
  group.save();
  res.json(group);
});

router.patch("/remove_user", async (req, res) => {
  let group = await Group.findOne({ _id: req.body.group_id }).then(
    group => group
  );
  group.users.forEach((user, i) => {
    if (user._id === req.body.user_id) {
      if (owner._id === req.body.user_id && group.users.length === 1) {
        Group.findOneAndDelete({ _id: group._id })
      } else if (owner._id === req.body.user_id) {
        group.users.splice(i, 1);
        group.owner = group.users[0];
      } else {
        group.users.splice(i, 1);
      }
    }
  });
  group.save();
  res.json(group);
});

router.delete("/:id", (req, res) => {
  Group.findOneAndDelete({ _id: req.params.id }).then(res.json("Success"));
});

module.exports = router;
