import React ,{Component} from 'react';
import { Form,FormGroup,Input,Label,Button,Modal,ModalBody,ModalHeader,Navbar, NavbarBrand , Jumbotron , Nav ,NavbarToggler,NavItem,Collapse} from 'reactstrap';
import {NavLink} from'react-router-dom';



class Header extends Component
{
    constructor(props){
        super(props)
        this.state={
            isNavOpen:false,
            isModalOpen:false

        };
        this.toggleNav=this.toggleNav.bind(this)
        this.toggleModal=this.toggleModal.bind(this)
        this.handleLogin=this.handleLogin.bind(this);
    }
    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }
    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }
    handleLogin(event){
        this.toggleModal();
        alert("username"+this.userName.value+"password: "+this.password.value +"rem"+this.rem.checked)
        event.preventDefault();
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
                    <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Button outline onClick={this.toggleModal}>
                        <span className="fa fa-sign-in"></span>
                            Login
                        </Button>
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
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>
                    Login.
                </ModalHeader>

                <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                    <FormGroup>
                            <Label htmlFor="userName" >User Name</Label>
                            <Input type="text" id="userName" name="userName" innerRef={(input)=>this.userName=input} />
                        </FormGroup>     
                        <FormGroup>
                            <Label htmlFor="password" >Password</Label>
                            <Input type="password" id="password" name="password" innerRef={(input)=>this.password=input} />
                        </FormGroup> 
                        <FormGroup check>
                            <Label htmlFor="rem" check >
                            
                            <Input type="checkbox" id="rem" name="rem" innerRef={(input)=>this.rem=input} />
                            Remember me.
                            </Label>
                          
                        </FormGroup>
                        <Button type="submit" value="submit" color="primary">
                            Login
                        </Button>
                    </Form>
                </ModalBody>
            </Modal>
            </>
        );
    }
};
export default Header;