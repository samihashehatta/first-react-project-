import React ,{Component} from 'react';
import { Navbar, NavbarBrand , Jumbotron} from 'reactstrap';




class Header extends Component
{
    render(){
        return(
            <>
            <Navbar dark >
                <div className="container">
                 <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
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