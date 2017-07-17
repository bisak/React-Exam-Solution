import React, { Component } from 'react'
import { Pagination, Row, Col } from 'react-bootstrap'
import ListCarComponent from './sub-components/ListCarComponent'
import alt from '../alt'
import AllCarsStore from '../stores/AllCarsStore'
import AllCarsActions from '../actions/AllCarsActions'
import queryString from 'query-string'
import history from '../history'
import SearchForm from './sub-components/SearchForm'

class AllCarsComponent extends Component {
  constructor (props) {
    super(props)
    this.state = AllCarsStore.getState()
    this.onChange = this.onChange.bind(this)
    this.page = Number(queryString.parse(history.location.search).page) || 1
    this.search = queryString.parse(history.location.search).search || ''
  }

  componentDidMount () {
    AllCarsStore.listen(this.onChange)
    AllCarsActions.getOnePageProducts(this.page, this.search)
  }

  componentWillUnmount () {
    alt.recycle(AllCarsStore)
    AllCarsStore.unlisten(this.onChange)
  }

  componentWillReceiveProps () {
    if ((this.page !== Number(queryString.parse(history.location.search).page) || 1) && (this.search !== queryString.parse(history.location.search).search || '')) {
      this.page = Number(queryString.parse(history.location.search).page) || 1
      this.search = queryString.parse(history.location.search).search || ''
      AllCarsActions.getOnePageProducts(this.page, this.search)
    }
  }

  onChange (state) {
    this.setState(state)
  }

  handlePageSelect (page) {
    this.page = page
    history.push(`?page=${this.page}&search=${this.search}`)
    AllCarsActions.getOnePageProducts(this.page, this.search)
  }

  handleSearch () {
    this.search = this.state.search
    this.page = 1
    history.push(`?page=${this.page}&search=${this.search}`)
    AllCarsActions.getOnePageProducts(this.page, this.search)
  }

  render () {
    let cars = this.state.cars.map((car, index) => {
      return (<ListCarComponent key={index} car={car} />)
    })

    if (this.state.noProductsAvailable) {
      cars = (
        <div className='container'>
          <h4 className='text-center'>There are no cars, or no cars matching your criteria.</h4>
        </div>
      )
    }

    return (
      <div className='container'>
        <h4 className='text-center'>All cars</h4>
        <hr />
        <Row>
          <Col className='center-block fit-content'>
            <SearchForm search={this.state.search} onSearch={this.handleSearch.bind(this)} onInput={AllCarsActions.inputChange} />
          </Col>
        </Row>
        {cars}
        <Row>
          <div className='fit-content center-block'>
            <Pagination
              prev next first last ellipsis boundaryLinks
              items={this.state.items}
              maxButtons={3}
              activePage={this.state.activePage}
              onSelect={this.handlePageSelect.bind(this)} />
          </div>
        </Row>
      </div>
    )
  }
}
export default AllCarsComponent
