import ManagementAPI from '../../services/ManagementAPI'
import profileModel from '../../models/profile'

export default class Profile {
  constructor() {
    this.api = new ManagementAPI
  }

  get(req, cb){
    this.api.getUser(req.user.sub, (err, data) => {
      err ? cb(err) : cb(null, profileModel(data))
    })
  }

}