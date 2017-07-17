import React, { Component } from 'react'
import { FormControl, FormGroup, Button, Form, ControlLabel } from 'react-bootstrap'

class ReviewForm extends Component {
  onFormSubmit (event) {
    event.preventDefault()
    this.props.onAdd()
  }

  render () {
    return (
      <Form onSubmit={this.onFormSubmit.bind(this)} horizontal>

        <FormGroup controlId='review-input'>
          <ControlLabel>Review</ControlLabel>
          <FormControl maxLength={500} componentClass='textarea' name='comment' value={this.props.comment} onChange={this.props.onInput} placeholder='Review...' />
        </FormGroup>

        <FormGroup controlId='rating-input'>
          <ControlLabel>Rate</ControlLabel>
          <FormControl componentClass="select" name='rating' value={this.props.rating} onChange={this.props.onInput}  placeholder="select">
            <option value="1">-> 1</option>
            <option value="2">-> 2</option>
            <option value="3">-> 3</option>
            <option value="4">-> 4</option>
            <option value="5">-> 5</option>
          </FormControl>
        </FormGroup>

        <FormGroup>
          <Button className='center-block' type='submit'>Submit</Button>
        </FormGroup>

      </Form>

    )
  }
}
export default ReviewForm
