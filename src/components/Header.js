import React from 'react'
import {Container,FormControl,Nav,Navbar, NavbarBrand, NavbarText, Dropdown, DropdownToggle, Badge, DropdownMenu} from "react-bootstrap"
import {FaShoppingCart} from 'react-icons/fa'
import {Link} from "react-router-dom"


const Header = () => {
  return (
    <Navbar bg='dark' variant='dark' style={{height:80}}>
        <Container>
        <NavbarBrand>
            <Link to='/'>Shopping Cart</Link>
        </NavbarBrand>
        <NavbarText className='search'>
            <FormControl 
             style={{width: 500}} placeholder='Search a Product'
             className='m-auto'
             />
        </NavbarText>
        <Nav>
        <Dropdown alignright="true">
        <DropdownToggle variant='success'>
            <FaShoppingCart color="white" fontSize="25px" />
            <Badge></Badge>
        </DropdownToggle>

        <DropdownMenu style={{}}>
            <span style={{padding:10}}>Cart is Empty!</span>
        </DropdownMenu>
        </Dropdown>
        </Nav>
        </Container>
    </Navbar>
  )
}

export default Header