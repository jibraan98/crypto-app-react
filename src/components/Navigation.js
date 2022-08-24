import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import {HiSun, HiMoon} from 'react-icons/hi';

const Navigation = (props) => {

  const symbolSwitch = (data) => {
    if(data === 'light') {
      return <div className='toggle-button' onClick={props.toggle}>
        <HiMoon className='symbol'></HiMoon> 
         Dark Mode
      </div>
    }else {
      return <div className='toggle-button' onClick={props.toggle}>
        <HiSun className='symbol'></HiSun> 
        Light Mode
      </div>
    }
  }

  return (
    <div >
    <Navbar expand="lg" className="navigation">
      <Container>
        <Navbar.Brand href="#home"><h1>Crypto</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        {symbolSwitch(props.name)}
          <Nav className="ms-auto">
            <Button variant='light' className='button-margin'>Sign In</Button>{' '}
            <Button variant='light' className='button-margin'>Sign Up</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navigation