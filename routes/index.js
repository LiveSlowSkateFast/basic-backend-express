import express from 'express'
import checkJwt from '../services/checkJwt'
import BearerToken from '../services/BearerToken'

const token = new BearerToken

const router = express.Router()

router.get('/', (req, res) =>
  res.json({ stat: "ok" })
)

router.get('/profile', checkJwt, (req, res) =>
  res.json({ profile: "test" })
)

router.get('/test', (req, res) => {
  res.json({
    test: 'test',
    token: token.access_token,
  })
})

export default router