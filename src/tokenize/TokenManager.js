
const Jwt = require('@hapi/jwt');
const process = require('process');

// untuk generate secret key / access token key untk jwt
// require('crypto').randomBytes(64).toString('hex');

const TokenManager = {
  generateAccessToken: (payload) => Jwt.token.generate(payload, process.env.ACCESS_TOKEN_KEY)
};

module.exports = TokenManager;