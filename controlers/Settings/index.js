import axios from 'axios'
import dotenv from 'dotenv'
import { ManagementClient } from 'auth0'

dotenv.config()

export default class Settings {

  constructor() {
    this.auth0 = new ManagementClient({
      domain: process.env.AUTH0_TENANT + '.auth0.com',
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    })
  }

  getResourceServers(cb) {
    this.auth0.getResourceServers((err, data) => {
      err ? cb(err) : cb(null, data.map(resource => ({
        name: resource.name,
        audience: resource.identifier,
        id: resource.id,
      })))
    })
  }

  getResourceServerScopes(resourceServerId, cb) {
    this.auth0.getResourceServers((err, data) => {
      err ? cb(err) : cb(null, data.filter(resource =>
        resource.id === resourceServerId)[0].scopes)
    })
  }

}