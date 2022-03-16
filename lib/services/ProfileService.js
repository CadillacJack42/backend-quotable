const fetch = require('cross-fetch');
const Profile = require('../models/Profile');

module.exports = class ProfileService {
  static async create({ name }) {
    // TODO: Implement me!
    const quote = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1');

    const profile = await Profile.insert({
      name,
      quote,
    });
    return profile;
  }
};
