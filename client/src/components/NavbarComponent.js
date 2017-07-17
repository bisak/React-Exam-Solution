import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import ListItemLink from './sub-components/ListItemLink'
import Auth from '../Auth'

class NavbarComponent extends Component {
  render () {
    let registerLink
    let loginLink
    let logoutLink
    let addCarLink
    let myCarsLink
    let allCarsLink = (<ListItemLink to='/cars/all'>All Cars</ListItemLink>)

    if (!Auth.isUserAuthenticated()) {
      loginLink = (<ListItemLink to='/login'>Login</ListItemLink>)
      registerLink = (<ListItemLink to='/register'>Register</ListItemLink>)
    } else {
      logoutLink = (<ListItemLink to='/logout'>Logout</ListItemLink>)
      addCarLink = (<ListItemLink to='/cars/create'>Add Car</ListItemLink>)
      myCarsLink = (<ListItemLink to='/cars/mine'>My cars</ListItemLink>)      
    }
    
    return (
      <Navbar staticTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/'>React Exam - Cars</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullLeft>
            <ListItemLink to='/'>Home</ListItemLink>
            {allCarsLink}
            
          </Nav>
          <Nav pullRight>
            {addCarLink}
            {myCarsLink}
            {loginLink}
            {registerLink}
            {logoutLink}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavbarComponent
