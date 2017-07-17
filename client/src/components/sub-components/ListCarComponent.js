import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, Button } from 'react-bootstrap'

class ListCarComponent extends Component {

  handleDelete () {
    this.props.onDelete(this.props.car.id)
  }

  render () {
    let delBtn
    if (this.props.isInProfile) {
      delBtn = (<Button onClick={this.handleDelete.bind(this)} className='action-button center-block' bsStyle='danger'>Delete</Button>)

    }
    return (
      <Row>
        <Col md={10} mdOffset={1} className='list-product-card z-depth-1'>
          <Col className='image-container' xs={12} sm={5}>
            <Image className='list-image z-depth-1' alt='Car demo image' src={this.props.car.image} responsive rounded />
          </Col>
          <Col xs={12} sm={5} className='list-product-text'>
            <p className='title'><Link to={`/cars/details/${this.props.car.id}`}><strong>{this.props.car.make} {this.props.car.model} ({this.props.car.year})</strong></Link></p>
            <p className='description'><strong>${this.props.car.price}</strong></p>
          </Col>
          <Col xs={12} sm={2} xsHidden>
            <div><Link to={`/cars/details/${this.props.car.id}`}><Button className='action-button center-block'>Details</Button></Link></div>
            <div>{delBtn}</div>
          </Col>
        </Col>
      </Row>
    )
  }
}

export default ListCarComponent
