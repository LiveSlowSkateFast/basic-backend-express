import express from 'express'
import checkJwt from '../services/checkJwt'
import { Profile, Settings } from "../controlers";

const router = express.Router()
const profile = new Profile
const settings = new Settings

router.get('/', (req, res) => res.json({ stat: "ok" }))

router.get('/profile', checkJwt, (req, res, next) =>
  profile.get(req, (err, data) => err ? next(err) : res.json(data))
)

router.get('/resource-servers', checkJwt, (req, res, next) =>
  settings.getResourceServers((err, data) => err ? next(err) : res.json(data))
)

router.get('/resource-servers/:id/scopes', checkJwt, (req, res, next) =>
  settings.getResourceServerScopes(req.params.id, (err, data) => err ? next(err) : res.json(data))
)

router.get('/guardian/factors', checkJwt, (req, res, next) =>
  settings.getGuardianFactors((err, data) => err ? next(err) : res.json(data))
)

export default router