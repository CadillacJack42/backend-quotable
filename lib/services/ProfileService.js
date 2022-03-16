const fetch = require('cross-fetch');
const Profile = require('../models/Profile');

module.exports = class ProfileService {
  static async create({ name }) {
    // TODO: Implement me!
    const quote = fetch('https://futuramaapi.herokuapp.com/api/quotes/1');
    console.log('QUOTE: ', quote);
  }
};
