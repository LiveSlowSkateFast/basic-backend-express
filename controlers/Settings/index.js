import ManagementAPI from '../../services/ManagementAPI'

export default class Settings {
  constructor() {
    this.api = new ManagementAPI
  }

  getResourceServers(cb) {
    this.api.getResourceServers((err, data) => {
      err ? cb(err) : cb(null, data.map(resource => ({
        name: resource.name,
        audience: resource.identifier,
        id: resource.id,
      })))
    })
  }

  getResourceServerScopes(resourceServerId, cb) {
    this.api.getResourceServers((err, data) => {
      err ? cb(err) : cb(null, data.filter(resource =>
        resource.id === resourceServerId)[0].scopes)
    })
  }

  getGuardianFactors(cb) {
    this.api.getGuardianFactors((err, data) => {
      err ? cb(err) : cb(null, data)
    })
  }

}