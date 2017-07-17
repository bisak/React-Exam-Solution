import alt from '../alt'
import axios from 'axios'
import config from '../config'
import Auth from '../Auth'

class ProfileActions {
  constructor () {
    this.generateActions(
      'getProfileSuccess',
      'getProfileError',
      'deleteCarSuccess',
      'deleteCarError'
    )
  }

  getProfile (username) {
    return axios.get(`${config.baseUrl}/cars/mine`, { headers: Auth.getAuthHeader() }).then(response => {
      this.getProfileSuccess(response.data)
      return true
    }).catch(error => {
      this.getProfileError(error)
      return true
    })
  }

  deleteCar (id) {
    return axios.post(`${config.baseUrl}/cars/delete/${id}`, {}, { headers: Auth.getAuthHeader() }).then(response => {
      this.deleteCarSuccess(response.data, id)
      return true
    }).catch(error => {
      this.deleteCarError(error)
      return true
    })
  }
}

export default alt.createActions(ProfileActions)
