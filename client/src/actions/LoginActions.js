import alt from '../alt'
import axios from 'axios'
import config from '../config'
import Auth from '../Auth'

class LoginActions {
  constructor () {
    this.generateActions(
      'loginSuccess',
      'loginError',
      'inputChange'
    )
  }

  loginUser (userData) {
    return axios.post(`${config.baseUrl}/auth/login`, userData).then((response) => {
      if (!response.data.success) {
        this.loginError(response.data)
        return true
      }
      Auth.authenticateUser(response.data.token)
      this.loginSuccess(response)
      return true
    }).catch((response) => {
      this.loginError(response)
      return true
    })
  }
}

export default alt.createActions(LoginActions)
