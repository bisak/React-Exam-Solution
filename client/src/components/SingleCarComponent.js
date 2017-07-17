import React, { Component } from 'react'
import { Row, Col, Image, Button } from 'react-bootstrap'
import SingleCarActions from '../actions/SingleCarActions'
import SingleCarStore from '../stores/SingleCarStore'
import alt from '../alt'
import ReviewForm from './sub-components/ReviewForm'
import Review from './sub-components/Review'
import Auth from '../Auth'
import moment from 'moment'

class SingleCarComponent extends Component {
  constructor (props) {
    super(props)
    this.state = SingleCarStore.getState()
    this.onChange = this.onChange.bind(this)
    this.carId = this.props.match.params.id
  }

  componentDidMount () {
    SingleCarStore.listen(this.onChange)
    SingleCarActions.getSingleCar(this.carId)
    SingleCarActions.getReviews(this.carId)
  }

  componentWillUnmount () {
    SingleCarStore.unlisten(this.onChange)
    alt.recycle(SingleCarStore)
  }

  onChange (state) {
    this.setState(state)
  }

  handleAddReview () {
    SingleCarActions.addReview(this.state.comment, this.state.rating, this.carId)
  }

  handleLike () {
    SingleCarActions.likeCar(this.carId)

  }

  render () {
    let reviews = this.state.reviews.map((review, index) => {
      return (
        <Review key={index} {...review} />
      )
    })

    let noReviewsMessage
    let reviewForm
    let likeBtn

    if (!reviews.length) {
      noReviewsMessage = <h5 className='text-center'>No reviews available for this car.</h5>
    }

    if (Auth.isUserAuthenticated()) {
      likeBtn = (<Button onClick={this.handleLike.bind(this)} className='smb center-block' bsStyle='success'>Like</Button>)
      if (this.state.isLikeBtnDisabled) {
        likeBtn = (<Button onClick={this.handleLike.bind(this)} className='smb center-block' disabled bsStyle='success'>Like</Button>)
      }
      reviewForm = (<ReviewForm comment={this.state.comment} rating={this.state.rating} onInput={SingleCarActions.inputChange} onAdd={this.handleAddReview.bind(this)} />)
    }

    return (
      <div className='container'>
        <Col className='z-depth-1' xs={12} sm={10} smOffset={1}>
          <Row><h4 className='text-center break-word'><strong>{this.state.car.make} {this.state.car.model}</strong> (${this.state.car.price})</h4></Row>
          <Row className='text-center'><p className='for-sale-since'>Posted {moment(this.state.car.createdOn).fromNow()}</p></Row>
          <Row>
            <Col xs={12} sm={10} smOffset={1}>
              <a href={this.state.car.image} rel='noopener noreferrer' target='_blank'>
                <Image className='center-block z-depth-1' alt='Component demo image' src={this.state.car.image} responsive rounded />
              </a>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={10} smOffset={1}>
              <div className='text-center break-word'>
                <br />
                <p className='profile-fnln'><strong>{this.state.car.make} {this.state.car.model}</strong> is a car made in <strong>{this.state.car.year}</strong>. It has <strong>{this.state.car.mileage || 'I don\'t know how many'}</strong> miles on it and <strong>{this.state.car.engine}</strong> engine. It costs <strong>${this.state.car.price}</strong>.</p>
              </div>
            </Col>
          </Row>
          <Row>{likeBtn}</Row>
          <Row><div className='text-center'><span>{this.state.car.likes} likes</span></div></Row>
        </Col>

        <Row>
          <Col className='review-form-container' xs={10} sm={10} md={6} smOffset={1} xsOffset={1} mdOffset={3}>
            {reviewForm}
          </Col>
        </Row>

        <Row className='bottom-profile-section'>
          <Col className='z-depth-1' xs={12} sm={10} smOffset={1}>
            <h4 className='text-center'>Reviews</h4>
            <hr />
            {reviews}
            {noReviewsMessage}
          </Col>
        </Row>

      </div>
    )
  }
}
export default SingleCarComponent
