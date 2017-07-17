import alt from '../alt'
import LoginActions from '../actions/LoginActions'
import history from '../history'
import toastr from 'toastr'

class LoginStore {
  constructor () {
    this.bindActions(LoginActions)
    this.user = {
      email: '',
      password: ''
    }
  }

  onInputChange (event) {
    const target = event.target
    const fieldName = target.name
    const value = target.value
    this.user[fieldName] = value
  }

  onLoginSuccess (response) {
    history.push('/')
    toastr.options.positionClass = 'toast-bottom-right'
    toastr.success('Logged in.')
  }

  onLoginError (error) {
    toastr.options.positionClass = 'toast-bottom-right'
    toastr.error(error.message || 'An error ocurred')
  }
}

export default alt.createStore(LoginStore)
