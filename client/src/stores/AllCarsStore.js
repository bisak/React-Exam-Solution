import alt from '../alt'
import AllCarsActions from '../actions/AllCarsActions'
import toastr from 'toastr'

class AllCarsStore {
  constructor () {
    this.bindActions(AllCarsActions)
    this.items = 20
    this.cars = []
    this.activePage = 1
    this.search = ''
    this.noProductsAvailable = false
  }

  onGetCarsSuccess (resp) {
    this.cars = resp[0]
    this.activePage = resp[1]
    this.search = resp[2]
    if (this.cars.length === 0) {
      this.noProductsAvailable = true
    } else {
      this.noProductsAvailable = false
    }
    window.scrollTo(0, 0)
  }

  onGetCarsError (error) {
    console.log(error)
    toastr.error('An error occured when getting posts.')
  }

  onInputChange (event) {
    const target = event.target
    this.search = target.value
  }
}

export default alt.createStore(AllCarsStore)
