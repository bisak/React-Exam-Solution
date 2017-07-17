import React, { Component } from 'react'
import { ControlLabel, FormControl, FormGroup, Button, Form } from 'react-bootstrap'

class CarForm extends Component {
  onFormSubmit (event) {
    event.preventDefault()
    this.props.onAdd()
  }

  render () {
    return (
      <Form onSubmit={this.onFormSubmit.bind(this)} horizontal>

        <FormGroup controlId='make-input'>
          <ControlLabel>Make</ControlLabel>
          <FormControl type='text' name='make' minLength={3} required value={this.props.car.make} onChange={this.props.onInput} placeholder='Car make' />
        </FormGroup>

        <FormGroup controlId='model-input'>
          <ControlLabel>Model</ControlLabel>
          <FormControl type='text' required minLength={3} name='model' value={this.props.car.model} onChange={this.props.onInput} placeholder='Car model' />
        </FormGroup>

        <FormGroup controlId='year-input'>
          <ControlLabel>Year</ControlLabel>
          <FormControl type='number' name='year' required min={1950} max={2050} value={this.props.car.year} onChange={this.props.onInput} placeholder='Car year' />
        </FormGroup>

        <FormGroup controlId='engine-input'>
          <ControlLabel>Engine</ControlLabel>
          <FormControl type='text' name='engine' required value={this.props.car.engine} onChange={this.props.onInput} placeholder='Car engine' />
        </FormGroup>

        <FormGroup controlId='year-input'>
          <ControlLabel>Price</ControlLabel>
          <FormControl type='number' name='price' required min={1} value={this.props.car.price} onChange={this.props.onInput} placeholder='Car price' />
        </FormGroup>

        <FormGroup controlId='thumbnail-url-input'>
          <ControlLabel>Image</ControlLabel>
          <FormControl type='url' name='image' required value={this.props.car.image} onChange={this.props.onInput} placeholder='Car image' />
        </FormGroup>

        <FormGroup controlId='year-input'>
          <ControlLabel>Mileage</ControlLabel>
          <FormControl type='number' name='mileage' min={1} value={this.props.car.mileage} onChange={this.props.onInput} placeholder='Car mileage' />
        </FormGroup>

        <FormGroup>
          <Button className='center-block' type='submit'>Add Car</Button>
        </FormGroup>

      </Form>
    )
  }
}
export default CarForm
