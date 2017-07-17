import alt from '../alt'
import axios from 'axios'
import config from '../config'

class AllCarsActions {
  constructor () {
    this.generateActions(
      'getCarsSuccess',
      'getCarsError',
      'changePageSuccess',
      'inputChange'
    )
  }

  getOnePageProducts (page, search) {
    if (!search) search = ''
    return axios.get(`${config.baseUrl}/cars/all?page=${page}&search=${search}`).then((response) => {
      this.getCarsSuccess(response.data, page, search)
      return true
    }).catch((error) => {
      console.log(error.response)
      this.getCarsError(error)
      return true
    })
  }
}

export default alt.createActions(AllCarsActions)
