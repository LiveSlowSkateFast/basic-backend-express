import { ManagementClient } from 'auth0'
import profileModel from '../../models/profile'

export default class Profile {
  constructor() {
    this.auth0 = new ManagementClient({
      domain: process.env.AUTH0_TENANT + '.auth0.com',
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    })
  }

  get(req, cb){
    this.auth0.getUser({id: req.user.sub}, (err, data) => {
      err ? cb(err) : cb(null, profileModel(data))
    })
  }

}