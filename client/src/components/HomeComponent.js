import React, { Component } from 'react'
import { Jumbotron, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import HomeStore from '../stores/HomeStore'
import HomeActions from '../actions/HomeActions'

class HomeComponent extends Component {
  constructor (props) {
    super(props)
    this.state = HomeStore.getState()
    this.onChange = this.onChange.bind(this)
  }

  componentDidMount () {
    HomeStore.listen(this.onChange)
    HomeActions.getHomeStats()
  }

  componentWillUnmount () {
    HomeStore.unlisten(this.onChange)
  }

  onChange (state) {
    this.setState(state)
  }

  render () {
    return (
      <div>
        <Jumbotron>
          <div className='container'>
            <h1>Welcome to our cars website</h1>
            <br/>
            <br/>
            <p><Link className='btn btn-primary btn-lg' to={'/cars/all'} role='button'>View cars</Link></p>
          </div>
        </Jumbotron>
        <div className='container text-center'>
          <h4>Statistics</h4>
          <hr/>
          <Row >
            <Col md={6} >
              <h1>{this.state.cars}</h1>
              <h4>Total cars</h4>
            </Col>
            <Col md={6} >
              <h1>{this.state.users}</h1>
              <h4>Total users</h4>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default HomeComponent
