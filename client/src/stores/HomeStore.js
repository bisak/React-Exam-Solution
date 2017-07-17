import alt from '../alt'
import HomeActions from '../actions/HomeActions'

class HomeStore {
  constructor () {
    this.bindActions(HomeActions)
    this.users = 0
    this.cars = 0
  }

  onGetHomeStatsSuccess (response) {
    this.users = response.users
    this.cars = response.cars
  }
}

export default alt.createStore(HomeStore)
