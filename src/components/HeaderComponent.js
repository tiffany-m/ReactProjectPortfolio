import React, { Component }  from 'react';
import { Nav, Navbar, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="d-none d-sm-block col-sm-3 col-md-2 align-self-center">
                                <img src="/assets/images/logo.png" className="img-fluid" width="125px"/>
                            </div>
                            <div className="col align-self-center">
                                <h1>Edible Delights</h1>
                                <h2>- Baking the Difference</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar light sticky="top" expand="md">
                    <div className="container">
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <i className="fa fa-home fa-lg" /> Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus">
                                    <i className="fa fa-question-circle fa-lg" /> About Us
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/menu">
                                    <i className="fa fa-birthday-cake fa-lg" /> Menu
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/order">
                                    <i className="fa fa-shopping-cart fa-lg" /> Order
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contact">
                                    <i className="fa fa-address-card fa-lg" /> Contact
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;