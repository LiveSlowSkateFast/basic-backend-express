import request from 'request-promise'
import dotenv from 'dotenv'

dotenv.config()

export default class BearerToken {
  constructor() {
    this.tenant = process.env.AUTH0_TENANT
    this.auth0Domain = 'https://' + this.tenant + '.auth0.com'
    this.client_id = process.env.CLIENT_ID
    this.client_secret = process.env.CLIENT_SECRET

    this.getToken(body => {
      this.access_token = body.access_token
    })
  }

  getToken(cb) {
    request({
      method: 'POST',
      url: this.auth0Domain + '/oauth/token',
      headers: { 'content-type': 'application/json' },
      body: {
        grant_type: 'client_credentials',
        client_id: this.client_id,
        client_secret: this.client_secret,
        audience: this.auth0Domain + '/api/v2/',
      },
      json: true
    }).then(body => cb(body)).catch(err => {
      console.log(err)
    })
  }

}
