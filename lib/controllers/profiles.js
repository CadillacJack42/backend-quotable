const { Router } = require('express');
const Profile = require('../models/Profile');
const ProfileService = require('../services/ProfileService');

module.exports = Router().post('/', async (req, res, next) => {
  // TODO: Implement me!
  const profile = await Profile.insert({
    name: req.body.name,
    quote:
      "I'm the one whos gotta go when it's time for me to die, so let me live my life",
  });
  res.json(profile);
});
