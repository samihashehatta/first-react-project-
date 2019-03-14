import React ,{Component} from 'react';
import { Navbar, NavbarBrand , Jumbotron , Nav ,NavbarToggler,NavItem,Collapse} from 'reactstrap';
import {NavLink} from'react-router-dom';



class Header extends Component
{
    constructor(props){
        super(props)
        this.state={
            isNavOpen:false,

        };
        this.toggleNav=this.toggleNav.bind(this)
    }
    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    render(){
        return(
            <>
            <Navbar dark expand="md" >
                <div className="container">
                <NavbarToggler onClick={this.toggleNav}></NavbarToggler>
                 <NavbarBrand className="mr-auto" href="/">
                 <img src="assets/images/logo.png" alt="resturant logo" width="41" height="30" />
                 </NavbarBrand>
                 <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/home">
                                <span className="fa fa-home fa-lg"></span>
                                Home
                            </NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink className="nav-link" to="/about">
                                <span className="fa fa-info fa-lg"></span>
                                About Us
                            </NavLink>
                            </NavItem>

                            <NavItem>
                            <NavLink className="nav-link" to="/menu">
                                <span className="fa fa-list fa-lg"></span>
                                Menu
                            </NavLink>
                            </NavItem>

                            <NavItem>
                            <NavLink className="nav-link" to="/contact">
                                <span className="fa fa-address-card fa-lg"></span>
                                Contact Us
                            </NavLink>
                            
                        </NavItem>
                    </Nav>
                    </Collapse>
                </div>
            </Navbar>
            <Jumbotron>
                <div className="container">
                    <div className='row row-header'>
                        <div className="col-12 col-sm-6">
                            <h1>
                                resturant , ConFusion.
                            </h1>
                            <p>we take inspiration from the world's best cuisines.</p>
                        </div>
                    </div>
                 </div>
            </Jumbotron>
            </>
        );
    }
};
export default Header;