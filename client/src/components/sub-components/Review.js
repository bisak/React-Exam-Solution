import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

class Review extends Component {
  render () {
    return (
      <Row className='text-center'>
        <Col className='thin-grey-border review' xs={10} xsOffset={1}>
          <div><h5 className='no-margin no-padding'>Review by <strong>{this.props.user}</strong></h5></div>
          <hr className='review-hr' />
          <div><p className='no-margin review-content'>{this.props.comment} (Rated <strong>{this.props.rating}</strong>)</p></div>
        </Col>
      </Row>
    )
  }
}
export default Review
