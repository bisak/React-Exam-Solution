import React, { Component } from 'react'
import {Row, Col} from 'react-bootstrap'
import CarForm from './sub-components/CarForm'
import AddCarActions from '../actions/AddCarActions'
import AddCarStore from '../stores/AddCarStore'

class AddCarComponent extends Component {
  constructor (props) {
    super(props)
    this.state = AddCarStore.getState()
    this.onChange = this.onChange.bind(this)
  }

  componentDidMount () {
    AddCarStore.listen(this.onChange)
  }

  componentWillUnmount () {
    AddCarStore.unlisten(this.onChange)
  }

  onChange (state) {
    this.setState(state)
  }

  handleAddProduct () {
    AddCarActions.addProduct(this.state.car)
  }

  render () {
    return (
      <div className='container'>
        <Row><h4 className='text-center'>Add Car</h4></Row>

        <Row>
          <Col xs={10} sm={10} md={6} smOffset={1} xsOffset={1} mdOffset={3}>
            <CarForm car={this.state.car} onAdd={this.handleAddProduct.bind(this)} onInput={AddCarActions.inputChange} />
          </Col>
        </Row>
      </div>
    )
  }
}
export default AddCarComponent
