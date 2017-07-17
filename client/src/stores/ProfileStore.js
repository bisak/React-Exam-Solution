import alt from '../alt'
import ProfileActions from '../actions/ProfileActions'
import toastr from 'toastr'

class ProfileStore {
  constructor () {
    this.bindActions(ProfileActions)
    this.cars = []
  }

  onGetProfileSuccess (data) {
    this.cars = data
  }

  onGetProfileError (error) {
    toastr.error('An error occured')
  }

  onDeleteCarSuccess (data) {
    this.cars = this.cars.filter(car => car.id !== data[1])
    toastr.options.positionClass = 'toast-bottom-right'
    toastr.success('Successfully deleted')
  }

  onDeleteCarError (error) {
    toastr.error('An error occured')
  }

}

export default alt.createStore(ProfileStore)
