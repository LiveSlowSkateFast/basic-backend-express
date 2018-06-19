const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://` + process.env.AUTH0_TENATE +
        `.auth0.com/.well-known/jwks.json`
    }),

    audience: process.env.CLIENT_ID,
    issuer: `https://` + process.env.AUTH0_TENATE + `.auth0.com/`,
    algorithms: ['RS256']
  })

export default checkJwt