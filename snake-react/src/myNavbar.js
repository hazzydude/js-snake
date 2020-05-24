import React, { Component } from 'react'
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import './myNavbar.scss';

class MyNavbar extends Component {
    render() {
        return (
                <Navbar className="navbar-main" bg="dark" variant="dark" fluid collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link className="navbar-home-text"to="/">Home</Link>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <LinkContainer to="/snake">
                                <NavItem className="navbar-text">Snake</NavItem>
                            </LinkContainer>
                            <LinkContainer to="/tetris">
                                <NavItem className="navbar-text">Tetris</NavItem>
                            </LinkContainer>
                            <LinkContainer to="/minesweeper">
                                <NavItem className="navbar-text">Minesweeper</NavItem>
                            </LinkContainer>
                            <LinkContainer to="/pacman">
                                <NavItem className="navbar-text">Pacman</NavItem>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        )
    }
}

export default MyNavbar