import express from 'express'
import checkJwt from '../services/checkJwt'

const router = express.Router()

router.get('/', (req, res, next) =>
  res.json({ stat: "ok" })
)

router.get('/profile', checkJwt, (req, res, next) =>
  res.json({ profile: "test" })
)

export default router