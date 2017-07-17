import alt from '../alt'
import axios from 'axios'
import config from '../config'
import Auth from '../Auth'

class SingleCarActions {
  constructor () {
    this.generateActions(
      'getSingleCarSuccess',
      'getSingleCarError',
      'addCommentSuccess',
      'addCommentSuccess',
      'getCommentsSuccess',
      'getCommentsError',
      'addLikeSuccess',
      'addLikeError',
      'inputChange'
    )
  }

  getSingleCar (id) {
    return axios.get(`${config.baseUrl}/cars/details/${id}`, { headers: Auth.getAuthHeader() }).then(response => {
      if (response.data.make || response.data.success) {
        this.getSingleCarSuccess(response.data)
      } else {
        this.getSingleCarError(response.data.message)
      }
      return true
    }).catch(error => {
      this.getSingleCarError(error)
      return true
    })
  }

  addReview (comment, rating, id) {
    return axios.post(`${config.baseUrl}/cars/details/${id}/reviews/create`, { rating, comment }, { headers: Auth.getAuthHeader() }).then(response => {
      if (response.data.success) {
        this.addCommentSuccess(response.data)
      } else {
        this.addCommentError('An error occured')
      }
      return true
    }).catch(error => {
      this.addCommentError('An error occured')
      return true
    })
  }

  getReviews (id) {
    return axios.get(`${config.baseUrl}/cars/details/${id}/reviews`, { headers: Auth.getAuthHeader() }).then(response => {
      if(!response.data.length && !response.data.success){
        return true
      }
      this.getCommentsSuccess(response.data)
      return true
    }).catch(error => {
      this.getCommentsError('An error occured')
      return true
    })
  }

  likeCar (id) {
    return axios.post(`${config.baseUrl}/cars/details/${id}/like`, {}, { headers: Auth.getAuthHeader() }).then(response => {
      if (response.data.success) {
        this.addLikeSuccess(response.data)
      } else {
        this.addLikeError(response.data.message)
      }
      return true
    }).catch(error => {
      this.addLikeError('An error occured')
      return true
    })
  }

}
export default alt.createActions(SingleCarActions)
