import React, { Component } from 'react'
import alt from '../alt'
import ProfileActions from '../actions/ProfileActions'
import ProfileStore from '../stores/ProfileStore'
import ListCarComponent from './sub-components/ListCarComponent'

class ProfileComponent extends Component {
  constructor (props) {
    super(props)
    this.state = ProfileStore.getState()
    this.onChange = this.onChange.bind(this)
    this.profileUsername = this.props.match.params.username
  }

  componentDidMount () {
    ProfileStore.listen(this.onChange)
    ProfileActions.getProfile(this.profileUsername)
  }

  componentWillUnmount () {
    ProfileStore.unlisten(this.onChange)
    alt.recycle(ProfileStore)
  }

  onChange (state) {
    this.setState(state)
  }

  render () {
    let cars = this.state.cars.map((car, index) => {
      return (<ListCarComponent onDelete={ProfileActions.deleteCar} isInProfile key={index} car={car} />)
    })

    let noReviewsMessage
    if (!cars.length) {
      noReviewsMessage = <h5 className='text-center'>No cars by you</h5>
    }

    return (
      <div className='container'>
        <h4 className='text-center'>Your cars</h4>
        <hr />
        {cars}
        {noReviewsMessage}
        <br />
      </div>
    )
  }
}
export default ProfileComponent
