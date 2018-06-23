import jwt from 'express-jwt'
import jwksRsa from 'jwks-rsa'
import dotenv from 'dotenv'

dotenv.config()

const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://` + process.env.AUTH0_TENANT +
        `.auth0.com/.well-known/jwks.json`
    }),
    audience: process.env.AUDIENCE || process.env.DOMAIN,
    issuer: `https://` + process.env.AUTH0_TENANT + `.auth0.com/`,
    algorithms: ['RS256']
  })

export default checkJwt