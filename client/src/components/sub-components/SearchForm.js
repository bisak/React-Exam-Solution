import React, { Component } from 'react'
import {Form, FormGroup, FormControl, Button} from 'react-bootstrap'

class SearchForm extends Component {
  handleSubmit (event) {
    event.preventDefault()
    this.props.onSearch()
  }

  render () {
    return (
      <Form className='smb' onSubmit={this.handleSubmit.bind(this)} inline>
        <FormGroup controlId='formInlineSearch'>
          <FormControl type='text' name='search' value={this.props.search} onChange={this.props.onInput} placeholder='Search query...' />
        </FormGroup>
        {' '}
        <Button type='submit'>Search</Button>

      </Form>
    )
  }
}
export default SearchForm
