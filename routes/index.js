import express from 'express'
import checkJwt from '../services/checkJwt'
import { Profile } from "../controlers";

const router = express.Router()
const profile = new Profile

router.get('/', (req, res) => res.json({ stat: "ok" }))

router.get('/profile', checkJwt, (req, res, next) =>
  profile.get(req, (err, data) => err ? next(err) : res.json(data))
)

export default router