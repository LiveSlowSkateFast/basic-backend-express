import dotenv from 'dotenv'
import axios from 'axios'

dotenv.config()

export default class ManagementAPI {
  constructor() {
    this.tenant = process.env.AUTH0_TENANT
    this.auth0Domain = 'https://' + this.tenant + '.auth0.com'
    this.client_id = process.env.CLIENT_ID
    this.client_secret = process.env.CLIENT_SECRET
    this.getToken((err, body) =>
      this.access_token = body.access_token)
  }

  getToken(cb) {
    const data = {
      grant_type: 'client_credentials',
      client_id: this.client_id,
      client_secret: this.client_secret,
      audience: this.auth0Domain + '/api/v2/',
    }

    axios.post(this.auth0Domain + '/oauth/token', data, {
      headers: { 'content-type': 'application/json' },
    }).then(res => cb(null, res.data)).catch(err => cb(err))
  }

  getUser(sub, cb) {
    axios.get(this.auth0Domain + '/api/v2/users/' + sub, {
      headers: { Authorization: 'Bearer ' + this.access_token },
    }).then(res => cb(null, res.data)).catch(err => cb(err))
  }

}
