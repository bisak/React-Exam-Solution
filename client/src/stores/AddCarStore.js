import alt from '../alt'
import AddProductActions from '../actions/AddCarActions'
import toastr from 'toastr'
import history from '../history'

class AddCarStore {
  constructor () {
    this.bindActions(AddProductActions)
    this.car = {
      make: '',
      model: '',
      year: '',
      engine: '',
      price: '',
      image: '',
      mileage: ''
    }
  }

  addCarSuccess (response) {
    alt.recycle(this)
    toastr.options.positionClass = 'toast-bottom-right'
    toastr.success('Car added successfully')
    history.push(`/cars/details/${response.car.id}`)
  }

  onAddCarError (error) {
    toastr.options.positionClass = 'toast-bottom-right'
    toastr.error(error)
  }

  onInputChange (event) {
    const target = event.target
    const fieldName = target.name
    let value = target.value
    this.car[fieldName] = value
  }
}

export default alt.createStore(AddCarStore)
