const fetch = require('cross-fetch');
const Profile = require('../models/Profile');

module.exports = class ProfileService {
  static async create({ name }) {
    // TODO: Implement me!
    const result = await fetch(
      'https://futuramaapi.herokuapp.com/api/quotes/1'
    );
    const quote = await result.json();

    const profile = await Profile.insert({
      name,
      quote: quote[0].quote,
    });
    return profile;
  }
};
