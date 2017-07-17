import alt from '../alt'
import SingleCarActions from '../actions/SingleCarActions'
import history from '../history'
import toastr from 'toastr'

class SingleCarStore {
  constructor () {
    this.bindActions(SingleCarActions)
    this.car = {
      make: '',
      model: '',
      year: '',
      engine: '',
      price: '',
      image: '',
      mileage: '',
      likes: ''
    }
    this.reviews = []
    this.comment = ''
    this.rating = 5
    this.isLikeBtnDisabled = false
  }

  onGetSingleCarSuccess (response) {
    this.car = response
  }

  onGetSingleCarError (error) {
    history.replace('/not-found')
    toastr.options.positionClass = 'toast-bottom-right'
    toastr.error(error)
  }

  onInputChange (event) {
    const { target } = event
    const fieldName = target.name
    let value = target.value
    this[fieldName] = value
  }

  onAddCommentSuccess (data) {
    toastr.options.positionClass = 'toast-bottom-right'
    toastr.success('Successfully added review.')
    this.reviews.unshift(data.review)
    this.comment = ''
  }

  onAddCommentError (error) {
    toastr.options.positionClass = 'toast-bottom-right'
    toastr.error(error)
  }

  onGetCommentsSuccess (data) {
    this.reviews = data
  }

  onAddLikeSuccess (data) {
    this.car.likes += 1
    this.isLikeBtnDisabled = true
    toastr.options.positionClass = 'toast-bottom-right'
    toastr.success('Successfully liked car')
  }

  onAddLikeError (error) {
    toastr.options.positionClass = 'toast-bottom-right'
    this.isLikeBtnDisabled = true
    toastr.error(error)
  }

  onGetCommentsError (error) {
    toastr.options.positionClass = 'toast-bottom-right'
    toastr.error(error)
  }

}

export default alt.createStore(SingleCarStore)
