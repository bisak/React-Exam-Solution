import alt from '../alt'
import axios from 'axios'
import config from '../config'
import Auth from '../Auth'

class AddCarActions {
  constructor () {
    this.generateActions(
      'addCarSuccess',
      'addCarError',
      'inputChange'
    )
  }

  addProduct (carToAdd) {
    return axios.post(`${config.baseUrl}/cars/create`, carToAdd, { headers: Auth.getAuthHeader() }).then((response) => {
      if (response.data.success) {
        this.addCarSuccess(response.data)
      } else {
        this.addCarError('An error occured')
      }
      return true
    }).catch((error) => {
      this.addCarError(error)
      return true
    })
  }
}

export default alt.createActions(AddCarActions)
